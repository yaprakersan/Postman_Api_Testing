/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   Neden yapıyoruz? Yeni verinin sunucuya başarıyla ulaştığını
   ve kaydedildiğini kanıtlamak için.
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Remark bilgisinin "success" olduğunu doğrulama
   ========================================================= */
pm.test("Remark bilgisi 'success' olmali", function () {
    pm.expect(jsonData.remark).to.eql("success");
});

/* =========================================================
   3. AND ADIMI: Message bilgisinin doğru olduğunu doğrulama
   Not: Geliştirici burada "Message" kelimesinin baş harfini
   büyük (M) yazmış. Kodda birebir aynı yazmalıyız.
   ========================================================= */
pm.test("Message bilgisi 'Successfully Added.' olmali", function () {
    pm.expect(jsonData.Message).to.eql("Successfully Added.");
});

/* =========================================================
   EKSTRA KONTROL: Sistem bize yeni ID'yi verdi mi?
   Neden yapıyoruz? Profesyonel bir QA, verinin sadece eklendiğini
   değil, sistemin ona bir ID atayıp atamadığını da kontrol eder.
   ========================================================= */
pm.test("Sistem eklenen kategoriye bir ID atamali", function () {
    pm.expect(jsonData).to.have.property("Added Category ID");
});