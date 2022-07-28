import React from 'react'
import tw from 'twin.macro'
import Navbar from '../Navbar'

const Bg = tw.div`w-full bg-blue-50 h-full `
const Plate = tw.div`max-w-[480px] h-full bg-[#F9FFFA] m-auto relative`
const Sa =tw.div`w-full h-10 bg-black absolute z-10`

function Layout({ children }) {
    return (
        <>
            <Bg>
                <Plate>
                    {/* <Sa/> */}
                    {children}
                    {/* <Navbar/> */}
                </Plate>
            </Bg>
        </>
    )
}

export default Layout