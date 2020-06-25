import React from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Main from './components/Main';

//utilizing class-based component inorder to use state
class App extends React.Component {


  render() {
    return (

        <Wrapper>
          <NavBar/>
          <Main/>
        </Wrapper>
    );
  }
}

export default App;
