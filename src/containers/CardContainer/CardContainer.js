import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from '../../components/Card/Card.js'

export class CardContainer extends Component {
  
  displayHouseCards = () => {
    const houseCards = this.props.houses.map(house => {
      return <Card house={house} />
    })
    return houseCards
  }

  render() {
    if(this.props.houses) {
      const houseCards = this.displayHouseCards()
      return (
        <section>
          {houseCards}
        </section>
      )
    } else if (this.props.isLoading === true) {
      return <div>Loading...</div>
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