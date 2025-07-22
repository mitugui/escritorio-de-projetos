import type { ReactNode } from 'react'
import Header from '../Header'
import './default.css'

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