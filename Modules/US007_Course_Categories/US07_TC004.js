/* =========================================================
   1. THEN ADIMI: Status Code'un 401 (Unauthorized) olduğunu doğrulama
   Neden yapıyoruz? Sistem kapıdaki güvenlik görevlisi gibi
   sahte bileti (token) yakalayıp bizi içeri almamalı.
   ========================================================= */
pm.test("Status code 401 Unauthorized donmeli", function () {
    pm.response.to.have.status(401);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Message bilgisinin "Unauthenticated." olduğunu doğrulama
   ========================================================= */
pm.test("Message bilgisi 'Unauthenticated.' olmali", function () {
    pm.expect(jsonData.message).to.eql("Unauthenticated.");
});