import React from 'react'

function NavigationBar() {
	return (
		<nav className='absolute z-50 flex mx-auto justify-between items-center px-6 pt-9 py-5 max-w-7xl m-auto w-full font-mono'>
			<div className=' space-x-4'>
				<a href='' className='text-xl font-bold'>
					Patrick
				</a>
			</div>
			<div className=' space-x-10'>
				<a href='' className='text-xl hidden lg:inline font-bold'>
					Projects
				</a>
				<a href='' className='text-xl hidden lg:inline lg:font-bold border-foreground border-2 px-6 py-3 rounded-md '>
					About me
				</a>
			</div>
		</nav>
	)
}

export default NavigationBar
