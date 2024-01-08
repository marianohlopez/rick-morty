import ReactModal from "react-modal";

const CharacterModal = ({selectedCharacter, setSelectedCharacter, modalOpen, setModalOpen}) => {

  ReactModal.setAppElement('#root');
  
  const closeModal = () => {
    setSelectedCharacter(null)
    setModalOpen(false)
  };

  return (
    <ReactModal 
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxHeight:'auto',
          padding:0,
          borderColor:'black',
          background:'black',
          overflow: 'hidden',
        },
      }}
      isOpen={modalOpen} onRequestClose={closeModal}>
        {selectedCharacter && (
        <div className="flex relative  flex-wrap characterModal">
          <button 
            className="absolute top-0 right-0 p-3 cursor-pointer"
            onClick={closeModal}
          >
            <div className="text-white w-6 h-6 flex items-center justify-center bg-black border-2 
              border-white p-3 rounded-full transition duration-300 ease-in-out transform 
              hover:bg-white hover:text-black">
              <span className="text-sm font-semibold">X</span>
            </div>
          </button>
          <div className="sm:w-52 w-full">
            <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-full rounded-md" />
          </div>
          <div className="sm:w-72 w-full bg-black text-white text-[0.8rem] p-4 flex flex-col 
            justify-center items-center">
            <h2 className="font-bold mb-2">{selectedCharacter.name}</h2>
            <p>
              <span className="text-cyan-300">Status: </span>
              <span className="text-white">{selectedCharacter.status}</span>
            </p>
            <p>
              <span className="text-cyan-300">Gender: </span>
              <span className="text-white">{selectedCharacter.gender}</span>
            </p>
            <p>
              <span className="text-cyan-300">Species: </span>
              <span className="text-white">{selectedCharacter.species}</span>
            </p>
            <p>
              <span className="text-cyan-300">Type: </span>
              <span className="text-white">{selectedCharacter.type}</span>
            </p>
            <p>
              <span className="text-cyan-300">Location: </span>
              <span className="text-white">{selectedCharacter.location.name}</span>
            </p>
            <p>
              <span className="text-cyan-300">Origin: </span>
              <span className="text-white">{selectedCharacter.origin.name}</span>
            </p>
          </div>
        </div>
      )}
    </ReactModal>
  )
}

export default CharacterModal
