import React from 'react';
// import Card from './Card';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';
import img from './covid.png'

class CardContainer extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            data : null,
        }
    }
 

    async componentDidMount(){
        
        try {
            const makedata = await axios.get('/search');
            if(!this.state.data){
                console.log(makedata.data.data);
                return this.setState({
                    data: makedata.data.data
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