"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-md font-bold textGradient ", // Color for caption label
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:text-green-900 text-green-700" // Navigation buttons
        ),
        nav_button_previous: "absolute left-1 hover:text-green-900",
        nav_button_next: "absolute right-1 hover:text-green-900",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "textGradient rounded-md mr-2 w-8 font-normal text-[0.8rem]", // Header (day names)
        row: "flex w-full mt-2",
        cell: cn(
          "border-2 mr-1 border-[#cad6c5] hover:bg-[#cad6c5] relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-green-600/20 [&:has([aria-selected].day-outside)]:bg-green-600/10",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal text-[#87a37a]  aria-selected:text-green-800 aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start text-green-800", // Range start
        day_range_end: "day-range-end text-green-800", // Range end
        day_selected:
          "bg-green-700 text-white hover:bg-green-800 hover:text-white focus:bg-green-700 focus:text-white", // Selected day
        day_today:
          "bg-green-700 bg-opacity-80 text-green-100 font-bold", // Today’s date styling
        day_outside:
          "day-outside text-green-600 opacity-50", // Outside days
        day_disabled: "text-green-600 opacity-50", // Disabled days
        day_range_middle:
          "aria-selected:bg-green-600 aria-selected:text-green-800",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
