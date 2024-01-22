// Write your code here.
import {Component} from 'react'
import EmojiGame from '../EmojiGame'
class WinOrLoseCard extends Component {
  render() {
    const {score, topScore, handlePlayAgain} = this.props
    const winOrLoseText = score === 12 ? 'You Won' : 'You Lose'
    const winOrLoseImg =
      score === 12
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    const title = score === 12 ? 'Best Score' : 'Score'
    const resetBtn = () => {
      if (score >= topScore) {
        const newtopScore = score
        handlePlayAgain(newtopScore)
      } else {
        handlePlayAgain(topScore)
      }
      return <EmojiGame />
    }
    return (
      <div>
        <div>
          <h1>{winOrLoseText}</h1>
          <p>{title}</p>
          <p>{score}/12</p>
          <button onClick={resetBtn}>Play Again</button>
        </div>
        <div>
          <img src={winOrLoseImg} alt="win or lose" />
        </div>
      </div>
    )
  }
}
export default WinOrLoseCard
