import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/profile/unknown">Profile</Link></li>
                <li><Link href="/contact?name=Nitin Chauhan&email=vishankchauhan@gmail.com&phone=9873848046">Contact</Link></li>
            </ul>
        </>
    )
}
