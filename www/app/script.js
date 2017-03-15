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

// Eye on password, show input value

var eyeShow = document.getElementById('showPass');
var showPass = false;

eyeShow.onclick = function(){

	var passInput = document.getElementById('pass');
	
	var passState = {

		hide: function(){
			passInput.style.backgroundImage = "url('/mosru/img/eye-a.svg')";
			passInput.type = "password";
		},
		show: function(){
			passInput.style.backgroundImage = "url('/mosru/img/eye-b.svg')";
			passInput.type = "text";
		}
	};

	!(showPass) ? passState.show() : passState.hide();

	showPass = !showPass;
};