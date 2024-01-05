import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

const GET_CHARACTER_INFO = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        type
        gender
      }
    }
  }
`;

const CharactersContainer = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = data.characters.results;
  const pageInfo = data.characters.info;

  return (
    <div className='text-center'>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-3/4 mx-auto">
        {characters.map((character) => (
          <div key={character.id} className='relative w-auto'>
            <img src={character.image} alt={character.name} className="w-full h-auto rounded-md" />
            <p className="absolute bottom-0 w-full text-white text-center p-2">{character.name}</p>
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