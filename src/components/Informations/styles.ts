import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 72px)",
		width: "100%"
	},
	title: {
		fontWeight: "bolder",
		fontSize: "42px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	subtitle: {
		fontWeight: "bold",
		fontSize: "33px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	text: {
		fontSize: "22px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	card: {
		width: "50%",
		height: "42%",
		padding: "22px",
		borderRadius: "33px",
		background: "#FFFFFF",
		boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
		margin: "22px 0",
		minHeight: "300px"
	},
	map: {
		width: "100%",
		height: "100%"
	}
}));

export default useStyles;
