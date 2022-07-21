import React from 'react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

const CaseListReksadana = tw.div`w-full h-28 flex items-center  border-b-[#D9EEFD] border-b-[1px]`
const CaseLogo = tw.div`bg-[#16BF78]  flex items-center justify-center rounded-2xl `
const Logo = tw.img`px-5 py-8`
const CaseTitle = tw.div`pl-3 flex flex-col justify-center items-start`
const NameLogo = tw.h2`text-[18px] font-Medium text-black `
const Deskripsi = tw.h2`text-[12px] font-Reguler text-[#535353]`
const Berat = tw.h2`text-[12px] text-[#16BF78] bg-[#EBFEF2] mt-4 px-2 rounded-lg items-center`
const Poin = tw.span`text-[10px] text-black font-Medium`


function ListReksadana(props) {
    return (
        <>
            <Link to="/detail-reksadana">
                <CaseListReksadana>
                    <CaseLogo>
                        <Logo src={props.logo} />
                    </CaseLogo>
                    <CaseTitle>
                        <NameLogo>
                            {props.logoname}
                        </NameLogo>
                        <Deskripsi>
                            Keuntungan investasi dengan mudah
                        </Deskripsi>
                        <Berat>
                            2.08% <Poin> per tahun</Poin>
                        </Berat>
                    </CaseTitle>
                </CaseListReksadana>
            </Link>
        </>
    )
}

export default ListReksadana