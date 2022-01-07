import { Container } from './styles';

const logoImg = require('../../assets/images/logo.png'); 

export function Logo() {
    return (
        <Container>
            <img src={logoImg} alt="logo juliano soares" />        
        </Container>
    )
}