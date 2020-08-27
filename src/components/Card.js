import React from 'react';
import './Card.css'
class Card extends React.Component {

    render(){
        // const api = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=1%2FEJ91e6fCvfjNcZwzIFg2MPmpgqoBzdVaySj2RcGHIQQhjC3zMYLETRi1EtZZt6mDeVr%2F1MnM0PcIkelqZEDA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200821&endCreateDt=20200824`;
        const { 
            stateDt, stateTime, seq, accDefRate, accExamCnt,
            accExamCompCnt, clearCnt, createDt, deathCnt, decideCnt, examCnt,
            resultNegCnt, updateDt, careCnt
         } = this.props.prop;
        //  console.log(this.props.prop);
        //  console.log(stateDt);
        // const img  
        const year = (stateDt+"").substring(0,4);
        const month = (stateDt+"").substring(4,6)[0] === '0' ? (stateDt+"").substring(5,6) : (stateDt+"").substring(4,6);
        const day =  (stateDt+"").substring(6);
        return (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch container-fluid  justify-content-center ">
                <div className="card mb-3 d-flex">
                    {/* <img className="card-img-top" src={img} alt={imgalt}/> */}
                    <div className="card-body">
                        <h4 className="card-title">
                        {year}년 {month}월 {day}일
                        </h4>
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col" >확진자 수 </th>
                            <th scope="col">격리해제 수 </th>
                            <th scope="col">검사진행 수</th>
                            <th scope="col">치료중인 환자 수</th>
                            <th scope="col">사망자 수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{decideCnt}명</td>
                            <td>{clearCnt}명</td>
                            <td>{examCnt}명</td>
                            <td>{deathCnt}명</td>
                            <td>{careCnt}명</td>
                            </tr>
                        </tbody>
                        </table>
                        <p className="card-text">누적 확진률 : {Math.round(accDefRate,3)}%</p>
                        <p className="card-text">갱신 시각 : {createDt}</p>
                        {/* <p className="card-text"> */}
                            {/* 치료중인 환자 수 : {careCnt}</p> */}
                        {/* <a href="#" className="btn btn-primary">Check</a> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;