import React from 'react'

interface Props {
  children: React.ReactNode
}

const DefalutLayout = (props: Props) => {
  return (
    <>{props.children}</>
  )
}

export default DefalutLayout