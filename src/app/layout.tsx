import '@/app/globals.css'
import clsx from 'clsx'
import { fontSans } from '@/config/font-sans'
import { ThemeProvider } from '@/components/theme-provider'
import NavigationBar from '@/components/navbar'
import { Roboto } from 'next/font/google'

type RootLayoutProps = {
	children: React.ReactNode
}

export const roboto = Roboto({
	subsets: ['latin'],
	variable: '--roboto',
	weight: '400',
})

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body className={clsx('min-h-screen bg-background font-sans  antialiased', roboto)}>
					<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
						<div className=' flex relative flex-col h-screen'>
							<main className=''>
								<div className='wrapper'>
									<NavigationBar />
								</div>
								{children}
							</main>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</>
	)
}
