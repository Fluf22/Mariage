import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Hidden, Link, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import PlaceIcon from '@material-ui/icons/Place';
import HotelIcon from '@material-ui/icons/Hotel';
import DirectionsIcon from '@material-ui/icons/Directions';
import EuroIcon from '@material-ui/icons/Euro';

const Hebergements = () => {
	const isMobile = useMediaQuery("(max-width:640px)");
	const classes = useStyles(isMobile);
	const [openContactUs, setContactUsOpen] = useState<boolean>(false);
	const rooms = [{
		capacity: "1 lit double (PMR)",
		price: 80
	}, {
		capacity: "1 lit double et 1 lit simple",
		price: 95
	}, {
		capacity: "2 lits double",
		price: 115
	}, {
		capacity: "2 lits double et 1 lit simple",
		price: 140
	}, {
		capacity: "2 lits double et 1 lit simple",
		price: 140
	}, {
		capacity: "2 lits double et 1 lit simple",
		price: 140
	}, {
		capacity: "2 lits double et 1 lit simple",
		price: 140
	}];
	const places = [{
		name: "Ferme du Château",
		capacity: "1 chambre pour 3 personnes",
		price: 52,
		distance: "10 min",
		link: "https://www.gites-de-france.com/fr/normandie/seine-maritime/ferme-du-chateau-76g22216?from=2021-07-16&to=2021-07-17&travelers=2"
	}, {
		name: "Pinson~Emoi",
		capacity: "1 chambre pour 2 personnes",
		price: 85,
		distance: "10 min",
		link: "https://www.gites-de-france.com/fr/normandie/seine-maritime/pinsonemoi-76g22064?from=2021-07-16&to=2021-07-17&travelers=2"
	}, {
		name: "La Vassonvillaise",
		capacity: "1 chambre pour 2 personnes",
		price: 52,
		distance: "15 min",
		link: "https://www.gites-de-france.com/fr/normandie/seine-maritime/la-vassonvillaise-76g22023?from=2021-07-16&to=2021-07-17&travelers=2"
	}, {
		name: "Hôtel Campanile",
		capacity: "1 chambre pour 2 personnes",
		price: 60,
		distance: "20 min",
		link: "https://rouen-nord-barentin.campanile.com/"
	}, {
		name: "Hôtel Ibis",
		capacity: "1 chambre pour 2 personnes",
		price: 75,
		distance: "20 min",
		link: "https://all.accor.com/hotel/0703/index.fr.shtml#origin=ibis"
	}, {
		name: "La Grange d'Yquebeuf",
		capacity: "1 chambre pour 2 personnes",
		price: 80,
		distance: "23 min",
		link: "https://www.gites-de-france.com/fr/normandie/seine-maritime/la-grange-dyquebeuf-76g22066?from=2021-07-16&to=2021-07-17&travelers=2"
	}];

	return (
		<Grid container direction="row" justify="space-around" className={classes.root}>
			<Grid item container direction="column" justify="flex-start" alignItems="center" className="px-5 md:px-10" sm={12} md={5}>
				<Grid item className={classes.columnTitle}>Chambres sur le lieu de réception</Grid>
				<Grid item container direction="column" justify="flex-start" alignItems="center">
					{
						rooms.map((room, idx) => (
							<Grid key={idx} item container direction="column" justify="center" alignItems="flex-start" className={[classes.card, "p-5", "md:p-10"].join(" ")}>
								<Grid item container direction="row" justify="flex-start" alignItems="center" className={classes.cardSecondaryText}>
									<Grid item>
										<HotelIcon className="mb-1 mr-2" />
									</Grid>
									<Grid item>
										{room.capacity}
									</Grid>
								</Grid>
								<Grid item container direction="row" justify="flex-start" alignItems="center" className={classes.cardPrice}>
									<Grid item>
										<EuroIcon className="mb-1 mr-2" />
									</Grid>
									<Grid item>
										{room.price}
									</Grid>
								</Grid>
								<Grid item className="self-end">
									<Button variant="outlined" className={classes.button} onClick={() => setContactUsOpen(true)}>Nous contacter</Button>
								</Grid>
							</Grid>
						))
					}
				</Grid>
			</Grid>
			<Grid item container direction="row" justify="center" alignItems="center" className="h-auto" sm={12} md={2}>
				<Hidden mdUp>
					<Divider orientation="horizontal" className="w-full" />
				</Hidden>
				<Hidden smDown>
					<Divider orientation="vertical" />
				</Hidden>
			</Grid>
			<Grid item container direction="column" justify="flex-start" alignItems="center" className="px-5 md:px-10" sm={12} md={5}>
				<Grid item className={classes.columnTitle}>Quelques gîtes aux alentours</Grid>
				<Grid item container direction="column" justify="flex-start" alignItems="center">
					{
						places.map((place, idx) => (
							<Grid key={idx} item container direction="column" justify="center" alignItems="flex-start" className={[classes.card, "p-5", "md:p-10"].join(" ")}>
								<Grid item container direction="row" justify="flex-start" alignItems="center" className={classes.cardMainText}>
									<Grid item>
										<PlaceIcon className="mb-1 mr-2" />
									</Grid>
									<Grid item>
										{place.name}
									</Grid>
								</Grid>
								<Grid item container direction="row" justify="flex-start" alignItems="center" className={classes.cardSecondaryText}>
									<Grid item>
										<HotelIcon className="mb-1 mr-2" />
									</Grid>
									<Grid item>
										{place.capacity}
									</Grid>
								</Grid>
								<Grid item container direction="row" justify="flex-start" alignItems="center" className={classes.cardSecondaryText}>
									<Grid item>
										<DirectionsIcon className="mb-1 mr-2" />
									</Grid>
									<Grid item>
										{place.distance}
									</Grid>
								</Grid>
								<Grid item container direction="row" justify="flex-start" alignItems="center" className={classes.cardPrice}>
									<Grid item>
										<EuroIcon className="mb-1 mr-2" />
									</Grid>
									<Grid item>
										{place.price}
									</Grid>
								</Grid>
								<Grid item className="self-end">
									<Button variant="outlined" className={classes.button} onClick={() => window.open(place.link, "_blank")}>Voir</Button>
								</Grid>
							</Grid>
						))
					}
				</Grid>
			</Grid>
			<Dialog
				open={openContactUs}
				onClose={() => setContactUsOpen(false)}
				aria-labelledby="contact-us-title"
				aria-describedby="contact-us-content"
				fullScreen={isMobile}
			>
				<DialogTitle id="contact-us-title">Contactez-nous !</DialogTitle>
				<DialogContent className="flex flex-row items-center">
					<DialogContentText id="contact-us-content">
						Pour réserver une chambre sur le lieu de réception du mariage, envoyez-nous un mail à <Link color="primary" href="mailto:apolline16.soleil@gmail.com">apolline16.soleil@gmail.com</Link> ou à <Link color="primary" href="mailto:thomas.raffray@icloud.com">thomas.raffray@icloud.com</Link> !
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setContactUsOpen(false)}>Close</Button>
				</DialogActions>
			</Dialog>
		</Grid>
	);
};

export default Hebergements;
