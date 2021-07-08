import { Search } from "../components/Search";
import { Shop } from "../components/Shop";
import shops from "../shops";

export const ShopContainer = () => {
  return (
    <>
      <div className="grid mx-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Search />
        {shops.map((shop) => (
          <Shop {...shop} />
        ))}
      </div>
    </>
  );
};
