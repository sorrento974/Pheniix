import PropTypes from 'prop-types'; // Import de PropTypes
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "../styles/Searchbar.css";

export const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  // Nous définissons une fonction handleChange qui est appelée à chaque fois que le contenu de 
  // l'entrée de la barre de recherche change. Elle met à jour l'état local input avec la nouvelle 
  // valeur et appelle ensuite la fonction fetchData pour récupérer les données en fonction de la nouvelle valeur.
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

// Définition de la validation des props
Searchbar.propTypes = {
  setResults: PropTypes.func.isRequired // Validation de type pour la prop setResults
};
