import React, { useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function ShowAlert(props) {
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false)
      props.data.setShowAlert(false)
      props.setAlert("")
    }, 1000);
    return () => clearTimeout(timer);
  }, [props, props.data]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack sx={{ width: '100%' }} spacing={2}>
          {
            props.alert ? 
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              The {props.alert} {props.textAlert} — <strong>check it out!</strong>
            </Alert> : 
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
                The {props.textError} — <strong>check it out!</strong>
            </Alert>
          }
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}