### 1 Endpoints do Projeto
O projeto foi dividido em rotas para cada etapa do desafio, utilize esses endpoints no navegador, ou navegue pelo menu inicial:

- **`/`** - Página inicial com navegação para todas as funcionalidades
- **`/login`** - Formulário estilizado de autenticação
- **`/calculoFinanceiro`** - Calculadora de juros simples
- **`/calculoJurosCompostos`** - Calculadora de juros compostos  
- **`/valorPresente`** - Calculadora de valor presente

### 1.1 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript 5.8.3** - Superset do JavaScript que adiciona tipagem estática
- **Vite 7.1.2** - Build tool e bundler para desenvolvimento web moderno
- **ESLint** - Ferramenta de linting para manutenção da qualidade do código
- **PNPM** - Gerenciador de pacotes eficiente

---

## 2. ARQUITETURA DO PROJETO

### 2.1 Estrutura de Diretórios

```
avaliacao-mybyte-pedromoitinho/
├── src/
│   ├── functions/          # Funções de cálculo financeiro
│   │   ├── calculoFinanceiroFunction.tsx
│   │   ├── calculoJurosCompostos.tsx
│   │   └── valorParcelaFuturaFunction.tsx
│   ├── routes/             # Componentes de rota
│   │   ├── CalculoFinanceiro.tsx
│   │   ├── JurosCompostos.tsx
│   │   ├── Login.tsx
│   │   └── ValorPresente.tsx
│   ├── styles/             # Arquivos de estilização CSS
│   │   ├── CalculoFinanceiro.css
│   │   ├── global.css
│   │   ├── JurosCompostos.css
│   │   ├── Login.css
│   │   ├── RouteChooser.css
│   │   └── ValorPresente.css
│   ├── main.tsx           # Configurações das rotas e do react router
│   ├── RouteChooser.tsx   # Menu de Navegação Principal

```

### 2.2 Configuração do TypeScript

O projeto utiliza uma configuração modular do TypeScript:

- **`tsconfig.json`** - Configuração raiz com referências aos demais arquivos

A configuração principal especifica:
- Módulo: `nodenext`
- Resolução de módulos: `nodenext`
- Target: `esnext`
- Modo estrito: `alwaysStrict`

Sendo o mais importante o 'alwaysStrict' que garante a verificação rigorosa afim de evitar bugs.
---
