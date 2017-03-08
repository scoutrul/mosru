
	document.getElementById('list').onchange =  function(){
			this.className = 'placeholder_in';
		};


	document.getElementById('tel').onchange =  function(){
			this.value !== '' ? this.className='placeholder_in' : this.className='placeholder_out';
		};


	document.getElementById('photo').onchange =  function(){
			file_src.innerHTML = this.value;
		};
