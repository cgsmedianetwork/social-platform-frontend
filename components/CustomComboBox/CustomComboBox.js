import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, Loader } from "lucide-react";
import { useState } from "react";

const CustomCombobox = ({
  data,
  label,
  field,
  loading,
  hasPlus,
  searchPlaceholder,
  searchTerm,
  setSearchTerm,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover className={"!block"} open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="cursor-pointer w-full">
        <span
          // type="button"
          className={`border flex items-center justify-between w-full text-sm text-gray-500 px-2.5 ${
            hasPlus ? "pr-10" : "pr-4"
          } py-2 rounded-lg relative overflow-hidden`}
        >
          {field.value
            ? data?.find((framework) => framework.value === field.value)?.label
            : label
              ? label
              : "Select Brand"}

          <ChevronDown size={14} className="text-headerColor" />
        </span>
      </PopoverTrigger>
      <PopoverContent
        className={
          "!w-[var(--radix-popover-trigger-width)] p-0 font-baloo left-0 right-0"
        }
      >
        <Command shouldFilter={false} className={"!w-full"}>
          <CommandInput
            placeholder={searchPlaceholder || "Search"}
            className={"h-10"}
            value={searchTerm}
            onValueChange={(value) => {
              // console.log("value: ", value);
              setSearchTerm(value);
            }}
          />
          {loading ? (
            <div className="border p-2 flex items-center justify-center">
              <Loader size={16} className="animate-spin " />
            </div>
          ) : (
            <CommandList className="max-h-[300px] min-h-0 overflow-y-auto">
              <CommandEmpty>Not found!</CommandEmpty>
              <CommandGroup className="overflow-y-auto">
                {data?.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.label}
                    onSelect={() => {
                      field.onChange(item.value);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    {item.email && (
                      <span className="text-xs text-gray-500">
                        {item.email}
                      </span>
                    )}
                    <Check
                      className={cn(
                        "ml-auto",
                        field.value === item.value
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CustomCombobox;
