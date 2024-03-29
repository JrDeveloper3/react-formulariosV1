import React from 'react';

export default class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests:2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    // Dependiendo del tipo de input el value sera cheked o value del input.
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <form>
        <label>
          Is going:
          <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        </label>
        <br/>
            <label>
          Number of guests:
          <input
          name="numberOfGuests"
          type="number"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        </label>
        <p>
          ¿Is going? {this.state.isGoing ? "Yes" : "No"}
        </p>
        <p>
         ¿Number of guest? {this.state.numberOfGuests}
        </p>
      </form>
    )
  }

}