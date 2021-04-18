import React, { useEffect, useState } from 'react';
import { Snackbar, Button } from '@material-ui/core';
import * as serviceWorkerRegistration from '../../serviceWorkerRegistration';
import useStyles from './styles';

const ServiceWorkerWrapper = () => {
	const classes = useStyles();
	const [showReload, setShowReload] = useState(false);
	const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

	const onSWUpdate = (registration: ServiceWorkerRegistration) => {
		const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
			navigator.userAgent &&
			navigator.userAgent.indexOf('CriOS') === -1 &&
			navigator.userAgent.indexOf('FxiOS') === -1;
		if (!isSafari) {
			setShowReload(true);
			setWaitingWorker(registration.waiting);
		}
	};

	useEffect(() => {
		serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
	}, []);

	const reloadPage = () => {
		waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
		setShowReload(false);
		window.location.reload();
	};

	return (
		<Snackbar
			id="update-snackbar"
			open={showReload}
			message="Nouvelle version disponible !"
			onClick={reloadPage}
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			action={
				<Button
					color="primary"
					size="small"
					onClick={reloadPage}
				>
					Mettre à jour
				</Button>
			}
			className={classes.root}
		/>
	);
}

export default ServiceWorkerWrapper;
