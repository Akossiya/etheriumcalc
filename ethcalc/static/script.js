
function solve()
{
	let x = document.getElementById("res").value

	if  (document.getElementById("ec").selected == true) {
		x = x * 5.07
	}
	else if  (document.getElementById("e").selected == true) {
		x = x * 343.47
	}


	document.getElementById("res").value = x
}

function clear()
{
	document.getElementById("res").value = ""
}


