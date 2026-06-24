"use client";

import { useState } from "react";
import { Eye, EyeOff, Smartphone, Check } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import MobileOtpDialog from "./MobileOtpDialog";
import { handleGoogleLogin } from "../../../services/auth.service";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // for mobile auth
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        {/* Header */}
        <h1 className="text-5xl mb-3">Sign in</h1>

        <p className="text-lg mb-8">
          New to the platform?{" "}
          <button className="text-primary font-medium hover:underline">
            Join now
          </button>
        </p>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <button
            className="
              w-full h-14
              border border-border
              rounded-full
              flex items-center justify-center gap-3
              text-base font-medium
              hover:bg-muted
              transition-colors
            "
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>
          <button
            onClick={() => setIsOtpModalOpen(true)}
            className="
    w-full h-14
    border border-border
    rounded-full
    flex items-center justify-center gap-3
    text-base font-medium
    hover:bg-muted
    transition-colors
  "
          >
            <Smartphone size={18} />
            Continue with Mobile OTP
          </button>

          
        </div>

        {/* Terms */}
        <p className="text-sm text-muted-foreground text-center mt-6">
          By continuing, you agree to our Terms of Service, Privacy Policy and
          Cookie Policy.
        </p>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-border" />
          <span className="px-4 text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Email or phone
          </label>

          <input
            type="text"
            className="
              w-full h-14
              px-4
              border border-border
              rounded-md
              outline-none
              focus:border-primary
            "
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="
                w-full h-14
                px-4 pr-12
                border border-border
                rounded-md
                outline-none
                focus:border-primary
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-4 top-1/2
                -translate-y-1/2
                text-muted-foreground
              "
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <button className="mt-4 text-primary font-medium hover:underline">
          Forgot password?
        </button>

        {/* Remember Me */}
        <div
          className="flex items-center gap-3 mt-8 cursor-pointer"
          onClick={() => setRememberMe(!rememberMe)}
        >
          <div
            className={`
              h-6 w-6 rounded
              flex items-center justify-center
              ${rememberMe ? "bg-green-600 text-white" : "border border-border"}
            `}
          >
            {rememberMe && <Check size={16} />}
          </div>

          <span className="text-base">Keep me signed in</span>
        </div>

        {/* Sign In Button */}
        <button
          className="
            mt-8
            w-full
            h-14
            rounded-full
            bg-primary
            text-primary-foreground
            text-lg
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Sign in
        </button>

        {/* dialog rendering component */}
        <MobileOtpDialog
          open={isOtpModalOpen}
          onOpenChange={setIsOtpModalOpen}
        />
      </div>
    </div>
  );
}
