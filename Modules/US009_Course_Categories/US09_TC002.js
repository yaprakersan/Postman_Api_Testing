/* =========================================================
   1. THEN ADIMI: Status Code'un 203 olduğunu doğrulama
   ========================================================= */
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

/* =========================================================
   2. AND ADIMI: Remark bilgisinin "failed" olduğunu doğrulama
   ========================================================= */
pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

/* =========================================================
   3. AND ADIMI: Message bilgisinin doğru geldiğini doğrulama
   ========================================================= */
pm.test("Message bilgisi 'There is no information to update.' olmali", function () {
    pm.expect(jsonData.message).to.eql("There is no information to update.");
});