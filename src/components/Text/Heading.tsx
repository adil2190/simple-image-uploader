import React from "react";

type HeadingProps = {
  children?: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  return (
    <p className="my-[20px] font-bold text-[20px] text-[#333]">{children}</p>
  );
}

export default Heading;
