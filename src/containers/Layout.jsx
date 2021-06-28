import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Header />
      {children}
    </div>
  );
};
