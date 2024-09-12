import React, { useState } from 'react';
import './Sponge.css';


import spongebobImage from '../assets/Spange.svg';
import patrickImage from '../assets/Spange.svg';
import squidwardImage from '../assets/Spange.svg';
import mrKrabsImage from '../assets/Spange.svg';
import sandyImage from '../assets/Spange.svg';
import planktonImage from '../assets/Spange.svg';
import garyImage from '../assets/Spange.svg';
import mrsPuffImage from '../assets/Spange.svg';
import pearlImage from '../assets/Spange.svg';
import larryImage from '../assets/Spange.svg';


const initialCharacters = [
  { id: 1, name: "SpongeBob SquarePants", description: "An optimistic and enthusiastic sea sponge.", image: spongebobImage },
  { id: 2, name: "Patrick Star", description: "SpongeBob's best friend, a pink starfish.", image: patrickImage },
  { id: 3, name: "Squidward Tentacles", description: "SpongeBob's cranky neighbor, a squid.", image: squidwardImage },
  { id: 4, name: "Mr. Krabs", description: "The greedy owner of the Krusty Krab.", image: mrKrabsImage },
  { id: 5, name: "Sandy Cheeks", description: "A squirrel from Texas who lives underwater.", image: sandyImage },
  { id: 6, name: "Plankton", description: "The evil genius who runs the Chum Bucket.", image: planktonImage },
  { id: 7, name: "Gary the Snail", description: "SpongeBob's pet snail, who meows like a cat.", image: garyImage },
  { id: 8, name: "Mrs. Puff", description: "SpongeBob's driving instructor.", image: mrsPuffImage },
  { id: 9, name: "Pearl Krabs", description: "Mr. Krabs' teenage daughter, a whale.", image: pearlImage },
  { id: 10, name: "Larry the Lobster", description: "A muscle-bound lobster who loves lifting weights.", image: larryImage }
];


function Portrait({ character, onClick }) {
  return (
    <div className="portrait" onClick={() => onClick(character)}>
      <img src={character.image} alt={character.name} className="portrait-image" />
    </div>
  );
}

function Dashboard() {
  const [characters, setCharacters] = useState(initialCharacters);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "", image: "" });


  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setFormData({
      name: character.name,
      description: character.description,
      image: character.image
    });
  };

  
  const deleteCharacter = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    setSelectedCharacter(null);
  };

  
  const editCharacter = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    setCharacters(characters.map((char) =>
      char.id === selectedCharacter.id ? { ...char, ...formData } : char
    ));
    setIsEditing(false);
  };

  return (
    <div className="dashboard">
      <div className="portraits">
        {characters.map((character) => (
          <Portrait
            key={character.id}
            character={character}
            onClick={handleSelectCharacter}
          />
        ))}
      </div>

      
      {selectedCharacter && (
        <div className="character-details">
          {!isEditing ? (
            <div className="character-card">
              <h2>{selectedCharacter.name}</h2>
              <p>{selectedCharacter.description}</p>
              <img src={selectedCharacter.image} alt={selectedCharacter.name} className="character-image" />
              <button onClick={editCharacter}>Edit</button>
              <button onClick={() => deleteCharacter(selectedCharacter.id)}>Delete</button>
            </div>
          ) : (
            <div className="edit-form">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
              />
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description"
              />
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="Image URL"
              />
              <button onClick={saveChanges}>Save Changes</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
