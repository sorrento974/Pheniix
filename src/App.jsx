import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Searchbar} from "./components/Searchbar";
import { SearchResultsList } from "./components/SearchResultsList";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <div className="search-bar-container">
        <Searchbar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <main className="main">
        <h1>Accueil</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          rem qui labore voluptatibus id quae aliquam laboriosam officiis
          deserunt illo sit quibusdam culpa voluptatem animi asperiores maxime
          similique. Ut, corporis!
        </p>
       
      </main> 
      <Footer />
    </div>
  );
}

export default App;
