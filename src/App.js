import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
    console.log(1);
  }

  render() {
    return (
      <div>
        <h1>Tryunfo - Warriors and Mages</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
