import React from "react";
import FilterSize from "./FilterSize";
import FilterSort from "./FilterSort";
export default function Filter({
  products,
  sort,
  size,
  handleSortFilter,
  handleSizeFilter,
}) 

{
  return (
    <div className={"filter"}>
      <div className={"filter-count"}>{products.length} Products</div>
      <FilterSort sort={sort} handleSortFilter={handleSortFilter} />
      <FilterSize size={size} handleSizeFilter={handleSizeFilter} />
    </div> 
  ); 
}
