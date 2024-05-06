import PropTypes from 'prop-types'; // Import de PropTypes

import "../styles/SearchResultsList.css";
import { SearchResult } from "../components/SearchResult.jsx";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

// Définition de la validation des props
SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired // Validation de type pour la prop results
};