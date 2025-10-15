import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const DentistryLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default DentistryLayout;
