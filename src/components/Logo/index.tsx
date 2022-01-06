import { Container } from './styles';

import logoImg from '../../assets/images/logo.png'; 

export function Logo() {
    return (
        <Container>
            <img src={logoImg} alt="logo juliano soares" />        
        </Container>
    )
}