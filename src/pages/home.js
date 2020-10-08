import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import ValueExchange from '../components/valueExchange';
import TitleTab from '../components/titleTab';
import getExchangeAction from '../actions/getExchangeAction';
import getBuyAction from '../actions/getBuyAction';
import getSellAction from '../actions/getSellAction';

const Home = (props) => {
    useEffect(() => {
        props.getExchange();
        props.getBuy();
        props.getSell();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(props.buy)
    return(
        <div>
             <div>&nbsp;</div>
             <div>&nbsp;</div>
            <Table style={{bgcolor: "#fff"}}>
                <thead>
                    <tr style={{textAlign : "center",color: "#fff"}}>
                        <th><h3>CURRENCY</h3></th>
                        <th><h3>WE BUY</h3></th>
                        <th><h3>EXCHANGE RATE</h3></th>
                        <th><h3>WE SELL</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{textAlign : "center"}}>
                        <td><TitleTab data={props.buy}/></td>
                        <td><ValueExchange data={props.buy}/></td>
                        <td><ValueExchange data={props.exchange}/></td>
                        <td><ValueExchange data={props.sell}/></td>
                    </tr>
                </tbody>
            </Table>
            
            <div style={{width : "100%", color: "#fff", textAlign : "center"}}>
                Base Currency Is IDR <br/> 
                As For The API <a href="https://api.exchangeratesapi.io/" style={{color : "black", fontWeight : "Bold"}}>https://api.exchangeratesapi.io/</a> is used
            </div>
        </div>
    );
}

const toState = (state) => {
    return {
        exchange : state.exchange,
        buy : state.buy,
        sell : state.sell
    }
}

const toDispatch = (dispatch) => {
    return {
        getExchange: () => dispatch(getExchangeAction()),
        getBuy : () => dispatch(getBuyAction()),
        getSell : () => dispatch(getSellAction())
    }
}
export default connect(toState, toDispatch)(Home);
