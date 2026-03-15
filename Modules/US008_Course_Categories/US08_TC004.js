//AŞAMA 1:
/* =========================================================
   YENİ EKLENEN KOD: Gelen ID'yi Postman'in hafızasına (Environment) kaydetme
   ========================================================= */
var yeniId = jsonData["Added Category ID"];
pm.environment.set("yeniKategoriId", yeniId);
console.log("Hafizaya alinan yeni ID: " + yeniId);

//AŞAMA 2
/* =========================================================
   THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   Neden yapıyoruz? Eğer 200 dönerse, POST isteğiyle
   eklediğimiz kategori gerçekten veritabanına işlenmiş demektir!
   ========================================================= */
pm.test("Status code 200 donmeli - Kategori basariyla olusturulmus", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   EKSTRA GÜVENLİK: Gelen kategorinin ID'si bizim aradığımız ID mi?
   ========================================================= */
pm.test("Gelen kategorinin ID'si hafizadaki ID ile eslesmeli", function () {
    // Hafızadaki numarayı alıyoruz
    var hafizadakiId = pm.environment.get("yeniKategoriId");

    // Gelen data içindeki ID ile eşit mi diye bakıyoruz
    pm.expect(jsonData.data.id).to.eql(hafizadakiId);
});