import React from "react";

export const Button = ({ completedFormStep, currentStep, isValid }) => {
  const renderButton = () => {
    if (currentStep > 1) {
      return undefined;
    } else if (currentStep >= 1) {
      return (
        <button
          className="bg-red-600 hover:bg-red-500 text-white uppercase py-1 px-5 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={!isValid}
        >
          Save
        </button>
      );
    } else {
      return (
        <button
          className="bg-red-600 hover:bg-red-500 text-white uppercase py-1 px-5 rounded focus:outline-none focus:shadow-outline"
          disabled={!isValid}
          type="button"
          onClick={completedFormStep}
        >
          Next
        </button>
      );
    }
  };

  return <>{renderButton()}</>;
};
