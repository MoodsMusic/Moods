import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MessageBox from "../Conponents/MessageBox";
import { registerAction } from '../Actions/userActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "teal"
    },
}));

export default function Register() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [fieldError, setFieldError] = useState("");

    // Input refs
    const fNameRef = useRef("");
    const lNameRef = useRef("");
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const emailRef = useRef("");

    // User info if already logged in
    const userLoginInfo = useSelector(state => state.userRegister);
    const { userInfo, error } = userLoginInfo;

    // Redirect user if logged in
    useEffect(() => {
        if (userInfo) {
            history.push("/members");
        }
    }, [userInfo, history]);

    const handleUserRegister = (e) => {
        e.preventDefault();

        if (!fNameRef.current.value || !lNameRef.current.value || !usernameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
            setFieldError("Please fill out all required fields");
        } else {
            setFieldError("");
        }

        dispatch(registerAction(fNameRef.current.value, lNameRef.current.value, usernameRef.current.value, emailRef.current.value, passwordRef.current.value));
    }

    return (
        <div className="register">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {error && <MessageBox variant={"crimson"}>{error}</MessageBox>}
                {fieldError && <MessageBox variant={"crimson"}>{fieldError}</MessageBox>}
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    inputRef={fNameRef}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    inputRef={lNameRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    inputRef={usernameRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    inputRef={emailRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    inputRef={passwordRef}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={e => handleUserRegister(e)}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}