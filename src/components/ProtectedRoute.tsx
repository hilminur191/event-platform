"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
    isLoggedIn: boolean;
    children: React.ReactNode; 
}

export default function ProtectedRoute({isLoggedIn, children}: ProtectedRouteProps) {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/auth/login")
        }
    }, [isLoggedIn, router])

    if (!isLoggedIn) {
        return null; // atau tampilkan loading spinner
    }

    return <>{children}</>
}