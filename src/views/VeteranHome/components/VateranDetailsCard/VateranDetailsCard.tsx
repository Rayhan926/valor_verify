import { cx } from "@config/constants";
import { VateranDetailsCardProps } from "@config/types";
import React from "react";

const VateranDetailsCard = ({
  title,
  lists,
  className = "",
  ...props
}: VateranDetailsCardProps) => {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        boxShadow: "-6px 13px 54px rgba(69, 172, 209,0.15)",
      }}
      className={cx(
        "primary_gradient rounded-r-[30px] -ml-[25px] relative",
        className,
      )}
    >
      <div className="pt-10">
        <div className="pr-9">
          <div className="bg-gradient-to-r from-transparent via-white to-white title_24 font-gorga-light text-center py-4 rounded-r-[16px]">
            <p className="translate-x-5">{title}</p>
          </div>
        </div>

        <div className="pr-6 pl-[50px] py-10">
          {lists.length > 0 ? (
            <table className="w-full border-none border-collapse border-spacing-0">
              <tbody>
                {lists.map((list, i) => (
                  <>
                    <tr>
                      <td className="font-gorga-light text-[#6666AC]">
                        {list.label}
                      </td>
                      <td className="text-lg font-gorga-bold text-black">
                        {list.value}
                      </td>
                    </tr>
                    <tr className="h-3"></tr>
                  </>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center font-gorga-bold text-black">None</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VateranDetailsCard;
