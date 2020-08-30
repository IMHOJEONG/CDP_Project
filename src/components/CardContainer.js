import React from 'react';
// import Card from './Card';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';
import img from './covid.png'
const API_serviceKey = "1%2FEJ91e6fCvfjNcZwzIFg2MPmpgqoBzdVaySj2RcGHIQQhjC3zMYLETRi1EtZZt6mDeVr%2F1MnM0PcIkelqZEDA%3D%3D";
const API_pageNo = "1"
const API_numOfRows= "10"

const API_startCreateDt = "20200421";
const dateNow = new Date();
const API_endCreateDt = dateNow.getFullYear() +""+ (dateNow.getMonth()+1) + dateNow.getDate();
// console.log(API_endCreateDt);


class CardContainer extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            data : null,
        }
    }
 

    async componentDidMount(){

        const api = `/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${API_serviceKey}&pageNo=${API_pageNo}&numOfRows=${API_numOfRows}&startCreateDt=${API_startCreateDt}&endCreateDt=${API_endCreateDt}`;
            // 데이터 data 변수로 변환 
        
        try {
            const makedata = await axios.get(api,   
                {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/xml',
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                },)
            if(!this.state.data){
                console.log(makedata.data.response.body.items.item)
                return this.setState({
                    data: makedata.data.response.body.items.item
                })
            }
        }
        catch(error){
            console.log(error);
        }
            
    
    }
    componentWillUnmount() {
        this.setState({
            data: null
        })
    }
    render() {
        const CardStyle = styled.div`
            display: flex;
            color: black;
            flex-wrap: wrap;
            background-color: skyblue;
            justify-content: space-between;
        `;

        return (
            <CardStyle className="container-fluid d-flex justify-content-center">
                {
                    !this.state.data ? <em>Wait!</em> : ( 
                        this.state.data ? this.state.data.map((test,index) => <Card prop={test} key={index} />) : <em>Loading...</em> )
                } 
            </CardStyle>
        );
    }
}

export default CardContainer;