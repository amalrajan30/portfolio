import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="w-full h-full left-0 top-0 fixed z-10 bg-gray-300/60 flex items-center justify-center">
      <div className="p-4 w-1/3 shadow-lg rounded bg-white">
        <div className="flex justify-end w-full">
          <button
            type="button"
            className="w-fit"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon width={12} icon={faXmark} />
          </button>
        </div>
        <div className="flex flex-col items-center p-2">
          <h1 className="text-2xl font-medium">Done!</h1>
          <p className="text-base mt-5">
            Thanks for reaching out! I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
