"use client"
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter('');
    const params = useParams()
    const { item } = params
    return (
        <div>
            <div className='flex gap-3'>
                <button className={` ${item === 'tab-1' ? 'bg-black text-white ' : ''}`} onClick={() => router.push('/params/tab-1')}>Tab 1</button>
                <button className={` ${item === 'tab-2' ? 'bg-black text-white ' : ''}`} onClick={() => router.push('/params/tab-2')}>Tab 2</button>
                <button className={` ${item === 'tab-3' ? 'bg-black text-white ' : ''}`} onClick={() => router.push('/params/tab-3')}>Tab 3</button>
            </div>
            <div>
                {item === 'tab-1' ? <p>First Tab</p> : item === 'tab-2' ? <p>Second Tab</p> : <p>Third Tab</p>}
            </div>
        </div>
    )
}

export default page