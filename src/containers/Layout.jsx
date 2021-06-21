import { HeaderBottom } from "../components/HeaderBottom";

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-600 relative h-screen">
      <HeaderBottom />
      {children}
    </div>
  );
};
