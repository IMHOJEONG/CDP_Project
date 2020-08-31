const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const API_serviceKey = "1%2FEJ91e6fCvfjNcZwzIFg2MPmpgqoBzdVaySj2RcGHIQQhjC3zMYLETRi1EtZZt6mDeVr%2F1MnM0PcIkelqZEDA%3D%3D";
const API_pageNo = "1"
const API_numOfRows= "10"
const axios = require('axios');

const API_startCreateDt = "20200421";
const dateNow = new Date();
const API_endCreateDt = dateNow.getFullYear() +""+ (dateNow.getMonth()+1) + dateNow.getDate();


app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));



app.use('/search', (req, res)=> {
    const api = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${API_serviceKey}&pageNo=${API_pageNo}&numOfRows=${API_numOfRows}&startCreateDt=${API_startCreateDt}&endCreateDt=${API_endCreateDt}`;
    // 데이터 data 변수로 변환 
    axios.get(api,   
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
        .then((makedata)=>{
            
            res.send({
                data: makedata.data.response.body.items.item
            });
        }).catch(function(error){
            console.log(error);
        });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
});



const port = 3000;
app.listen(port, ()=>{console.log(
    `Listening on port ${port}`);
    console.log("localhost:3000");
    }
);