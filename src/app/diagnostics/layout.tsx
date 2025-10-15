import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const DiagnosticsLayout: FC<IProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default DiagnosticsLayout;
