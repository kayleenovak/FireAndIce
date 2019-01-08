import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from '../../components/Card/Card.js'
import './CardContainer.css'

export class CardContainer extends Component {
  
  displayHouseCards = () => {
    const houseCards = this.props.houses.map(house => {
      return <Card house={house} />
    })
    return houseCards
  }

  render() {
    if(this.props.houses.length) {
      const houseCards = this.displayHouseCards()
      return (
        <section className='card-container'>
          {houseCards}
        </section>
      )
    } else if (this.props.isLoading === true) {
      return <img src='./wolf.gif' className='wolf-img' />
    } else {
      return <div>Error</div>
    }
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
})

export default connect(mapStateToProps)(CardContainer)