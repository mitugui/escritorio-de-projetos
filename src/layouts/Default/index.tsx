import type { ReactNode } from 'react'
import Header from '../Header'
import './Default.css'

const Default = ({children}: {children: ReactNode}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Default