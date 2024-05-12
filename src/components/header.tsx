import React from 'react'

function Header() {
	return (
		<div className='header'>
			<img className='bitmoji' src='bitmoji.png' alt='' />
			<div className=' text-center max-w-lg lg:max-w-5xl'>
				<p className='sm:text-xl lg:text-2xl pt-5 font-semibold'>Hello, I'm Patrick ✌️</p>
				<p className='sm:text-2xl lg:text-5xl p-2 font-bold mt-2'>
					Code Crafted, Solutions Delivered: Unleashing Innovation One Line at a Time
				</p>
				<p className='sm:text-xl lg:text-3xl text-gray-50 mt-2'>
					Polish coder from Tarnów, mastering tech with hometown pride.
				</p>
				<div className='mt-5'>
					<a className='inline-block px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600' href='#'>
						Latest projects
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
