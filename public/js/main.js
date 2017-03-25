$(document).ready(function () {
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height() - $('#navbar').height()) {
            $('#navbar').fadeIn({
                duration: 500,
            });
        }
        else {
            $('#navbar').fadeOut({
                duration: 500,
            });
        }
    });

    $('.parallax').parallax();
    
    var backgrounds = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg'];
    var current = 0;

    function nextBackground() {
        $('.changingImg img').attr('src', backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    //body.css('background', backgrounds[0]);

    wordCount = 0;
    wordsArray = [" We are MPC Events Firm Inc. ", " We are ******** ", " Delta ", " Alpha "];
    setInterval(function () {
        wordCount++;
        $("#changingTexts").fadeOut(400, function () {
            $(this).text(wordsArray[wordCount % wordsArray.length]).fadeIn(400);
        });
    }, 3000);

});