import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './modal.scss';
import { Modal, Button } from 'bootstrap-4-react';
import './modal.scss';

export default function VideoModal({ content }) {
	let { id } = content;
	return (
		<>
			<div>
				<Button
					outline
					dark
					data-toggle='modal'
					data-target={id}
					style={styles.button}
					className='button'
				>
					Video Demo
					<FontAwesomeIcon
						style={styles.icon}
						size='1x'
						icon={['fas', 'video']}
					/>
				</Button>
			</div>
			<div>
				<MarketModal />
				<MovieModal />
				<YelpModal />
			</div>
		</>
	);
}

const MarketModal = () => {
	return (
		<div>
			<Modal id='marketModal' fade>
				<Modal.Dialog centered>
					<Modal.Content>
						<Modal.Body>
							<div
								style={{
									position: 'relative',
									paddingBottom: '202.24719101123597%',
									height: 0,
								}}
							>
								<iframe
									src='https://www.loom.com/embed/1451a80c390a478da901254b70a613e5'
									frameBorder='0'
									title='MarketAppLoom'
									// webkitallowfullscreen
									// mozallowfullscreen
									// allowfullscreen
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
									}}
								></iframe>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button secondary data-dismiss='modal'>
								Close
							</Button>
						</Modal.Footer>
					</Modal.Content>
				</Modal.Dialog>
			</Modal>
		</div>
	);
};

const MovieModal = () => {
	return (
		<>
			<div>
				<Modal id='movieModal' fade>
					<Modal.Dialog centered>
						<Modal.Content>
							<Modal.Body>
								<div
									style={{
										position: 'relative',
										paddingBottom: '202.24719101123597%',
										height: 0,
									}}
								>
									<iframe
										src='https://www.loom.com/embed/133e9fe547874affa262bb5b52ebd2da'
										frameBorder='0'
										title='MovieAppLoom'
										// webkitallowfullscreen
										// mozallowfullscreen
										// allowfullscreen
										style={{
											position: 'absolute',
											top: 0,
											left: 0,
											width: '100%',
											height: '100%',
										}}
									></iframe>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button secondary data-dismiss='modal'>
									Close
								</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Dialog>
				</Modal>
			</div>
		</>
	);
};
const YelpModal = () => {
	return (
		<>
			<div>
				<Modal id='yelpModal' fade>
					<Modal.Dialog centered>
						<Modal.Content>
							<Modal.Body>
								<div
									style={{
										position: 'relative',
										paddingBottom: '202.24719101123597%',
										height: 0,
									}}
								>
									<iframe
										src='https://www.loom.com/embed/e02a0b5e3d5c4f6e8d2400f7eada2c09'
										frameBorder='0'
										title='YelpAppLoom'
										// webkitallowfullscreen
										// mozallowfullscreen
										// allowfullscreen
										style={{
											position: 'absolute',
											top: 0,
											left: 0,
											width: '100%',
											height: '100%',
										}}
									></iframe>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button secondary data-dismiss='modal'>
									Close
								</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Dialog>
				</Modal>
			</div>
		</>
	);
};

const styles = {
	icon: {
		width: 25,
		height: 25,
		alignSelf: 'center',
		margin: 8,
	},
	button: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'Montserrat',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
		marginBottom: 32,
		width: 200,
	},
	imgStyle: {
		height: 200,
		width: 200,
		borderRadius: 6,
		alignSelf: 'center',
		marginTop: 32,
	},
};
