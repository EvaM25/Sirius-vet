import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const EchocardiographyLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default EchocardiographyLayout;
