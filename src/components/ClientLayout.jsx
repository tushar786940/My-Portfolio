"use client"

import ScrollIndicator from "./ScrollIndicator"

export default function ClientLayout({ children }) {
    return (
        <>
            <ScrollIndicator />
            {children}
        </>
    )
}