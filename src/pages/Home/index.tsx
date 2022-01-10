import { App } from '../../App';
import { ContainerFirst, 
    ContainerTextFirst, 
    ContainerPeopleFirst, 
    ContainerSecond, 
    ContainerPeopleSecond, 
    ContainerTextSecond, 
    ButtonDownloadCV, 
    ContainerThrid, 
    ContainerFormation, 
    ContainerLanguages, 
    ContainerLanguage, 
    ContainerLanguageImage, 
    ContainerLanguageText, 
    ContainerFourth, 
    ContainerCarousel, 
    ContainerCarouselPrevSecond, 
    ContainerCarouselPrev, 
    ContainerCarouselPrimary, 
    ContainerCarouselNext, 
    ContainerCarouselNextSecond, 
    ContainerCarouselBtn, 
    ContainerCarouselBtnPrev, 
    ContainerCarouselBtnNext } from './styles';

import personal_picture_home_first from '../../assets/images/anonimo.png';
import personal_picture_home_second from '../../assets/images/anonimo1.png';

import {RiFacebookFill,RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiGithubFill} from 'react-icons/ri';

import icon_brazil from '../../assets/icons/brazil.png';
import icon_usa from '../../assets/icons/usa.png';

import carousel_primary from '../../assets/images/carousel_primary.jpeg';

import icon_carousel_prev_theme_dark from '../../assets/icons/arrow_left_theme_dark.png';
import icon_carousel_next_theme_dark from '../../assets/icons/arrow_right_theme_dark.png';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <App>
            <ContainerFirst>
                <ContainerTextFirst>
                    <h2>Bem-vindo</h2>
                    <h3>Eu sou um Desenvolvedor Web</h3>
                    <p>Meu objetivo é trabalhar com grandes profissionais para compartilhar experiências e aprender mais e mais, usando metodologias ágeis em projetos de desenvolvimento de software, onde as pesquisas são o foco para descobrir a melhor forma de atender as expectativas e experiências dos usuários.</p>
                    <ul>
                        <li><RiFacebookFill size={40} className="Icon"/> </li>
                        <li><RiLinkedinFill size={38} className="Icon"/></li>
                        <li><RiInstagramFill size={38} className="Icon"/></li>
                        <li><RiGithubFill size={50} className="Icon"/></li>
                        <li><RiTwitterFill size={38} className="Icon"/></li>
                    </ul>
                </ContainerTextFirst>
                <ContainerPeopleFirst>
                    <img src={personal_picture_home_first} alt="Um foto do dono do Site" />
                </ContainerPeopleFirst>
            </ContainerFirst>
            <ContainerSecond>
                <ContainerPeopleSecond>
                    <img src={personal_picture_home_second} alt="Um foto do dono do Site" />
                </ContainerPeopleSecond>
                <ContainerTextSecond>
                    <h3>Olá, eu sou Juliano Soares</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li><p>Nome: Juliano Leonardo Soares</p></li>
                        <li><p>Idade: 25</p></li>
                        <li><p>Endereço: Santa Maria, RS, Brasil</p></li>
                        <li><p>Celular: (55) 99956-2477</p></li>
                        <li><p>Email: julianoleonardosoares@hotmail.com</p></li>
                    </ul>
                    <ButtonDownloadCV>
                        <Link to="/" style={{textDecoration: 'none',color: 'white'}}>Baixar CV</Link>
                    </ButtonDownloadCV>
                </ContainerTextSecond>
            </ContainerSecond>
            <ContainerThrid>
                <ContainerFormation>
                    <h1>FORMAÇÂO</h1>
                    <ul>
                        <li>
                            <p>Ensino Médio:<br /><br />2013 - 2015<br />Colégio Estadual de Ensino Médio Cilon Rosa</p>
                        </li>
                        <li><p>Faculdade:<br /><br />2017 - Atual<br />Bacharel em Ciência da Computação - Universidade Federal de Santa Maria</p></li>
                    </ul>
                </ContainerFormation>
                <ContainerLanguages>
                    <h1>IDIOMAS</h1>
                    <ul>
                        <li>
                            <ContainerLanguage>
                                <ContainerLanguageImage><img src={icon_brazil} alt="Bandeira do Brasil" /></ContainerLanguageImage>
                                <ContainerLanguageText><h3>Português</h3><br /><h4>Nativo</h4></ContainerLanguageText>
                            </ContainerLanguage>
                        </li>
                        <li>
                            <ContainerLanguage>
                                <ContainerLanguageImage><img src={icon_usa} alt="Bandeira do Estados Unidos" /></ContainerLanguageImage>
                                <ContainerLanguageText><h3>Inglês</h3><br /><h4>Básico</h4></ContainerLanguageText>
                            </ContainerLanguage>
                        </li>
                    </ul>
                </ContainerLanguages>
            </ContainerThrid>
            <ContainerFourth>
                <ContainerCarousel>
                    <h1>CERTIFICAÇÕES</h1>
                    <ContainerCarouselPrevSecond><img src={carousel_primary} alt="Imagem do Curriculo" /></ContainerCarouselPrevSecond>
                    <ContainerCarouselPrev><img src={carousel_primary} alt="Imagem do Curriculo" /></ContainerCarouselPrev>
                    <ContainerCarouselPrimary><img src={carousel_primary} alt="Imagem do Curriculo" /></ContainerCarouselPrimary>
                    <ContainerCarouselNext><img src={carousel_primary} alt="Imagem do Curriculo" /></ContainerCarouselNext>
                    <ContainerCarouselNextSecond><img src={carousel_primary} alt="Imagem do Curriculo" /></ContainerCarouselNextSecond>
                    <ContainerCarouselBtn>
                        <ContainerCarouselBtnPrev><img id="prev" src={icon_carousel_prev_theme_dark} alt="Botão Direito" /></ContainerCarouselBtnPrev>
                        <ContainerCarouselBtnNext><img id="next" src={icon_carousel_next_theme_dark} alt="Botão Esquerdo" /></ContainerCarouselBtnNext>
                    </ContainerCarouselBtn>
                </ContainerCarousel>
            </ContainerFourth>
        </App>
    )
}