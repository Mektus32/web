$(document).ready(function () {
    function showResult(data) {
        let text = ""
        if ($('input[name="number"]:checked').val() == "range") {
            data = JSON.parse(data);
            for (let val in data) {
                text += data[val] + "\n";
            }
        } else {
            text = data.toString();
        }
        $("#result").text(text);
    }

    function getUrl() {
        let url = "http://numbersapi.com/";

        let number = $('input[name="number"]:checked').val();
        let type = $('input[name="type"]:checked').val();

        if (number == "int" && type != "date") {
            url += $("#number").val();
        } else if (number == "int" && type == "date") {
            url += $("#dateMonth").val() + "/" + $("#dateDay").val() + "/date";
        } else if (number == "range") {
            url += $("#startRange").val() + ".." + $("#endRange").val() + "/" + type;
        } else {
            url += "random" + "/" + type;
        }
        return url;
    }

    $("#click").click(function () {
        let url = getUrl();
        $.get(url, function (data) {
            showResult(data);
        })

    });

    $('input[name="number"]').click(function() {
        updateInput();
    });

    $('input[name="type"]').click(function() {
        updateInput();
    });

    function updateInput() {
        let number = $('input[name="number"]:checked').val();
        let type = $('input[name="type"]:checked').val();

        hideAll();
        if (number == "int" && type != "date") {
            $("#numberDiv").show();
            $("#inputDateDiv").show();
        } else if (number == "int" && type == "date") {
            $("#dateDiv").show();
            $("#inputDateDiv").show();
        } else if (number == "range" && type == "date") {
            $("#inputDateDiv").hide();
            $("#inputTrivial").prop('checked', true);
            $("#rangeDiv").show();
        } else if (number == "range") {
            $("#rangeDiv").show();
            $("#inputDateDiv").hide();
        }
    }

    function hideAll() {
        $("#numberDiv").hide();
        $("#dateDiv").hide();
        $("#rangeDiv").hide();
    }
    hideAll();
});