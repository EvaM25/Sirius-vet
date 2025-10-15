import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const StaffLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default StaffLayout;
