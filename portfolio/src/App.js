import React from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';

//utilizing class-based component inrder to use state
class App extends React.Component {


  render() {
    return (

        <Wrapper>
          <NavBar>

          </NavBar>
        </Wrapper>
    );
  }
}

export default App;
