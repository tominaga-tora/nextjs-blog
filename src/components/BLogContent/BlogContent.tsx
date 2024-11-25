import React from 'react'
import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow'
import remarkGfm from 'remark-gfm'

import type { NotionPostInfo } from '@/shared/types/types'

import { BackButton } from '../BackButton'

type Props = {
  markdown: string
  pageInfo: NotionPostInfo
}

export function BlogContent({ markdown, pageInfo }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-2 pb-8">
      <BackButton />
      <article>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-4 text-center">
          {pageInfo.title}
        </h1>
        <div className="flex justify-between items-center text-gray-500 mb-8">
          <p>{pageInfo.date}</p>
          <p>{pageInfo.author}</p>
        </div>
        <div className="prose prose-lg mx-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-semibold mt-4 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-medium mt-2 mb-2">{children}</h3>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
              ),
              li: ({ children }) => <li className="mb-2">{children}</li>,
              pre: ({ children }) => (
                <pre className="bg-gray-100 rounded-md p-4 overflow-x-auto">
                  {children}
                </pre>
              ),
              code: ({
                node,
                inline,
                className,
                children,
                ...props
              }: React.HTMLAttributes<HTMLElement> & {
                inline?: boolean
                node?: any
              }) => {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow as any}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md my-4"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-gray-100 rounded-md px-1 py-0.5"
                    {...props}
                  >
                    {children}
                  </code>
                )
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

const MarkdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children, start }) => (
    <ol
      className="list-decimal pl-6 mb-4"
      style={{ listStyleType: 'decimal' }} // 1.2.3.が1.1.1.になるので明示的に番号スタイルを指定
      start={start as number}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="mb-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
      {children}
    </blockquote>
  ),
  code: ({
    node,
    inline,
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { inline?: boolean; node?: any }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={tomorrow as any}
        language={match[1]}
        PreTag="div"
        className="rounded-md my-4"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-gray-100 rounded-md px-1 py-0.5" {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="bg-gray-100 rounded-md p-4 overflow-x-auto">{children}</pre>
  )
}
