const styles = {
	projects: {
		paddingTop: 32,
		paddingBottom: 32,
		fontFamily: 'Montserrat',
		backgroundColor: '#FFECB3',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '100%',
		justifyContent: 'center',
		textAlign: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		backgroundImage: `url('https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	projectsClass: {
		paddingTop: 32,
		paddingBottom: 32,
		maxWidth: '100%',
		fontFamily: 'Montserrat',
		backgroundColor: '#FFF8E1',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		alignSelf: 'center',
		backgroundImage: `url('https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderColor: 'grey',
		borderWidth: 3,
		borderStyle: 'solid',
		borderRadius: 6,
	},
	card: {
		alignSelf: 'center',
		minWidth: '18rem',
		maxWidth: '23rem',
		marginTop: 24,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		height: 800,
		marginRight: 24,
		marginLeft: 24,
		borderColor: 'grey',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 6,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 11,
		},
		shadowOpacity: 0.55,
		shadowRadius: 14.78,

		elevation: 22,
	},
	text: {
		fontFamily: 'Montserrat',
		fontWeight: 200,
		cursor: 'default',
		color: '#263238',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#263238',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
	},
	image: {
		height: 300,
		maxWidth: '100%',
		padding: 0,
		margin: 0,
	},
	// row: {
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	flexDirection: 'row',
	// },
	lead: {
		paddingLeft: 32,
		paddingRight: 32,
		textAlign: 'center',
	},
	// list: {
	// 	display: 'flex',
	// 	flexWrap: 'wrap',
	// 	maxWidth: '95%',
	// 	margin: 0,
	// 	padding: 0,
	// 	alignSelf: 'center',
	// 	justifyContent: 'space-evenly',
	// },
	header: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: 40,
	},
};

export default styles;
