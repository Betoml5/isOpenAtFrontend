export const HeroSection = (props) => {
  console.log(props);
  return (
    <div className="md:w-1/5">
      <picture className="">
        <img src={props.pic} alt="" className="sectionItem w-full" />
      </picture>
    </div>
  );
};
