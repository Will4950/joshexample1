import '@/app/globals.scss';
import {Lato} from 'next/font/google';

const lato = Lato({subsets: ['latin'], weight: '400'});

export const metadata = {
	title: 'joshexample1',
	description: 'The future is now.'
};

export const viewport = {
	width: 'device-width',
	initialScale: 1
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={`${lato.className}`}>
				{children}
			</body>
		</html>
	);
}
