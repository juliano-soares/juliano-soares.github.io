import { Container } from './styles';
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <Container>
            <Link to="/" className="active">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/portifolio">Portifólio</Link>
            <Link to="/contato">Contato</Link>
        </Container>
    )
}