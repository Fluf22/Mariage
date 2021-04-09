import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	body: {
		height: "calc(100% - 72px)"
	},
	categorySelector: {
		height: "10%"
	},
	fallback: {
		height: "calc(100% - 72px)"
	}
}));

export default useStyles;
