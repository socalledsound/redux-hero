import React, { Component } from 'react'
import { connect } from 'react-redux'
import { move, takeDamage, drinkPotion, gainXp, levelUp } from './redux/actions'
class App extends Component {
  state = {  }

  componentDidMount(){
    const { move, takeDamage, drinkPotion, gainXp, levelUp } = this.props
    
    move(1, 0)
    move(0, 1)
    takeDamage(13)
    drinkPotion()
    gainXp(100)
    levelUp()

  }


  render() { 
    const { xp, level, position, stats, inventory } = this.props
    
    return ( 
      <div>
      <div>
        <p>xp : {xp} </p>
        <p>level: {level}</p>
        <p>position: x: {position.x} y : {position.y}</p>
        <p>stats : health {stats.health}, maxHealth: {stats.maxHealth}</p>
        <p>inventory : potions: {inventory.potions}</p>
      </div>
      <div>
        <button onClick>move left</button>
        <button onClick>move right</button>
      </div>
      </div>
     );
  }
}
 
const mapStateToProps = state => ({
  xp: state.xp,
  level: state.level,
  position: state.position,
  stats: state.stats,
  inventory: state.inventory,
})

const mapDispatchToProps = dispatch => ({
  move: (x, y) => dispatch(move(x,y)),
  takeDamage : (damage) => dispatch(takeDamage(damage)),
  drinkPotion : (damage) => dispatch(drinkPotion()),
  gainXp : (incrementXP) => dispatch(gainXp(incrementXP)),
  levelUp : (damage) => dispatch(levelUp()),
})




export default connect(mapStateToProps, mapDispatchToProps)(App);