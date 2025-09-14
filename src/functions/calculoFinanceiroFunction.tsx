function calculoJurosSimples(capital: number, taxa:number, tempo:number): number{
	const totalJuros: number = (capital * taxa * tempo);
	return totalJuros;
};

function calculoMontante(capital: number, juros:number):number{
	const totalMontante: number = (capital + juros);
	return totalMontante;
};

export {calculoJurosSimples, calculoMontante};