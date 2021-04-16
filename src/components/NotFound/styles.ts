import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "calc(100% - 64px)",
		color: "#fafafa"
	},
	mainText: {
		fontSize: "50vmin",
		color: "#4c7192"
	},
	button: {
		margin: theme.spacing(1),
	},
	buttonText: {
		marginTop: "2px"
	}
}));

export default useStyles;
