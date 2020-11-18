import React from 'react';
import { Container, BDiv, Lead, Modal, Button } from 'bootstrap-4-react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

export default function AppDemo() {
	return (
		<>
			<Lead style={{ width: 280, alignSelf: 'center', textAlign: 'center' }}>
				Click the button below to launch the app in a simulator. No need to
				download required.
			</Lead>
			<Button
				dark
				data-toggle='modal'
				data-target='#movieDemo'
				style={{ width: 200, height: 56, alignSelf: 'center', fontSize: 24 }}
			>
				Launch App
			</Button>
			Modal
			<Modal
				id='movieDemo'
				fade
				style={{
					alignItems: 'center',
					alignSelf: 'center',
					justifyContent: 'center',
				}}
			>
				<Modal.Dialog
					centered
					style={{
						alignItems: 'center',
						alignSelf: 'center',
						justifyContent: 'center',
					}}
				>
					<Modal.Content
						style={{
							alignItems: 'center',
							alignSelf: 'center',
							justifyContent: 'center',
						}}
					>
						<Modal.Header>
							<Modal.Title>iphone Simulator</Modal.Title>
							<Modal.Close>
								<span aria-hidden='true'>&times;</span>
							</Modal.Close>
						</Modal.Header>

						<ResponsiveEmbed
							style={{
								width: '100%',
								height: 800,
								alignItems: 'center',
								alignSelf: 'center',
								justifyContent: 'center',
							}}
						>
							<iframe
								height='800px'
								type='iframe'
								src='https://appetize.io/embed/h96ch5mct9gc05ze9fkg2g6rfg?device=iphone8'
							></iframe>
						</ResponsiveEmbed>
						{/* </Modal.Body> */}
						<Modal.Footer></Modal.Footer>
					</Modal.Content>
				</Modal.Dialog>
			</Modal>
		</>
	);
}
