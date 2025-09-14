export default function valorPresente(valorFuturo: number, taxa:number, tempo:number): number{
	const totalValorPresente: number = valorFuturo/(1 + taxa)**tempo;

	return totalValorPresente;
};
