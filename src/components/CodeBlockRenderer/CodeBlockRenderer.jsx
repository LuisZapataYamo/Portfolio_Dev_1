import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlockRenderer = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  const value = String(children).replace(/\n$/, '')

  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={value}
      style={coldarkDark}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code {...props} className="code-inline">
      {children}
    </code>
  )
}

export default CodeBlockRenderer

