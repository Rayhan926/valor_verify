import AccessDD214Modal from "@components/AccessDD214Modal";
import ArrowRight from "@components/Icons/ArrowRight";
import LoginThroughIDMeModal from "@components/LoginThroughIDMeModal";
import React, { useState } from "react";

const EnterInTheWebAsAVeteran = () => {
  const [openAccessDD214Modal, setOpenAccessDD214Modal] = useState(false);
  const [openLoginThroughIDMeModal, setOpenLoginThroughIDMeModal] =
    useState(false);

  return (
    <>
      <LoginThroughIDMeModal
        isOpen={openLoginThroughIDMeModal}
        onRequestClose={() => setOpenLoginThroughIDMeModal(false)}
        onLoginBtnClick={() => {
          setOpenLoginThroughIDMeModal(false);
          setTimeout(() => {
            setOpenAccessDD214Modal(true);
          }, 200);
        }}
      />
      <AccessDD214Modal
        isOpen={openAccessDD214Modal}
        onRequestClose={() => setOpenAccessDD214Modal(false)}
      />

      <button
        onClick={() => setOpenLoginThroughIDMeModal(true)}
        className="text-center text-secondary my-10 flex items-center justify-center w-full gap-10"
      >
        Enter In The Web As a Veteran
        <ArrowRight />
      </button>
    </>
  );
};

export default EnterInTheWebAsAVeteran;
