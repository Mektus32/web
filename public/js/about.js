$(document).ready(function () {
    const time = 800;
    let index = 0;

    $(".languages-button").click(function () {
        $("#languages").toggle("hidden");
    });

    $(".lab2-button").click(function () {
        location.href="/math";
    });

    $("#photo_next").click(function () {
        ++index;
        index %= 3;
        $(".image").fadeOut(time, function () {
            $(this).attr("src", "public/source/" + index + ".jpg").fadeIn(time);
        });
    });

    $("#photo_prev").click(function () {
        --index;
        if (index < 0) {
            index = 2
        }
        $(".image").fadeOut(time, function () {
            $(this).attr("src", "public/source/" + index + ".jpg").fadeIn(time);
        });
    });
});