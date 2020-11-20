import React from 'react';
import { Modal, Button } from 'bootstrap-4-react';
import './modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MarketModal = () => {
	return (
		<div>
			<img
				src={require('../../assets/marketIcon.png')}
				alt='Icon'
				style={styles.imgStyle}
			/>
			<Button
				outline
				light
				data-toggle='modal'
				data-target='#1'
				style={styles.button}
			>
				The Market App
				<FontAwesomeIcon
					style={styles.icon}
					size='2x'
					icon={['fas', 'video']}
				/>
			</Button>
			<Modal id='MarketModal' fade>
				<Modal.Dialog centered>
					<Modal.Content>
						<Modal.Header>
							<Modal.Title>The Saturday Market</Modal.Title>
							<Modal.Close>
								<span aria-hidden='true'>&times;</span>
							</Modal.Close>
						</Modal.Header>
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
									webkitallowfullscreen
									// mozallowfullscreen
									allowfullscreen
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
		fontFamily: 'Montserrat',
		marginTop: 16,
		marginBottom: 32,
		backgroundColor: 'rgba(0,0,0,.5)',
	},
	imgStyle: {
		height: 200,
		width: 200,
		borderRadius: 6,
		alignSelf: 'center',
		marginTop: 32,
	},
};
export default MarketModal;
