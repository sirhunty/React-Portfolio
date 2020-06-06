import React from 'react';
import './App.css';

//utilizing class-based component inrder to use state
class App extends React.Component {

  //state for top level elements on site (title in navbar and links, home, about, contact pages)
  constructor(props) {
    super(props);
    this.state = {
      title: "Christopher H Matthews",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About Me", path: "/about" },
        { title: "My Projects", path: "/projects" },
        { title: "My Art", path: "/art" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Christopher Matthews",
        subTitle: "Web Developer & Graphic Designer",
      },
      about: {
        title: "BIO",
      },
      projects: {
        title: "My Projects",
      },
      art: {
        title: "My Art",
      },
      contact: {
        title: "Stay Connected with Me!",
        subTitle: "Leave Me a Note"
      }
    }
  }


  render() {
    return (
      <div>My React Portfolio</div>
  );
  }
}

export default App;
