import { useState } from "react";
import { BarSearch, FormSearch } from "./SearchBar.styled";

export const SearchBar = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleInputChange = e => 
      setInput(e.currentTarget.value.toLowerCase().trim());
    

    const handleSubmit = e => {
        e.preventDefault();
        if (input === '') {
            alert('Введите название');
            return;
        }
        onSubmit(input);
        setInput('');
    };

    return(
        <BarSearch>
            <FormSearch onSubmit={handleSubmit}>
              <button type="submit">
                Search
              </button>

              <input
                type="text"
                autoComplete="off"
                autoFocus
                value={input}
                onChange={handleInputChange}
                  // autocomplete="off"
                  // autofocus
                placeholder="Search images and photos"
              />
            </FormSearch>
        </BarSearch>
    );
    
};

export default SearchBar;