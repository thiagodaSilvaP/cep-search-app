import {ApiProvider} from '../contexts/ApiContext';

import {Cep} from './Cep/index';

import {Main} from './style';

function App() {
  return (
    <ApiProvider>
      <Main>
        <Cep/>
      </Main>
    </ApiProvider>
  )
}

export default App
