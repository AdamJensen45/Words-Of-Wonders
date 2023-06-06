let array = ["D", "A", "T", "E", "S"];
let selectedStr = "";
let words = ["DATES", "TASE", "SEAT", "EAT", "EAST"]
let foundwords = []
let hintcheck = false;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}





$(function () {


    $(".circle").on("contextmenu", function (event) {
        event.preventDefault();
    });

    $(".circle").mouseup(function (event) {
        if (event.which === 3) {
            if ((jQuery.inArray(selectedStr, words) === -1)) {
                $("#circledisplay").effect("shake");

                if (jQuery.inArray(selectedStr, foundwords) !== -1) {
                    $("." + selectedStr.toLowerCase() + " span").effect("pulsate", { times: 3 }, "slow");
                }

                selectedStr = "";
                $("#circletext").text(selectedStr);
                for (let i = 0; i < 5; i++) {
                    $("#s" + (i + 1)).animate({ backgroundColor: "rgb(171, 219, 227, 0.9)" })

                }

                $(".select").removeClass("selectedletter");
                $("#circledisplay").fadeOut();



            }
            else {
                $("#circledisplay").fadeOut();

                switch (selectedStr) {
                    case "DATES":
                        $(".dates span").css("visibility", "visible")
                        $(".dates span").hide()
                        for (let i = 0; i < foundwords.length; i++) {
                            $("." + foundwords[i].toLowerCase() + " span").show()
                        }
                        $(".dates span").fadeIn()
                        break;

                    case "TASE":

                        $(".tase span").css("visibility", "visible")
                        $(".tase span").hide()
                        for (let i = 0; i < foundwords.length; i++) {
                            $("." + foundwords[i].toLowerCase() + " span").show()
                        }
                        $(".tase span").fadeIn()

                        break;

                    case "SEAT":
                        $(".seat span").css("visibility", "visible")
                        $(".seat span").hide()
                        for (let i = 0; i < foundwords.length; i++) {
                            $("." + foundwords[i].toLowerCase() + " span").show()
                        }
                        $(".seat span").fadeIn()
                        break;



                    case "EAT":
                        $(".eat span").css("visibility", "visible")
                        $(".eat span").hide()
                        for (let i = 0; i < foundwords.length; i++) {
                            $("." + foundwords[i].toLowerCase() + " span").show()
                        }
                        $(".eat span").fadeIn()
                        break;

                    case "EAST":
                        $(".east span").css("visibility", "visible")
                        $(".east span").hide()
                        for (let i = 0; i < foundwords.length; i++) {
                            $("." + foundwords[i].toLowerCase() + " span").show()
                        }
                        $(".east span").fadeIn()
                        break;


                }
                words.splice($.inArray(selectedStr, words), 1);
                foundwords.push(selectedStr);
                selectedStr = "";
                $("#circletext").text(selectedStr);
                for (let i = 0; i < 5; i++) {
                    $("#s" + (i + 1)).animate({ backgroundColor: "rgb(171, 219, 227, 0.9)" })

                }
                $(".select").removeClass("selectedletter");



            }
        }
    });

    $(".shicon").click(function () {
        if (selectedStr.length === 0) {
            shuffle(array)
            for (let i = 0; i < array.length; i++) {
                $("#s" + (i + 1)).text(array[i]);
            }
        }
        else {
            //not shaking when hovered??
            $(this).effect("shake", { times: 2 }, 500);

        }


    });
    $(".bulb").click(function () {
        if (hintcheck === true) {
            for (let i = 0; i < words.length; i++) {
                $("." + words[i].toLowerCase() + " span").css("visibility", "hidden")
                $("." + words[i].toLowerCase() + " span").css("opacity", "100%")

                for (let i = 0; i < foundwords.length; i++) {
                    $("." + foundwords[i].toLowerCase() + " span").css("opacity", "100%")
                    $("." + foundwords[i].toLowerCase() + " span").css("visibility", "visible")
                }



            }
            hintcheck = false;
        }

        else if (hintcheck === false) {
            for (let i = 0; i < words.length; i++) {
                $("." + words[i].toLowerCase() + " span").css("visibility", "visible")
                $("." + words[i].toLowerCase() + " span").css("opacity", "50%")
                for (let i = 0; i < foundwords.length; i++) {
                    $("." + foundwords[i].toLowerCase() + " span").css("opacity", "100%")
                    $("." + foundwords[i].toLowerCase() + " span").css("visibility", "visible")
                }

            }
            hintcheck = true;
        }
    });




    $(".select").click(function () {
        for (let i = 0; i < words.length; i++) {
            $("." + words[i].toLowerCase() + " span").css("visibility", "hidden")
            $("." + words[i].toLowerCase() + " span").css("opacity", "100%")

            for (let i = 0; i < foundwords.length; i++) {
                $("." + foundwords[i].toLowerCase() + " span").css("opacity", "100%")
                $("." + foundwords[i].toLowerCase() + " span").css("visibility", "visible")
            }



        }
        hintcheck = false;
        if ($(this).hasClass("selectedletter")) {
            $(this).effect("bounce");
        }

        else {
            $("#circledisplay").show();
            selectedStr += $(this).text();
            $("#circletext").text(selectedStr);
            $(this).addClass("selectedletter");
            $(this).animate({ backgroundColor: "#377FD6" })
            $("#text-bg").css("background-color", "red")


        }

    });

});