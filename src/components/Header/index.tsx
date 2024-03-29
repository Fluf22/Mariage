import React, { useState } from 'react';
import { AppBar, Button, Grid, Toolbar, useMediaQuery, Tabs, Tab, Dialog, IconButton } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import { useEventListener } from '../../hooks';
import useStyles from './styles';

interface HeaderProps {
	page: string | undefined;
}

interface PageType {
	id: string;
	name: string;
}

const pages: PageType[] = [
	{
		id: "",
		name: "Accueil"
	}, {
		id: "liste",
		name: "Liste de mariage"
	}, {
		id: "informations",
		name: "Informations"
	}, {
		id: "covoiturages",
		name: "Covoiturages"
	}, {
		id: "hebergements",
		name: "Hébergements"
	}, {
		id: "2022",
		name: "2022"
	}
];

const Header = (props: HeaderProps) => {
	const isMobile = useMediaQuery('(max-width:1500px)');
	const classes = useStyles(isMobile);
	const history = useHistory();
	const [showInstallButton, setShowInstallButton] = useState<boolean>(false);
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const selectedPageIdx = props.page ? pages.findIndex(p => p.id === props.page) : 0;

	const handlePageChange = (pageIdx: number) => {
		if (menuOpen) {
			setMenuOpen(false);
		}
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
					<Grid container direction="row" justifyContent="space-between" alignItems="center">
						<Grid item container direction="row" alignItems="center" xs>
							<img src="/logo192.png" width={isMobile ? "42" : "64"} alt="Logo du mariage" className="my-1" />
							<div
								className="ml-1 text-2xl sm:ml-3 lg:text-4xl"
								style={{ fontFamily: "'Parisienne', cursive" }}
								hidden={props.page === ""}
							>
								Apolline & Thomas
							</div>
						</Grid>
						{
							isMobile ? (
								<Grid item container justifyContent="flex-end" xs className={classes.headerButtonContainer}>
									<Button color="secondary" onClick={() => setMenuOpen(true)} variant="outlined" className={classes.headerButton}>
										<MenuIcon className={classes.headerButtonIcon} />
									</Button>
								</Grid>
							) : (
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
						{
							showInstallButton && !isMobile ? (
								<Grid item container justifyContent="flex-end" xs className={classes.headerButtonContainer}>
									<Button color="secondary" onClick={() => handleInstall()} variant="outlined" className={classes.headerButton}>
										Installer
										<CloudDownloadIcon className={classes.headerButtonIcon} />
									</Button>
								</Grid>
							) : ("")
						}
					</Grid>
				</Toolbar>
			</AppBar>
			{
				isMobile ? (
					<Dialog fullScreen open={menuOpen} onClose={() => setMenuOpen(false)}>
						<Grid container direction="column" justifyContent="flex-start" className="h-full">
							<Grid item container justifyContent="flex-end" className="flex-grow-0">
								<IconButton color="primary" onClick={() => setMenuOpen(false)}>
									<CloseIcon />
								</IconButton>
							</Grid>
							<Grid item container direction="column" justifyContent="space-around" alignItems="center" className="flex-grow">
								{
									pages.map((page: PageType, idx: number) => (
										<Grid item key={idx}>
											<Button
												className={selectedPageIdx === idx ? classes.selectedLink : classes.navLink}
												onClick={() => handlePageChange(idx)}
											>
												{
													page.name
												}
											</Button>
										</Grid>
									))
								}
								<Grid item container justifyContent="center">
									<Button color="primary" onClick={() => handleInstall()} variant="outlined">
										Installer
									<CloudDownloadIcon className="ml-2" />
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Dialog>
				) : ("")
			}
		</Grid>
	);
};

export default Header;
