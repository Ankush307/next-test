"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter('')
    const searchParams = useSearchParams()
    const title = searchParams.get('title')
    return (
        <>
            <div>
                <button onClick={() => router.push('?title=tab-1')}>Tab 1</button>
                <button onClick={() => router.push('?title=tab-2')}>Tab 2</button>
                <button onClick={() => router.push('?title=tab-3')}>Tab 3</button>
            </div>
            <div>
                {
                    title === 'tab-1' ? <p>First Tab</p> : title === 'tab-2' ? <p>Second Tab</p> : <p>Third Tab</p>
                }
            </div>
        </>
    )
}

export default page