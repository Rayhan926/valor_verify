import AccessDD214Modal from "@components/AccessDD214Modal/AccessDD214Modal";
import Button from "@components/Button";
import LoginThroughIDMeModal from "@components/LoginThroughIDMeModal";
import WelcomeToValorverifyModal from "@components/WelcomeToValorverifyModal";
import React, { useState } from "react";

const Modals = () => {
  const [openAccessDD214Modal, setOpenAccessDD214Modal] = useState(false);
  const [openLoginThroughIDMeModal, setOpenLoginThroughIDMeModal] =
    useState(false);
  const [openWelcomeToValorverifyModal, setOpenWelcomeToValorverifyModal] =
    useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <div className="flex justify-center gap-6 flex-wrap px-10">
        <Button
          className="w-auto"
          onClick={() => setOpenWelcomeToValorverifyModal(true)}
        >
          Welcome To Valorverify Modal
        </Button>
        <Button
          className="w-auto"
          onClick={() => setOpenAccessDD214Modal(true)}
        >
          Access DD-214 Modal
        </Button>
        <Button
          className="w-auto"
          onClick={() => setOpenLoginThroughIDMeModal(true)}
        >
          Login through ID.me Modal
        </Button>
      </div>
      <AccessDD214Modal
        isOpen={openAccessDD214Modal}
        onRequestClose={() => setOpenAccessDD214Modal(false)}
      />
      <LoginThroughIDMeModal
        isOpen={openLoginThroughIDMeModal}
        onRequestClose={() => setOpenLoginThroughIDMeModal(false)}
      />
      <WelcomeToValorverifyModal
        isOpen={openWelcomeToValorverifyModal}
        onRequestClose={() => setOpenWelcomeToValorverifyModal(false)}
      />
    </div>
  );
};

export default Modals;
