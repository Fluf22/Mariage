import { Button, Grid } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import useStyles from "./styles";

const Covoiturages = () => {
	const classes = useStyles();

	return (
		<Grid container direction="row" justifyContent="center" alignItems="center" className={classes.root} wrap="wrap">
			<Grid item container direction="row" justifyContent="flex-start" alignItems="center">
				<Grid item className={classes.text}>
					Inscrivez-vous pour proposer un trajet en covoiturage, ou contactez un conducteur !
				</Grid>
			</Grid>
			<Grid item container direction="row" justifyContent="center" alignItems="center" className="h-3/4">
				<Grid item container direction="row" justifyContent="center" alignItems="center" className={classes.card}>
					<iframe width="100%" height="80%" title="feuille" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRorKZPPltlklwz6YygxaEti8z5g79-LVheakw5nFuduBpPRuX4a1THcwpQUiPzTs00AiK62NrM3HHJ/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
					<Button
						variant="contained"
						color="primary"
						startIcon={<OpenInNewIcon />}
						onClick={() => window.open("https://docs.google.com/spreadsheets/d/1ahEzR65dI0t_M_1wak51h8ubfTRRvFMsEXr2-S24phM/edit#gid=0", "_blank")}
						className={classes.button}
					>
						Accéder au document
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Covoiturages;
