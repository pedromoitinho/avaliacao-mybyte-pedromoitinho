import '../styles/Login.css'
import '../styles/global.css'

export default function Login() {
  return (
	// Container para incluir todo o forms 
    <div className="loginPage">
      <div className="loginCard">
        <form className="loginForm">
          <div className="field">
            <label>Email</label>
				{/* Input do Email com Auto-Complete do Navegador, e placeholder "MyByte" para exemplificação */}
            <input id="email" name="email" type="email" inputMode="email" placeholder="mybyte@gmail.com" autoComplete="email" required />
		    </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
				{/* O mesmo caso para a senha */}
            <input id="password" name="password" type="password" placeholder="**********" autoComplete="current-password" required />
          </div>
          <button className="loginButton" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

