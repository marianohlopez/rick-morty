import './App.css'
import { AppContextProvider } from './context/AppContext';
import CharactersContainer from './components/characters-container/CharactersContainer'
import SearchBar from './components/search-bar/SearchBar';
import Filters from './components/filters/Filters';
import CharacterModal from './components/character-modal/CharacterModal';

function App() {
  
  return (
    <AppContextProvider>
      <SearchBar />
      <Filters />
      <CharactersContainer />
      <CharacterModal />
    </AppContextProvider>
  )
}

export default App
