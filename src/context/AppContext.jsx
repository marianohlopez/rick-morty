import { useQuery } from "@apollo/client";
import { useState, createContext } from "react";
import GET_CHARACTER_INFO from "../queries/queries";

export const AppContext = createContext([]);

export const AppContextProvider = ({children}) => {

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
    <AppContext.Provider value={{ loading, error, data, searchName, setSearchName, currentPage, setCurrentPage,
      selectedGender, setSelectedGender, selectedSpecies, setSelectedSpecies, selectedStatus, 
      setSelectedStatus, selectedCharacter, setSelectedCharacter, modalOpen, setModalOpen
      }}>
      {children}
    </AppContext.Provider>
  )
}