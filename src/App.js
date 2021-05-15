import React, { Component } from 'react'
import { connect } from 'react-redux'
import { move, takeDamage, drinkPotion, gainXp, levelUp } from './redux/actions'
import './App.css'
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

  move = (x, y) => {
    const { move } = this.props;
    move(x, y)
  }

  render() { 
    const { xp, level, position, stats, inventory } = this.props
    
    return ( 
      <div>
        <div className="state-container">
          <p className="state-item">position: x: {position.x} y : {position.y}</p>
          <p className="state-item">xp : {xp} </p>
          <p className="state-item">level: {level}</p>
          <p className="state-item">stats : health {stats.health}, maxHealth: {stats.maxHealth}</p>
          <p className="state-item">inventory : potions: {inventory.potions}</p>
        </div>
        <div className='buttons-container'>
          <div className='row'>
            <button onClick={() => this.move(0, 1)} className="move-button up">move up</button>
          </div>
          <div className='row'>
            <button onClick={() => this.move(-1, 0)} className="move-button left">move left</button>
            <button onClick={() => this.move(1, 0)} className="move-button right">move right</button>
          </div>
          <div className='row'>
            <button onClick={() => this.move(0, -1)} className="move-button down">move down</button>
          </div>

        
        
        </div>
      </div>
     );
  }
}
 
const mapStateToProps = state => ({
  xp: state.hero.xp,
  level: state.hero.level,
  position: state.hero.position,
  stats: state.hero.stats,
  inventory: state.hero.inventory,
})

const mapDispatchToProps = dispatch => ({
  move: (x, y) => dispatch(move(x,y)),
  takeDamage : (damage) => dispatch(takeDamage(damage)),
  drinkPotion : (damage) => dispatch(drinkPotion()),
  gainXp : (incrementXP) => dispatch(gainXp(incrementXP)),
  levelUp : (damage) => dispatch(levelUp()),
})




export default connect(mapStateToProps, mapDispatchToProps)(App);