import React from "react";
import VeteranHome from "@views/VeteranHome";
import Button from "@components/Button";
const VetHistoryResult = () => {
  return (
    <>
      <VeteranHome />
      <div className="max-w-[750px] mx-auto mb-20 -mt-5">
        <Button>Check another veteran's Status</Button>
      </div>
    </>
  );
};

export default VetHistoryResult;
