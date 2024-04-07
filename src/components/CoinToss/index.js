import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 1) {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    } else {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    }
  }
  render() {
    const {img, total, heads, tails } = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img alt="toss result" src={img} className="image" />
          <button className="btn" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="counts">
            <p>{`Total: ${total}`}</p>
            <p>{`Heads: ${heads}`}</p>
            <p>{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
