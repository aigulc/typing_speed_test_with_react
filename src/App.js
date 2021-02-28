import { Component } from 'react';

import Preview from './Preview';
import Speed from './Speed';
import Text from './Text';


const initState = {
	text: Text,
	userInp: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
};

class App extends Component {
	state = initState;

	onRestart = () => {
		this.setState(initState);
	};

	onUserInputChange = (e) => {
		const val = e.target.value;
    this.setTimer()
    this.onFinish(val)
		this.setState({
			userInp: val,
      symbols: this.countCorrectSymbols(val)
		});
	};

  onFinish(userInp) {
    if (userInp === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInp) {
    const text = this.state.text.replace(' ', '');
    return userInp.replace(' ', '').split('').filter((symbol, index) => symbol ===text[index]).length;
  }

  setTimer(){
    if(!this.state.started) {
      this.setState({started: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

	render() {
		return (
			<div className="container mb-5 mb-5">
				<div className="col-md-6 offset-md-3">
					<Preview text = {this.state.text} userInp = {this.state.userInp}/>
					<textarea
						value={this.state.userInp}
						onChange={this.onUserInputChange}
						className="form-control mb-3"
						placeholder="Start typing your text..."
            readOnly = {this.state.finished}
					/>
					<Speed sec = {this.state.sec} symbols = {this.state.symbols}/>
					<div className="text-right">
						<button className="btn btn-light" onClick={this.onRestart}>
							Restart
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
