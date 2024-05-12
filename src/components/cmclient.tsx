import React from 'react'
import Image from 'next/image'
import cp from '../../public/image.png'
import { logotitle, subtitle, title } from '@/components/primitives'

function CMClient() {
	return (
		<div className='flex flex-row items-center'>
			<Image width={100} src={cp} alt='Description' />
			<p className={` text-muted pb-4 text-gray-500 font-semibold font-mono ${logotitle()}`}>CM-PACK</p>
		</div>
	)
}

export default CMClient
