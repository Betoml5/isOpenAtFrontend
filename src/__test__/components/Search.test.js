import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Search } from "../../components/Search";

test("should render search", () => {
  const search = render(<Search />);
  const placeholder = search.getAllByPlaceholderText("Buscar...");
  expect(placeholder).toBeDefined();
});
