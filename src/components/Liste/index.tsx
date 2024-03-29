import React from "react";
import { Button, Grid } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import useStyles from "./styles";

const Liste = () => {
	const classes = useStyles();
	return (
		<Grid container direction="row" justifyContent="space-around" alignItems="center" className={classes.root}>
			<Grid item container direction="row" justifyContent="flex-start" alignItems="center" sm={12} md={6}>
				<Grid item className={classes.text}>
					Notre liste de mariage, disponible sur MilleMercisMariage
				</Grid>
			</Grid>
			<Grid item container direction="row" justifyContent="center" alignItems="center" sm={12} md={6}>
				<Grid item container direction="row" justifyContent="center" alignItems="center" className={classes.card}>
					<Button
						variant="contained"
						color="primary"
						startIcon={<OpenInNewIcon />}
						onClick={() => window.open("https://www.millemercismariage.com/apollinethomas/liste.html", "_blank")}
						className={classes.button}
					>
						Voir la liste
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Liste;
