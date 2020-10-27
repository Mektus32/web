$(document).ready(function () {
    $(".languages-button").click(function () {
        $("#languages").toggle("hidden");
    });

    $(".lab2-button").click(function () {
        location.href="/math";
    });

    let index = 1;
    $(".photo-button").click(function () {
        index %= 4;
        $(".image").attr("src", "public/source/my_photo" + index + ".jpg");
        ++index;
    });
});