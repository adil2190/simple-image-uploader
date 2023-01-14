import React from "react";

type BlueButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
};

function BlueButton({ label, onClick }: BlueButtonProps) {
  return (
    <button
      onClick={onClick}
      className="min-w-[101px] p-[10px] bg-[#2F80ED] text-white rounded-[8px] text-[13px]"
    >
      {label}
    </button>
  );
}

export default BlueButton;
