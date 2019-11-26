import React from 'react';

export default class UncontrolledFrom extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //Referenciamos el objeto
    this.input = React.createRef();
  }

  handleSubmit(event){
    //INPURT.CURRENT.VALUE es par aconseguir el valor del INPURT
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input defaultVlue="Jorge" type="text" ref={this.input} 
        />
      </label>
      <input type="submit" value="Submit" />
      </form>
    )
  }

}