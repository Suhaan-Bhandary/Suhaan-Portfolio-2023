'use client';

import { useEffect, useState } from 'react';

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

  let buttonText = 'Loading...';
  if (!isLoading) {
    buttonText = isShowMoreActive ? 'Show Less' : 'Show More';
  }

  return (
    <div>
      {isShowMoreActive ? children : null}

      <button
        onClick={toogleIsShowMoreActive}
        className="relative mx-auto block w-fit rounded-sm border border-accent-400 px-8 py-2 text-sm text-accent-400"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-sm border border-accent-400 text-accent-400 transition-transform duration-200 md:hover:scale-x-[0.95] md:hover:scale-y-[0.8]"></div>
        {buttonText}
      </button>
    </div>
  );
}
