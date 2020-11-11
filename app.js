
window.onload = function() {
var search = document.getElementById("search");

search.addEventListener("click", function(event){
    event.preventDefault();
    var inputString = document.getElementById("input").value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET","superheroes.php?q="+inputString,true);
    httpRequest.onload = function(){
        if(this.status == 200){
            var superhero = JSON.parse(this.response)
            document.getElementById("alias").innerHTML = superhero.alias;
            document.getElementById("name").innerHTML = superhero.name;
            document.getElementById("description").innerHTML = superhero.biography;
            
        }
    }
    httpRequest.send();
})
}