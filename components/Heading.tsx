import type { NextPage } from 'next'



const Heading: NextPage = ({text, tag}) => {
  const Tag = tag || 'h1';

  return (
    <Tag>{text}</Tag>
  )
}

export default Heading