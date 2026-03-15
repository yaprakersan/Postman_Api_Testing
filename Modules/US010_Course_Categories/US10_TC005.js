/* =========================================================
   1. THEN ADIMI: Status Code'un 203 olduğunu doğrulama
   Neden yapıyoruz? Aradığımız kategori silindiği için sistem
   bize 200 (Bulundum) değil, 203 (Bulunamadı) dönmelidir.
   ========================================================= */
pm.test("Status code 203 donmeli (Kategori silinmis olmali)", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Sistemin kaydı bulamadığını onaylama
   ========================================================= */
pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

/* =========================================================
   3. AND ADIMI: Hata mesajının doğrulanması
   ========================================================= */
pm.test("Sistem kaydin olmadigini dogrulayan mesaji vermeli", function () {
    pm.expect(jsonData.data.message).to.eql("There is not category for this id.");
});