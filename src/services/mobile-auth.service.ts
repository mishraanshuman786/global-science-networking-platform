import {RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult} from "firebase/auth";

import {auth} from "@/lib/firebase";

let confirmationResult:ConfirmationResult;

export const sendOtp = async (
  phoneNumber: string
) => {
  const verifier = new RecaptchaVerifier(
    auth,
    "recaptcha-container",
    {
      size: "normal",
    }
  );

  confirmationResult =
    await signInWithPhoneNumber(
      auth,
      phoneNumber,
      verifier
    );

  return confirmationResult;
};

export const verifyOtp=async (otp:string)=>{
    const result=await confirmationResult.confirm(otp);

    const idToken=await result.user.getIdToken();

    return {
        idToken,
        firebaseUser:result.user
    }

}

// utility functions

export const handleSendOtp=async(phoneNumber:string)=>{
    try{
         await sendOtp(phoneNumber);
         console.log("OTP Sent");
    } 
    catch(error){
        console.error(error);
    }
}

export const handleVerifyOtp=async(otp:string)=>{
    try{

        const {idToken}=await verifyOtp(otp);
        console.log("Firebase Token: ",idToken);

    }
    catch(error){
        console.error(error);
    }
}