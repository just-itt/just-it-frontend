import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerProps {
  size?: string;
  color?: string;
}

const Spinner = ({ size, color }: SpinnerProps) => {
  return <ClipLoader size={size ?? "20px"} color={color ?? "#ffffff"} />;
};

export default Spinner;
