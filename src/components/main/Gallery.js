import React, { useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import { ProjectIcons } from '../../components/icons/ProjectIcons';

export default function Gallery({ project }) {
	const {
		project_page,
		title,
		demo_video,
		image,
		simulator,
		description,
		github,

		codepen,
	} = project;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div id='gallery'>
				<div className='container'>
					<Image
						src={image.default}
						alt='Avatar'
						className='image'
						width='100%'
						height='300px'
						onClick={handleShow}
					/>
					<div className='middle'>
						<h1 className='gallery__subtitle'>{title}</h1>
					</div>
				</div>
				<Modal
					title={title}
					description={description}
					show={show}
					onHide={handleClose}
					style={{
						display: 'flex',
						alignSelf: 'center',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title
							style={{
								fontFamily: 'sifonnbasic',
								display: 'flex',
								alignSelf: 'center',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{title}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body
						style={{
							display: 'flex',
							paddingLeft: 64,
							paddingRight: 64,
							alignSelf: 'center',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{description}
					</Modal.Body>
					<Modal.Body
						style={{
							display: 'flex',
							alignSelf: 'center',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image
							src={image.default}
							alt='Avatar'
							className='image'
							width='100%'
							height='300px'
						/>
					</Modal.Body>
					<Modal.Footer closeButton>
						{/* <Links id={id} /> */}
						<ProjectIcons
							path={project_page}
							demo_video={demo_video}
							github={github}
							codepen={codepen}
							simulator={simulator}
						/>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
}

// const Links = ({ id }) => {
// 	return (
// 		<div
// 			style={{
// 				display: 'flex',
// 				alignSelf: 'center',
// 				width: '100%',
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 			}}
// 		>
// 			<Lead style={{ color: 'black' }}>
// 				<a href={`/projects/${id}`} style={{ color: 'black' }}>
// 					Project Page
// 				</a>
// 			</Lead>
// 		</div>
// 	);
// };
