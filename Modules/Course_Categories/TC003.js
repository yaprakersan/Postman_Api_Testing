/* =========================================================
   THEN: Status Code'un 401 (Yetkisiz/Unauthorized) olduğunu doğrulama
   (Sistem bizi yakalayıp kapıdan kovdu mu?)
   ========================================================= */
pm.test("Status code 401 Unauthorized donmeli", function () {
    pm.response.to.have.status(401);
});

/* =========================================================
   ARA İŞLEM: Gelen hata mesajını okuma
   ========================================================= */
var jsonData = pm.response.json();

/* =========================================================
   AND: Message bilgisinin "Unauthenticated." olduğunu doğrulama
   (Güvenlik bize tam olarak hocanın istediği cümleyi kurdu mu?)
   ========================================================= */
pm.test("Message bilgisi 'Unauthenticated.' olmali", function () {
    pm.expect(jsonData.message).to.eql("Unauthenticated.");
});