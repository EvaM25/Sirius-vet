import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const RegistrationLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default RegistrationLayout;
