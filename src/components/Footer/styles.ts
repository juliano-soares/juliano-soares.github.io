import styled from 'styled-components';

export const Container = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 42px;
    background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.dark_blue};
    text-align:right;

    .copyright {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        display: inline-block;
        color: ${props => props.theme.title === 'light' ? props.theme.colors.black : props.theme.colors.white};
        margin-bottom: 1em;
        margin-top: 1em;
        float: left;
        margin-left: 10px;
    }

    .link_footer {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        display: inline-block;
        color: ${props => props.theme.title === 'light' ? props.theme.colors.black : props.theme.colors.white};
        margin-bottom: 1em;
        margin-top: 1em;
        padding-left: 5px;
        margin-right: 10px;
        text-decoration: none;
    }
`;