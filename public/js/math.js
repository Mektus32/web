$(document).ready(function () {
    $("#getWord").click(function() {
        $("#result1").html("Ваше слово: " + $("#word").val());
    });

    $("#getSum").click(function() {
        $("#result2").html("Сумма: " + (Number($("#num1").val()) + Number($("#num2").val())));
    });

    $("#getSquare").click(function() {
        let result = "";
        $("#arr").val().split(' ').forEach(function (item, i) {
            if (!isNaN(Number(item))) {
                result += " " + Number(item) * Number(item);
            } else {
                result += " 0";
            }
        });
        $("#result3").html("Новый массив: " + result);
    });

    $(".about-button").click(function () {
        location.href="/about";
    });
});