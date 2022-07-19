import React from 'react'
import tw from 'twin.macro'
import {Link} from 'react-router-dom'

import { BsArrowLeftShort } from 'react-icons/bs'


const Bg = tw.div`w-full h-12  flex justify-start items-center border-b-2`
const IconArrow = tw.div`text-[26px] ml-4`
const Title = tw.h3`text-[17px] font-bold ml-3 `

function Header(props) {
    return (
        <>
            <Bg>

                <IconArrow>
                    <Link to={props.link}>
                        <BsArrowLeftShort />
                    </Link>
                </IconArrow>
                <Title>
                    {props.title}
                </Title>
            </Bg>
        </>
    )
}

export default Header