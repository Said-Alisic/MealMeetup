import React from 'react';
import Container from './Components/Container'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import Routes from './Components/Routes'
import { appStyles } from './assets/styles/sharedStyles';

function App() {
  const classes = appStyles();

  return (
    <div className={classes.app}> 
      <NavBar/>
      <Container>
        <SearchBar/>
        <Routes/>
      </Container>
    </div>
  );
}

export default App;
