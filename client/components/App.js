import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello world',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.greeting}</p>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
