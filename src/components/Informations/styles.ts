import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column"
	},
	container: {
		height: "100%"
	},
	title: {
		fontWeight: "bolder",
		fontSize: "42px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	subtitle: {
		width: "100%",
		fontWeight: "bold",
		fontSize: "33px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	text: {
		width: "100%",
		fontSize: "22px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	card: isMobile => ({
		maxWidth: isMobile ? "75%" : "45%",
		padding: "22px",
		margin: "22px",
		borderRadius: "33px",
		background: "#FFFFFF",
		boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
	}),
	map: {
		width: "100%",
		height: "100%"
	}
}));

export default useStyles;
