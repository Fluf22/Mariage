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
