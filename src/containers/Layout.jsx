import { HeaderBottom } from "../components/HeaderBottom";

export const Layout = ({ children }) => {
  return (
    <div className="bg-app bg-no-repeat bg-cover relative h-screen">
      <HeaderBottom />
      {children}
    </div>
  );
};
