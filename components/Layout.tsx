import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

interface Scenery {
    id: string
    image?: string
    title: string
    description: string
    likes: number
    createdAt: Date
    updatedAt: Date
}

const Layout = ({ sceneries = [], children }: any) => {
    const sceneryIds = sceneries.map((obj: Scenery) => obj.id)
    console.log(sceneryIds)
    // const [ids, setIds] = useState(sceneryIds)

    return (
        <>
            <Head>
                <title>ScenicShare</title>
                {/* <meta
                    name="title"
                    content="Learn how to Build a Fullstack App with Next.js, PlanetScale & Prisma | The Modern Dev"
                /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen bg-white">
                <header className="body-font bg-white text-gray-600 shadow-md">
                    <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
                        <Link href="/" legacyBehavior>
                            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-10 w-10 rounded-full bg-green-500 p-2 text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                <span className="ml-3 text-xl">ScenicShare</span>
                            </a>
                        </Link>
                        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                            <Link href="/create" legacyBehavior>
                                <a className="mr-5 hover:text-gray-900">Link</a>
                            </Link>
                        </nav>
                        <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                            Button
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="ml-1 h-4 w-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </header>
                <p></p>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
