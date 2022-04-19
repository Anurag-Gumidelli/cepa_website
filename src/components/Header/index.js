import React from 'react';

import './index.scss';

const Header = () => {

	return (
		<div>
			<div className='bg-umass-red header-ctn'>
				<div className='container d-flex align-items-center justify-content-between h-100'>
					<a className='school-link-text' href='https://www.umass.edu' >
						University of Massachusetts Amherst
					</a>
					<HeaderButtonRow />
				</div>
			</div>
			<div className='container d-flex align-items-center py-5 px-5'>
				<a className='org-title-text' href='http://localhost:3000'>
					{'Center for Education Policy & Advocacy'}
				</a>
			</div>
			<div className='container px-5'>
				<PageButtonRow />
			</div>
		</div>
	)
}

const HeaderButtonRow = () => {
	return (
		<div className='row btn-text'>
			<div className='col-sm'>
				Visit
			</div>
			<div className='col-sm'>
				Apply
			</div>
			<div className='col-sm'>
				Give
			</div>
		</div>
	)
}

const PageButtonRow = () => {
	return (
		<div className='page-btn-row btn-text'>
			<div className='page-btn'>
				HOME
			</div>
			<div className='page-btn'>
				ABOUT US
			</div>
			<div className='page-btn'>
				GET INVOLVED
			</div>
			<div className='page-btn'>
				TRAINING
			</div>
			<div className='page-btn'>
				EVENTS
			</div>
			<div className='page-btn'>
				POLICY
			</div>
			<div className='page-btn'>
				CALENDAR
			</div>
		</div>
	)
}

export default Header;