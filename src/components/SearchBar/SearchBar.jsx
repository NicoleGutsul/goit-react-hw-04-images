import { useState } from "react";
import { BarSearch, FormSearch } from "./SearchBar.styled";

export default function SearchBar({onSubmit}) {
    const [inputFilter, setInputFilter] = useState('');

    const handleInputChange = e => {
      setInputFilter(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();
        inputFilter.trim() === '' 
           ? alert('Введите название')
           : onSubmit(inputFilter);
        setInputFilter('');
    };

  
        return(
            <BarSearch>
              <FormSearch onSubmit={handleSubmit}>
                <button type="submit">
                  Search
                </button>

                <input
                  type="text"
                  name='inputFilter'
                  value={inputFilter}
                  onChange={handleInputChange}
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
              </FormSearch>
            </BarSearch>
        );
    
}