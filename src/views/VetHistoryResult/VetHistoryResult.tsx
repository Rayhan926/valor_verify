import React from "react";
import VeteranHome from "@views/VeteranHome";
import Button from "@components/Button";
import { useRouter } from "next/router";

const VetHistoryResult = () => {
  const router = useRouter();
  return (
    <>
      <VeteranHome />
      <div className="max-w-[750px] mx-auto mb-20 -mt-5">
        <Button onClick={() => router.push("//vet-status-check")}>
          Check another veteran's Status
        </Button>
      </div>
    </>
  );
};

export default VetHistoryResult;
