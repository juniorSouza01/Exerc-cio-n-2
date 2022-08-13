const  signUpButton  =  document.getElementById ('signUp');
const  signInButton  =  document.getElementById('signIn');
const  container  =  documento.getElementById('container');

signUpButton.addEventListener('clique',()  =>  {
	recipiente.classList.add("painel-direito-ativo");
});

signInButton.addEventListener('clique',()  =>  {
	recipiente.classList.remove("painel-direito-ativo");
});