/* =========================================================
   1. THEN: Status Code'un 200 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

/* =========================================================
   2. ARA İŞLEM: İŞTE EKSİK OLAN SATIR BURASI!
   Gelen cevabı Postman'in okuyabilmesi için jsonData'ya çeviriyoruz
   ========================================================= */
var jsonData = pm.response.json();

/* =========================================================
   3. AND: Remark bilgisinin "success" olduğunu doğrulama
   ========================================================= */
pm.test("Remark bilgisi 'success' olmali", function () {
    pm.expect(jsonData.remark).to.eql("success");
});

/* =========================================================
   4. AND: DİNAMİK ID ile kategorinin bulunması ve doğrulanması
   ========================================================= */
pm.test("Dinamik ID ile kategori eksiksiz donmeli", function () {

    // Postman'in hafızasından (Environment) dinamik ID'yi çekiyoruz
    var arananId = pm.variables.get("arananKategoriId");

    // Koca listenin içinde o dinamik ID'yi buluyoruz
    var hedefKategori = jsonData.data.categories.find(kategori => kategori.id == arananId);

    // Eğer yazdığımız ID listede yoksa sistem bize özel hata versin
    pm.expect(hedefKategori, "Aranan ID listede bulunamadi!").to.not.be.undefined;

    // Bulduğumuz o spesifik kategorinin bilgilerini doğruluyoruz
    pm.expect(hedefKategori).to.have.property("id");
    pm.expect(hedefKategori).to.have.property("slug");
    pm.expect(hedefKategori).to.have.property("parent_id");
    pm.expect(hedefKategori).to.have.property("icon");
    pm.expect(hedefKategori).to.have.property("order");

    // Bulunan dinamik kategorinin translations detayları
    var translations = hedefKategori.translations[0];

    pm.expect(translations).to.have.property("category_id");
    pm.expect(translations).to.have.property("locale");
    pm.expect(translations).to.have.property("title");
});