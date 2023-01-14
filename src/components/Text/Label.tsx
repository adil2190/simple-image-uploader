import React from "react";

type LabelProps = {
  children?: React.ReactNode;
};

function Label({ children }: LabelProps) {
  return <p className="mb-[15px] text-[14px] text-[#ccc]">{children}</p>;
}

export default Label;
