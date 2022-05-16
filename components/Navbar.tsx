import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* mobile navbar */}
      <div className="flex flex-col md:hidden w-full h-full items-end justify-center">
        <button
          type="button"
          className="w-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        <nav
          className={`${
            isOpen ? "opacity-100 h-auto overflow-hidden" : "opacity-0 h-0"
          } w-full transition-all duration-300`}
        >
          <ul className="text-lg font-medium">
            <li className="p-1 hover:bg-gray-300 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer">
              <a href="#experience">Experience</a>
            </li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer">
              <a href="#projects">Work</a>
            </li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer">
              <a href="/files/Amal-Resume.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* normal navbar */}
      <nav className="hidden md:block">
        <ul className="list-none flex gap-x-4 font-medium text-lg">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/files/Amal-Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
