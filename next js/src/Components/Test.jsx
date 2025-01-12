import React from 'react'

export default function Test() {
    return (
        <>
            <h1>Functional Component Example</h1>
            <h2>This is Test Component</h2>
        </>
    )
}


/*
By default all component and pages are Server Component or Pages
so if we want to make a component or page as client component or page
we have to use "use client" in very first line

Note :  class components are always client components
but functional components are server components by default
to make functional component as client component write "use client" in very first line of
component
 */