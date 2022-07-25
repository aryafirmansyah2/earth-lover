import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Container from '../../../components/common/Container'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

const CaseVoucher = tw.div`flex items-center justify-center w-full`
const Case = tw.div`flex items-center justify-between p-6 w-full`
const Voucher = tw.p`text-lg text-green-1 font-Medium`
const Check = tw.input``

function VoucherPromo() {
    return (
        <div>
            <Layout>
                <Header link={"/bayar"} title={"Voucher Promo"} />
                <Container>
                    <CaseVoucher>
                        <Link to='/bayar' style={{width:"100%"}}>
                            <Case>
                                <Voucher>Potongan 10%</Voucher>
                                <Check type="radio" />
                            </Case>
                        </Link>
                    </CaseVoucher>
                    <CaseVoucher>
                        <Link to='/bayar' style={{width:"100%"}}>
                            <Case>
                                <Voucher>Potongan 5%</Voucher>
                                <Check type="radio" />
                            </Case>
                        </Link>
                    </CaseVoucher>

                </Container>
            </Layout>
        </div>
    )
}

export default VoucherPromo