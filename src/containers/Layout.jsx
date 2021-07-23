import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      {children}
      <Header />
    </div>
  );
};

export default Layout;
