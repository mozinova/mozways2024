const API_URL_MPESA="https://mozpayment.co.mz/api/1.1/wf/pagamentorotativompesa",API_URL_EMOLA="https://mozpayment.co.mz/api/1.1/wf/pagamentorotativoemola";

async function pagamento(url,data){
  const headers={
    "Content-Type":"application/json"
  };
  const parseBody=JSON.stringify(data);
  const request=await fetch(url,{method:"post",headers,body:parseBody});
  const response=await request.json();
  
  return response;
}
const DATA_DESCRIBE={
  "carteira":"",
  "quem comprou":"",
  "valor":"",
  "numero":""
}
async function pagamentoMpesa(data=DATA_DESCRIBE){
  return await pagamento (API_URL_MPESA,data);
}
async function pagamentoEmola(data=DATA_DESCRIBE){
  return await pagamento(API_URL_EMOLA,data);
}

/*
if (typeof module!=="undefined"){
  module.exports={
    pagamentoEmola,
    pagamentoMpesa
  }
} 
*/
const pay={
  pagamentoMpesa,
  pagamentoEmola
}
//export default pagamentoEmola;