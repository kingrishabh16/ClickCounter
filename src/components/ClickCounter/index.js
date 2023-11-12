import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    cnt: 0,
  }

  clickCounterFn = () => {
    this.setState(prev => ({
      cnt: prev.cnt + 1,
    }))
  }

  render() {
    const {cnt} = this.state
    return (
      <div className="counter-class">
        <div className="counter-card">
          <h1 className="heading">
            The button has been clicked{' '}
            <span className="count-class">{cnt}</span> times
          </h1>
          <p className="para">click the button to increase the count</p>
          <div className="button-cnt">
            <button
              className="button"
              type="button"
              onClick={this.clickCounterFn}
            >
              Click me
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
