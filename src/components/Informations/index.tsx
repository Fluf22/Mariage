import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import useStyles from "./styles";
import Map from "../Map";

const Informations = () => {
	const isMobile = useMediaQuery('(max-width:950px)');
	const classes = useStyles(isMobile);

	return (
		<div className={classes.root}>
			<Grid container direction="row" justify="center" alignItems="center" className={classes.container}>
				<Grid item container direction="column" justify="center" alignItems="center" sm={12}>
					<Grid item container direction="column" justify="center" alignItems="center" className={classes.card} style={{ textAlign: "center" }}>
						<Grid item className={classes.title}>Horaires</Grid>
						<Grid item className={classes.subtitle}>Messe</Grid>
						<Grid item className={classes.text}>15h</Grid>
						<Grid item className={classes.subtitle}>Cocktail</Grid>
						<Grid item className={classes.text}>18h</Grid>
						<Grid item className={classes.subtitle}>Dîner</Grid>
						<Grid item className={classes.text}>20h</Grid>
					</Grid>
				</Grid>
				<Grid item container direction="column" justify="center" alignItems="center" className={classes.card} sm={12} md={6}>
					<Grid item container direction="row">
						<Grid item className={classes.subtitle}>
							Abbaye Saint Georges
						</Grid>
						<Grid item className={classes.text}>
							12, Rue de l'Abbaye
						</Grid>
						<Grid item className={classes.text}>
							76840 Saint-Martin-de-Boscherville
						</Grid>
					</Grid>
					<Map latitude={49.4442968} longitude={0.9646081} />
				</Grid>
				<Grid item container direction="column" justify="center" alignItems="center" className={classes.card} sm={12} md={6}>
					<Grid item container direction="row">
						<Grid item className={classes.subtitle}>
							Les Granges du Bosc-Grimont
						</Grid>
						<Grid item className={classes.text}>
							357, Route de Bosc-Grimont
						</Grid>
						<Grid item className={classes.text}>
							76690 Le Bocasse
						</Grid>
					</Grid>
					<Map latitude={49.61321741347559} longitude={1.055252075672093} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Informations;
