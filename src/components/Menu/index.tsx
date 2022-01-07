import { Container } from './styles';

export function Menu() {
    return (
        <Container>
            <a href="/" className="active">Home</a>
            <a href="/blog">Blog</a>
            <a href="/portifolio">Portifólio</a>
            <a href="/contato">Contato</a>
        </Container>
    )
}