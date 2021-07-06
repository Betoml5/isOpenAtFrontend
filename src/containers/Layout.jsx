import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <div className="relative ">
      {children}
      <Header />
    </div>
  );
};
