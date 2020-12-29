const projects = [
	{
		id: 'saturday-market',
		image: require('../assets/projects/market-min.jpg'),
		title: 'Saturday Market',
		tech: ['React-Native', 'Expo', 'Firebase', 'Google OAuth'],
		platform: 'mobile/iOS',
		description:
			'Mobile App built using React-Native, Expo, Firebase, and Google OAuth. This is a social market-place app, which brings people together at a virtual weekend-style market to sell their handcrafted goods and curious collectables. User log in is provided through Google OAuth and all user data is stored on the backend using Firebase/Firestore.',
		project_page: 'https://expo.io/@angelena/projects/saturdaymarket',
		github: 'https://github.com/chelsea-angelena/Expo-SaturdayMarket',
		codepen: '',
		simulator: '/demo',
		demo_video: 'https://www.loom.com/embed/1451a80c390a478da901254b70a613e5',
		modalId: 'marketModal',
	},
	{
		id: 'movie-app',
		image: require('../assets/projects/cinema-min.jpg'),
		title: 'The Movie App',
		tech: ['React-Native', 'Expo', 'Node.js', 'Firebase'],
		description:
			'Mobile App built for iOS, using React-Native, Express/Node.js, Expo, Firebase, Google OAuth, and The Open Movie Database Api. Search for your favourite movies and save them to a list. User log in is provided thorugh Google OAuth and data is saved to the Firstbase/Firestore Database. Try it out in the simulator!',
		project_page: 'https://expo.io/@angelena/projects/movie-search-app',
		github: 'https://github.com/chelsea-angelena/expo-movie-app',
		codepen: '',
		simulator: '/demo',
		demo_video: 'https://www.loom.com/embed/133e9fe547874affa262bb5b52ebd2da',
		modalId: 'movieModal',
	},
	{
		id: 'restaurant-search',
		// image: 'https://www.picsum.photos/200/200',
		image: require('../assets/projects/food-min.jpg'),
		title: 'Good Eats',
		tech: ['React-Native', 'Expo', 'Yelp Fusion Api'],
		description:
			'React Native restaurant search App. Uses the Yelp fusion API to search for local restaurants in your area. This has been built for iOS and Android. Try it out in the simulator!',
		project_page: 'https://expo.io/@angelena/projects/restaurantsearch',
		github: 'https://github.com/chelsea-angelena/restaurant-app',
		codepen: '',
		simulator: 'demo',
		demo_video: 'https://www.loom.com/embed/e02a0b5e3d5c4f6e8d2400f7eada2c09',
		modalId: 'yelpModal',
	},
	{
		id: 'unsplash-image-api',
		// image: 'https://www.picsum.photos/200/200',
		image: require('../assets/projects/unsplash-min.jpg'),
		title: 'Image Search',
		tech: ['React.js', 'Unsplash API'],
		description:
			'Search for images, then get the link to see more like it, or to download. Uses the unsplash API. Check out the code examples to see a tutorial, or click the link symbol to try it out.',
		project_page: 'https://www.chelseaangelena.com/projects/unsplash',
		github: 'https://github.com/chelsea-angelena/unsplash-api',
		simulator: '',
		demo_video: '',
		codepen: '',
		modalId: 'unsplash',
	},
	{
		id: '#reactPress',
		// image: 'https://www.picsum.photos/200/200',
		image: require('../assets/projects/reactpress-min.png'),
		title: 'ReactPress',
		tech: ['React.js', 'WordPress'],
		description:
			'React on the fornt-end and WordPress behind the scenes. WordPress CMS and json Api is used to store user blog posts and media, and provides a convenient admin log in to update posts, but the front-end code is all JavaScript and React.',
		// project_page: 'https://www.chelseaangelena.com/projects/react-press',
		project_page: '',
		github: 'https://github.com/chelsea-angelena/ReactPress',
		simulator: '',
		demo_video: '',
		codepen: '',
		modalId: 'reactPress',
	},
	{
		id: 'search-and-filter',
		image: require('../assets/projects/phone-min.jpg'),
		title: 'Search and Filter',
		tech: ['React.js'],
		description:
			'Basic example of using array methods to create a search box and filter data. Also shows api call exmaple using jsonplaceholder API and axios.',
		// project_page: 'https://www.chelseaangelena.com/projects/search-and-filter',
		project_page: '',
		github: '',
		simulator: '',
		demo_video: '',
		codepen: 'https://codesandbox.io/s/lucid-carson-r6j3y',
		modalId: 'search-and-filter',
	},
];
export default projects;
