import React, { useRef } from 'react'
import './wilayah.css'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import { useDetectOutsideClick } from "../../../components/common/Dropdown";
import { HiLocationMarker } from "react-icons/hi"
import { NavLink } from 'react-router-dom'
import tw from 'twin.macro'

const MainTitle = tw.button`w-full bg-green-1 rounded-xl mt-2`
const CaseMainTitle = tw.button`w-32 text-white font-Medium py-2 flex items-center justify-around pl-3 rounded-xl`
const Screen = tw.div`w-full h-screen`

function WilayahPbb() {
  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isActive2, setIsActive2] = useDetectOutsideClick(dropdownRef2, false);
  const onClick = () => setIsActive(!isActive);
  const onClick2 = () => setIsActive2(!isActive2);
  return (
    <div>
      <Layout>
        <Screen>
          <Header link={'/pbb'} title={"Pilih Wilayah"} />
          <Container>
            <MainTitle onClick={onClick}>
              <CaseMainTitle>
                <HiLocationMarker />Jawa Timur
              </CaseMainTitle>
            </MainTitle>
            <nav
              ref={dropdownRef}
              className={`wilayah ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <NavLink to="/pbb">Kota Surabaya</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kab. Sidoarjo</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kota Malang</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kab. Malang</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kota Kediri </NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kota Madiun</NavLink>
                </li>
              </ul>
            </nav>
            <MainTitle onClick={onClick2}>
              <CaseMainTitle>
                <HiLocationMarker />Jawa Tengah
              </CaseMainTitle>
            </MainTitle>
            <nav
              ref={dropdownRef2}
              className={`wilayah ${isActive2 ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <NavLink to="/pbb">Kota Solo</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kab. Sukoharjo</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kota Semarang</NavLink>
                </li>
                <li>
                  <NavLink to="/pbb">Kab. Sragen</NavLink>
                </li>
              </ul>
            </nav>
          </Container>
        </Screen>
      </Layout>
    </div>
  )
}

export default WilayahPbb