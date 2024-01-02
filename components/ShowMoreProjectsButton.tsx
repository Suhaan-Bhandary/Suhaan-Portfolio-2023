"use client";

import { useEffect, useState } from "react";

export default function ShowMoreProjectsButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowMoreActive, setIsShowMoreActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toogleIsShowMoreActive = () => {
    setIsLoading(true);
    setIsShowMoreActive((state) => !state);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [isShowMoreActive]);

  let buttonText = "Loading...";
  if (!isLoading) {
    buttonText = isShowMoreActive ? "Show Less" : "Show More";
  }

  return (
    <div>
      {isShowMoreActive ? children : null}

      <button
        onClick={toogleIsShowMoreActive}
        className="relative block border px-8 py-2 mx-auto text-sm border-accent-400 text-accent-400 rounded-sm w-fit"
      >
        <div className="absolute md:hover:scale-x-[0.95] md:hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
        {buttonText}
      </button>
    </div>
  );
}
