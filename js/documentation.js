/* ===================================================================
    documentation.js
======================================================================

    @name       Documentation loader
    @author     Gavyn McKenzie
    @copyright  Gavyn McKenzie 2012

    Loads different sections for the G-Set boilerplate documentation

===================================================================== */

var contentLoader = function() {
    
    function loadTemplate(template) {
        var source   = $(template).html();
        var template = Handlebars.compile(source);
        $("#content").html(template()); 
    }

    //init
    if (window.location.hash) {
        loadTemplate(window.location.hash);
    }
    // Anchors pointing at an id, but not a hash placeholder
    $("[href^=#]:not([href=#])").click(function(e) {
        //e.preventDefault();

        // Cache the selector
        var template = $(this).attr("href");

        if ($(template).length) {
            // Load template with handlebars.js
            loadTemplate(template);     
        } else {
            alert("That section of the documentation is missing");
        }
    });
}

$(document).ready(function() {

    contentLoader();
    
});