import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const TherapyLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default TherapyLayout;
