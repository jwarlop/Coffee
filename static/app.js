$( document ).ready(function() {
    console.log( "document loaded" );
    function update0(val){
        document.querySelector('#year0').value=val;
    }
    function update1(val){
        document.querySelector('#year1').value=val;
    }
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
});
