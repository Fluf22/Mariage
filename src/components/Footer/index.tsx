import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

interface IFooter {
	page: string;
};

interface PageType {
	id: string;
	icon: any;
	name: string;
};

const pages: PageType[] = [
	{
		id: "",
		icon: <HomeIcon />,
		name: "Accueil"
	}, {
		id: "liste",
		icon: <ListIcon />,
		name: "Liste"
	}, {
		id: "infos",
		icon: <InfoIcon />,
		name: "Informations"
	}, {
		id: "covid",
		icon: <LocalHospitalIcon />,
		name: "COVID-19"
	}, {
		id: "covoit",
		icon: <DriveEtaIcon />,
		name: "Covoiturages"
	}
];

const Footer = (props: IFooter) => {
	const history = useHistory();
	const selectedPageIdx = props.page ? pages.findIndex(p => p.id === props.page) : 0;

	const handlePageChange = (pageIdx: number) => {
		const selectedPageID = pages[pageIdx].id;
		if (props.page !== selectedPageID) {
			history.push(`/${selectedPageID}`);
		}
	};

	return (
		<BottomNavigation
			value={selectedPageIdx}
			onChange={(_, newValue) => handlePageChange(newValue)}
			showLabels
			style={{
				width: "100%",
				position: "absolute",
				bottom: 0,
				left: 0
			}}
		>
			{
				pages.map((page: PageType, idx: number) => (
					<BottomNavigationAction key={idx} label={page.name} icon={page.icon} />
				))
			}
		</BottomNavigation>
	);
};

export default Footer;
