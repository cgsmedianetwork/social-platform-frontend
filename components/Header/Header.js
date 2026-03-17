import { cn } from "@/lib/utils";

const Header = ({
  title,
  description,
  titleClass,
  descriptionClass,
  className,
}) => {
  return (
    <header className={cn("flex flex-col gap-2 px-5", className)}>
      <h3
        className={cn(
          "text-neutral-600 text-3xl sm:text-5xl font-semibold",
          titleClass,
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-base text-neutral-500 font-normal text-center",
          descriptionClass,
        )}
      >
        {description}
      </p>
    </header>
  );
};

export default Header;
