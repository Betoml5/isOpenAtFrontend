export const HeroSection = (props) => {
  console.log(props);
  return (
    <div className="w-56 z-20">
      <picture className="">
        <img src={props.pic} alt="" className="sectionItem w-full" />
      </picture>
    </div>
  );
};
