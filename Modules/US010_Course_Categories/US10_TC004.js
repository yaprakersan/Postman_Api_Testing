/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: URL'deki ID ile Dönen ID'yi Karşılaştırma
   ========================================================= */
pm.test("Silinen ID ile URL'deki ID birbiriyle eslesmeli", function () {

    // 1. Postman'in gönderdiği tam adresi alıp sonundaki numarayı (Örn: 1066) kesip alıyoruz
    var tamAdres = pm.request.url.toString();
    var urlDekiId = tamAdres.split('/').pop();

    // 2. Sistemin bize "Ben bunu sildim" diye döndüğü numarayı alıyoruz
    var donenId = jsonData["Deleted Category Id"];

    // 3. İkisini teraziye koyup eşit mi diye bakıyoruz
    pm.expect(Number(donenId)).to.eql(Number(urlDekiId));

});