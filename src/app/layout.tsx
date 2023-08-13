import './globals.css'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import Nav from "@/components/Navigation/Nav";
import Background from '@/components/Background/Background';
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Play Stats',
    description: '',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`min-h-screen ${montserrat.className}`}>
                {/*<Background/>*/}
                <Nav/>
                <main className="flex justify-center items-center">{children}</main>
                <Footer/>
            </body>
        </html>
    )
}
