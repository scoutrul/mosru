import './stylus.styl';

document.getElementById('photo').onchange =  function(){
		file_src.innerHTML = this.value;
	};



// document.getElementById('tel').onchange =  function(){
// 		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
// 	};
// document.getElementById('fio').onchange =  function(){
// 		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
// 	};
// document.getElementById('pass').onchange =  function(){
// 		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
// 	};
// document.getElementById('email').onchange =  function(){
// 		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
// 	};


// var some = {
// 	input: ["photo", "list", "tel", "fio", "pass", "email"] 
// 	method: ["onchange", "onblur"]
// // }

// var test = function(e){
// 	var e = document.getElementById(e);
// 	console.log(e)
// };

var inputs = document.querySelectorAll('.test');

for (var i = 0; i < inputs.length; i++) {
  var here = inputs[i];

	here.onclick  = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};
	here.onfocus  = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};
	here.onchange = function() {
		this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
	};
}