"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoExit } from "react-icons/io5";
import { FiArrowUpLeft } from "react-icons/fi";

export default function Header() {
  const [showInfo, setShowInfo] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (showInfo) { // Only trigger handleDismiss if info is still showing
        handleDismiss();
      }
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showInfo]); // Add showInfo as a dependency to re-run the effect when it changes

  const handleDismiss = () => {
    setShowInfo(false);
  };

  return (
    <div>
      <div className="absolute z-10 w-screen p-1">
        <div className="grid justify-end px-5 pt-2">
          <Link href="/" className="transition-transform hover:scale-110" target="_self" rel="noopener noreferrer">
            <IoExit size="40px" />
          </Link>
        </div>
        {showInfo && (
          <div
            id="infos"
            className="absolute top-10 left-10 bg-black max-w-sm shadow-xl p-3 text-white rounded-lg opacity-100 transition ease-in-out duration-500"
            onAnimationEnd={() => setShowInfo(false)}
          >
            <FiArrowUpLeft size="30px"/>
            <p className="text-base font-light pb-2">
              don&apos;t forget to check the success of the test!
            </p>
            <button
              onClick={handleDismiss}
              className="transition ease-in-out bg-white p-1 rounded-lg text-black w-full hover:scale-[1.01]"
            >
              dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

