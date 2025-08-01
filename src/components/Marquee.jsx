import { Icon } from "@iconify/react/dist/iconify.js";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
  speed = 1, // Default speed factor
}) => {

  const renderItems = () =>
    items.map((text, index) => (
      <span
        key={index}
        className="marquee-item flex items-center px-8 md:px-12 gap-x-8 md:gap-x-16"
      >
        {text} <Icon icon={icon} className={iconClassName} />
      </span>
    ));

  return (
    <div
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div
        className="flex marquee-content"
        style={{
          "--duration": `${40 * (1 / speed)}s`,
          "--direction": reverse ? 1 : -1,
        }}
      >
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

export default Marquee;
