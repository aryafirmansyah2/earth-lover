import React from 'react'
import tw from 'twin.macro'
import {Link} from 'react-router-dom'

const CaseItemMenu = tw.div`flex flex-col bg-[#E7FEF3] items-center justify-center p-2 rounded-lg `
const LgMenu = tw.img``
const TitleMenu = tw.p` font-bold text-sm mt-2`

function ItemsMenu(props) {
    return (
        <>
            <Link to={props.link}>
                <CaseItemMenu>
                    <LgMenu src={props.LogoMenu} />
                    <TitleMenu>
                        {props.title}
                    </TitleMenu>
                </CaseItemMenu>
            </Link>
        </>
    )
}

export default ItemsMenu