import React from 'react'
import tw from 'twin.macro'
import Navbar from '../Navbar'

const Bg = tw.div`w-full bg-blue-50 h-screen fixed `
const Plate = tw.div`w-full max-w-[480px] h-full mx-auto relative z-10`
const B = tw.div`w-full max-w-[480px] h-full  mx-auto `
const A = tw.div`fixed w-[480px]  h-screen mx-auto bg-[#F9FFFA] z-0`

function Layout({ children }) {
    return (
        <>
            <Bg />
            <B>
                <A />
            </B>
            <Plate>
               
                {children}
            </Plate>
        </>
    )
}

export default Layout