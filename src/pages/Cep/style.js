import styled from 'styled-components';

export const CepContainer = styled.div`
    width: 80%;
    min-height: 60%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: #555;
    border-radius: 10px;

    .search-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        
        h1 {
            text-align: center;
            margin-bottom: 1rem;
            color: #fff;
            letter-spacing: 2px;
        }
    }
`