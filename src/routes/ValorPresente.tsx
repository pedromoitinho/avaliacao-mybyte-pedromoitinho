import { useState } from "react"
import "../styles/global.css"
import "../styles/ValorPresente.css"
import valorPresente from "../functions/valorParcelaFuturaFunction"

export default function ValorPresente(){
	const [valorFuturo, setValorFuturo] = useState<number>(0);
	const [taxa, setTaxa] = useState<number>(0);
	const [tempo, setTempo] = useState<number>(0);
	const [valorPresenteCalculado, setValorPresenteCalculado] = useState<number | null>(null);
	const [descontoTotal, setDescontoTotal] = useState<number | null>(null);

	const handleCalculate = (e: React.FormEvent) => {
		e.preventDefault();
		
		if (valorFuturo > 0 && taxa > 0 && tempo > 0) {
			const valorPresenteResult = valorPresente(valorFuturo, taxa / 100, tempo);
			const desconto = valorFuturo - valorPresenteResult;			
			setValorPresenteCalculado(valorPresenteResult);
			setDescontoTotal(desconto);
		};
	};

	const handleReset = () => {
		setValorFuturo(0);
		setTaxa(0);
		setTempo(0);
		setValorPresenteCalculado(null);
		setDescontoTotal(null);
	};

	return(
		<div className="valorPresentePage">
			<div className="valorPresenteCard">
				<h2>Calculadora de Valor Presente</h2>
				<form className="valorPresenteForm" onSubmit={handleCalculate}>
					<div className="field">
						<label htmlFor="valorFuturo">Valor Futuro (R$)</label>
						<input 
							id="valorFuturo" 
							name="valorFuturo" 
							type="number" 
							step="0.01"
							placeholder="1500.00" 
							value={valorFuturo || ''}
							onChange={(e) => setValorFuturo(parseFloat(e.target.value) || 0)}
							required 
						/>
					</div>
					<div className="field">
						<label htmlFor="taxa">Taxa de Desconto (%)</label>
						<input 
							id="taxa" 
							name="taxa" 
							type="number" 
							step="0.01"
							placeholder="5.00" 
							value={taxa || ''}
							onChange={(e) => setTaxa(parseFloat(e.target.value) || 0)}
							required 
						/>
					</div>
					<div className="field">
						<label htmlFor="tempo">Tempo (anos)</label>
						<input 
							id="tempo" 
							name="tempo" 
							type="number" 
							step="0.01"
							placeholder="2" 
							value={tempo || ''}
							onChange={(e) => setTempo(parseFloat(e.target.value) || 0)}
							required 
						/>
					</div>
					<div className="buttonContainer">
						<button className="valorPresenteButton" type="submit">Calcular</button>
						<button className="resetButton" type="button" onClick={handleReset}>Limpar</button>
					</div>
				</form>
				
				{valorPresenteCalculado !== null && descontoTotal !== null && (
					<div className="resultados">
						<h3>Resultados</h3>
						<div className="resultado">
							<span className="label">Valor Presente:</span>
							<span className="value">R$ {valorPresenteCalculado.toFixed(2)}</span>
						</div>
						<div className="resultado">
							<span className="label">Desconto Total:</span>
							<span className="value">R$ {descontoTotal.toFixed(2)}</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}