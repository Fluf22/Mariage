import React, { Suspense } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { CircularProgress, Grid, useMediaQuery } from '@material-ui/core';
import Header from '../Header';
import ErrorBoundary from './error-boundary';
import useStyles from './styles';
import ServiceWorkerWrapper from '../ServiceWorkerWrapper';

const NotFound = React.lazy(() => import('../NotFound'));
const Hebergements = React.lazy(() => import('../Hebergements'));
const Informations = React.lazy(() => import('../Informations'));
const Covid = React.lazy(() => import('../Covid'));
const Covoiturages = React.lazy(() => import('../Covoiturages'));
const Photos = React.lazy(() => import('../Photos'));
const Liste = React.lazy(() => import('../Liste'));
const Accueil = React.lazy(() => import('../Accueil'));

interface HomeRouteProps {
	slug?: string;
};

const Home = (props: RouteComponentProps<HomeRouteProps>) => {
	const isMobile = useMediaQuery('(max-width:1360px)');
	const classes = useStyles(isMobile);

	return (
		<Grid container direction="column" className={classes.root}>
			{
				!props.match.params.slug || props.match.params.slug === "" ? ("") : (
					<Header page={props.match.params.slug || ""} />
				)
			}
			<Grid item container direction="column" className={!props.match.params.slug || props.match.params.slug === "" ? classes.homeBody : classes.body}>
				<ErrorBoundary>
					<Suspense fallback={
						<Grid container justify="center" alignItems="center" className={classes.fallback}>
							<CircularProgress color="secondary" />
						</Grid>
					}>
						<Switch>
							<Route exact path="/photos" component={Photos} />
							<Route exact path="/hebergements" component={Hebergements} />
							<Route exact path="/covoit" component={Covoiturages} />
							<Route exact path="/covid" component={Covid} />
							<Route exact path="/infos" component={Informations} />
							<Route exact path="/liste" component={Liste} />
							<Route exact path="/" component={Accueil} />
							<Route path="*" component={NotFound} />
						</Switch>
					</Suspense>
				</ErrorBoundary>
			</Grid>
			<ServiceWorkerWrapper />
		</Grid>
	);
};

export default Home;
