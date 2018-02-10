doctype = [
	{val: 'repang', desc:'Reparatur - Angebot'},
	{val: 'repauf', desc:'Reparatur - Auftrag'},
	{val: 'reprec', desc:'Reparatur - Rechnung'},
	{val: 'montang', desc:'Montage - Angebot'},
	{val: 'montauf', desc:'Montage - Auftrag'},
	{val: 'montrec', desc:'Montage - Rechnung'},
];

function selectAddress(id) {
	var cb = document.getElementsByName('address');
	for (var i = 0; i < cb.length; i++) {
		if(id !== i) {
			cb[i].checked = false;
		}
		else {
			var address = document.getElementById(`address${i}`).nextSibling.nextSibling;
			document.getElementById('Buro').innerText = "SP:Horvat, " + address.innerText;
		}
	}
}

function setRadioButtons(only) {
	var ul = document.getElementById('rprtmnt');
	ul.innerHTML = '';
	for (var i = 0; i < doctype.length; i++) {
		if(only !== undefined && only.attributes.value.nodeValue !== doctype[i].val ) {
			continue;
		}
		var li = document.createElement('li');
		li.innerHTML = doctype[i].desc;
		li.setAttribute('value',doctype[i].val);
		if (only !== undefined) {
			li.addEventListener('click', function() { setRadioButtons(); });
		}
		else {
			li.addEventListener('click', function() { setRadioButtons(this); });
		}
		ul.appendChild(li);
	}
}

$(document).ready(function(){
    $(".datepicker").each(function() {
        $(this).datepicker();
    });
});

document.onload = setRadioButtons(undefined);
