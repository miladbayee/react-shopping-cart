
const shoesSize = ["All", "38", "39", "40", "41", "42", "43","44"];
export default function FilterSize({size,handleSizeFilter}) {
    return (
        <div className={"filter-size"}>
        <select value={size} onChange={handleSizeFilter}>
          {shoesSize.map((sizes) => (
            <option value={sizes} key={sizes}>
              {sizes}
            </option>
          ))}
        </select>
      </div>  
        )
}
