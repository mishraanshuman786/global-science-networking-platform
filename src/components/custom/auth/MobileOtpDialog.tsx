"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  sendOtp,
  verifyOtp,
} from "@/services/mobile-auth.service";

interface MobileOtpDialogProps {
  open: boolean;
  onOpenChange: (
    open: boolean
  ) => void;
}

export default function MobileOtpDialog({
  open,
  onOpenChange,
}: MobileOtpDialogProps) {
  const [phone, setPhone] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [otpSent, setOtpSent] =
    useState(false);

  const handleSendOTP =
    async () => {
      try {
        await sendOtp(phone);

        setOtpSent(true);
      } catch (error) {
        console.error(error);
      }
    };

  const handleVerifyOTP =
    async () => {
      try {
        const token =
          await verifyOtp(otp);

        console.log(
          "Firebase Token:",
          token
        );

        onOpenChange(false);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Dialog
      open={open}
      onOpenChange={
        onOpenChange
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Mobile Login
          </DialogTitle>
        </DialogHeader>

        {!otpSent ? (
          <div className="space-y-4">

            <input
              type="text"
              placeholder="+919876543210"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              className="
                w-full
                border
                rounded-md
                p-3
              "
            />

            <button
              onClick={
                handleSendOTP
              }
              className="
                w-full
                rounded-md
                bg-primary
                text-primary-foreground
                p-3
              "
            >
              Send OTP
            </button>

          </div>
        ) : (
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              className="
                w-full
                border
                rounded-md
                p-3
              "
            />

            <button
              onClick={
                handleVerifyOTP
              }
              className="
                w-full
                rounded-md
                bg-primary
                text-primary-foreground
                p-3
              "
            >
              Verify OTP
            </button>

          </div>
        )}

        <div
          id="recaptcha-container"
        />
      </DialogContent>
    </Dialog>
  );
}