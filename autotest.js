// autotest for method https://teremok.ru/api/menu/category/?id=34&city_id=17


pm.test("Ожидаю получить статус ответа 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Teremok", function () {
    pm.expect(pm.response.text()).to.include("Окрошка Домашняя на квасе");
});

pm.test("Ожидаю, что ответ придёт быстрее 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

pm.test("Ожидаю, что тело ответа не пустое.", function () {
    pm.response.to.have.body();
});

pm.test("Ожидаю, что тип содержимого ответа соответствует значению - application/json; charset=utf-8.", function () {
    pm.response.to.have.header("content-type", "application/json; charset=utf-8");
});


//autotest for method https://teremok.ru/api/menu/category/?id=51&city_id=17

pm.test("Ожидаю получить статус ответа 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Teremok", function () {
    pm.expect(pm.response.text()).to.include("Пельмени двойная порция");
});

pm.test("Ожидаю, что ответ придёт быстрее 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});