$(document).ready(function () {
    $("#click").click(function () {
        $.get("https://www.foaas.com/anyway/:company/:from", function (data) {
        }, 'json')
    });

    $('input[name="api"]').click(function(){
        if ($(this).val() === "cats") {
            $("#cats").show();
            $("#letters").hide();
        } else {
            $("#letters").show();
            $("#cats").hide();
        }
    });

    $('#allowed').click(function () {
        alert("here");
        $('#help').toggle();
    });

    function fillFields() {
        for (let key in letterData) {
            url = key;
            phase = letterData[key];
            $('#phase').append(`<option value="${url}">${phase}</option>`);
        }
    }
    let letterData = {
        "/asshole/:from": "Fuck you, asshole. - :from",
        "/awesome/:from": "This is Fucking Awesome. - :from",
        "/back/:name/:from": ":name, back the fuck off. - :from",
        "/bag/:from": "Eat a bag of fucking dicks. - :from",
        "/ballmer/:name/:company/:from": "Fucking :name is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill :company. - :from",
        "/bday/:name/:from": "Happy Fucking Birthday, :name. - :from",
        "/because/:from": "Why? Because fuck you, that`s why. - :from",
        "/blackadder/:name/:from": ":name, your head is as empty as a eunuch’s underpants. Fuck off! - :from",
        "/bm/:name/:from": "Bravo mike, :name. - :from",
        "/bucket/:from": "Please choke on a bucket of cocks. - :from",
        "/bus/:name/:from":	"Christ on a bendy-bus, :name, don`t be such a fucking faff-arse. - :from",
        "/bye/:from": "Fuckity bye! - :from",
        "/chainsaw/:name/:from": "Fuck me gently with a chainsaw, :name. Do I look like Mother Teresa? - :from",
        "/cocksplat/:name/:from": "Fuck off :name, you worthless cocksplat - :from",
        "/cool/:from": "Cool story, bro. - :from",
        "/cup/:from": "How about a nice cup of shut the fuck up? - :from",
        "/dalton/:name/:from": ":name: A fucking problem solving super-hero. - :from",
        "/deraadt/:name/:from":	":name you are being the usual slimy hypocritical asshole... You may have had value ten years ago, but people `Will see that you don`t anymore. - :from",
        "/diabetes/:from": "I`d love to stop and chat to you but I`d rather have type 2 diabetes. - :from",
        "/donut/:name/:from": ":name, go and take a flying fuck at a rolling donut. - :from",
        "/equity/:name/:from": "Equity only? Long hours? Zero Pay? Well :name, just sign me right the fuck up. - :from",
        "/even/:from": "I can`t fuckin` even. - :from",
        "/everyone/:from": "Everyone can go and fuck off. - :from",
        "/everything/:from": "Fuck everything. - :from",
        "/family/:from": "Fuck you, your whole family, your pets, and your feces. - :from",
        "/fascinating/:from": "Fascinating story, in what chapter do you shut the fuck up? - :from",
        "/fewer/:name/:from": "Go fuck yourself :name, you`ll disappoint fewer people. - :from",
        "/flying/:from": "I don`t give a flying fuck. - :from"
    };
    let codes = {
        100: "Continue", 101: "Switching protocol", 102: "Processing", 200: "Ok",
        201: "Created", 202: "Accepted", 204: "No content", 206: "Partial content",
        207: "Multi-Status", 300: "Multiple Choices", 301: "Moved Permanently",
        302: "Found", 303: "Se Other", 304: "Not Modified", 305: "Use Proxy",
        307: "Temporary direct", 400: "Bad request", 401: "Authorized",
        402: "Payment Required", 403: "Forbidden", 404: "Not Found",
        405: "Method not allowed", 406: "Not Acceptable", 408: "Request Timeout",
        409: "Conflict", 410: "Gone", 411: "Length Required"
    }
    fillFields();
});