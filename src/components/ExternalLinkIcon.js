import React from 'react'

const ExternalLinkIcon = ({link, icon}) => {
  return (
    <a href={link} target="_gblank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon