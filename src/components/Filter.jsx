export const Filter = () => {
  return (
    <div className="col-span-full w-full md:w-2/3  md:justify-self-center lg:w-1/2">
      <select name="Filter" id="filter" className="p-4 w-full ">
        <option value="Mas visitado">Mas visitado</option>
        <option value="Mas varato">Mas barato</option>
        <option value="Mas caro">Mas caro</option>
        <option value="rating">Mejor rating</option>
      </select>
    </div>
  );
};
