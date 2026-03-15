/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   Neden yapıyoruz? İstediğimiz ID'ye sahip kategoriye
   başarıyla ulaştığımızı ve sistemin çökmediğini kanıtlamak için.
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

/* =========================================================
   2. ARA İŞLEM: Gelen datayı Postman'in okuyabileceği formata çevirme
   Neden yapıyoruz? Postman'in dönen cevabın içindeki
   kelimeleri (remark vs.) okuyabilmesi için JSON'a çeviriyoruz.
   ========================================================= */
var jsonData = pm.response.json();

/* =========================================================
   3. AND ADIMI: Remark bilgisinin "success" olduğunu doğrulama
   Neden yapıyoruz? User Story 007'deki kabul kriteri (Acceptance Criteria)
   bizden açıkça remark değerinin "success" olmasını bekliyor.
   ========================================================= */
pm.test("Remark bilgisi 'success' olmali", function () {
    pm.expect(jsonData.remark).to.eql("success");
});

/* =========================================================
   4. EKSTRA KONTROL (Opsiyonel ama profesyonel):
   Gelen verinin boş olmadığını doğrulama
   Neden yapıyoruz? Başarılı döndü ama "data" gerçekten var mı?
   ========================================================= */
pm.test("Gelen cevapta kategori detaylari (data) bulunmali", function () {
    pm.expect(jsonData).to.have.property("data");
});