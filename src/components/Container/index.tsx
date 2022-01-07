import { Container } from './styles';

export function AppContainer({ children}: any) {
    return (
        <Container>
            {children}
        </Container>
    )
}