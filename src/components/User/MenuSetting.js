import React from 'react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

const Casemenu = tw.div`w-full py-4 border-b-2 border-[#e6e6e6] flex items-center `
const TitleMenu = tw.h1`w-full text-lg font-Reguler`

function MenuSetting(props) {
    return (
        <>
            <Casemenu>
                <Link to={props.link}>
                    <TitleMenu>{props.menu}</TitleMenu>
                </Link>
            </Casemenu>
        </>
    )
}

export default MenuSetting