let pokemon=[];
$(".add").click(function() {
 var more=$(".picture-url").val();   
 pokemon.push(more);
 $(".gallery").append("<img src='"+more+"'>");
 $(".picture-url").val("");
});