'use client'
import { useSearchParams } from 'next/navigation'
const About = () => {
    const searchParams = useSearchParams()
    console.log('sera', searchParams.get('nama'))
    
    return (
        <div>Ini adalah page About</div>
    )
}


export default About