import {App} from "../../App";
import { Container,
    ContainerCard,
    ContainerCardImg,
    ContainerCardContent } from './styles';

const listPosts = [
    { id: "0", img: "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg", title: "Media Left", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
    { id: "1", img: "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg", title: "Media Left", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
    { id: "2", img: "https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg", title: "Media Left", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
];

export function Portifolio() {
    return (
        <App>
            <Container>
                {listPosts.map(({ id, img, title, subtitle }) => (
                    <li key={id}>
                        <ContainerCard>
                            <ContainerCardImg><img src={img} alt="Thumbnail do Post" /></ContainerCardImg>
                            <ContainerCardContent>
                                <h2>{title}</h2>
                                <h4>{subtitle}</h4>
                            </ContainerCardContent>
                        </ContainerCard>
                    </li>
                ))}
            </Container>
        </App>
    )
}