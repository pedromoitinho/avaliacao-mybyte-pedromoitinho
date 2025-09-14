import { Link } from "react-router-dom"
import "./styles/RouteChooser.css"
import "./styles/global.css"

export default function RouteChooser() {
	return (
		<div className="chooserPage">
			<div className="chooserCard">
				<header className="chooserHeader">
					<h1 className="chooserTitle">Bem-vindo MyByte</h1>
					<p className="chooserSubtitle">Escolha uma área para entrar</p>
				</header>

				<nav className="chooserActions">
					<Link className="chooserButton" to="/login">Formulário Estilizado</Link>
					<Link className="chooserButton" to="/calculoFinanceiro">Cálculos Financeiros</Link>
					<Link className="chooserButton" to="/calculoJurosCompostos">Juros Compostos</Link>
					<Link className="chooserButton" to="/valorPresente">Valor Presente de uma Parcela Futura</Link>
				</nav>
			</div>
		</div>
	)
}