import Link from "next/link";
import { IoMdClose } from "react-icons/io";

type props = {
  children: React.ReactNode;
};

export default function Modal({ children }: props) {
  return (
    <div className="fixed inset-0 p-10 transition-colors bg-bgBlack-800 bg-opacity-60 z-50 overflow-auto">
      <div className="mx-auto relative bg-bgBlack-400 rounded-xl shadow p-6 max-w-[600px] md:w-[80%] overflow-auto">
        <Link
          href="/"
          className="absolute top-2 right-2 p-1 rounded-lg text-white text-xl hover:bg-opacity-50"
          scroll={false}
        >
          <IoMdClose />
        </Link>
        {children}
      </div>
    </div>
  );
}
