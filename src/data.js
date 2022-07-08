import palm from './components/images/palmsq.jpg';
import cabo from './components/images/cabosq.jpg';
import cocktails from './components/images/cocktailsq.jpg';
import float from './components/images/floatsq.jpg';
import view from './components/images/viewsq.jpg';
import reflections from './components/images/reflectionsq.jpg';

const items = [
	{
		id: 1,
		title: 'Sunset Viewing',
		priceStr: '150 per person',
		img: cabo,
	},
	{
		id: 2,
		title: 'Private Pool',
		priceStr: '225 per afternoon',
		img: palm,
	},
	{
		id: 3,
		title: 'Cocktail Hour',
		priceStr: '75 per person',
		img: cocktails,
	},
	{
		id: 4,
		title: 'Sea-Life Float',
		priceStr: '125 per person',
		img: float,
	},
	{
		id: 5,
		title: 'Beach Reservation',
		priceStr: '300 per day',
		img: view,
	},
	{
		id: 6,
		title: 'Shaded Loungers',
		priceStr: '775 per week',
		img: reflections,
	},
];
export default items;
