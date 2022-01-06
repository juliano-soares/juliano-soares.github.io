import { Container } from './styles';

export function Menu() {
    return (
        <Container>
            <a href="/" className="active">Home</a>
            <a href="/">Blog</a>
            <a href="/">Portifólio</a>
            <a href="/">Contato</a>
        </Container>
    )
}