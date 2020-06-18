import React from 'react';

const Search = () => {
    const focusInput = (e)=>{
        e.preventDefault()
        const input = document.getElementById('input-search')
        if (input) {
            input.focus()
        }
    }
    return (
        <div className="search" onClick={focusInput} onMouseOver={focusInput}>
            <span className="lnr lnr-magnifier search__icon"></span>
            <input id="input-search" className="search__input" type="text" placeholder="Search"/>
        </div>
     );
}
 
export default Search;