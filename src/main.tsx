import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/global.css'

import Login from './routes/Login'
import RouteChooser from './RouteChooser'
import CalculoFinanceiro from './routes/CalculoFinanceiro'
import JurosCompostos from './routes/JurosCompostos'
import ValorPresente from './routes/ValorPresente'

// Criando as 3 diferentes rotas usando React Router
const router = createBrowserRouter([
	{
		path:'/',
		element: <RouteChooser />
	},
  {
    path: '/login',
    element: <Login />
  },
  {
	path: '/calculoFinanceiro',
	element: <CalculoFinanceiro />
  },
  {
	path: '/calculoJurosCompostos',
	element: <JurosCompostos />
  },
  {
	path: '/valorPresente',
	element: <ValorPresente />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
