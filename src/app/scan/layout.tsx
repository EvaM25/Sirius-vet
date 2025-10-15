import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const ScanLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default ScanLayout;
