import { Container } from './styles';

export function Footer() {
    return (
        <Container>
            <p className="copyright">Desenvolvido por Juliano Soares.</p>
            <a className="link_footer" href="/">GitHub</a>
            <a className="link_footer" href="/">Linkedin</a>
        </Container>
    )
}