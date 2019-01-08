import React from 'react'

export const Card = (props) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = props.house
  return (
    <article>
      <h3>{name}</h3>
    </article>
  )
}