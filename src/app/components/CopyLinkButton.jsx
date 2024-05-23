import React from 'react';
import Button from '@mui/material/Button';

const CopyLinkButton = ({onClick: copied}) => {
  return (
    <Button variant="outlined" onClick={copied}>
        copiar
    </Button>
    )
};

export default CopyLinkButton;