import { App } from "../../App";
import { Container,
        ContainerFirst,
        ContainerCard,
        ContainerCardImg,
        ContainerCardContent,
        ContainerSecond,
        ContainerTextCenterMenu } from './styles';

const listPosts = [
    { id: "0", img: "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg", title: "Criando o seu site de Portifólio somente com HTML & CSS", subtitle: "Faça seu site de forma rápida e simples com essas incriveis dicas.", category: "HTML & CSS" },
    { id: "1", img: "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg", title: "Criando o seu site de Portifólio somente com HTML & CSS", subtitle: "Faça seu site de forma rápida e simples com essas incriveis dicas.", category: "HTML & CSS" },
    { id: "2", img: "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg", title: "Criando o seu site de Portifólio somente com HTML & CSS", subtitle: "Faça seu site de forma rápida e simples com essas incriveis dicas.", category: "HTML & CSS" },
];

export function Blog() {
    return (
        <App>
            <Container>
                <ContainerFirst>
                {listPosts.map(({ id, img, title, subtitle, category }) => (
                    <li key={id}>
                        <ContainerCard>
                            <ContainerCardImg><img src={img} alt="Thumbnail do Post" /></ContainerCardImg>
                            <ContainerCardContent>
                                <h2>{title}</h2>
                                <h4>{subtitle}</h4>
                            </ContainerCardContent>
                            <p>{category}</p>
                        </ContainerCard>
                    </li>
                ))}
                </ContainerFirst>
                <ContainerSecond>
                    <ContainerTextCenterMenu><h3>Categorias</h3></ContainerTextCenterMenu>
                    <p>HTML & CSS (8)</p><p>Javascript (5)</p><p>React (9)</p><p>Typescript (4)</p><p>React Native (1)</p><p>Outros (2)</p>
                    <ContainerTextCenterMenu><h3>Tags</h3></ContainerTextCenterMenu>
                    <p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p><p>Abacaxi</p>
                </ContainerSecond>
            </Container>
        </App>
    )
}