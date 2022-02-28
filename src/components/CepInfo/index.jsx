import React, { useContext } from 'react';

import { apiContext } from '../../contexts/ApiContext';

import { CepinfocContainer } from './style';

export const InfoCep = () => {
    const { data } = useContext(apiContext)
    console.log(data);
    return (
        <CepinfocContainer>
            {data ?
                <>
                    <h3>Rua: <strong>{data.logradouro || ''}</strong></h3>
                    <h3>Complemento: <strong>{data.complemento || ''}</strong> </h3>
                    <h3>Bairro: <strong>{data.bairro || ''}</strong> </h3>
                    <h3>Cidade: <strong>{data.localidade || ''}</strong> </h3>
                    <h3>UF: <strong>{data.uf || ''}</strong></h3>
                </>
                :
                <>
                    <h3>Rua: </h3>
                    <h3>Complemento:</h3>
                    <h3>Bairro: </h3>
                    <h3>Cidade: </h3>
                    <h3>UF: </h3>
                </>
            }
        </CepinfocContainer>
    )
};
