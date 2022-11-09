import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; 


const goods=[
 { image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7ZKEsXMwMU20JSQ7r3b64FST-vlLaL58K1eKkLaLmplP-JpdmzZTvcCdcTpBTOA&usqp=CAc',
  goodName : 'Broccolli drink',
  goodPrice : 1500,
  goodDesc : 'This is a fruit beverage made from broccolli'
},

  {
    image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpvVo1YpY1gl-wjaUAZiyvjkYKZBvhjK2YQ5POwvmpWN7oJuTIPVq2iDR7xW-wA_6CLSbxuxHw5ss&usqp=CAc',
    goodName : 'Carbonated drink',
    goodPrice : 500,
    goodDesc : 'These are the available carbonated drink in the store'
},
  {
    image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIs7t--DFL5pHt0wsRSenDxGnrn00h0du1swHkj9LU-pDEt4MCRfNjS4tRTJ3Y&usqp=CAc',
    goodName : 'Fruit jam',
    goodPrice : 650,
    goodDesc : 'Buy one and get one free'
  },

  {
    image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEDPczwkxevzf68drB--WHQvYYqGku1Or314355qSd-aSnd4veZwnpIsPEwaLOrw&usqp=CAc',
    goodName : 'Partait',
    goodPrice : 1900,
    goodDesc : 'Nice,when taken chilled'
},
{ image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7ZKEsXMwMU20JSQ7r3b64FST-vlLaL58K1eKkLaLmplP-JpdmzZTvcCdcTpBTOA&usqp=CAc',
goodName : 'Broccolli drink',
goodPrice : 1500,
goodDesc : 'This is a fruit beverage made from broccolli'
},

{
  image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpvVo1YpY1gl-wjaUAZiyvjkYKZBvhjK2YQ5POwvmpWN7oJuTIPVq2iDR7xW-wA_6CLSbxuxHw5ss&usqp=CAc',
  goodName : 'Carbonated drink',
  goodPrice : 500,
  goodDesc : 'These are the available carbonated drink in the store'
},
{
  image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIs7t--DFL5pHt0wsRSenDxGnrn00h0du1swHkj9LU-pDEt4MCRfNjS4tRTJ3Y&usqp=CAc',
  goodName : 'Fruit jam',
  goodPrice : 650,
  goodDesc : 'Buy one and get one free'
},

{
  image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEDPczwkxevzf68drB--WHQvYYqGku1Or314355qSd-aSnd4veZwnpIsPEwaLOrw&usqp=CAc',
  goodName : 'Partait',
  goodPrice : 1900,
  goodDesc : 'Nice,when taken chilled'
},
{ image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7ZKEsXMwMU20JSQ7r3b64FST-vlLaL58K1eKkLaLmplP-JpdmzZTvcCdcTpBTOA&usqp=CAc',
goodName : 'Broccolli drink',
goodPrice : 1500,
goodDesc : 'This is a fruit beverage made from broccolli'
},

{
  image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpvVo1YpY1gl-wjaUAZiyvjkYKZBvhjK2YQ5POwvmpWN7oJuTIPVq2iDR7xW-wA_6CLSbxuxHw5ss&usqp=CAc',
  goodName : 'Carbonated drink',
  goodPrice : 500,
  goodDesc : 'These are the available carbonated drink in the store'
},
{
  image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIs7t--DFL5pHt0wsRSenDxGnrn00h0du1swHkj9LU-pDEt4MCRfNjS4tRTJ3Y&usqp=CAc',
  goodName : 'Fruit jam',
  goodPrice : 650,
  goodDesc : 'Buy one and get one free'
},

{
  image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEDPczwkxevzf68drB--WHQvYYqGku1Or314355qSd-aSnd4veZwnpIsPEwaLOrw&usqp=CAc',
  goodName : 'Partait',
  goodPrice : 1900,
  goodDesc : 'Nice,when taken chilled'
},
{ image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7ZKEsXMwMU20JSQ7r3b64FST-vlLaL58K1eKkLaLmplP-JpdmzZTvcCdcTpBTOA&usqp=CAc',
goodName : 'Broccolli drink',
goodPrice : 1500,
goodDesc : 'This is a fruit beverage made from broccolli'
},

{
  image : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpvVo1YpY1gl-wjaUAZiyvjkYKZBvhjK2YQ5POwvmpWN7oJuTIPVq2iDR7xW-wA_6CLSbxuxHw5ss&usqp=CAc',
  goodName : 'Carbonated drink',
  goodPrice : 500,
  goodDesc : 'These are the available carbonated drink in the store'
},
{
  image : 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIs7t--DFL5pHt0wsRSenDxGnrn00h0du1swHkj9LU-pDEt4MCRfNjS4tRTJ3Y&usqp=CAc',
  goodName : 'Fruit jam',
  goodPrice : 650,
  goodDesc : 'Buy one and get one free'
},

{
  image : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEDPczwkxevzf68drB--WHQvYYqGku1Or314355qSd-aSnd4veZwnpIsPEwaLOrw&usqp=CAc',
  goodName : 'Partait',
  goodPrice : 1900,
  goodDesc : 'Nice,when taken chilled'
},

]
 const newGoods= goods.map((value,index)=>{
  const {image, goodName, goodPrice, goodDesc} =value;
  return (
    <div class='content'>
        <div key={index}>
          <div id='name'>
        {goodName}
        </div>
        <br />
        <div id='picture'>
        <img src= {image} />
        </div>
        <div>{goodDesc} </div>
        <br />
        <div>
           ${goodPrice}
       </div>
        </div>
    </div>
  )
 })
 
function Allgoods(){
  return(
    <div id='all'>
      {newGoods}
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Allgoods />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
