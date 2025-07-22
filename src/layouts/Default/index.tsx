import type { ReactNode } from 'react'
import Header from '../Header'

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