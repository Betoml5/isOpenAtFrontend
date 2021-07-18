import { getShopByName } from "../services/Shop";

export const Search = ({ setFilterShops, filterShops }) => {
  const handleSearch = (e) => {
    setTimeout(async () => {
      const response = await getShopByName(e.target.value);
      setFilterShops(response);
    }, 300);
  };

const Search = () => {
  return (
    <div className="col-span-full lg:col-span-2 lg:my-4 md:w-2/3 md:justify-self-center">
      <input
        type="text"
        className="rounded-md p-4 w-full"
        placeholder="Buscar..."
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default Search;
