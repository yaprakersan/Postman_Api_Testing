/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: URL'deki ID ile Dönen ID'nin eşleşmesi
   Neden yapıyoruz? Sistem 'Güncelledim' diyor ama yanlış
   kişiyi güncellemediğinden emin olmak istiyoruz.
   ========================================================= */
pm.test("Donen ID ile URL'deki ID birbiriyle eslesmeli", function () {

    // 1. Cevap kutusundan dönen ID'yi alıyoruz
    // (Arasında boşluk olduğu için köşeli parantezle alıyoruz)
    var donenId = jsonData["Updated Category Id"];

    // 2. URL'de kullandığımız, Postman hafızasındaki ID'yi alıyoruz
    var urlDekiId = pm.environment.get("yeniKategoriId");

    // Not: Bazen sistem numarayı metin (String) olarak algılayabilir.
    // Garanti olsun diye ikisini de sayıya (Number) çevirip kıyaslıyoruz.
    pm.expect(Number(donenId)).to.eql(Number(urlDekiId));

});