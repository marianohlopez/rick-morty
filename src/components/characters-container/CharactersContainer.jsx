import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CharactersContainer = () => {

  const { loading, error, data, currentPage, setCurrentPage, 
    setSelectedCharacter, setModalOpen } = useContext(AppContext);
     
  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-white text-center">Error: {error.message}</p>;
  if (!data || !data.characters || !data.characters.results || data.characters.results.length === 0) {
    return <p className="text-white text-center">No characters found.</p>;
  }

  const characters = data.characters.results;
  const pageInfo = data.characters.info;

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  return (
    
    <div className='text-center'>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-3/4 mx-auto">
        {characters.map((character) => (
          <div key={character.id} className='relative w-auto cursor-pointer hover:scale-105 
            transition-transform duration-300' 
          onClick={() => handleCharacterClick(character)}>
            <img src={character.image} alt={character.name} className="w-full h-auto rounded-md" />
            <p className="absolute bottom-0 w-full text-white text-center p-2 textImage">{character.name}</p>
          </div>
        ))}
      </div>
      <div className='m-5'>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className="bg-neutral-50 hover:bg-neutral-200 text-black font-semibold py-1 px-3 rounded mr-3"
        >
          Prev
        </button>
        <span className='text-white'>{currentPage}/{pageInfo.pages}</span>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, pageInfo.pages))}
          disabled={currentPage === pageInfo.pages}
          className="bg-neutral-50 hover:bg-neutral-200 text-black font-semibold py-1 px-3 rounded ml-3"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharactersContainer;