import styled from 'styled-components';

export const SearchCepContainer = styled.div`
    width: 80%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444;
    border-radius: 6px;
    overflow: hidden;

    input {
        flex: 1;
        height: 100%;
        padding: 10px;
        background-color: inherit;
        color: #fff;

        &:-webkit-autofill:focus {
            border: 0 none;
            outline: 0 none;
            box-shadow: 0 0 0 0 ;
        }
        
    }
    button {
        height: 100%;
        width: 4rem;
        background-color: inherit;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: larger;
        color: #fff
    }
`