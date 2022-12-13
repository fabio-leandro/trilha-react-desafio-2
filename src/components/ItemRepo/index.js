/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        <p>{repo.url}</p>
        <p>{repo.ssh_url}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a href="#"  rel="noreferrer" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
