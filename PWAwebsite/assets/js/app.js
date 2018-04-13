function searchFunction() {
    var input, filter, div, div, section, article, a, h2, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("wrapper");
    div = div.getElementById("main");      
    div = div.getElementsByClassName("inner");
    section = div.getElementById("destination-tiles");
    article = section.getElementsByTagName("article")
    a = article.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        h2 = a[i].getElementsByTagName("h2")[0];
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";

        }
    }
}