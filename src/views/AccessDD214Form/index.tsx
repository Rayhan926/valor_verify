/*
 *
 * Title: index
 * Description: --
 * Author: Saymon
 * Date: 19 June 2022 (Sunday)
 *
 */
import Button from "@components/Button";
import DatePickerInput from "@components/DatePickerInput";
import Header from "@components/Header";
import Input from "@components/Input";
import RadioButton from "@components/RadioButton";
import { APP_NAME } from "@config/constants";
import React from "react";

const AccessDD214Form = () => {
  return (
    <>
      <Header />
      <section className="my-24">
        <div className="container">
          <div className="grid grid-cols-[auto,900px] gap-20 place-items-center">
            <div>
              <h1 className="title_60">
                <p>
                  Access The <span className="text-secondary">DD-214</span>
                </p>
                <p>For The Veteran</p>
                <p>History</p>
              </h1>
              <p className="subtitle_light mt-[50px] text-sm">
                Validate your information from ID.me
              </p>
            </div>

            <div
              style={{
                boxShadow: "4px 22px 54px rgba(105, 95, 151,0.1)",
              }}
              className="secondary_gradient rounded-[30px] px-[60px] py-[55px] space-y-[55px] relative"
            >
              <img
                src="/images/valor_verify_icon.svg"
                alt={APP_NAME}
                className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-[-1]"
              />

              <div className="grid grid-cols-3 gap-6">
                <Input
                  label="First Name"
                  placeholder="enter here.."
                  color="secondary"
                  isRequired
                />
                <Input
                  label="Middle Name"
                  placeholder="enter here.."
                  color="secondary"
                />
                <Input
                  label="Last Name"
                  placeholder="enter here.."
                  color="secondary"
                  isRequired
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <DatePickerInput color="secondary" isRequired />
                <Input
                  label="Social Security Number"
                  placeholder="enter here.."
                  color="secondary"
                  isRequired
                />
              </div>

              <div className="flex items-center justify-center gap-24 border border-secondary-dark rounded-[19px] h-[60px]">
                <RadioButton name="gender" label="Male" />
                <RadioButton name="gender" label="Female" />
                <RadioButton name="gender" label="Other" />
              </div>

              <div className="!mt-20">
                <Button>Access DD-214 Record</Button>
              </div>

              <div className="text-center subtitle_light text-primary/40 !mt-9">
                * Required field. Optional fields may help with results.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessDD214Form;
