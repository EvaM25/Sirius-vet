import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const ChippingLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default ChippingLayout;
