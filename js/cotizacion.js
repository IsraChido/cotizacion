function calcular() {
    let valor = document.getElementById("valor").value;
    let enganche = valor*.3;
    const plan = document.getElementById("planes").value;
    let interes;

    if (plan==12) {
        interes = 0.125;
    } else if (plan==18) {
        interes = 0.172;
    } else if (plan==24) {
        interes = 0.21;
    } else if (plan==36) {
        interes = 0.26;
    } else if (plan==48) {
        interes = 0.45;
    } 

    let total = (valor-enganche)+((valor-enganche)*interes);
    let mensual = total/plan;

    document.getElementById("enganche").value = "" + enganche.toFixed(2);
    document.getElementById("total").value = "" + total.toFixed(2);
    document.getElementById("mensual").value = "" + mensual.toFixed(2);
}

function limpiar() {
    document.getElementById("valor").value = "";
    document.getElementById("enganche").value = "";
    document.getElementById("total").value = "";
    document.getElementById("mensual").value = "";
}