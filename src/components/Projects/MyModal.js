import React, { Component } from 'react';
import { Modal, Button } from 'bootstrap-4-react';

export default class MyModal extends Component {
	render() {
		return (
			<div>
				{/* Button trigger Modal */}
				<Button primary data-toggle='modal' data-target='#largeModal'>
					Launch modal
				</Button>

				{/* Modal */}
				<Modal id='largeModal' fade>
					<Modal.Dialog centered lg>
						<Modal.Content>
							<Modal.Header>
              
								<Modal.Title>Modal title</Modal.Title>
								<Modal.Close>
									<span aria-hidden='true'>&times;</span>
								</Modal.Close>
							</Modal.Header>
							<Modal.Body>
								<div>
									<img
										src={require('../../assets/OMDB/sim2.png')}
										alt=''
										style={styles.image}
									/>
								</div>
								<div>
									<img
										src={require('../../assets/OMDB/sim3.png')}
										alt=''
										style={styles.image}
									/>
								</div>
								<div>
									<img
										src={require('../../assets/OMDB/sim4.png')}
										alt=''
										style={styles.image}
									/>
								</div>
								<div>
									<img
										src={require('../../assets/OMDB/sim5.png')}
										alt=''
										style={styles.image}
									/>
								</div>
								<div>
									<img
										src={require('../../assets/OMDB/sim6.png')}
										alt=''
										style={styles.image}
									/>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button secondary data-dismiss='modal'>
									Close
								</Button>
								<Button primary>Save changes</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Dialog>
				</Modal>
			</div>
		);
	}
}
// const MyModal = () => {
// 	return (
// 		<Modal>
// 			<Modal.Header closeButton>
// 				<Modal.Title>Modal heading</Modal.Title>
// 			</Modal.Header>
// 			<Modal.Body>
// 				{content.screenshots.map((screenshot) => (
// 					<>
//
// 							<img src={screenshot.one} alt='' style={styles.image} />
//
//
// 							<img src={screenshot.two} alt='' style={styles.image} />
//
//
// 							<img src={screenshot.three} alt='' style={styles.image} />
//
//
// 							<img src={screenshot.four} alt='' style={styles.image} />
//
//
// 							<img src={screenshot.five} alt='' style={styles.image} />
//
// 					</>
// 				))}
// 			</Modal.Body>
// 			<Modal.Footer>
// 				<Button variant='secondary' onClick={handleClose}>
// 					Close
// 				</Button>
// 				<Button variant='primary' onClick={handleClose}>
// 					Save Changes
// 				</Button>
// 			</Modal.Footer>
// 		</Modal>
// 	);
// };
const styles = {
	image: {
		width: 300,
		marginRight: 24,
		marginTop: 24,
	},
	row: {
		display: 'flex',
		flexWrap: 'wrap',
	},
};
