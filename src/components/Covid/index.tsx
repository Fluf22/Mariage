import React, { useState } from "react";
import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from "./styles";
import { App } from 'realm-web';

const Covid = () => {
	const classes = useStyles();
	const [email, setEmail] = useState<{ pristine: boolean, value: string }>({ pristine: true, value: "" });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [successState, setSuccessState] = useState<boolean | undefined>(undefined);
	const app: App = App.getApp(REALM_APP_ID);

	const isEmailInvalid = (email: string): boolean => {
		// eslint-disable-next-line
		if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
			return false;
		}
		return true;
	};

	const handleRegister = () => {
		if (isEmailInvalid(email.value)) {
			return;
		}
		setIsLoading(true);
		app.currentUser?.functions["registerEmail"](email.value).then(() => {
			setSuccessState(true);
			setIsLoading(false);
		}).catch(err => {
			console.log("err: ", err);
			setSuccessState(false);
		});
	};

	return (
		<Grid container direction="row" justify="space-around" alignItems="center" className={classes.root}>
			<Grid item container direction="row" justify="flex-start" alignItems="center" sm={12} md={6}>
				<Grid item className={classes.text}>
					Entrez votre adresse e-mail pour être tenu au courant de toute modification due au Covid !
				</Grid>
			</Grid>
			<Grid item container direction="row" justify="center" alignItems="center" sm={12} md={6}>
				<Grid item container direction="row" justify="center" alignItems="center" className={classes.card}>
					<Grid item className={classes.field}>
						<TextField
							label="e-mail"
							variant="outlined"
							spellCheck={false}
							value={email.value}
							onChange={({ target: { value } }) => setEmail({ pristine: false, value: value.trim() })}
							error={!email.pristine && isEmailInvalid(email.value)}
							helperText={!email.pristine && isEmailInvalid(email.value) ? "E-mail invalide" : ""}
							required
							disabled={isLoading || (successState !== undefined && successState)}
							className="w-full"
							style={!email.pristine && isEmailInvalid(email.value) ? {} : { marginBottom: "23px" }}
						/>
					</Grid>
					<Grid item className={classes.buttonContainer}>
						{
							isLoading ? (
								<Button
									variant="contained"
									color="primary"
									disabled
									className={classes.button}
								>
									<CircularProgress color="primary" style={{ width: "25px", height: "25px" }} />
								</Button>
							) : successState !== undefined && successState ? (
								<Button
									variant="contained"
									disabled
									className={[classes.button, "bg-green-500"].join(" ")}
								>
									<CheckCircleIcon htmlColor="#ffffff" />
								</Button>
							) : (
									<Button
										variant="contained"
										color="primary"
										disabled={
											email.pristine || isEmailInvalid(email.value)
										}
										onClick={handleRegister}
										startIcon={<SendIcon />}
										className={classes.button}
									>
										Enregistrer
									</Button>
								)
						}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Covid;
