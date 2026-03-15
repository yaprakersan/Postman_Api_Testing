/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Ana Veri (Data) Kutusunun Doğrulanması
   ========================================================= */
pm.test("Ana veri basliklari (id, slug, icon vb.) eksiksiz olmali", function () {
    var anaVeri = jsonData.data;

    // Dökümanın ilk yarısındaki kelimeler
    pm.expect(anaVeri).to.have.property("id");
    pm.expect(anaVeri).to.have.property("slug");
    pm.expect(anaVeri).to.have.property("parent_id");
    pm.expect(anaVeri).to.have.property("icon");
    pm.expect(anaVeri).to.have.property("order");
    pm.expect(anaVeri).to.have.property("title");
});

/* =========================================================
   3. AND ADIMI: Çeviri (Translations) Kutusunun Doğrulanması
   ========================================================= */
pm.test("Ceviri (translations) basliklari eksiksiz olmali", function () {
    // translations bir liste [] olduğu için ilk elemanını [0] alıyoruz
    var ceviriVerisi = jsonData.data.translations[0];

    // Eğer liste boş gelirse test mantıklı hata versin diye güvenlik:
    pm.expect(ceviriVerisi, "Ceviri listesi bos!").to.not.be.undefined;

    // Dökümanın ikinci yarısındaki (tekrar eden) kelimeler
    pm.expect(ceviriVerisi).to.have.property("id");
    pm.expect(ceviriVerisi).to.have.property("category_id");
    pm.expect(ceviriVerisi).to.have.property("locale");
    pm.expect(ceviriVerisi).to.have.property("title");
});