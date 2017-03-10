import './stylus.styl';

document.getElementById('photo').onchange =  function(){
		file_src.innerHTML = this.value;
	};


var inputs = document.querySelectorAll('.test');

for (var i = 0; i < inputs.length; i++) {
  var here = inputs[i];

	here.onclick  = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};

	here.onchange = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};
}