import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const { placeholder, value, id, isCorrect } = this.props;
    return (
      <div id={id} isCorrect={isCorrect}>
        <input
          value={value}
          onChange={e => this.setState({value: e.target.value})}
          placeholder={placeholder}
        >
        </input>

      </div>
    )
  }
}

export default Input;
