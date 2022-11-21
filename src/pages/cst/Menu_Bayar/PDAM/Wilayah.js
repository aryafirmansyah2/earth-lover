import React, { useRef, useState } from 'react'
import tw from 'twin.macro'
import './wilayah.css'
import Container from '../../../../components/common/Container'
import Header from '../../../../components/Header'
import Layout from '../../../../components/Layout'
import { useDetectOutsideClick } from "../../../../components/common/Dropdown";
import { HiLocationMarker } from "react-icons/hi"
import { NavLink } from 'react-router-dom'

const MainTitle = tw.div`w-full bg-green-1 rounded-xl mt-2`
const CaseMainTitle = tw.button`w-32 text-white font-Medium py-2 flex items-center justify-around pl-3 rounded-xl`
const Screen = tw.div`w-full h-screen`

// function Dropdown(props) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="Dropdown">
//       <button
//         onClick={e => {
//           setIsOpen(!isOpen);
//         }}
//       >
//         Dropdown button
//       </button>
//       <div className={isOpen ? "dropdown-group active" : "dropdown-group"}>
//         {props.children}
//       </div>
//     </div>
//   );
// }

function Wilayah() {
  const [wilayah] = useState('');
  console.log(wilayah)

  function Test(wilayah) {
    localStorage.setItem("wilayah", wilayah)
    console.log(wilayah)
  }

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick( false);
  const [isActive2, setIsActive2] = useDetectOutsideClick( false);
  // console.log(useDetectOutsideClick)
  const onClick = () => setIsActive(!isActive);
  console.log(isActive)
  const onClick2 = () => setIsActive2(!isActive2);
  console.log(isActive2)
  return (
    <div>
      <Layout>
        <Screen>
          <Header link={'/pdam'} title={"Pilih Wilayah"} />
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
                  <NavLink onClick={()=>Test("Kota Surabya")} to="/pdam">Kota Surabaya</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kab. Sidoarjo")} to="/pdam">Kab. Sidoarjo</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kota Malang")}  to="/pdam">Kota Malang</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kab. Malang")}  to="/pdam">Kab. Malang</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kota Kediri")}  to="/pdam">Kota Kediri </NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kota Madiun")}  to="/pdam">Kota Madiun</NavLink>
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
                  <NavLink onClick={()=>Test("Kota Solo")}  to="/pdam">Kota Solo</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kab. Sukaharjo")}  to="/pdam">Kab. Sukoharjo</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kota Semarang")}  to="/pdam">Kota Semarang</NavLink>
                </li>
                <li>
                  <NavLink onClick={()=>Test("Kab. Sragen")}  to="/pdam">Kab. Sragen</NavLink>
                </li>
              </ul>
            </nav>
          </Container>
        </Screen>
      </Layout>
    </div>
  )
}

export default Wilayah