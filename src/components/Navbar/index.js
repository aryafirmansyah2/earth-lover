import React from 'react'
import tw from 'twin.macro'
import './index.css'
import Nav from '../../assets/Foto/Union.svg'
import {BiHomeHeart} from 'react-icons/bi'
import {RiRecycleFill} from 'react-icons/ri'
import {FaRegUser} from 'react-icons/fa'

// import home from '../../assets/Icon/Navabr/Vector.svg'
// import recycle from '../../assets/Icon/Navabr/Vector (1).svg'
// import user from '../../assets/Icon/Navabr/User.svg'

import { NavLink } from 'react-router-dom'

const CaseNavbar = tw.div` w-[480px] drop-shadow-xl fixed bottom-0 z-10 `
const BgNavbar = tw.img`w-full`
const CaseIcons = tw.div`absolute w-full h-full  top-0 flex items-end justify-around pb-5 `
const CaseIcon = tw.div`w-full flex flex-col items-center justify-end h-full hover:text-green-1`
const IconMenu = tw.div`z-20 text-2xl text-[#B7E2C6] `
const TitleMenu = tw.h1`text-black text-sm font-Semibold `
const Circle = tw.span` w-[75px] h-[75px] flex justify-center items-center bg-[#D9FDE5] rounded-[100%]`

const margin = {
  padding: "5px"
}
// const width={
//   width: "40px"
// }

const Navbar = () => {
  return (
    <>
      <CaseNavbar>
        <BgNavbar src={Nav} />
        <CaseIcons>
          <NavLink to='/home' className='nav'>
            <CaseIcon className='case'>
              <IconMenu style={{fontSize:"30px"}}>
                <BiHomeHeart/>
              </IconMenu>
              <TitleMenu>Beranda</TitleMenu>
            </CaseIcon>
          </NavLink>
          <NavLink to='/metode-pengumpulan'>
            <CaseIcon style={margin}>
                <Circle >
                  <IconMenu style={{fontSize:"40px", color:"#16BF78"}} >
                    <RiRecycleFill/>
                  </IconMenu>
                </Circle>
            </CaseIcon>
          </NavLink>
          <NavLink to='/user' className='nav'>
            <CaseIcon className='case'>
              <IconMenu >
                <FaRegUser/>
              </IconMenu>
              <TitleMenu>User</TitleMenu>
            </CaseIcon>
          </NavLink>
        </CaseIcons>
      </CaseNavbar>
    </>
  )
}

export default Navbar