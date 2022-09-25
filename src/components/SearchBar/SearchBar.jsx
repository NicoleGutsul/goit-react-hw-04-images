import { Component } from "react";
import { BarSearch, FormSearch } from "./SearchBar.styled";

export default class SearchBar extends Component {
    state = {
        inputFilter: '',
    };

    handleInputChange = e => {
      this.setState({inputFilter: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.inputFilter.trim() === '') {
            alert('Введите название');
            return;
        }
        this.props.onSubmit(this.state.inputFilter);
        this.setState({inputFilter: '' });
    };

    render() {
        return(
            <BarSearch>
              <FormSearch onSubmit={this.handleSubmit}>
                <button type="submit">
                  Search
                </button>

                <input
                  className="input"
                  type="text"
                  value={this.state.inputFilter}
                  onChange={this.handleInputChange}
                  // autocomplete="off"
                  // autofocus
                  placeholder="Search images and photos"
                />
              </FormSearch>
            </BarSearch>
        );
    }
}