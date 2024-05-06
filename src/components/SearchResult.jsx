import PropTypes from 'prop-types'; // Import de PropTypes
import "../styles/SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

// Définition de la validation des props
SearchResult.propTypes = {
  result: PropTypes.string.isRequired // Validation de type pour la prop result
};