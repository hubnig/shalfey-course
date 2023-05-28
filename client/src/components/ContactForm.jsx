import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle, Email, Phone } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ContactForm() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Имя"
        value={name}
        onChange={(event) => setName(event.target.value)}
        InputProps={{
          startAdornment: (
            <AccountCircle className={classes.leftIcon} />
          ),
        }}
      />
      <TextField
        label="Номер телефона"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        InputProps={{
          startAdornment: (
            <Phone className={classes.leftIcon} />
          ),
        }}
      />
      <TextField
        label="Почта"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        InputProps={{
          startAdornment: (
            <Email className={classes.leftIcon} />
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
      >
        Получить консультацию
      </Button>
    </form>
  );
}

export default ContactForm;