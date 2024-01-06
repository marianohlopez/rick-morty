import './App.css'
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import CharactersContainer from './components/characters-container/CharactersContainer'
import SearchBar from './components/search-bar/SearchBar';
import Filters from './components/filters/Filters';
import CharacterModal from './components/character-modal/CharacterModal';

const GET_CHARACTER_INFO = gql`
  query Characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
        species
        status
        location {
          id
          name
        }
        origin {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;

function App() {

  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { page: currentPage, filter: { name: searchName, gender: selectedGender,
      species: selectedSpecies, status: selectedStatus } },
  }); 
  
  return (
    <>
      <SearchBar searchName = {searchName} setSearchName = {setSearchName} />
      <Filters GET_CHARACTER_INFO = {GET_CHARACTER_INFO} selectedGender = {selectedGender}
        setSelectedGender = {setSelectedGender} selectedSpecies = {selectedSpecies} 
        setSelectedSpecies = {setSelectedSpecies} selectedStatus = {selectedStatus}
        setSelectedStatus = {setSelectedStatus} />
      <CharactersContainer loading = {loading} error = {error} data = {data} currentPage = {currentPage}
        setCurrentPage = {setCurrentPage} setSelectedCharacter = {setSelectedCharacter} 
        setModalOpen = {setModalOpen}/>
      {selectedCharacter && 
      <CharacterModal selectedCharacter = {selectedCharacter} setSelectedCharacter = {setSelectedCharacter}
        modalOpen = {modalOpen} />}
    </>
  )
}

export default App
