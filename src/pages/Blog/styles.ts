import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerFirst = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    li {
        display: flex;
        padding-left: 1rem;
        padding-right: 1rem;
        cursor: pointer;
        transition: 0.4s;
    }

    li:hover {
        transform: scale(0.9, 0.9);
        box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
          -5px -5px 30px 15px rgba(0,0,0,0.22);
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
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-bottom: 5px solid #08FDD8;
    p {
        color: #08FDD8;
        padding: 1rem;
    }
`;

export const ContainerCardImg = styled.div`
    padding: 0.5rem;
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border-radius: 20px;
    }
`;

export const ContainerCardContent = styled.div`
    padding: 1rem;
    h2 {
        margin-bottom: 10px;
    }
`;

export const ContainerSecond = styled.div`
    width: 20%;
    background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.dark_blue};
    border-radius: 20px;
    p {
        margin-bottom: 5px;
        margin-left: 15px;
    }
    div:first-child {
        margin-top: 15px !important;
    }
    p:last-child {
        margin-bottom: 25px;
    }
`;

export const ContainerTextCenterMenu = styled.div`
    text-align: center;
    margin-bottom: 15px;
    margin-top: 25px;
`;