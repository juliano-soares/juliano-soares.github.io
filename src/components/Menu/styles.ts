import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        padding: 0 2rem;

        font-family: Roboto;
        font-weight: bold;
        font-size: 23px;
    }

    a.active {
        color: ${props => props.theme.title === 'light' ? props.theme.colors.dark_blue : props.theme.colors.light_blue};
    }
`;