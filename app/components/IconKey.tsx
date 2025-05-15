import React, { ReactElement, SVGProps } from "react";

interface IconWithSizeProps extends SVGProps<SVGSVGElement> {
  size?: number;  // add size as optional prop
}

interface IconKeyProps {
  icon: ReactElement<IconWithSizeProps>;
  size?: number;
}

const IconKey: React.FC<IconKeyProps> = ({ icon, size = 32 }) => {
  return (
    <div
      className="
        relative
        inline-flex
        items-center
        justify-center
        w-16 h-16
        p-2
        bg-gray-100
        border-2 border-gray-300
        rounded-md
        shadow-inner
        cursor-pointer
        select-none
        overflow-visible
        transition
        duration-300
        ease-in-out
        hover:border-pink-400
        hover:shadow-[0_0_12px_3px_rgba(255,77,171,0.7)]
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {React.cloneElement(icon, {
        size,
        className:
          "drop-shadow-md text-gray-900 transition duration-300 ease-in-out hover:text-pink-400",
        "aria-hidden": "true",
      })}
    </div>
  );
};

export default IconKey;
