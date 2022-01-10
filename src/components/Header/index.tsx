import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { BarSearch } from '../BarSearch';

import { Container, Content } from './styles';

import {FaSun, FaMoon} from 'react-icons/fa'

interface Props {
    toggleTheme(): void;
}

export function Header({toggleTheme} : Props) {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Content>
                <Logo />
                <Menu />
                <BarSearch />
                
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    offColor={colors.medium_gray}
                    onColor={colors.medium_gray}
                    checkedIcon={
                        <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "orange",
                            paddingRight: 2
                        }}
                        >
                          <FaMoon   style={{ color: "#90B6F2" }}/>
                        </div>
                    }
                    uncheckedIcon={
                        <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          fontSize: 15,
                          color: "orange",
                          paddingRight: 2
                        }}
                      >
                        <FaSun style={{ color: "#F5DD00" }}/>
                      </div>
                    }
                />
            </Content>    
        </Container>
    )
}