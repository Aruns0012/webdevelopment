import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';



const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 900,
    cursor: 'pointer'
  }
}))
const Header = () => {

  const classes = useStyles();
  const history = useNavigate();

  const { currency, setCurrency} = CryptoState();
  // console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={() => history('/')} className={classes.title} variant='h6' >GETCRYPTO</Typography>
            <Select variant='outlined'
              style={{
                backgroundColor: '#3b3b3b',
                color: 'white',
                fontWeight: 800,
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange= {(e) => {setCurrency(e.target.value)}}
            >
              <MenuItem value={'USD'}  >USD</MenuItem>
              <MenuItem value={'INR'} >INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>

      </AppBar>
    </ThemeProvider>
  )
}

export default Header