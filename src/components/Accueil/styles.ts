import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%",
		backgroundColor: "#4c7192"
	},
	picture: {
		height: "50%",
		backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('nous-deux-2.jpg');",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		fontFamily: "'Parisienne', cursive",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
		textAlign: "center"
	},
	links: {
		height: "50%",
		overflow: "auto"
	},
	link: {
		borderRadius: "38px",
		background: "#4c7192",
		boxShadow: "29px 29px 58px #436380, -29px -29px 58px #557fa4",
		padding: "33px",
		margin: "13px",
		textAlign: "center",
		minWidth: "200px",
		color: "#fafafa",
		fontSize: "17px",
		cursor: "pointer",
		transition: "transform 0.5s",
		"&:hover": {
			transform: "scale(1.1)"
		}
	}
}));

export default useStyles;
