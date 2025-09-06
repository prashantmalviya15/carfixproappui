"use client";

import Customform from "@/components/common/customform";
import Apple from "@/components/icons/apple";
import Facebook from "@/components/icons/facebook";
import Google from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/components/schema/validation";
import z from "zod";

export default function SignupComponent() {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log(data);
  };
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="bg-white w-sm shadow-xl rounded-md">
        <div className="flex flex-col  gap-3 p-6">
          <div className="text-center">
            <h4 className="text-2xl py-1 font-semibold">Create an Account</h4>
            <p className="text-[#000000bb] font-normal text-xs">
              Join CarFixPro to manage your service history and schedule
              appointments
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <Google />
            <Facebook />
            <Apple />
          </div>
          <span className="text-[#000000d0] text-sm text-center">Or</span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="py-2">
                <Label className="font-light">Full Name</Label>
                <Customform
                  name="fullName"
                  control={form.control}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="py-2">
                <Label className="font-light">Email</Label>
                <Customform
                  name="email"
                  control={form.control}
                  placeholder="Enter Your Email"
                  type="email"
                />
              </div>
              <div className="py-2">
                <Label className="font-light">Phone Number</Label>
                <Customform
                  name="phoneNumber"
                  control={form.control}
                  placeholder="Enter Your Phone Number"
                  type="number"
                />
              </div>
              <div className="flex justify-center py-3">
                <Button className="px-9 py-1 bg-[var(--button-color)] rounded-full">
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
          <div className="flex mx-auto gap-1">
            <Label className="font-light">Already have an Account?</Label>
            <Link href="/signin" className="text-[var(--button-color)] ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
