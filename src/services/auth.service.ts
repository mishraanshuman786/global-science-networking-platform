import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export const loginWithGoogle = async () => {
  const provider =
    new GoogleAuthProvider();

  const result =
    await signInWithPopup(
      auth,
      provider
    );

  const idToken =
    await result.user.getIdToken();

  return {
    idToken,
    firebaseUser:
      result.user,
  };
};

export const handleGoogleLogin =
  async () => {
    try {
      const {
        idToken,
      } =
        await loginWithGoogle();

      const response =
        await axios.post(
          "http://localhost:5000/api/v1/auth/google",
          {
            idToken,
          }
        );

      console.log(
        "Backend Response:",
        response.data
      );

      const data =
        response.data.data;

      // Registration Required
      if (
        data.requireRegistration
      ) {
        console.log(
          "Show Registration Form"
        );

        return;
      }

      // Waiting Approval
      if (
        data.status ===
        "PENDING_APPROVAL"
      ) {
        console.log(
          "Waiting For Admin Approval"
        );

        return;
      }

      // Approved User
      if (
        data.accessToken
      ) {
        localStorage.setItem(
          "accessToken",
          data.accessToken
        );

        localStorage.setItem(
          "refreshToken",
          data.refreshToken
        );

        console.log(
          "Login Successful"
        );

        // router.push("/dashboard");
      }
    } catch (error: any) {
      console.error(
        "Google Login Error:",
        error.response?.data ||
          error.message
      );
    }
  };