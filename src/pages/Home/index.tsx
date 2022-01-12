import { App } from '../../App';
import { Container_First, Container_Text_First, Container_People_First, Container_Second, Container_People_Second, Container_Text_Second, Button_Download_CV, Container_Thrid, Container_Formation, Container_Languages, Container_Language, Container_Language_Image, Container_Language_Text, Container_Fourth, Container_Carousel, Container_Carousel_Prev_Second, Container_Carousel_Prev, Container_Carousel_Primary, Container_Carousel_Next, Container_Carousel_Next_Second, Container_Carousel_Btn, Container_Carousel_Btn_Prev, Container_Carousel_Btn_Next } from './styles';
import { Carousel } from '@spoqa/react-carousel';
import '@spoqa/react-carousel/carousel.css';

const personal_picture_home_first = require('../../assets/images/anonimo.png');
const personal_picture_home_second = require('../../assets/images/anonimo1.png');

const icon_facebook_theme_dark = require('../../assets/icons/facebook_theme_dark.png');
const icon_twitter_theme_dark = require('../../assets/icons/twitter_theme_dark.png');
const icon_instagram_theme_dark = require('../../assets/icons/instagram_theme_dark.png');
const icon_github_theme_dark = require('../../assets/icons/github_theme_dark.png');
const icon_linkedin_theme_dark = require('../../assets/icons/linkedin_theme_dark.png');

const icon_brazil = require('../../assets/icons/brazil.png');
const icon_usa = require('../../assets/icons/usa.png');

const carousel_primary = require('../../assets/images/carousel_primary.jpeg');

const icon_carousel_prev_theme_dark = require('../../assets/icons/arrow_left_theme_dark.png');
const icon_carousel_next_theme_dark = require('../../assets/icons/arrow_right_theme_dark.png');

export function Home() {
    return (
        <App>
            <Container_First>
                <Container_Text_First>
                    <h2>Bem-vindo</h2>
                    <h3>Eu sou um Desenvolvedor Web</h3>
                    <p>Meu objetivo é trabalhar com grandes profissionais para compartilhar experiências e aprender mais e mais, usando metodologias ágeis em projetos de desenvolvimento de software, onde as pesquisas são o foco para descobrir a melhor forma de atender as expectativas e experiências dos usuários.</p>
                    <ul>
                        <li><img src={icon_facebook_theme_dark} alt="icone do Facebook" /></li>
                        <li><img src={icon_twitter_theme_dark} alt="icone do Twitter" /></li>
                        <li><img src={icon_instagram_theme_dark} alt="icone do Instagram" /></li>
                        <li><img src={icon_github_theme_dark} alt="icone do GitHub" /></li>
                        <li><img src={icon_linkedin_theme_dark} alt="icone do Linkedin" /></li>
                    </ul>
                </Container_Text_First>
                <Container_People_First>
                    <img src={personal_picture_home_first} alt="Um foto do dono do Site" />
                </Container_People_First>
            </Container_First>
            <Container_Second>
                <Container_People_Second>
                    <img src={personal_picture_home_second} alt="Um foto do dono do Site" />
                </Container_People_Second>
                <Container_Text_Second>
                    <h3>Olá, eu sou Juliano Soares</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li><p>Nome: Juliano Leonardo Soares</p></li>
                        <li><p>Idade: 25</p></li>
                        <li><p>Endereço: Santa Maria, RS, Brasil</p></li>
                        <li><p>Celular: (55) 99956-2477</p></li>
                        <li><p>Email: julianoleonardosoares@hotmail.com</p></li>
                    </ul>
                    <Button_Download_CV>
                        <a>Baixar CV</a>
                    </Button_Download_CV>
                </Container_Text_Second>
            </Container_Second>
            <Container_Thrid>
                <Container_Formation>
                <ul>
                    <li><p>Ensino Médio:<br /><br />2013 - 2015<br />Colégio Estadual de Ensino Médio Cilon Rosa</p></li>
                    <li><p>Faculdade:<br /><br />2017 - Atual<br />Bacharel em Ciência da Computação - Universidade Federal de Santa Maria</p></li>
                </ul>
                </Container_Formation>
                <Container_Languages>
                <ul>
                    <li>
                        <Container_Language>
                            <Container_Language_Image><img src={icon_brazil} alt="Bandeira do Brasil" /></Container_Language_Image>
                            <Container_Language_Text><h3>Português</h3><br /><h4>Nativo</h4></Container_Language_Text>
                        </Container_Language>
                    </li>
                    <li>
                        <Container_Language>
                            <Container_Language_Image><img src={icon_usa} alt="Bandeira do Estados Unidos" /></Container_Language_Image>
                            <Container_Language_Text><h3>Inglês</h3><br /><h4>Básico</h4></Container_Language_Text>
                        </Container_Language>
                    </li>
                </ul>
                </Container_Languages>
            </Container_Thrid>
            <Container_Fourth>
                <Container_Carousel>
                    <Container_Carousel_Prev_Second><img src={carousel_primary} alt="Imagem do Curriculo" /></Container_Carousel_Prev_Second>
                    <Container_Carousel_Prev><img src={carousel_primary} alt="Imagem do Curriculo" /></Container_Carousel_Prev>
                    <Container_Carousel_Primary><img src={carousel_primary} alt="Imagem do Curriculo" /></Container_Carousel_Primary>
                    <Container_Carousel_Next><img src={carousel_primary} alt="Imagem do Curriculo" /></Container_Carousel_Next>
                    <Container_Carousel_Next_Second><img src={carousel_primary} alt="Imagem do Curriculo" /></Container_Carousel_Next_Second>
                    <Container_Carousel_Btn>
                        <Container_Carousel_Btn_Prev><img id="prev" src={icon_carousel_prev_theme_dark} alt="Botão Direito" /></Container_Carousel_Btn_Prev>
                        <Container_Carousel_Btn_Next><img id="next" src={icon_carousel_next_theme_dark} alt="Botão Esquerdo" /></Container_Carousel_Btn_Next>
                    </Container_Carousel_Btn>
                </Container_Carousel>
            </Container_Fourth>
        </App>
    )
}