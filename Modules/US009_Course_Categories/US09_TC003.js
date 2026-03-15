// 1. Status Check
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

// 2. Remark Check
pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

// 3. Message Check (DİKKAT: API bu hatayı 'data' kutusunun içinde veriyor)
pm.test("Message 'There is not category for this id.' olmali", function () {
    pm.expect(jsonData.data.message).to.eql("There is not category for this id.");
});

//STEP2 NO ID
// 1. Status Check
pm.test("Status code 203 donmeli", function () {
    pm.response.to.have.status(203);
});

var jsonData = pm.response.json();

// 2. Remark Check
pm.test("Remark bilgisi 'failed' olmali", function () {
    pm.expect(jsonData.remark).to.eql("failed");
});

// 3. Message Check
pm.test("Message 'No id' olmali", function () {
    pm.expect(jsonData.data.message).to.eql("No id");
});