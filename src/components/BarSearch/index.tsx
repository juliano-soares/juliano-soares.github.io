import { Container } from './styles';

import lupaImg from '../../assets/icons/lupa.png';

export function BarSearch() {
    return (
        <Container>
            <button className="search_bnt">
                <img src={lupaImg} alt="Imagem de pesquisa" />
            </button>
            <input className="search_input" type="text" placeholder="Pesquisar" />
        </Container>
    )
}