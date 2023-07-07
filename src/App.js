import './App.css';
import Movie from './components/Movie';
import NoteForm from "./components/NoteForm";

const movie = {
  name: "Forrest Gump",
  runtime: 142,
  year: 1994,
  plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  genres: ["Drama", "Comedy"],
  poster:
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  imdb: "https://www.imdb.com/title/tt0109830/",
};

function App() {
  return (
    <div className="App">
      <Movie { ...movie }/>
      {/* <NoteForm /> */}
    </div>
  );
}

export default App;
