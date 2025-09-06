'use client'

import Customform from '@/components/common/customform';
import Apple from '@/components/icons/apple';
import Facebook from '@/components/icons/facebook';
import Google from '@/components/icons/google';
import { signInSchema } from '@/components/schema/validation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function SigninConponent() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = (data:z.infer<typeof signInSchema>) => {
    console.log(data)
  }
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="bg-white w-sm shadow-xl rounded-md">
        <div className="flex flex-col  gap-3 p-6">
          <div className="text-center">
            <h4 className="text-2xl py-1 font-semibold">Welcome Back</h4>
            <p className="text-[#000000bb] font-normal text-xs">
              Login to access your CarFixPro Account
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
                <Label className="font-light">Phone Number</Label>
                <Customform
                  name="phoneNumber"
                  control={form.control}
                  placeholder="Enter Your Phone Number"
                  type="number"
                />
              </div>
              <div className="flex justify-center py-3">
                <Button className="px-9 py-1 bg-[var(--button-color)] rounded-full">Sign In</Button>
              </div>
            </form>
          </Form>
          <div className="flex mx-auto gap-1">
            <Label className="font-light">
           Don&apos;t have an Account?
          </Label>
          <Link href="/signup" className="text-[var(--button-color)] ">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
