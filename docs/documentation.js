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
        $('#content').load(template, function(response, status, xhr) {
            if (status == "error") { 
                $('#content').load('docs/404.html');
            }
            window.location.hash = template;
        });
    }

    //init
    if (window.location.hash) {
        template = window.location.hash.replace("#",""); 
        loadTemplate(template);
    }
    // Anchors pointing at an id, but not a hash placeholder
    $("a:not([href=#])").click(function(e) {
        e.preventDefault();

        // Cache the selector
        var template = $(this).attr("href");

        // Load template with handlebars.js
        loadTemplate(template);     
        
    });
}

$(document).ready(function() {

    contentLoader();
    
});