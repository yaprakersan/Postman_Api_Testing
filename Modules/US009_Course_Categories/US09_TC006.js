/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: İsmin gerçekten değiştiğini doğrulama
   Neden yapıyoruz? Asıl ismin 'translations' listesinin
   içinde saklandığını biliyoruz. Oraya inip kontrol ediyoruz.
   ========================================================= */
pm.test("Kategori adi 'Education and Training' olarak guncellenmis olmali", function () {

    // Matruşka bebeklerini açıyoruz: data -> translations[0] -> title
    var guncelIsim = jsonData.data.translations[0].title;

    // Beklediğimiz yeni isimle eşleşiyor mu bakıyoruz
    pm.expect(guncelIsim).to.eql("Education and Training");

});