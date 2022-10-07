import { App } from "../../App";
import { useState, useEffect } from 'react'
import Markdown from "markdown-to-jsx";

import {
    Container,
    Content,
} from './styles';
import { Code } from "../../components/Code";


export function Wiki() {
    const [postContent, setPostContent] = useState("")

    useEffect(() => {
        import("../markdown/example.md").then(res => {
            fetch(res.default).then(response => response.text())
                .then(response => setPostContent(response))
                .catch(err => console.log(err))
        })
    }, [])
    return (
        <App>
            <Container>
                <Content>
                    <Markdown
                        options={{
                            overrides: {
                                Code: {
                                    component: Code
                                }
                            }
                        }}
                    >
                        {postContent}
                    </Markdown>
                </Content>
            </Container>
        </App>
    )
}