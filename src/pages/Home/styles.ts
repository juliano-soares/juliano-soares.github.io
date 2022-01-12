import styled from 'styled-components';

export const ContainerFirst = styled.div`
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerTextFirst = styled.div`
    width: 70%;
    h2 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    h3 {
        margin-bottom: 20px;
    }
    ul {
        margin-top: 8rem;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        content: "";
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.light_blue};
        border-radius: 50%;
        margin-right: 10px;
    }

    .Icon {
        color: ${props => props.theme.title === 'light' ? 'white' : 'black'};
    }
`;

export const ContainerPeopleFirst = styled.div`
    width: 30%;

    img {
        width: 120%;
    }
`;

export const ContainerSecond = styled.div`
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerPeopleSecond = styled.div`
    width: 50%;

    img {
        width: 100%;
    }
`;

export const ContainerTextSecond = styled.div`
    width: 50%;
    h3 {
        margin-bottom: 20px;
    }
    ul {
        margin-top: 20px;
    }
    li {
        margin-bottom: 20px;
    }
`;

export const ButtonDownloadCV = styled.div`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.light_blue};
    border-color: ${props => props.theme.colors.light_blue};
`;

export const ContainerThrid = styled.div`
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`;

const iconnotes = require('../../assets/icons/notes.png');

export const ContainerFormation = styled.div`
    width: 50%;
    
    h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: ${props => props.theme.colors.light_blue};
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        &:before{
            content: "";
            display: inline-block;
            width: 8px;
            background: ${props => props.theme.colors.light_blue};
            position: absolute;
            top: -15px;
            height: calc(100% - 100px);
        }
        li {
          position: relative;
          padding-left: 55px;
          margin-bottom: 55px;
          &:before{
            content: url(${iconnotes});
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: ${props => props.theme.colors.light_blue};
            position: absolute;
            left: -17px;
            top: 5px;
            border-radius: 50%;
          }
        }
        p {
            background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.light_blue};
            padding: 20px;
        }
    }
`;

const iconlanguages = require('../../assets/icons/languages.png');

export const ContainerLanguages = styled.div`
    width: 50%;
    padding-left: 50px;
    
    h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: ${props => props.theme.colors.light_blue};
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;

        &:before{
            content: "";
            width: 8px;
            background: ${props => props.theme.colors.light_blue};
            position: absolute;
            top: -15px;
            height: calc(100% - 70px );
        }
        li {
          padding-left: 55px;
          margin-bottom: 55px;
          &:before{
            content: url(${iconlanguages});
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: ${props => props.theme.colors.light_blue};
            position: absolute;
            left: -17px;
            border-radius: 50%;
          }
        }
    }
`;

export const ContainerLanguage = styled.div`
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    background: ${props => props.theme.title === 'light' ? props.theme.colors.light_blue : props.theme.colors.light_blue};;
    padding: 20px;
`;

export const ContainerLanguageImage = styled.div`
    width: 30%;
`;

export const ContainerLanguageText = styled.div`
    width: 50%;
`;

export const ContainerFourth = styled.div`
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 60%;
`;

export const ContainerCarousel = styled.div`
    position: relative;
    height: 400px;
    overflow: hidden;

    h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: ${props => props.theme.colors.light_blue};
    }
`;

export const ContainerCarouselPrevSecond = styled.div`
    position: absolute;
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    z-index: 4;
    left: 15%;
    transform: translateY(50%) translateX(-50%);
    opacity: .7;
    img {
        width: 200px;
        transition: width 1s;
        border-radius: 16px;
    }
`;

export const ContainerCarouselPrev = styled.div`
    position: absolute;
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    z-index: 5;
    left: 30%;
    transform: translateY(50px) translateX(-50%);
    img {
        width: 300px;
        transition: width 1s;
        border-radius: 25px;
    }
`;

export const ContainerCarouselPrimary = styled.div`
    position: absolute;
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    z-index: 10;
    left: 50%;
    transform: translateY(0px) translateX(-50%);
    img {
        width: 400px;
        transition: width 1s;
        border-radius: 33px;
    }
`;

export const ContainerCarouselNext = styled.div`
    position: absolute;
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    z-index: 5;
    left: 70%;
    transform: translateY(50px) translateX(-50%);
    img {
        width: 300px;
        transition: width 1s;
        border-radius: 25px;
    }
`;

export const ContainerCarouselNextSecond = styled.div`
    position: absolute;
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    z-index: 4;
    left: 85%;
    transform: translateY(50%) translateX(-50%);
    opacity: .7;
    img {
        width: 200px;
        transition: width 1s;
        border-radius: 16px;
    }
`;

export const ContainerCarouselBtn = styled.div`
    margin-top: 100px;
`;

export const ContainerCarouselBtnPrev = styled.div`
    float: left;
`;

export const ContainerCarouselBtnNext = styled.div`
    float: right;
`;

export const ContainerFifth = styled.div`
    margin-bottom: 8rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerIllustration = styled.div`
    width: 50%;
    img {
        width: 100%;
    }
`;

export const ContainerSkills = styled.div`
    width: 50%;
    margin-top: 130px;
    h3 {
        margin-bottom: 20px;
    }
    ul {
        margin-top: 20px;
    }
    li {
        margin-top: 20px;
        display: flex;
        align-items: center;
    }
`;

export const ContainerSkillsDots = styled.div`
    position: absolute;
    left: 55%;
`;

export const ContainerSkillsDot = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
`;

export const ContainerSkillsDotChecked = styled.div`
    height: 25px;
    width: 25px;
    background-color: #19A69F;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
`;