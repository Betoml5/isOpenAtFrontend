import { getShopByName } from "../services/Shop";

const Search = ({ setFilterShops, filterShops }) => {
  const handleSearch = (e) => {
    setTimeout(async () => {
      const response = await getShopByName(e.target.value);
      setFilterShops(response);
    }, 300);
  };

  return (
    <div className="col-span-full  lg:my-4 md:w-2/3 md:justify-self-center">
      <input
        type="text"
        className={`rounded-md p-4 w-full outline-none  ${
          filterShops?.length > 0 && `ring-2 ring-highGreen`
        }`}
        placeholder="Buscar..."
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default Search;
