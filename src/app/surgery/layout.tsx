import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const SurgeryLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default SurgeryLayout;
