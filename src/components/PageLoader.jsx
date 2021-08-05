const PageLoader = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center col-span-full">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Puede cambiar por esto */}
      {/* <DicesAnimation /> */}
    </div>
  );
};

export default PageLoader;
