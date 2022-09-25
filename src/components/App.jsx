import React, { Component } from "react";
import { AppStyled } from "./App.styled";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";

class App extends Component {
  state = {
    inputFilter: '',
  };

  handleOnSubmit = inputFilter => {
    this.setState({ inputFilter});
  };

  render() {
    return(
      <AppStyled>
        <>
          <SearchBar onSubmit={this.handleOnSubmit}/>
          <ImageGallery inputFilter={this.state.inputFilter}/>
        </>
      </AppStyled>
    );
  }
}

export default App;
