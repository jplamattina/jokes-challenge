import React from 'react';
import Button from '@mui/material/Button';

const ButtonRemove = ({onClick: handleRemove}) => {
  return (
    <Button variant="outlined" onClick={handleRemove}>
        Remove
    </Button>
    )
};

export default ButtonRemove;