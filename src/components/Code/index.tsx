import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Container } from "./style"

import { MdContentPaste, MdContentCopy } from 'react-icons/md';

import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python'
SyntaxHighlighter.registerLanguage('python', python)

export function Code({ children, language }: any) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 1000)
        return () => clearInterval();
    }, [copied])

    return (
        <Container>
            <div className="code">
                <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                    <button className="icon copy-icon">
                        {copied ?
                            <MdContentPaste size={20} className="Icon" />
                            :
                            <MdContentCopy size={20} className="Icon" />
                        }
                    </button>
                </CopyToClipboard>
                <SyntaxHighlighter
                    language="python"
                    style={dracula}
                >
                    {children}
                </SyntaxHighlighter>
            </div>
        </Container>
    )
}
