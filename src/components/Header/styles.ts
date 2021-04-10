import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		zIndex: 10,
	},
	toolBar: isMobile => ({
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: isMobile ? "0 0 0 13px" : "0 16px 0 16px"
	}),
	tab: {
		"&:focus": {
			outline: "none"
		}
	},
	title: isMobile => ({
		fontFamily: "'Parisienne', cursive",
		marginLeft: isMobile ? "13px" : theme.spacing(3),
	}),
	headerButtonContainer: isMobile => ({
		flexGrow: isMobile ? 0 : 0,
		margin: "0 13px",
		"&:focus": {
			outline: "none"
		}
	}),
	headerButton: isMobile => (isMobile ? {} : {
		marginRight: "13px",
		padding: "0px 15px",
		"&:focus": {
			outline: "none"
		}
	}),
	headerButtonIcon: isMobile => (isMobile ? {} : {
		marginLeft: "7px",
		marginBottom: "3px"
	}),
	navLink: {
		color: "#4c7192",
		margin: "0 10px",
		fontSize: "17px",
		cursor: "pointer",
		"&:hover": {
			borderBottom: "3px solid #4c7192",
			borderRadius: "0"
		}
	},
	selectedLink: {
		color: "#4c7192",
		margin: "0 10px",
		cursor: "pointer",
		borderBottom: "3px solid #4c7192",
		borderRadius: "0",
		fontSize: "17px"
	}
}));

export default useStyles;
