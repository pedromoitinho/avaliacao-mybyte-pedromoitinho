function montanteComposto(capital:number, taxa: number, tempo:number): number{
	const totalMontante: number  = capital*(1 + taxa)**tempo;
	return totalMontante;
};

function jurosCompostos(montante:number, capital:number):number{
	const totalJurosCompostos:number = (montante-capital);
	return totalJurosCompostos;
}

export {montanteComposto, jurosCompostos};