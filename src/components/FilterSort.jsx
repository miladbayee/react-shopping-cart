
export default function FilterSort({sort,handleSortFilter}) {
  return (
    <div className="filter-sort">
      <select value={sort} onChange={handleSortFilter}>
        <option value="Latest" key={"Latest"}>
          Latest
        </option>
        <option value="Lowest" key={"Lowest"}>
          Lowest
        </option>
        <option value="Highest" key={"Highest"}>
          Highest
        </option>
      </select>
    </div> 
  ); 
}
