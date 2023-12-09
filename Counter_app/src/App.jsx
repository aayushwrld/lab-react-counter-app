import React from 'react';

class Counter extends React.Component{

  state = {
    count : 0,
    color : "red"
  }

  Inc = () => {
    this.setState( { count : this.state.count + 1} )
    this.setState( {color: 'green'} )
  }

  render() {

    let Dec = () => {
      if(this.state.count > 0){
        this.setState( { count : this.state.count - 1, color: 'red' } )
      }
    }

    let Reset = () => {
      this.setState( { count : 0 } )
    }
    return (
      <>
        <h1 className='head'>Counter App</h1>
        <h1 className='counter'> {this.state.count} </h1>

        <div className='buttons_div'>
          <button onClick={ this.Inc } color={ this.state.color }>+</button>
          <button onClick={ Dec }>-</button>
          <button onClick={ Reset }>Reset</button>
        </div>
      </>
    )
  }
}

export default Counter;