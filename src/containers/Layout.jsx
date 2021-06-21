import { HeaderBottom } from "../components/HeaderBottom";

export const Layout = ({ children }) => {
  return (
    <div className="bg-app relative h-screen">
      <HeaderBottom />
      {children}
    </div>
  );
};
