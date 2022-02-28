import { InfoCep } from './components/CepInfo';
import { SearchCep } from './components/Search';
import { ApiProvider } from './contexts/ApiContext';

function App() {
  return (
    <ApiProvider>
      <div className="app">
        <h1>CEP Search</h1>
        <SearchCep />
        <InfoCep />
      </div>
    </ApiProvider>
  )
}

export default App
