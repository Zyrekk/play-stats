import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Nav from "@/components/Nav";

const inter = Inter({subsets: ['latin']})

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
        <body className={`min-h-screen ${inter.className}`}>
        <Nav/>
        <main className="flex justify-center items-center">{children}</main>
        </body>
        </html>
    )
}
