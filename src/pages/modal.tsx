import AccessDD214Modal from "@components/AccessDD214Modal/AccessDD214Modal";
import Button from "@components/Button";
import React, { useState } from "react";

const modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h3 className="title_36">This is the "Access your DD-214" Modal</h3>
      <h5 className="title_24">
        I did not connect this modal with the actual page because the page is
        not completed yet.
      </h5>
      <h5 className="title_24">
        Just designed the modal in a separate component
      </h5>
      <h5 className="title_24">I will connect it later.</h5>
      <div className="w-[200px] mx-auto">
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
      <AccessDD214Modal isOpen={open} onRequestClose={() => setOpen(false)} />
    </div>
  );
};

export default modal;
