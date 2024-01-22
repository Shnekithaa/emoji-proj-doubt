/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisIdList: [],
    duplicateCount: 0,
  }
  handlePlayAgain = topScore => {
    this.setState({
      score: 0,
      topScore: topScore,
      duplicateCount: 0,
      clickedEmojisIdList: [],
    })
  }
  handleEmojiClick = id => {
    const {clickedEmojisIdList, score} = this.state
    if (clickedEmojisIdList.includes(id) || score === 12) {
      this.setState(prevState => ({
        duplicateCount: prevState.duplicateCount + 1,
      }))
    } else {
      this.setState(prevState => {
        return {
          clickedEmojisIdList: [...prevState.clickedEmojisIdList, id],
          score: prevState.score + 1,
        }
      })
    }
  }
  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {score, topScore, clickedEmojisIdList} = this.state
    console.log(this.state.clickedEmojisIdList)
    if (this.state.duplicateCount === 1) {
      return (
        <WinOrLoseCard
          score={score}
          topScore={this.state.topScore}
          handlePlayAgain={this.handlePlayAgain}
        />
      )
    }
    return (
      <div>
        <NavBar score={score} topScore={topScore} />
        <ul>
          {shuffledEmojisList().map(eachEmoji => {
            return (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                handleEmojiClick={this.handleEmojiClick}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
