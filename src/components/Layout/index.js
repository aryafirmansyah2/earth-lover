import React from 'react'
import tw from 'twin.macro'

const Bg = tw.div`w-full bg-blue-100 h-screen `
const Plate = tw.div`w-[480px] h-full bg-[#F9FFFA] m-auto relative`

function Layout({ children }) {
    return (
        <>
            <Bg>
                <Plate>
                    {children}
                </Plate>
            </Bg>
        </>
    )
}

export default Layout