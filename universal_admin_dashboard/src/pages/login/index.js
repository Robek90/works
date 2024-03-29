import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Logo from '../../assets/icon/Logo.svg';
import LogIn from '../../assets/image/LogIn.svg';
import logoGoogle from '../../assets/icon/logoGoogle.svg';
import logoFacebook from '../../assets/icon/logoFacebook.svg';

import useStyles from './muistyle';
import { BootstrapInput } from './bootstrapstyle';
import './style.css';

export default function Login() {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const classes = useStyles();

  const changeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="loginBody">
        <div className={classes.paperLeft}>
          <div className="loginContainer">
            <img src={Logo} alt=""></img>
            <p className="textLogo">Log In</p>
            <div className="buttonContainer">
              <Button variant="contained" color="default" className={classes.button}>
                <img className="buttonLogo" src={logoGoogle} alt="" />
                Google
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                <img className="buttonLogo" src={logoFacebook} alt="" />
                Facebooks
              </Button>
            </div>
            <div className="line">
              <p className="text">Or</p>
            </div>
            <div className="inputs">
              <div>
                <FormControl className={classes.margin}>
                  <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                    Email Address
                  </InputLabel>
                  <BootstrapInput placeholder="example@gmail.com" id="bootstrap-input" />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.margin}>
                  <InputLabel className={classes.label} shrink htmlFor="bootstrap-input">
                    Password
                  </InputLabel>
                  <BootstrapInput
                    placeholder="Password"
                    id="bootstrap-input"
                    variant="outlined"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className={classes.checkBoxContainer}>
              <FormGroup row>
                <FormControlLabel
                  className={classes.checkBox}
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={changeCheckBox}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label={
                    <div>
                      <span className="remember">
                        Remember me.
                        <a className="reset" href="http://localhost:3000/%E2%84%96#">
                          Reset password?
                        </a>
                      </span>
                    </div>
                  }
                />
              </FormGroup>
            </div>
            <Button className={classes.buttonCreate} variant="contained" color="primary">
              <Link to="/dashboard/">Log in</Link>
            </Button>
            <div className={classes.loginReady}>
              <p>
                Don’t have account yet?{' '}
                <Link to="/signup/" className={classes.loginReady}>
                  {' '}
                  New Account{' '}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="workAreaContainer">
        <div className={classes.paperRight}>
          <img className="logInImg" src={LogIn} alt="We'll be back soon" />
        </div>
      </div>
    </>
  );
}
