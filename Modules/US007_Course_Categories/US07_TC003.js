//1. GÖREV: Olmayan bir ID yazarsak ne olur?
// 1. Status Code 203 olmalı
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

// 2. Remark bilgisi 'failed' olmalı
pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

// 3. Mesaj tam olarak resimdeki gibi olmalı
pm.test("Message bilgisi dogru gelmeli", function () {
    pm.expect(jsonData.data.message).to.eql("There is not category for this id.");
});


//2. GÖREV: ID yazmayı unutursak ne olur?

// 1. Status Code 203 olmalı
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

// 2. Remark bilgisi 'failed' olmalı
pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

// 3. Mesaj tam olarak resimdeki gibi olmalı
pm.test("Message bilgisi 'No id' olmali", function () {
    pm.expect(jsonData.data.message).to.eql("No id");
});