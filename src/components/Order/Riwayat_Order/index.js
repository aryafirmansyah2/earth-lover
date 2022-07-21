import React from 'react'
import tw from 'twin.macro'

const CaseListOrder = tw.div`w-full h-28 flex items-center  border-b-[#D9EEFD
] border-b-[1px]`
const CaseTanggal = tw.div`w-24 bg-[#E7FEF3] h-24 flex flex-col items-center justify-center rounded-2xl `
const Tanggal = tw.h2`text-4xl font-Medium`
const Bulan = tw.h2`text-lg font-Medium`
const CaseTitle = tw.div`w-3/5 h-full  pl-3 flex flex-col justify-center items-start`
const Industri = tw.h2`text-lg font-Bold`
const Time = tw.h2`text-sm font-Light`
const Berat = tw.h2`text-lg text-[#16BF78] font-Medium`
const Poin = tw.span`text-lg text-[#16BF78] font-Bold`
const CaseProses = tw.div`w-1/5 h-full  flex items-center justify-center`
const BgProse = tw.div`w-full h-8 bg-[#FDFDE3] text-[#DDBA02] px-10 rounded-2xl flex items-center justify-center`


function ListOrder() {
    return (
        <>
            <CaseListOrder>
                <CaseTanggal>
                    <Tanggal>
                        27
                    </Tanggal>
                    <Bulan>
                        Agustus
                    </Bulan>
                </CaseTanggal>
                <CaseTitle>
                    <Industri>
                        Inagata Technomist
                    </Industri>
                    <Time>
                        10.43 AM
                    </Time>
                    <Berat>
                        2 Kg - <Poin> 20 Poin</Poin>
                    </Berat>
                </CaseTitle>
                <CaseProses>
                    <BgProse>
                        proses
                    </BgProse>
                </CaseProses>
            </CaseListOrder>
        </>
    )
}

export default ListOrder