import a from "@components/Button";
import { APP_NAME, modalStyles } from "@config/constants";
import Image from "next/image";
import React from "react";
import Modal, { Props } from "react-modal";
const WelcomeToValorverifyModal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
    >
      <div className="w-[860px] bg-white rounded-[30px] py-[60px]">
        <div className="px-20">
          <div className="border-b border-primary/10 pb-10">
            <Image
              src="/images/valor_verify_logo_1.png"
              alt={APP_NAME}
              width={126}
              height={28}
            />
          </div>
          <h2 className="title_60 mt-[60px]">
            Welcome
            <p>
              to <span className="text-secondary">Valorverify!</span>
              <div className="inline-flex items-center translate-y-1.5 ml-8">
                <Image
                  src="/images/party-popper.png"
                  alt="party-popper"
                  width={59}
                  height={59}
                />
              </div>
            </p>
          </h2>
          <p className="mt-10 text-[#3F3F44]/70 max-w-[500px]">
            Get started by verifying veterans’ status or accessing veteran
            history. You can also view your account or manage your organization.
          </p>
        </div>
        <div className="px-[60px] mt-[80px]">
          <a className="__button" href="#" rel="noreferrer">
            Let&apos;s Get Started
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeToValorverifyModal;
