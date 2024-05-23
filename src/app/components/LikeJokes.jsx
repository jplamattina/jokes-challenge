import React from 'react';
import Button from '@mui/material/Button';

const LikJokesButton = ({onClick: copied}) => {
  return (
    <Button variant="outlined" className='likeButton' onClick={copied}>
        LIKE
    </Button>
    )
};

export default LikJokesButton;