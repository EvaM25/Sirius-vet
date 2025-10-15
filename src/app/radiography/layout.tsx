import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const RadiographyLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default RadiographyLayout;
