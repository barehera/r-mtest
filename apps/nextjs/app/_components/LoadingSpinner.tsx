import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center pt-6">
      <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
    </div>
  );
};

export default LoadingSpinner;
