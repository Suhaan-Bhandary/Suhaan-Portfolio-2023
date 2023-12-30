type props = {
  children: React.ReactNode;
};

export default function Modal({ children }: props) {
  return <div>{children}</div>;
}
