import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { BarSearch } from '../BarSearch';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <Logo />
                <Menu />
                <BarSearch />
            </Content>    
        </Container>
    )
}