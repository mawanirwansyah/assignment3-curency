import React  from 'react'
import { Table } from 'react-bootstrap'

const titleTab = ({data}) => {
    let exchange = data.rates;
    let datas = [];
    let i = 0;
    for(let key in exchange) { 
        datas[i] = {
            nama : key
        };
        i++;
    }

    return (
        <Table style={{color : "#fff", fontWeight : "Bold"}}>
            <tbody>
                {
                    datas.map((element) => (
                        <tr key={element.nama}><td>{element.nama}</td></tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default titleTab;