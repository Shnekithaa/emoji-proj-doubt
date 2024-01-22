// Write your code here.
import {Component} from 'react'
class EmojiCard extends Component {
  render() {
    const {emojiDetails, key, handleEmojiClick} = this.props
    const {id, emojiName, emojiUrl} = emojiDetails
    const emojiClick = () => {
      handleEmojiClick(id)
    }
    return (
      <li key={key} onClick={emojiClick}>
        <button>
          <img src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}
export default EmojiCard
