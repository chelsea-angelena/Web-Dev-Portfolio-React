const styles = {
	projects: {
		backgroundColor: '#BBDEFB',
		padding: 0,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		margin: 0,
	},
	projectsOverlay: {
		fontFamily: 'Montserrat',
		marginTop: 64,
		marginBottom: 64,
		paddingBottom: 64,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: 'black',
		borderStyle: 'solid',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundColor: 'rgba(0,0,0,.4)',
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
		minWidth: '16rem',
		maxWidth: '22rem',
		marginTop: 24,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		height: 700,
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
		fontSize: 16,
	},
	title: {
		fontSize: 28,
		fontWeight: 'medium',
		paddingBottom: 16,
		color: '#263238',
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
	},
	image: {
		maxheight: 250,
		maxWidth: 375,
		padding: 0,
		margin: 0,
	},
	lead: {
		paddingLeft: 32,
		paddingRight: 32,
		textAlign: 'center',
		color: 'white',
	},
	header: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: 32,
		color: 'white',
	},
};

export default styles;
