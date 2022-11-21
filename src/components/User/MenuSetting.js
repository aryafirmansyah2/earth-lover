import React from 'react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

const Casemenu = tw.div`w-full py-4 border-b-2 border-[#e6e6e6] flex items-center `
const TitleMenu = tw.button`w-full text-lg font-Reguler flex justify-items-start`

function MenuSetting(props) {
    return (
        <>
            <Casemenu>
                <Link to={"/alamat"}>
                    <TitleMenu>Alamat</TitleMenu>
                </Link>
            </Casemenu>
            <Casemenu>
                <Link to={"/ulasan"}>
                    <TitleMenu>Ulasan</TitleMenu>
                </Link>
            </Casemenu>
            <Casemenu>
                <Link to={"/bantuan"}>
                    <TitleMenu>Bantuan</TitleMenu>
                </Link>
            </Casemenu>
            <Casemenu>
                <TitleMenu onClick={props.click}>Logout</TitleMenu>
            </Casemenu>
        </>
    )
}

export default MenuSetting