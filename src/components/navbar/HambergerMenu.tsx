import React from 'react'

interface propType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HambergerMenu: React.FC<propType> = ({open, setOpen}) => {
  return (
    <button
    className={`text-[#75917B] relative focus:outline-none flex flex-col gap-1 inset-y-0 ${
      open && "pr-2"
    }`}
    onClick={() => setOpen(!open)}
  >
    <span
      aria-hidden="true"
      className={`block h-[4px] w-6 bg-current transform transition duration-500 ease-in-out rounded-lg ${
        open ? "absolute rotate-45 mr-2 mt-2" : "rotate-0"
      }`}
    ></span>
    <span
      aria-hidden="true"
      className={`block h-[4px] w-6 bg-current mr-auto transform transition duration-500 ease-in-out rounded-lg ${
        open ? "opacity-0 rotate-90" : "rotate-0"
      } `}
    ></span>
    <span
      aria-hidden="true"
      className={`block h-[4px] w-6 bg-current transform  transition duration-500 ease-in-out rounded-lg ${
        open ? "absolute -rotate-45 mr-2 mt-2" : "rotate-0"
      }`}
    ></span>
  </button>
  )
}

export default HambergerMenu