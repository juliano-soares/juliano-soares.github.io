import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <Logo />
                <Menu />
            </Content>    
        </Container>
    )
}