$(document).ready(function(){
    // Opcje
    var szybkosc = 500; //szybkość zmiany slajdów
    var automatycznaZmiana = true; //czy automatyczna zmiana slajdów?
    var czasZmianySlajdu = 4000;

    // ustawiam pierwszy slajd na aktywny
    $(".slide").first().addClass("active");

    //ukrywam wszystkie slajdy
    $(".slide").hide();

    //pokazuje aktywny slajd
    $(".active").show();

    
    $("#next").click(nastepnySlajd);

    $("#prev").click(poprzedniSlajd);

    if(automatycznaZmiana == true) {
        setInterval(nastepnySlajd, czasZmianySlajdu)
    }

    function nastepnySlajd () {
        //zmiana klasy active na oldActive
        $(".active").removeClass("active").addClass("oldActive");
        //sprawdzam, czy slajd nie jest przypadkiem ostatni
        if ($(".oldActive").is(":last-child")) {
            //jest ostatni, to ustawiam klasę active na pierwszym slajdzie
            $(".slide").first().addClass("active")
        } else {
            //nie jest ostatni
            //kolejnemu elementowi nadaję klase active
            $(".oldActive").next().addClass("active");
        };
        //usuwam zbednego juz oldActive
        $(".oldActive").removeClass("oldActive");

        //chowamy slajdy klasy slide
        $(".slide").fadeOut(szybkosc);
        //pokazujemy slajd o klasie active
        $(".active").fadeIn(szybkosc);
    }

    function poprzedniSlajd () {
        $(".active").removeClass("active").addClass("oldActive");
        if ($(".oldActive").is(":first-child")) {
            $(".slide").last().addClass("active")
        } else {
            $(".oldActive").prev().addClass("active");
        };
        $(".oldActive").removeClass("oldActive");

        $(".slide").fadeOut(szybkosc);
        $(".active").fadeIn(szybkosc);
    }
});