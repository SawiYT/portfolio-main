import { Inter as FontSans, Roboto, Fira_Code as FontMono } from 'next/font/google'

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const roboto = Roboto({
	subsets: ['latin'],
	variable: '--roboto',
	weight: '400',
})

export const fontMono = FontMono({
	subsets: ['latin'],
	variable: '--font-mono',
})
