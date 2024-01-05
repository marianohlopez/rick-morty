import './App.css'
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import CharactersContainer from './components/characters-container/CharactersContainer'
import SearchBar from './components/search-bar/SearchBar';
import Filters from './components/filters/Filters';

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
        setCurrentPage = {setCurrentPage} />
    </>
  )
}

export default App
