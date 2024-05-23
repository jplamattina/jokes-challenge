import React from 'react';
import Button from '@mui/material/Button';

const SortList = ({onClick: sortedList}) => {
  return (
    <Button variant="outlined" onClick={sortedList}>
        Sort Favorite
    </Button>
    )
};

export default SortList;