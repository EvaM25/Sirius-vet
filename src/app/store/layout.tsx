import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const StoreLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default StoreLayout;
