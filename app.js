function updateOutput(){
     $("iframe").contents().find("html").html(
       "<html><head><style>"+ $("#cssPanel").val() +"</style></head><body>" +$("#htmlPanel").val() + "</body></html>")
    
document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}
       
$(".toggleButton").hover(function(){
       $(this).addClass("highLightedColor")
}, function(){
    $(this).removeClass("highLightedColor")
})

$(".toggleButton").click(function(){
    $(this).toggleClass("active")
    
    $(this).removeClass("highLightedColor")
    
var panelId= $(this).attr("id") + "Panel"

 $("#" + panelId).toggleClass("hidden");
    
var activePanel=4-$(".hidden").length;
    
$(".panel").width(($(window).width()/activePanel)-10);
})
    $("textarea").height($(window).height()-$("#header").height()-15)
        
 $(".panel").height($(window).height()-$("#header").height()-15)
        
 $(".panel").width(($(window).width()/2)-10);
        
updateOutput();
        
        
$("textarea").on('change keyup paste', function() {
   updateOutput();
});