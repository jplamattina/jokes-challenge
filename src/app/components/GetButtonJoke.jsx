import React from 'react';
import Button from '@mui/material/Button';


const GetButtonJoke = ({ onClick: getJoke }) => {
  return <Button variant="contained" className='jokeButton' onClick={getJoke}>Get a Joke</Button>;
};

export default GetButtonJoke;