import ArrowRight from "@components/Icons/ArrowRight";
import LoginThroughIDMeModal from "@components/LoginThroughIDMeModal";
import React, { useState } from "react";

const EnterInTheWebAsAVeteran = () => {
  const [openLoginThroughIDMeModal, setOpenLoginThroughIDMeModal] =
    useState(false);
  return (
    <>
      <LoginThroughIDMeModal
        isOpen={openLoginThroughIDMeModal}
        onRequestClose={() => setOpenLoginThroughIDMeModal(false)}
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
