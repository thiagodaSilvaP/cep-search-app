import { InfoCep } from '../../components/CepInfo';
import { SearchCep } from '../../components/Search';

import { CepContainer } from './style';

export const Cep = () => {
    return (
        <CepContainer>
            <div className="search-container">
                <h1>CEP Search</h1>
                <SearchCep />
            </div>
            <InfoCep />
        </CepContainer>
    )
};
