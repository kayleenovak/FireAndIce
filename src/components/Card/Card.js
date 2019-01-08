import React from 'react'
import './Card.css'

export const Card = (props) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = props.house
  const allTitles = titles.map(title => {
    return <p>Title: {title}</p>
  })
  return (
    <article className='card'>
      <h2>{name}</h2>
      <h4>Founded: {founded}</h4>
      <p>Seats: {seats}</p>
      {allTitles}
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Words: {words}</p>
    </article>
  )
}