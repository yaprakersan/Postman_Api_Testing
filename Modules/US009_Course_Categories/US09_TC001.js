/* =========================================================
   1. THEN ADIMI: Status Code'un 200 olduğunu doğrulama
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
   (Yine 'Message' kelimesinin M'si büyük, dikkat edelim)
   ========================================================= */
pm.test("Message bilgisi 'Successfully Updated.' olmali", function () {
    pm.expect(jsonData.Message).to.eql("Successfully Updated.");
});

