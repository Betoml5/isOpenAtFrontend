export const Hero = () => {
  return (
    <div className="flex justify-self-center col-span-full  h-80 justify-center items-center max-w-xl  bg-veryLightWhite rounded  overflow-hidden overflow-ellipsis p-2 md:p-8">
      <div className="w-4/5">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          doloribus, nobis magni porro facere accusamus dolores sed nemo quos
          dicta delectus. Accusamus necessitatibus reprehenderit, vero maxime ex
          laborum ut placeat?
        </p>
      </div>
      <div className=" flex justify-center items-center h-full w-1/4 ">
        <h3 className="transform rotate-90 text-4xl  font-bold  my-5">
          IsOpenAt
        </h3>
      </div>
    </div>
  );
};
