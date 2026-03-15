//GÖREV 1: Yanlış ID Gönderme
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

// Hata mesajı 'data' kutusunun içinde dönüyor
pm.test("Message 'There is not category for this id.' olmali", function () {
    pm.expect(jsonData.data.message).to.eql("There is not category for this id.");
});


//GÖREV 2: Hiç ID Göndermeme
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

pm.test("Message 'No id' olmali", function () {
    pm.expect(jsonData.data.message).to.eql("No id");
});