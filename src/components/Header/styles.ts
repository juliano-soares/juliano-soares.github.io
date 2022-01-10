import styled from 'styled-components';

export const Container = styled.header`
    background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.dark_blue};
    height: 200px;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 4rem 1rem 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;