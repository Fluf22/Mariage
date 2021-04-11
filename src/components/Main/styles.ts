import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => createStyles({
	root: {
		height: "100%"
	},
	homeBody: {
		height: "100%"
	},
	body: isMobile => ({
		height: isMobile ? "calc(100% - 64px)" : "calc(100% - 72px)"
	}),
	categorySelector: {
		height: "10%"
	},
	fallback: isMobile => ({
		height: isMobile ? "calc(100% - 64px)" : "calc(100% - 72px)"
	})
}));

export default useStyles;
