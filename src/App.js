// import Home from './Pages/Home';
import { useEntryContext } from './util/context';

function App() {

  const { query, setQuery, mediaType, setMediaType, entry, error, loading } = useEntryContext();
  console.log(entry);
  return (
    <div>empty</div>
  )
}

export default App;
