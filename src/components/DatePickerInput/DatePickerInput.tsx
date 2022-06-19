import CalendarIcons from "@components/Icons/Calendar";
import { cx, ordinals } from "@config/constants";
import { DatePickerInputProps } from "@config/types";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";

const DatePickerInput = ({ color, isRequired }: DatePickerInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const day: number = parseInt(format(selectedDate, "dd"));
  const [isOpen, setIsOpen] = useState(false);
  const dateRangePickerHandleChange = (item: any) => {
    setSelectedDate(item);
    setIsOpen(false);
  };

  const toggleHandler = () => setIsOpen((prev) => !prev);

  const Devider = () => (
    <span
      className={cx(
        "w-0.5 h-2.5",
        color === "primary" ? "bg-primary-soft" : "bg-secondary",
      )}
    ></span>
  );

  return (
    <div>
      <label className="block text-dark-700 mb-3">
        Birth date{" "}
        {isRequired && (
          <span
            className={cx(
              color === "primary" ? "text-[#6EA9FF]" : "text-secondary",
            )}
          >
            *
          </span>
        )}
      </label>
      <div className="relative">
        <div
          onClick={toggleHandler}
          className={cx(
            "__input flex items-center border-secondary-dark justify-between relative cursor-pointer select-none",
            color === "primary"
              ? "border-primary-soft focus:border-[#2e64b4]"
              : "border-secondary-dark focus:border-[#ac8f12]",
          )}
        >
          <CalendarIcons />
          <div className="flex items-center gap-4 text-black font-gorga-regular">
            <span>
              {day}
              <sup className="font-gorga-light">{ordinals[day]}</sup>
            </span>
            <Devider />
            <span>{format(selectedDate, "MMMM")}</span>
            <Devider />
            <span>{format(selectedDate, "yyyy")}</span>
          </div>
        </div>
        <div
          className={cx(
            "absolute top-full left-0 w-full duration-300 datePickerWrapper",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none",
          )}
        >
          <Calendar
            onChange={(item: any) => dateRangePickerHandleChange(item)}
            date={selectedDate}
            showMonthAndYearPickers={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerInput;
