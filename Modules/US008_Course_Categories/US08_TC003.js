/* =========================================================
   1. THEN ADIMI: Status Code'un 401 (Yetkisiz) olduğunu doğrulama
   Neden yapıyoruz? Verimiz doğru olsa bile şifremiz yanlış olduğu
   için sistemin bizi içeri almaması gerekiyor.
   ========================================================= */
pm.test("Status code 401 Unauthorized donmeli", function () {
    pm.response.to.have.status(401);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Güvenlik hata mesajının doğru geldiğini doğrulama
   ========================================================= */
pm.test("Message bilgisi 'Unauthenticated.' olmali", function () {
    pm.expect(jsonData.message).to.eql("Unauthenticated.");
});