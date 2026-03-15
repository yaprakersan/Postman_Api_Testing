/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Başarı bilgisinin "success" olduğunu doğrulama
   (Dokümanda status yazsa da genelde remark içinde success döner)
   ========================================================= */
pm.test("Basari bilgisi 'success' olmali", function () {
    // Eğer bu test hata verirse jsonData.remark yerine jsonData.status deneriz
    pm.expect(jsonData.remark).to.eql("success");
});

/* =========================================================
   3. AND ADIMI: Silme mesajının doğru olduğunu doğrulama
   ========================================================= */
pm.test("Message bilgisi 'Successfully Deleted.' olmali", function () {
    pm.expect(jsonData.Message).to.eql("Successfully Deleted.");
});