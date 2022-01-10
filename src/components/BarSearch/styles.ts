import styled from 'styled-components';

export const Container = styled.div`
    background: #07101C;
    border: 2px solid ${props => props.theme.colors.black};
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
