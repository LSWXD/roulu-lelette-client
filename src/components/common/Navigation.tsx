import type { NextPage } from 'next'

import Link from 'next/link'

const Navigation: NextPage = ({ children }) => {
    return (
        <nav>
            <Link
                href="/"
            >
                <a>Home</a>
            </Link>
            <Link
                href="/game"
            >
                <a>Game</a>
            </Link>
            <Link
                href="/board"
            >
                <a>Board</a>
            </Link>
        </nav>
    )
}

export default Navigation
