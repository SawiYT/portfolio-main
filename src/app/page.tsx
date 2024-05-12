import { logotitle, subtitle, title } from '@/components/primitives'
import React from 'react'
import Header from '@/components/header'
import Image from 'next/image'
import Shape from '@/components/shape'
import CMClient from '@/components/cmclient'

function page() {
	return (
		<>
			<div className=' font-roboto '>
				<div className='background'>
					<div className='shadow'></div>
				</div>
				<Header></Header>
			</div>

			<section className='flex flex-row h-[30vh]  bg-secondary-foreground  justify-center'>
				<CMClient></CMClient>
				<CMClient></CMClient>
				<CMClient></CMClient>
				<CMClient></CMClient>
				<CMClient></CMClient>
				<CMClient></CMClient>
			</section>

			<Shape></Shape>
		</>
	)
}

export default page
