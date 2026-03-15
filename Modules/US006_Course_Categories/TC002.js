pm.test("Status code 200 donmeli", function () {
  pm.response.to.have.status(200);
});

const jsonData = pm.response.json();

pm.test("ID(x) yoksa otomatik sec, kaydi bul ve mevcut alanlari dogrula", function () {
  pm.expect(jsonData).to.have.nested.property("data.categories");
  const categories = jsonData.data.categories;
  pm.expect(categories).to.be.an("array").that.is.not.empty;

  // ID al (yoksa otomatik sec)
  let arananIdRaw = pm.variables.get("arananKategoriId");
  if (!arananIdRaw) {
    pm.environment.set("arananKategoriId", String(categories[0].id));
    arananIdRaw = String(categories[0].id);
  }
  const arananId = Number(arananIdRaw);

  const hedefVeri = categories.find((x) => Number(x.id) === arananId);
  pm.expect(hedefVeri, `Aradigin ID (${arananId}) listede bulunamadi!`).to.exist;

  // Bu endpoint'in gercek alanlari
  pm.expect(hedefVeri).to.have.property("id");
  pm.expect(hedefVeri).to.have.property("slug");
  pm.expect(hedefVeri).to.have.property("parent_id");
  pm.expect(hedefVeri).to.have.property("icon");
  pm.expect(hedefVeri).to.have.property("order");
  pm.expect(hedefVeri).to.have.property("title");
  pm.expect(hedefVeri).to.have.property("sub_categories");
  pm.expect(hedefVeri).to.have.property("translations");

  // translations icindeki category_id dogrulamasi
  pm.expect(hedefVeri.translations).to.be.an("array").that.is.not.empty;
  hedefVeri.translations.forEach((t, idx) => {
    pm.expect(t, `translations[${idx}] category_id yok`).to.have.property("category_id");
    pm.expect(Number(t.category_id), `translations[${idx}] category_id sayi olmali`).to.be.a("number");
    pm.expect(Number(t.category_id), `translations[${idx}] category_id, category.id ile ayni olmali`)
      .to.eql(Number(hedefVeri.id));
  });
});