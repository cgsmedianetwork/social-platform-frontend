import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CustomDropdown = ({ label, placeholder, options = [] }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="text-sm text-neutral-600 font-medium mb-1.5 inline-block"
      >
        {label}
      </label>
      <Select>
        <SelectTrigger
          className={"w-full px-3 !py-5 rounded-lg text-sm hover:outline-1"}
        >
          <SelectValue placeholder={placeholder || "Select an option"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option?.label} value={option?.value}>
                <div className="flex items-center gap-2">
                  {/* <Image src={icon} alt="icon" className="w-5 py-0.5" /> */}
                  {option?.label}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomDropdown;
