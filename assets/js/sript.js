document.getElementById("moneyBtn").addEventListener("click", function() {
    window.location.href = "dois_reais.html";
});

document.getElementById("kissBtn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = '<h1>Faz o pix pae</h1><img src="assets/img/cuzin.PNG" alt="QR Code para pagamento Pix">';
});