import { cx } from "@config/constants";
import React from "react";

const VateranStatBox = ({
  value,
  description,
  bg,
}: {
  value: string | number;
  description: string;
  bg?: string;
}) => {
  return (
    <div className="rounded-[25px] bg-white overflow-hidden grid grid-cols-[auto,auto]">
      <div
        className={cx(
          "text-secondary pl-6 pr-4 flex flex-col justify-center",
          bg || "bg-[#FFFBE9]",
        )}
      >
        <p className="text-[32px]">{value}</p>
        <div className="w-7 h-[3px] rounded-full bg-primary translate-x-1"></div>
      </div>
      <p className="pr-9 pl-5 py-[30px] text-[#7A86A1]">{description}</p>
    </div>
  );
};
export default VateranStatBox;
