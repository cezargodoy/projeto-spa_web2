export function Form() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="header">
            <img src="/src/assets/meta.jpg" />
    

            <h2>ORÇAMENTO SERVIÇOS DE TI</h2>
            <p>Peça agora o seu orçamento, retornaremos o mais breve possível!</p>
          </div>
      
          <form action="" className="form">
            <label htmlFor="nome">NOME</label>
            <input type="text" className="nome" id="nome" />
      
            <label htmlFor="cpf">CPF</label>
            <input type="text" className="cpf" id="cpf" data-js="cpf" />
      
            <label htmlFor="date">DATA DE NASCIMENTO</label>
            <input type="date" className="date" id="date" data-js="date" />
      
            <label htmlFor="email">E-MAIL</label>
            <input type="text" className="email" id="email" />
      
            <label htmlFor="fone">TELEFONE</label>
            <input type="fone" className="fone" id="fone" data-js="fone" />

            <label htmlFor="nome">ENDEREÇO/Nº</label>
            <input type="text" className="nome" id="nome" />

            <label htmlFor="cep">CEP</label>
            <input type="cep" className="cep" id="cep" data-js="cep" />
      
            <label htmlFor="nome">RELATE O PROBLEMA TÉCNICO</label>
            <input type="text" className="nome" id="nome" />

            <button id="button">Enviar</button>
      
            
          </form>
        </div>
      </div>
    </>
  )
}