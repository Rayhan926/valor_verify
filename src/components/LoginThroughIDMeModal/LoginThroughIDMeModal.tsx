import a from "@components/Button";
import { APP_NAME, modalStyles } from "@config/constants";
import { LoginThroughIDMeModalProps } from "@config/types";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const LoginThroughIDMeModal = ({
  isOpen,
  onRequestClose,
  onLoginBtnClick,
}: LoginThroughIDMeModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
    >
      <div className="w-[660px] bg-white rounded-[30px] pb-[60px]">
        <div className="p-[18px]">
          <div className="py-8 px-[70px] flex items-center justify-between text-center rounded-[20px] bg-gradient-to-r from-shadow-primary via-white to-shadow-secondary">
            <Image
              src="/images/valor_verify_logo_1.png"
              alt={APP_NAME}
              width={180}
              height={44.36}
            />
            <Image
              src="/images/idme-logo.png"
              alt={APP_NAME}
              width={112}
              height={40}
            />
          </div>
        </div>
        <div className="px-10 mt-[60px]">
          <p className="text-center text-[#7A86A1] text-2xl leading-[38px]">
            In order to verify your identity, you must log in or create an
            account to verify your identity with ID.me
          </p>
        </div>
        <div className="px-[75px] mt-[80px]">
          <button
            onClick={onLoginBtnClick && onLoginBtnClick}
            className="__button"
          >
            Login or create account through ID.me
          </button>
        </div>

        <p className="text-base text-primary/40 mt-9 text-center">
          Click the button above to proceed
        </p>
      </div>
    </Modal>
  );
};

export default LoginThroughIDMeModal;
