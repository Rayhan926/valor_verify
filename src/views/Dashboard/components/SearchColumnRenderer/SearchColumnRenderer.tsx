import { cx, last10Searches } from "@config/constants";
import { SearchColumnRendererProps } from "@config/types";
import React from "react";

const SearchColumnRenderer = ({
  title,
  columnKey,
  color = "#000",
  render,
  className,
}: SearchColumnRendererProps) => {
  return (
    <div
      style={{
        boxShadow: "-6px 13px 35px rgba(69, 172, 209, 0.15)",
      }}
      className={cx(
        "rounded-r-[30px] bg-white pb-[17px] relative -ml-[25px]",
        className,
      )}
    >
      <div className="border-b border-[#EBEBEB] pl-[70px] pr-4 py-[35px] text-secondary mb-[17px]">
        {title}
      </div>
      {last10Searches.map((last10Searche, i) => {
        return (
          <div
            className="pl-[70px] pr-4 py-[17px]"
            style={{ color: color }}
            key={i}
          >
            {render
              ? render(last10Searche[columnKey as "name"])
              : last10Searche[columnKey as "name"]}
          </div>
        );
      })}
    </div>
  );
};

export default SearchColumnRenderer;
