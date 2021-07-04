
export const Section = (props) => {
  return (
    <div className=" justify-self-center border-2 border-white inline-block w-max rounded p-4 my-4 mx-4">
      <picture>
        <img src={props.icon} alt="shop" className="lg:w-16" />
      </picture>
    </div>
  );
};
