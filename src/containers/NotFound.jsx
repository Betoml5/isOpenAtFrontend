import image404 from "../static/404-image.png";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mx-auto h-screen w-full  lg:w-1/3">
      <picture>
        <img src={image404} alt="404Image" className="w-full " />
      </picture>
    </div>
  );
};

export default NotFound;
