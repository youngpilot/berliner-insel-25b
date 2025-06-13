
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DayClickEventHandler } from "react-day-picker";
import { startOfWeek, endOfWeek } from "date-fns";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = Omit<React.ComponentProps<typeof DayPicker>, "selected" | "onSelect"> & {
  weekSelection?: boolean;
  onDateSelect?: (date: Date) => void;
  selected?: Date | null | undefined;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  weekSelection = false,
  onDateSelect,
  selected,
  ...props
}: CalendarProps) {
  // Handle week selection logic
  const handleDayClick: DayClickEventHandler = (day, modifiers, e) => {
    if (weekSelection && day && onDateSelect) {
      const startDay = startOfWeek(day, { weekStartsOn: 0 }); // 0 for Sunday
      onDateSelect(startDay);
    } else if (onDateSelect && day) {
      onDateSelect(day);
    }
  };

  // If in week selection mode, modify the selected days to highlight full week
  const selectedDays = React.useMemo(() => {
    if (weekSelection && selected instanceof Date) {
      const weekStart = startOfWeek(selected, { weekStartsOn: 0 });
      const weekEnd = endOfWeek(selected, { weekStartsOn: 0 });
      return { from: weekStart, to: weekEnd };
    }
    return selected;
  }, [weekSelection, selected]);

  // Determine the mode based on selectedDays type
  const mode = React.useMemo(() => {
    if (!selectedDays) return "single";
    if (typeof selectedDays === 'object' && 'from' in selectedDays) return "range";
    return "single";
  }, [selectedDays]);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 pointer-events-auto", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent/40 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-houseboat-wood text-white hover:bg-houseboat-wood hover:text-white focus:bg-houseboat-wood focus:text-white",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-houseboat-wood/70 aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      onDayClick={handleDayClick}
      mode={mode as any}
      {...props}
      selected={selectedDays as any}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
