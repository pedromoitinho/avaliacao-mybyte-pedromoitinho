import { useState } from "react"
import "../styles/JurosCompostos.css"
import "../styles/global.css"
import { montanteComposto, jurosCompostos } from "../functions/calculoJurosCompostos"

export default function JurosCompostos() {
	const [capital, setCapital] = useState<number>(0);
	const [taxa, setTaxa] = useState<number>(0);
	const [tempo, setTempo] = useState<number>(0);
	const [juros, setJuros] = useState<number | null>(null);
	const [montante, setMontante] = useState<number | null>(null);

	const handleCalculate = (e: React.FormEvent) => {
		e.preventDefault();
		
		if (capital > 0 && taxa > 0 && tempo > 0) {
			const montanteCalculado = montanteComposto(capital, taxa / 100, tempo);
			const jurosCalculados = jurosCompostos(montanteCalculado, capital);			
			setJuros(jurosCalculados);
			setMontante(montanteCalculado);
		};
	};

	const handleReset = () => {
		setCapital(0);
		setTaxa(0);
		setTempo(0);
		setJuros(null);
		setMontante(null);
	};

	return(
		<div className="jurosCompostosPage">
			<div className="jurosCompostosCard">
				<h2>Calculadora de Juros Compostos</h2>
				<form className="jurosCompostosForm" onSubmit={handleCalculate}>
					<div className="field">
						<label htmlFor="capital">Capital (R$)</label>
						<input 
							id="capital" 
							name="capital" 
							type="number" 
							step="0.01"
							placeholder="1000.00" 
							value={capital || ''}
							onChange={(e) => setCapital(parseFloat(e.target.value) || 0)}
							required 
						/>
					</div>
					<div className="field">
						<label htmlFor="taxa">Taxa de Juros (%)</label>
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
						<button className="jurosCompostosButton" type="submit">Calcular</button>
						<button className="resetButton" type="button" onClick={handleReset}>Limpar</button>
					</div>
				</form>
				
				{juros !== null && montante !== null && (
					<div className="resultados">
						<h3>Resultados</h3>
						<div className="resultado">
							<span className="label">Juros Compostos:</span>
							<span className="value">R$ {juros.toFixed(2)}</span>
						</div>
						<div className="resultado">
							<span className="label">Montante Total:</span>
							<span className="value">R$ {montante.toFixed(2)}</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
};