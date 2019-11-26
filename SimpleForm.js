import React from 'react';

const FRUITS = [
  {
    id: "id_grapefuit",
    name: "Grapefruit"
  },
  {
    id: "id_apple",
    name: "Apple"
  },
  {
    id: "id_lime",
    name: "Lime"
  }
]

export default class SimpleFom extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      fruit: FRUITS[0].id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handeleSelectChange = this.handeleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({name: event.target.value});
  }

  handeleSelectChange(event) {
    this.setState({fruit: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.withValidation) {
      if (this.state.name.trim().length === 0) {
        alert("The name is empty");
        return;
      }

      if (this.state.name.trim().length <= 3) {
        alert("The name must be bigger than 3 characters");
        return;
      }
    }

    alert(`The name is ${this.state.name} and the fruit is ${this.state.fruit}`);
  }

   render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          What is your name?
        </p>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <br/>
        <p>
          What is your favourite fruit?
        </p>
        <select value={this.state.fruit} onChange={this.handleSelectChange}>
          {FRUITS.map((fruit) => <option value={fruit.id}>{fruit.name}</option>)}
        </select>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}