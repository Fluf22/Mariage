import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "100%",
		width: "100%"
	},
	text: {
		marginLeft: "33px",
		fontSize: "33px",
		fontFamily: "'Parisienne', cursive",
		color: "#4c7192"
	},
	card: {
		maxWidth: "80%",
		height: "50%",
		margin: "1rem",
		padding: "33px",
		borderRadius: "33px",
		background: "#fafafa",
		boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #fafafa",
	},
	field: {
		width: "100%",
		marginBottom: "7px"
	},
	buttonContainer: {
		"&:focus": {
			outline: "none"
		}
	},
	button: {
		width: "150px",
		height: "40px",
		transition: "all 0.3s ease 0s"
	}
}));

export default useStyles;
