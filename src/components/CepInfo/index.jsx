import React, { useContext } from 'react';

import { apiContext } from '../../contexts/ApiContext';

export const InfoCep = () => {
    const { data } = useContext(apiContext)
    console.log(data);
    return (
        <div className="cep-info-container">
            {data && (
                <>
                    <h1 className="cep-info-cep">CEP: {data.cep || ''}</h1>
                    <h3 className="cep-info-street">Rua: {data.logradouro || ''}</h3>
                    <h3 className="cep-info-complement">{data.complemento || ''}</h3>
                    <h3 className="cep-info-district">{data.bairro || ''}</h3>
                    <h3 className="cep-info-city">{data.localidade || ''}</h3>
                    <h3 className="cep-info-uf">{data.uf || ''}</h3>
                </>
            )}
        </div>
    )
};
