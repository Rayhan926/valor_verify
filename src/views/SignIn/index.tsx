import React from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import SigninSignupPageLayout from "@layouts/SigninSignupPageLayout";
import Link from "next/link";

const SignIn = () => {
  return (
    <SigninSignupPageLayout>
      <div className="px-20 pb-16 pt-16 bg-white rounded-b-[60px]">
        <h2 className="title_40 text-primary">
          <p>Sign in</p>
          <p>to the Web</p>
        </h2>

        <form className="mt-[60px] space-y-[28px]">
          <Input label="Email Id" type="email" placeholder="enter here.." />
          <div>
            <Input
              label="Password"
              type="password"
              placeholder="enter here.."
            />
            <div className="flex justify-end mt-6">
              <Link href="/forgot-password">
                <a className="text-sm inline-block ml-auto text-secondary hover:underline">
                  Forgot Password?
                </a>
              </Link>
            </div>
          </div>
          <Button className="!mt-20">Sign In</Button>

          {/* Sign In --Start-- */}
          <p className="text-center !mt-10">
            New to Valor Verify?
            <Link href="/signup1">
              <a className="__link ml-2">Sign Up</a>
            </Link>
          </p>
          {/* Sign In --End-- */}
        </form>
      </div>
    </SigninSignupPageLayout>
  );
};

export default SignIn;
