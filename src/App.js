import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h1>Tryunfo - Warriors and Mages</h1>
        <Form />
      </div>
    );
  }
}

export default App;
