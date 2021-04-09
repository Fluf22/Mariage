import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import useStyles from "./styles";

const Covid = () => {
	const classes = useStyles();
	const [email, setEmail] = useState<string>("");
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
							value={email}
							onChange={({ target: { value: newEmail } }) => setEmail(newEmail)}
							required
							className={classes.field}
						/>
					</Grid>
					<Grid item className={classes.button}>
						<Button
							variant="contained"
							color="primary"
							startIcon={<SendIcon />}
						>
							Enregistrer
					</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Covid;
