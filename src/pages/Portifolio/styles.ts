import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    li {
        display: flex;
        padding: 1rem;
        cursor: pointer;
    }
    
    @media (min-width: 40rem) {
        li {
            width: 50%;
        }
    }
    
    @media (min-width: 56rem) {
        li {
            width: 33.3333%;
        }
    } 
`;

export const ContainerCard = styled.div`
    background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.dark_blue};
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerCardImg = styled.div`
    padding: 0.5rem;
    width: 50%;
    overflow: hidden;
    position: relative;
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border-radius: 20px;
    }
`;

export const ContainerCardContent = styled.div`
    padding: 40px 40px;
    width: 50%;
    h2 {
        margin-bottom: 10px;
    }
`;