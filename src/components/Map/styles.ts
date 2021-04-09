import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => createStyles({
	root: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	mapContainer: {
		width: "500px",
		height: "200px"
	}
}));

export default useStyles;
