function saatiGoster() {
    const zaman = new Date();
    const divSaat = document.getElementById("saat");
    divSaat.textContent = zaman.toLocaleTimeString("tr");
}

saatiGoster();

//her 1000ms de bir bumetodu calistir
setInterval(saatiGoster, 1000);