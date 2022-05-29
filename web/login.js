let logged = localStorage.getItem('logged');

if (!logged || logged != 1) {
  Modal.toggle("loginModal");
}

// funcao para retornar o logout


function logout() {
  localStorage.removeItem('logged');
  location.reload();
}

const LoginForm = {

  username: document.querySelector('input#username'),
  password: document.querySelector('input#password'),

// retornar campo com usuario e senha

  getValues() {
    return {
      username: LoginForm.username.value,
      password: LoginForm.password.value,
    }
  },

  validateFields() {
    const {
      username,
      password
    } = LoginForm.getValues();

    if (!username || !password) {
      throw new Error("Por favor preencha todos os campos");
    };

    // armazenamento condicional de usuario e senha de acesso

    if (username != "demo" || password != "demo") {
      throw new Error("Username ou Password inválidos");
    }
  },

  clearFields() {
    LoginForm.username.value = "";
    LoginForm.password.value = "";
  },


  // efetivacao de login com sucesso
  submit (event) {
    event.preventDefault();

    try {
      LoginForm.validateFields();
      LoginForm.clearFields();
      localStorage.setItem("logged", 1);
      Modal.toggle("loginModal");
    } catch (error) {
      LoginForm.clearFields();
      alert(error.message);
    }
  }
}