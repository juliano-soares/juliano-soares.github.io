import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.dark_blue};;
    border: 2px solid ${props => props.theme.title === 'light' ? props.theme.colors.dark_blue : props.theme.colors.light_blue};;
    box-sizing: border-box;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 50px;

    .search_bnt {    
        display: flex;
        justify-content: center;
        align-items: center;
        
        margin: 15px;
        cursor: pointer;
        img {
            width: 20px;
        }
    }
    
    .search_input {
        outline: none;
        border: 0;
        background-color: transparent;
        width: 220px;
        height: 100%;
        padding: 10px;
        border-radius: 20px;
        color: ${props => props.theme.colors.white};
        font-size: 18px;
    }

    .search_input::placeholder {
        color: ${props => props.theme.colors.light_gray};
    }
`;
