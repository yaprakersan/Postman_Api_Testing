/* =========================================================
   1. THEN ADIMI: Status Code'un 422 olduğunu doğrulama
   Neden yapıyoruz? Sistem eksik veri geldiğini fark edip
   "Bu veriyi işleyemem (Unprocessable Entity)" demeli.
   ========================================================= */
pm.test("Status code 422 donmeli", function () {
    pm.response.to.have.status(422);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Hata mesajının doğru geldiğini doğrulama
   ========================================================= */
pm.test("Message bilgisi 'The title field is required.' olmali", function () {
    pm.expect(jsonData.message).to.eql("The title field is required.");
});