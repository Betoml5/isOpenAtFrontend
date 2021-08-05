import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <Header />
    </div>
  );
};

export default Layout;
