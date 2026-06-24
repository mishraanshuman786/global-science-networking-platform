"use client";

import { FcGoogle } from "react-icons/fc";
import { Smartphone } from "lucide-react";
import {handleGoogleLogin} from "../../../services/auth.service";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-4xl  text-center mb-8">
          Join now — it's free!
        </h1>

        {/* Card */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full h-12 px-4 border border-border rounded-md outline-none focus:border-primary"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full h-12 px-4 border border-border rounded-md outline-none focus:border-primary"
            />
          </div>

          {/* Terms */}
          <p className="text-xs text-center text-muted-foreground mb-6">
            By clicking <strong>Create Account</strong>, you agree to our
            Terms of Service and Privacy Policy.
          </p>

          {/* Email Signup */}
          <button
            className="
              w-full
              h-12
              rounded-full
              bg-primary
              text-primary-foreground
              font-medium
              hover:opacity-90
              transition
            "
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="px-4 text-sm text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Google Login */}
          <button
            className="
              w-full
              h-12
              rounded-full
              border border-border
              flex items-center justify-center gap-3
              hover:bg-muted
              transition
              mb-3
            "
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Mobile OTP */}
          <button
            className="
              w-full
              h-12
              rounded-full
              border border-border
              flex items-center justify-center gap-3
              hover:bg-muted
              transition
            "
          >
            <Smartphone size={18} />
            Continue with Mobile OTP
          </button>

          {/* Sign In */}
          <div className="text-center mt-8">
            <span className="text-sm text-muted-foreground">
              Already have an account?
            </span>
            <button className="ml-2 text-primary font-medium hover:underline">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}