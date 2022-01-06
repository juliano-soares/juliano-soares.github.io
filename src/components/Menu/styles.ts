import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    a {
        color: var(--white);
        text-decoration: none;
        padding: 0 2rem;

        font-family: Roboto;
        font-weight: bold;
        font-size: 25px;
    }

    a.active {
        color: var(--light-blue);
    }
`;