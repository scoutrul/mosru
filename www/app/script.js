import './stylus.styl';

document.getElementById('photo').onchange =  function(){
		file_src.innerHTML = this.value;
	};

var inputs = document.querySelectorAll('.input');

for (var i = 0; i < inputs.length; i++) {
	var here = inputs[i];

	here.onclick  = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};

	here.onchange = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};
}

var passInput = document.getElementById('pass');
var showPass = false;

document.getElementById('showPass').onclick = function(){

	if (showPass){
		passInput.style.backgroundImage = "url('/img/eye-a.svg')";
		passInput.type = "password";
	}
	else {
		passInput.style.backgroundImage = "url('/img/eye-b.svg')";
		passInput.type = "text";
	}


	showPass = !showPass;
	console.log(showPass)
};