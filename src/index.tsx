import React from 'react';
import ReactDOM from 'react-dom';
import './core.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createMuiTheme, CssBaseline, IconButton, Theme, ThemeProvider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Main from './components/Main';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as Realm from "realm-web";

const REALM_APP_ID = "apollinethomas-fjjob";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

const loginAnonymous = async () => {
	const credentials = Realm.Credentials.anonymous();
	try {
		const user: Realm.User = await app.logIn(credentials);
		return user
	} catch (err) {
		console.error("Failed to log in", err);
	}
}

loginAnonymous().then(user => {
	console.log("Successfully logged in!", user);
});

global.installAppEvent = undefined;

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: "#4c7192",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#cfd8dc",
			contrastText: "#000000"
		}
	}
});

const queryClient = new QueryClient();

const notistackRef = React.createRef<SnackbarProvider>();
const onClickDismiss = (key: string | number) => () => {
	notistackRef.current?.closeSnackbar(key);
}

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider
					ref={notistackRef}
					maxSnack={2}
					preventDuplicate
					autoHideDuration={3000}
					anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
					action={(key) => (
						<IconButton onClick={onClickDismiss(key)} color="secondary">
							<CloseIcon />
						</IconButton>
					)}
				>
					<Router>
						<Route path="/:slug?" component={Main} />
					</Router>

				</SnackbarProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.unregister();

reportWebVitals(console.log);
