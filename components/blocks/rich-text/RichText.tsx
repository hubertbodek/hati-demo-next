import React from 'react'
import ReactMarkdown from 'react-markdown'

export type RichTextProps = {
  description: string
  narrow?: boolean
}

const RichText = ({ description, narrow = false }: RichTextProps) => {
  return (
    <div
      className={`markdown px-4 mx-auto my-12 lg:my-16 ${
        narrow ? 'max-w-3xl' : 'container--limited'
      }`}
    >
      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  )
}

export default RichText
