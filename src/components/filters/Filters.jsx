const Filters = ({selectedGender, setSelectedGender, selectedSpecies, setSelectedSpecies,
  selectedStatus, setSelectedStatus, setSearchName }) => {

  const resetFilters = () => {
    setSearchName('');
    setSelectedGender('');
    setSelectedSpecies('');
    setSelectedStatus('');
  };

  return (
    <div className="flex flex-wrap items-center mb-8 sm:space-x-4 w-3/4 mx-auto">
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="text-white bg-slate-950 border p-1 rounded-lg text-sm flex-grow"
      >
        <option value="">Status...</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        value={selectedSpecies}
        onChange={(e) => setSelectedSpecies(e.target.value)}
        className="text-white bg-slate-950 border p-1 rounded-lg text-sm flex-grow species"
      >
        <option value="">Species...</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="robot">Robot</option>
      </select>
      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
        className="text-white bg-slate-950 border p-1 rounded-lg text-sm flex-grow gender"
      >
        <option value="">Gender...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button onClick={resetFilters} className="bg-gray-400 hover:bg-gray-200 font-semibold 
       text-gray-800 py-1 px-2 rounded-lg resetFilters">
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;