# COVID_19 - Korea Information App

[![Run on Ainize](https://ainize.ai/images/run_on_ainize_button.svg)](https://ainize.web.app/redirect?git_repo=https://github.com/IMHOJEONG/CDP_Project)

## 개요

공공API를 활용한 한국 내부의 코로나 현황을 날짜 별로 볼 수 있는 Application입니다.

2020-08-31 현재 Ainize를 통해 배포 중입니다. 

## 사용한 API 

- https://www.data.go.kr/index.do

- https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15043376

## 공공 API 활용 방법 

1. [OPEN_API](https://www.data.go.kr/index.do)에 회원 가입을 합니다. 

2. 원하는 API를 검색 또는 카테고리에서 선택해서 특정 API를 선정합니다. 

3. 제 경우에는, [보건복지부의 코로나_19 감염 현황](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15043376) API를 이용했습니다. 이용하기 위해서는 이용 신청이 필요하며, 

- 아래 사진과 같이 신청 버튼을 누르고

    ![register](https://user-images.githubusercontent.com/11308147/91700516-00993200-ebb1-11ea-9be9-e34e1448ac20.png)

- api 활용을 어떻게 할 지 개발계정 작성해서 등록 승인을 받습니다. 

    ![develop](https://user-images.githubusercontent.com/11308147/91700509-ff680500-ebb0-11ea-9efe-dcacdea40173.png)




4. 승인이 완료되면 관련 privateKey, endPoint를 받게 되고 이 부분을 복사해서 코드에서 활용하면 됩니다. 

    ![info](https://user-images.githubusercontent.com/11308147/91700515-00009b80-ebb1-11ea-921f-eff6c4920cef.png)

- 안 되는 부분은 각 API 밑 부분에 있는 Q&A를 통해 해결할 수 있습니다. 

    - 대부분은 승인 요청까지 걸리는 시간이 존재하기 때문에 승인되고 조금 뒤에 api 테스트 해보시는 것을 추천합니다.

## 개발 시에 주의할 점 

- 역시 cors 정책을 어떻게 회피할지가 가장 중요한 부분입니다. 

- 언어마다 다르지만, cors에 대한 자료를 참고하고 언어에 따른 개발을 진행하시면 비교적 쉽게 해결하실 수 있습니다. 

## 기술 스택 

- React 
- Express 
