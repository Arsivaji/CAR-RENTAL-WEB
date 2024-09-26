import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <TextField
        label="Search Vehicles"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default SearchBar;
