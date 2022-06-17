import Button from "@components/Button";
import { modalStyles } from "@config/constants";
import React from "react";
import Modal, { Props } from "react-modal";
const AccessDD214Modal = ({ isOpen, onRequestClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
    >
      <div className="w-[660px] bg-white rounded-[30px]">
        <div className="p-[18px]">
          <div className="py-8 px-6 text-center rounded-[20px] bg-gradient-to-r from-shadow-primary via-white to-shadow-secondary">
            <h2 className="title_40 text-primary">Access your DD-214</h2>
          </div>
        </div>
        <div className="px-10 mt-[60px]">
          <p className="text-center text-[#7A86A1] text-2xl leading-[38px]">
            Click the box below if you agree to grant ValorVerify the right to
            sell your DD-214 to companies in exchange for lifetime access to
            your DD-214.
          </p>
        </div>
        <div className="px-[75px] pb-[60px] mt-[80px]">
          <Button>I Agree, and wish to Access my DD-214</Button>
        </div>
      </div>
    </Modal>
  );
};

export default AccessDD214Modal;
