import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageResult: headImage,
    countHeads: 0,
    countTails: 0,
  }

  onChangeResult = () => {
    const {countHeads, countTails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let latestCountHeads = countHeads
    let latestCountTails = countTails
    let tossIamge = ''

    if (tossResult === 0) {
      latestCountHeads += 1
      tossIamge = headImage
    } else {
      latestCountTails += 1
      tossIamge = tailImage
    }

    this.setState({
      imageResult: tossIamge,
      countHeads: latestCountHeads,
      countTails: latestCountTails,
    })
  }

  render() {
    const {imageResult, countHeads, countTails} = this.state

    const TotalCount = countHeads + countTails

    return (
      <div className="main-container">
        <div className="game-container">
          <h1 className="heading-main">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) tails</p>

          <img alt="toss result" className="image-style" src={imageResult} />
          <button
            type="button"
            className="button-style"
            onClick={this.onChangeResult}
          >
            Toss Coin
          </button>

          <div className="count-container">
            <p className="count">Total:{TotalCount}</p>
            <p className="count">Heads:{countHeads}</p>
            <p className="count">Tails:{countTails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
