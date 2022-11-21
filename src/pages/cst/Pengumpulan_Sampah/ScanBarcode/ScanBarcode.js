// import React, { useState } from 'react'
// import Layout from '../../components/Layout'

// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import tw from 'twin.macro';

// const ScannerBarcode = tw.div`w-full h-[800px] bg-black absolute right-0`

// function ScanBarcode() {
//     const [data, setData] = useState("Not Found");
//     const [stopStream, setStopStream] = useState(false);
//     console.log(data)

//     return (
//         <>
//             <BarcodeScannerComponent
//                 style={{ position: "absolute", right: "0" }}

//                 stopStream={stopStream}
//                 onUpdate={(err, result) => {
//                     if (result) {
//                         setData(result.text);
//                         setStopStream(true);
//                     } else {
//                         setData("Not Found");
//                     }
//                 }}
//             />
//             <Layout>
//                 <ScannerBarcode>

//                 </ScannerBarcode>
//             </Layout>
//         </>
//     )
// }

// export default ScanBarcode

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Layout from '../../../../components/Layout';

const ScanBarcode = (props) => {
    const [data, setData] = useState('No result');

    return (
        <>
            <Layout>
            {/* <div style={{transform:' rotate(90deg)'}}> */}
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                style={{ width: '100%', height:'1000px' }}
                />
            {/* </div> */}
            {/* <p>{data}</p> */}
            </Layout>
        </>
    );
};

export default ScanBarcode