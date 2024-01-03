import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';

type props = {
  children: React.ReactNode;
};

export default function Modal({ children }: props) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-bgBlack-800 bg-opacity-60 p-[1.5rem] transition-colors md:p-14">
      <div className="shadow relative mx-auto max-w-[600px] overflow-auto rounded-xl bg-bgBlack-400 p-6 md:w-[80%]">
        <Link
          href="/"
          className="absolute right-2 top-4 rounded-lg p-1 text-xl text-white hover:bg-opacity-50"
          scroll={false}
        >
          <IoMdClose />
        </Link>
        {children}
      </div>
    </div>
  );
}
