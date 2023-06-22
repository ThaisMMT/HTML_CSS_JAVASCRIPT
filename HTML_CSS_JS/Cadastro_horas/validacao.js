function calcularHora() {
	var hora1, hora2;
	if(parseInt(getHoraInicial().replace(":")) >= parseInt(getHoraFinal().replace(":"))) {
		hora1 = new Date("01/01/0001 " + getHoraInicial()).getTime();
		hora2 = new Date("01/02/0001 " + getHoraFinal()).getTime();
	} else {
		hora1 = new Date("01/01/0001 " + getHoraInicial()).getTime();
		hora2 = new Date("01/01/0001 " + getHoraFinal()).getTime();
	}
	var total = Math.abs(hora1 - hora2) / (1000 * 60);
	var minutos = total % 60;
	var horas = (total - minutos) / 60;
	var cargaHoraria = 9;
	var bh = horas - cargaHoraria;
	
	setHora("Você trabalhou " + parseInt(horas) + " horas e " + parseInt(minutos) + " minutos e trabalhou " + bh + " horas e "+ minutos+" minutos " + "horas extras.");
}
function getHoraInicial() {
	var dt = document.getElementById('horaInicio').value;
	return dt;
}
function getHoraFinal(){
	var dt = document.getElementById('horaFim').value;
	return dt;
}
function setHora(arg){
	document.getElementById('spanResposta').innerHTML = arg;
}