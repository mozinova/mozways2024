function gerarChecksum(base){
		let soma=0;
		for(let i=0;i<base.length;i++){
			soma+=base.charCodeAt(i);
		}
		return (soma % 100).toString().padStart(2,'0');
	}
function gerarCodigoRecibo(produto,valor,sequencial){	
	const date=new Date().toString().slice(0,10).replace(/-/g,'');
	const base=`${produto}-${date}-${sequencial}-${valor}`;
	const checkum=gerarChecksum(base);
	return base+"-"+checkum;
}
function validarCodigo(codigo,valor){
	const partes=codigo.split("-");
	if(partes.length!=4){
		return false;
	}
	const [produto,date,sequencial,checkum]=partes;
	const base=`${produto}-${date}-${sequencial}-${valor}`;
	const checkumEsperado=gerarChecksum(base);
	console.log(checkumEsperado);
	return checkumEsperado===checkum
}