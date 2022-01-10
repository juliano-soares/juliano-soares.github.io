import styled from 'styled-components';

export const Container_First = styled.div`
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`;

export const Container_Text_First = styled.div`
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
        margin-right: 10px;
    }
`;

export const Container_People_First = styled.div`
    width: 30%;
`;

export const Container_Second = styled.div`
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
`;

export const Container_People_Second = styled.div`
    width: 50%;
`;

export const Container_Text_Second = styled.div`
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

export const Button_Download_CV = styled.div`
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
    color: #fff;
    background-color: var(--light-blue);
    border-color: var(--light-blue);
`;

export const Container_Thrid = styled.div`
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
`;

const icon_notes = require('../../assets/icons/notes.png');

export const Container_Formation = styled.div`
    width: 50%;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        &:before{
            content: "";
            display: inline-block;
            width: 8px;
            background: var(--light-blue);
            position: absolute;
            top: -15px;
            height: calc(100% - 70px );
        }
        li {
          position: relative;
          padding-left: 55px;
          margin-bottom: 55px;
          &:before{
            content: url(${icon_notes});
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: var(--light-blue);
            position: absolute;
            left: -17px;
            top: 5px;
            border-radius: 50%;
          }
        }
        p {
            background: var(--dark-blue);
            padding: 20px;
        }
    }
`;

const icon_languages = require('../../assets/icons/languages.png');

export const Container_Languages = styled.div`
    width: 50%;
    padding-left: 50px;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        &:before{
            content: "";
            display: inline-block;
            width: 8px;
            background: var(--light-blue);
            position: absolute;
            top: -15px;
            height: calc(100% - 70px );
        }
        li {
          position: relative;
          padding-left: 55px;
          margin-bottom: 55px;
          &:before{
            content: url(${icon_languages});
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: var(--light-blue);
            position: absolute;
            left: -17px;
            top: 5px;
            border-radius: 50%;
          }
        }
    }
`;

export const Container_Language = styled.div`
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    background: var(--dark-blue);
    padding: 20px;
`;

export const Container_Language_Image = styled.div`
    width: 30%;
`;

export const Container_Language_Text = styled.div`
    width: 50%;
`;

export const Container_Fourth = styled.div`
    margin-top: 5rem;
    margin-bottom: 3rem;
    margin-right: auto!important;
    margin-left: auto!important;
    flex: 0 0 auto;
    width: 60%;
`;

export const Container_Carousel = styled.div`
    position: relative;
    height: 400px;
    overflow: hidden;
`;

export const Container_Carousel_Prev_Second = styled.div`
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

export const Container_Carousel_Prev = styled.div`
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

export const Container_Carousel_Primary = styled.div`
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

export const Container_Carousel_Next = styled.div`
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

export const Container_Carousel_Next_Second = styled.div`
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

export const Container_Carousel_Btn = styled.div`
    margin-top: 100px;
`;

export const Container_Carousel_Btn_Prev = styled.div`
    float: left;
`;

export const Container_Carousel_Btn_Next = styled.div`
    float: right;
`;