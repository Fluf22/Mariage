import React, { useState } from 'react';
import { AppBar, Button, Grid, Toolbar, Typography, useMediaQuery, Tabs, Tab } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { useHistory } from 'react-router-dom';
import { useEventListener } from '../../hooks';
import useStyles from './styles';

interface HeaderProps {
	page: string | undefined;
};

interface PageType {
	id: string;
	name: string;
};

const pages: PageType[] = [
	{
		id: "",
		name: "Accueil"
	}, {
		id: "liste",
		name: "Liste de mariage"
	}, {
		id: "infos",
		name: "Informations"
	}, {
		id: "covid",
		name: "COVID-19"
	}, {
		id: "covoit",
		name: "Covoiturages"
	}
];

const Header = (props: HeaderProps) => {
	const isMobile = useMediaQuery('(max-width:555px)');
	const classes = useStyles(isMobile);
	const history = useHistory();
	const [showInstallButton, setShowInstallButton] = useState<boolean>(false);
	const selectedPageIdx = props.page ? pages.findIndex(p => p.id === props.page) : 0;

	const handlePageChange = (pageIdx: number) => {
		const selectedPageID = pages[pageIdx].id;
		if (props.page !== selectedPageID) {
			history.push(`/${selectedPageID}`);
		}
	};

	useEventListener("beforeinstallprompt", (event: any) => {
		event.preventDefault();
		installAppEvent = event;
		setShowInstallButton(true);
	});

	useEventListener("appinstalled", () => {
		setShowInstallButton(false);
	});

	const handleInstall = () => {
		if (installAppEvent && (installAppEvent as any).prompt && (installAppEvent as any).userChoice) {
			(installAppEvent as any).prompt();
			setShowInstallButton(false);
			(installAppEvent as any).userChoice.then((choiceResult: any) => {
				console.log("choiceResult: ", choiceResult)
				installAppEvent = undefined;
			});
		}
	};

	return (
		<Grid container className={classes.root}>
			<AppBar position="sticky" color="primary">
				<Toolbar className={classes.toolBar}>
					<Grid container direction="row" justify="space-between" alignItems="center" >
						<Grid item container direction="row" alignItems="center" xs>
							<img src="/logo192.png" width="64" alt="Logo du mariage" className="my-1" />
							<Typography variant="h3" className={classes.title}>Apolline & Thomas</Typography>
						</Grid>
						{
							isMobile ? ("") : (
								<Tabs
									aria-label="tab menu"
									value={selectedPageIdx}
									onChange={(_, newValue) => handlePageChange(newValue)}
								>
									{
										pages.map((page: PageType, idx: number) => (
											<Tab key={idx} label={page.name} className={classes.tab} />
										))
									}
								</Tabs>
							)
						}
						<Grid item container justify="flex-end" xs className={classes.installButtonContainer}>
							{
								showInstallButton ? (
									<Button color="secondary" onClick={() => handleInstall()} variant="outlined" className={classes.installButton}>
										{isMobile ? "" : "Install"}
										<CloudDownloadIcon className={classes.installButtonIcon} />
									</Button>
								) : ("")
							}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};

export default Header;
