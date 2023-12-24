"use client";

import React from 'react'

interface Props {
    children: React.ReactNode
}

function GlobalStylesProvider() {
    return (
       <>{children}</>
    )
}

export default GlobalStylesProvider