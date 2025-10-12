import { cn } from "@/lib/utils";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ id, label, field, className, labelClass }) => {
  // console.log(field?.value, "field value in CustomCheckbox");
  return (
    <div className={cn("checkbox-wrapper-4", className)}>
      <input
        className="inp-cbx"
        id={id}
        type="checkbox"
        checked={field?.value}
        onChange={field?.onChange}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check-4" />
          </svg>
        </span>
        {label && (
          <span
            className={cn("text-sm text-headerColor  inline-block", labelClass)}
          >
            {label}
          </span>
        )}
      </label>

      {/* SVG Symbol must be globally available, preferably in _app.js or layout */}
      <svg className="inline-svg" style={{ display: "none" }}>
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </symbol>
      </svg>
    </div>
  );
};

export default CustomCheckbox;
