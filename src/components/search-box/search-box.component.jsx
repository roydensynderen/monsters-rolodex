import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        onChange={handleChange} 
        placeholder={placeholder}
        className="search"
        type="search" 
    />
)