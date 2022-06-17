import React from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import SigninSignupPageLayout from "@layouts/SigninSignupPageLayout";

const ResetPasssword = () => {
  return (
    <SigninSignupPageLayout>
      <div className="px-20 pb-20 pt-16 bg-white rounded-b-[60px]">
        <h2 className="title_40 text-primary">
          <p>Reset</p>
          <p>Password!</p>
        </h2>
        <p className="mt-7 subtitle_light text-dark-700 text-sm">
          Enter your new Password Below to reset it
        </p>

        <form className="mt-[115px] space-y-[28px]">
          <Input
            label="New Password"
            type="password"
            placeholder="enter here.."
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="enter here.."
          />
          <Button className="!mt-20">Submit</Button>
        </form>
      </div>
    </SigninSignupPageLayout>
  );
};

export default ResetPasssword;
