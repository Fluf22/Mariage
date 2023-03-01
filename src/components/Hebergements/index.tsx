import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Hidden, Link, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import PlaceIcon from '@material-ui/icons/Place';
import HotelIcon from '@material-ui/icons/Hotel';
import DirectionsIcon from '@material-ui/icons/Directions';
import EuroIcon from '@material-ui/icons/Euro';
import { App } from "realm-web";

type Room = {
	_id: any;
	type: "room";
	name: null;
	capacity: string;
	distance: null;
	price: number;
	link: null;
};

type Place = {
	_id: any;
	type: "place";
	name: string;
	capacity: string;
	distance: string;
	price: number;
	link: string;
};

const Hebergements = () => {
	const isMobile = useMediaQuery("(max-width:640px)");
	const classes = useStyles(isMobile);
	const [openContactUs, setContactUsOpen] = useState<boolean>(false);
	const [rooms, setRooms] = useState<Room[] | undefined>(undefined);
	const [places, setPlaces] = useState<Place[] | undefined>(undefined);
	const app: App = App.getApp(REALM_APP_ID);

	useEffect(() => {
		app.currentUser?.functions["fetchPlaces"]().then(res => {
			console.log("res: ", res);
			setRooms(res.filter((room: Room | Place) => room.type === "room"));
			setPlaces(res.filter((place: Place | Room) => place.type === "place"));
		}).catch(err => {
			console.log("err: ", err);
			throw new Error();
		});
		// eslint-disable-next-line
	}, []);

	return (
		<Grid container direction="row" justifyContent="space-around" className={classes.root}>
			<Grid item container direction="column" justifyContent="flex-start" alignItems="center" className="px-5 md:px-10" sm={12} md={5}>
			<Grid item className={classes.columnTitle}>Chambres sur le lieu de réception</Grid>
			<Grid item className={classes.columnSubtitle}>Les lits sont faits, et chaque chambre dispose d'une salle de bain privative. Nécessaire de toilette (serviette de bain, savon et gel douche) en option à 2€ par personne.</Grid>
				{
					rooms === undefined ? (
						<Grid item container direction="column" justifyContent="center" alignItems="center" className="flex-grow">
							<CircularProgress color="primary" />
						</Grid>
					) : rooms.map((room: Room) => (
						<Grid key={room._id.toString()} item container direction="column" justifyContent="center" alignItems="flex-start" className={[classes.card, "p-5", "md:p-10"].join(" ")}>
							<Grid item container direction="row" justifyContent="flex-start" alignItems="center" className={classes.cardSecondaryText}>
								<Grid item>
									<HotelIcon className="mb-1 mr-2" />
								</Grid>
								<Grid item>
									{room.capacity}
								</Grid>
							</Grid>
							<Grid item container direction="row" justifyContent="flex-start" alignItems="center" className={classes.cardPrice}>
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
			<Grid item container direction="row" justifyContent="center" alignItems="center" className="h-auto" sm={12} md={2}>
				<Hidden mdUp>
					<Divider orientation="horizontal" className="w-full" />
				</Hidden>
				<Hidden smDown>
					<Divider orientation="vertical" />
				</Hidden>
			</Grid>
			<Grid item container direction="column" justifyContent="flex-start" alignItems="center" className="px-5 md:px-10" sm={12} md={5}>
				<Grid item className={classes.columnTitle}>Quelques gîtes aux alentours</Grid>
				{
					places === undefined ? (
						<Grid item container direction="column" justifyContent="center" alignItems="center" className="flex-grow">
							<CircularProgress color="primary" />
						</Grid>
					) : places.map((place: Place) => (
						<Grid key={place._id.toString()} item container direction="column" justifyContent="center" alignItems="flex-start" className={[classes.card, "p-5", "md:p-10"].join(" ")}>
							<Grid item container direction="row" justifyContent="flex-start" alignItems="center" className={classes.cardMainText}>
								<Grid item>
									<PlaceIcon className="mb-1 mr-2" />
								</Grid>
								<Grid item>
									{place.name}
								</Grid>
							</Grid>
							<Grid item container direction="row" justifyContent="flex-start" alignItems="center" className={classes.cardSecondaryText}>
								<Grid item>
									<HotelIcon className="mb-1 mr-2" />
								</Grid>
								<Grid item>
									{place.capacity}
								</Grid>
							</Grid>
							<Grid item container direction="row" justifyContent="flex-start" alignItems="center" className={classes.cardSecondaryText}>
								<Grid item>
									<DirectionsIcon className="mb-1 mr-2" />
								</Grid>
								<Grid item>
									{place.distance}
								</Grid>
							</Grid>
							<Grid item container direction="row" justifyContent="flex-start" alignItems="center" className={classes.cardPrice}>
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
