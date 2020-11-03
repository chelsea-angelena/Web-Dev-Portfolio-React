// import React, { useState } from 'react';
// import { Modal, Button, Img } from 'bootstrap-4-react';
// import { Link, Route } from 'react-router-dom';

// // const appShots = [
// // 	{
// // 		OMDB: [
// // 			require('../../assets/OMDB/sim2.png'),
// // 			require('../../assets/OMDB/sim3.png'),
// // 			require('../../assets/OMDB/sim4.png'),
// // 			require('../../assets/OMDB/sim5.png'),
// // 			require('../../assets/OMDB/sim6.png'),
// // 		],
// // 	},
// // 	{ Saturday: [] },
// // 	{ Restaurant: [] },
// // ];

// const DemoModal = ({ screenshots }) => {
// 	const [show, setShow] = useState(false);

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);
// 	// const { screenshots } = content;
// 	// console.log(screenshots);

// 	// const picOne = `../../assets/${src.one}`;

// 	return (
// 		<>
// 			<Button variant='primary' onClick={handleShow}>
// 				Launch demo modal
// 			</Button>

// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Modal heading</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
// 					{screenshots.map((src) => {
// 						<li key={src.id}>
// 							<img src={src.one} alt='' style={styles.image} />
// 							<img src={src.two} alt='' style={styles.image} />
// 							<img src={src.three} alt='' style={styles.image} />
// 							<img src={src.four} alt='' style={styles.image} />
// 							<img src={src.five} alt='' style={styles.image} />
// 						</li>;
// 					})}
// 				</Modal.Body>
// 				<Modal.Footer>
// 					<Button variant='secondary' onClick={handleClose}>
// 						Close
// 					</Button>
// 					<Button variant='primary' onClick={handleClose}>
// 						Save Changes
// 					</Button>
// 				</Modal.Footer>
// 			</Modal>
// 			{/* </>
// 			<Button type='button' data-toggle='modal' data-target='#myModal'>
// 				Launch modal
// 			</Button>
// 			<Button primary data-toggle='modal' data-target='#largeModal'>
// 				ScreenShots
// 			</Button>

// 			<Modal id='largeModal' fade src={src}>
// 				<Modal.Content>
// 					<Modal.Header>
// 						<Modal.Close>
// 							<span aria-hidden='true'>&times;</span>
// 						</Modal.Close>
// 					</Modal.Header>
// 					<Modal.Body>
// 						<img src={src.one} alt='' style={styles.image} />
// 						<img src={src.two} alt='' style={styles.image} />
// 						<img src={src.three} alt='' style={styles.image} />
// 						<img src={src.four} alt='' style={styles.image} />
// 						<img src={src.five} alt='' style={styles.image} />
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button secondary data-dismiss='modal'>
// 							Close
// 						</Button>
// 						<Route
// 							path={'/Movie-App'}
// 							component={() => {
// 								window.location.href =
// 									'https://expo.io/@angelena/projects/expo-server/';
// 							}}
// 						/>
// 						<Link to={'/Movie-App'} target='_blank'>
// 							Click here to open the project on your phone, or in a
// 							browser/ANdriod simulator
// 						</Link>
// 					</Modal.Footer>
// 				</Modal.Content>
// 			</Modal> */}
// 		</>
// 	);
// };
// export default DemoModal;
// const styles = {
// 	image: {
// 		width: 300,
// 		height: 500,
// 		marginRight: 12,
// 		marginLeft: 12,
// 	},
// };

// // const MyModal = ({ src, pic }) => {
// // const { screenshot } = screenshot;

// // let one = require(`../../assets/${src.one}`);
// // console.log(one);
// // const third = path[1];
// // console.log(second, 'second');
// // const fourth = content.three;
// // const fifth = content.four;
// // const sixth = content.five;
// // console.log(
// // 	path.map((path) => path),
// // 	'modalpath'
// // );
// // console.log(
// // 	path.map((path) => require('../../assets/' + path.uri)),
// // 	'modal'
// // );
// // const first = `../../assets/${path}`;

// // console.log(src, 'modal');
