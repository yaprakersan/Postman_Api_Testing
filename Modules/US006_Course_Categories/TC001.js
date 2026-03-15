/* =========================================================
   THEN ADIMI: Status Code'un 200 olduğunu doğrulama
   Neden yapıyoruz? Çünkü sistemin çökmediğini, (200 OK) kanıtlamamız lazım.
   ========================================================= */
pm.test("Status code 200 donmeli", function () {
    pm.response.to.have.status(200);
});


/* =========================================================
   ARA İŞLEM: Gelen datayı Postman'in okuyabileceği formata çevirme
   Neden yapıyoruz? Postman gelen cevabı düz bir metin olarak görür.
   Biz ona "Bu bir JSON verisidir, bunu bir kitaba dönüştür ki
   içindeki kelimeleri (remark) bulabilelim" diyoruz.
   ========================================================= */
var jsonData = pm.response.json();


/* =========================================================
   AND ADIMI: Remark bilgisinin "success" olduğunu doğrulama
   Neden yapıyoruz? (200) ama belki içeride
   "Kategoriler bulunamadı" yazıyor? Görevimiz, sistemin
   bize "success" (başarılı) kelimesini döndüğünü garanti etmektir.
   ========================================================= */
pm.test("Remark bilgisi 'success' olmali", function () {
    pm.expect(jsonData.remark).to.eql("success");
});