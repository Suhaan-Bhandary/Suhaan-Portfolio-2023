"use client";

import { useState } from "react";

export default function ShowMoreProjectsButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShowMoreActive, setIsShowMoreActive] = useState(false);

  const toogleIsShowMoreActive = () => {
    setIsShowMoreActive((state) => !state);
  };

  return (
    <div>
      {isShowMoreActive ? children : null}

      <button
        onClick={toogleIsShowMoreActive}
        className="relative block border px-8 py-2 mx-auto text-sm border-accent-400 text-accent-400 rounded-sm w-fit"
      >
        <div className="absolute hover:scale-x-[0.95] hover:scale-y-[0.8] left-0 right-0 top-0 bottom-0 border border-accent-400 text-accent-400 rounded-sm transition-transform duration-200"></div>
        {isShowMoreActive ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
