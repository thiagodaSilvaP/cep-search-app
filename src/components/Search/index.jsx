import React, { useState, useContext } from "react";
import {AiOutlineSearch} from 'react-icons/ai';

import { apiContext } from '../../contexts/ApiContext';
import { api } from '../../services/api';

import {SearchCepContainer} from './style';

export const SearchCep = () => {
    const [inputValue, setInputValue] = useState(undefined);
    const {data, setData} = useContext(apiContext)
    const [test, setTest] = useState({});

    const handleClickButton = () => {
        const resppnse = api(inputValue)
            .then(res => setData(res))
    };

    const handleChangeInput = (event) => setInputValue(event.target.value)
    return (
        <SearchCepContainer>
            <input
                type="text"
                name="search"
                id="search"
                value={inputValue || ""}
                onChange={handleChangeInput}
            />
            <button onClick={handleClickButton}><AiOutlineSearch/></button>
        </SearchCepContainer>
    );
};
