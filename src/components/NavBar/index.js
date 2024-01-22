// Write your code here.
import {Component} from 'react'
class NavBar extends Component {
  render() {
    const {score, topScore} = this.props
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div>
          <h1>Score: {score}</h1>
          <h1>Top Score: {topScore}</h1>
        </div>
      </div>
    )
  }
}
export default NavBar
