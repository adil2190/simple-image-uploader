import React from "react";

type GreyLabelProps = {
  children?: React.ReactNode;
};

function GreyLabel({ children }: GreyLabelProps) {
  return <p className="mt-[30px] text-[14px] text-[#BDBDBD]">{children}</p>;
}

export default GreyLabel;
