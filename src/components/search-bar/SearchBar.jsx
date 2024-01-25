import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

const SearchBar = () => {

  const {searchName, setSearchName} = useContext(AppContext);

  return (
    <div className="w-3/4 mx-auto mt-8">
      <input
        type="text"
        placeholder="Search characters by name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="text-white p-2 mb-4 bg-black w-full border border-white rounded-xl"
      />
    </div>
  )
}

export default SearchBar
