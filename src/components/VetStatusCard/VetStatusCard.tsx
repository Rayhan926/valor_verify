import React, { ReactNode } from "react";

const VetStatusCard = () => {
  return (
    <div>
      <h1 className="title_32 font-gorga-light">Jack William Reynolds</h1>
      <div className="mt-6 flex items-end gap-y-5 gap-10 flex-wrap">
        <Box label="Birth date" value="08/28/1982" />
        <Box label="Security Number" value="***-**-3577" />
        <Box label="Gender" value="Male" />
      </div>
    </div>
  );
};

export default VetStatusCard;

const Box = ({ label, value }: { label: string; value: ReactNode }) => {
  return (
    <div className="border border-primary rounded-full overflow-hidden flex items-center">
      <div className="bg-shadow-primary rounded-full py-3 px-6 text-dark-700">
        {label}
      </div>
      <div className=" px-7 text-primary/60 text-xl">{value}</div>
    </div>
  );
};
