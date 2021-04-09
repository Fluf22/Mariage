import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 72px)",
		width: "100%"
	},
	text: {
		marginLeft: "33px",
		fontSize: "33px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	card: {
		width: "50%",
		height: "50%",
		padding: "33px",
		borderRadius: "33px",
		background: "#FFFFFF",
		boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
	},
	button: {
		"&:focus": {
			outline: "none"
		}
	}
}));

export default useStyles;
