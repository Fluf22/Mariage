import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "100%",
		width: "100%",
		overflow: "auto"
	},
	columnTitle: isMobile => ({
		margin: "33px 0",
		fontSize: isMobile ? "33px" : "42px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	}),
	columnSubtitle: {
		fontSize: "22px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	card: {
		margin: "33px 0",
		borderRadius: "33px",
		background: "#fafafa",
		boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #fafafa",
	},
	cardMainText: isMobile => ({
		fontSize: isMobile ? "22px" : "33px",
		fontWeight: "bolder",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	}),
	cardSecondaryText: isMobile => ({
		fontSize: isMobile ? "17px" : "27px",
		color: "#4c7192"
	}),
	cardPrice: isMobile => ({
		fontSize: isMobile ? "17px" : "22px",
		color: "#4c7192"
	}),
	button: {
		color: "#4c7192",
		borderColor: "#4c7192",
		"&:focus": {
			outline: "none"
		}
	}
}));

export default useStyles;
