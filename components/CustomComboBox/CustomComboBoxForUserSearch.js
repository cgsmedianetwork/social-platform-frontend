import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDebounce } from "@/hooks/useDebounce";
import { Search01Icon } from "hugeicons-react";
import { ChevronDown, Loader } from "lucide-react";
import { useEffect, useState } from "react";

const CustomComboboxForProductSearch = ({
  hasPlus,
  field,
  customForm,
  label,
  notFoundMsg,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const debounceSearch = useDebounce(searchTerm, 600);
  const [selectProduct, setSelectProduct] = useState(null);

  const { data, isFetching } = useGetAdminUserListQuery(
    { searchTerm: debounceSearch, page: 1, limit: 10 },
    { skip: !open },
  );
  console.log(data?.data?.data);

  useEffect(() => {
    if (field.value && data?.data?.data?.length) {
      const match = data?.data?.data?.find((item) => item._id === field.value);
      console.log(match);
      if (match) {
        setSelectProduct(match);
        customForm?.setValue("price", match?.price || 0);
        customForm?.setValue("addOn", match?.addOn || 0);
      }
    }
    // console.log(selectProduct);
  }, [customForm, data?.data, field.value, selectProduct]);

  // console.log(data?.data);
  // console.log(error);

  return (
    <Popover className={"!block w-full "} open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <button
          type="button"
          className={`border flex items-center justify-between w-full text-sm px-2.5 ${
            hasPlus ? "pr-10" : "pr-4"
          } py-3 rounded-lg relative overflow-hidden`}
        >
          {/* {field.value
              ? data?.data?.find((item) => item._id === field.value)?.modelInfo
                  ?.name
              : label
              ? label
              : "Select Brand"} */}

          {selectProduct
            ? `${selectProduct?.modelInfo?.name}`
            : label || "Select Product"}

          <ChevronDown size={14} className="text-headerColor" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className={
          "w-[--radix-popover-trigger-width] p-0 font-baloo overflow-hidden"
        }
      >
        <div className="relative border-b">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" p-2 pl-8 w-full text-sm focus:outline-none focus:ring-0"
            type="text"
            placeholder={placeholder || "Search customer"}
          />
          <Search01Icon
            size={14}
            className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500"
          />
        </div>

        {isFetching ? (
          <div className="p-2 flex items-center justify-center">
            <Loader size={16} className="animate-spin" />
          </div>
        ) : (
          <div className="p-1 w-full">
            {error ? (
              <p className="text-sm w-full p-2 text-center">
                {notFoundMsg || "Not found!"}
              </p>
            ) : data?.data?.length > 0 ? (
              data?.data?.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    field.onChange(item?._id);
                    setOpen(!open);
                  }}
                  className="text-sm px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  {item?.modelInfo?.name}{" "}
                  <span className="ml-1 text-gray-500">({item?.imei})</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-center p-2">No Customer Found!</p>
            )}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CustomComboboxForProductSearch;
