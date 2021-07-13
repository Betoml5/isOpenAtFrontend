import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <div className="">
      {children}
      <Header />
    </div>
  );
};
