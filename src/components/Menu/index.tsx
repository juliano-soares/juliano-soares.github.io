import { Container } from './styles';
import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <Container>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            <NavLink to="/portifolio" activeClassName="active">Portifólio</NavLink>
            <NavLink to="/contato" activeClassName="active">Contato</NavLink>
        </Container>
    )
}