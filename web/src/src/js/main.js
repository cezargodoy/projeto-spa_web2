const masks = {

  
   //Mascara para Data de Nome
    name(value) {
      return value;
    },

   //Mascara para Data de CPF
    cpf(value) {
      return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    },

   //Mascara para Data de Nascimento
    date(value) {
      return value
    },

   //Mascara para Email
    email(value) {
      return value
    },


   //Mascara para Telefone
    fone(value) {
      return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1');
    },


    //Mascara para CEP
    cep(value) {
      return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
    },
  };
  
  document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js;
    $input.addEventListener(
      'input',
      (e) => {
        e.target.value = masks[field](e.target.value);
      },
      false
    );
  });