import React from 'react'
import photo2 from '../../public/panel.png'
import photo3 from '../../public/minecraft.png'
import photo4 from '../../public/macbook.png'
import { logotitle, subtitle, title } from '@/components/primitives'
import Image from 'next/image'

function Shape() {
	return (
		<div>
			<section className='flex flex-col xl:h-[120vh] wrapper overflow-hidden p-10'>
				<h2 className='text-4xl font-semibold pb-16 p-4 overflow-hidden self-start'>
					Discover our extraordinary offer!
				</h2>
				<div className='flex flex-col xl:flex-row flex-1 overflow-hidden gap-6 '>
					<div className='w-full xl:w-1/3  relative h-full p-12 bg-[#e8f369] text-black flex flex-col items-start'>
						<div>
							<h2 className={`font-semibold ${subtitle()}`}>Modern and personalized website design</h2>
							<p>We create modern websites personalized to your needs, no matter what it's related to.</p>
						</div>
						<div className='self-start mt-auto mx-auto'>
							<div className='flex justify-center pt-5 items-start overflow-hidden h-full'>
								<Image className='flex relative z-30 w-full object-cover' src={photo3} alt='iPhone Mockup' />
							</div>
						</div>
					</div>

					<div className='w-full xl:w-3/4 flex flex-col gap-6'>
						<div className='h-full xl:h-1/2 p-12 bg-[#ffd6e0] text-black flex  flex-col xl:flex-row justify-between items-center'>
							<div>
								<h2 className={`font-semibold ${subtitle()}`}>Personalized Panels</h2>
								<p>Our panels make using our website as easy as posting on Facebook.</p>
							</div>
							<div className='flex justify-center pt-5 items-start overflow-hidden h-full'>
								<Image className='flex relative z-30 w-full md:w-2/4 object-cover' src={photo2} alt='iPhone Mockup' />
							</div>
						</div>
						<div className='h-full xl:h-2/3 p-12 bg-[#c4f5fc] text-black flex flex-col xl:flex-row justify-between items-center'>
							<div className='flex justify-center items-center overflow-hidden '>
								<Image className='relative z-30 object-cover' src={photo4} alt='iPhone Mockup' />
							</div>
							<div>
								<h2 className={`font-semibold ${subtitle()}`}>Responsive on multiple devices</h2>
								<p>Our websites will look just as good on a phone as they do on other devices.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Shape
