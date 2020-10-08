import React  from 'react'
import { Table } from 'react-bootstrap'

const valueExchange = ({data}) => {
    let exchange = data.rates;
    let datas = [];
    let i = 0;
    for(let key in exchange) { 
        datas[i] = {
            nama : key,
            value : exchange[key].toFixed(6)
        };
        i++;
    }

    return (
        <Table style={{color : "#fff"}}>
            <tbody>
                {
                    datas.map((element) => (
                        <tr key={element.value}><td>{element.value}</td></tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default valueExchange;