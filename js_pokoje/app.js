document.addEventListener('DOMContentLoaded', function() {
    var navLi = document.querySelectorAll(".navLi");
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener("mouseover", function() {
            if (this.firstElementChild !== null) {
               this.firstElementChild.style.display = "block";
            } else {
                return;
            }
        });
        navLi[i].addEventListener("mouseout", function() {
            if (this.firstElementChild !== null) {
                this.firstElementChild.style.display = "none";
            } else {
                return;
            }
        });
    }


var images = document.querySelectorAll("img");
    
    function showImg(event) {
        var imgSrc = this.getAttribute("src");
        var newDiv = document.createElement("div");
        var newBtn = document.createElement("button");
        var newImg = document.createElement("img");
var gallery = document.querySelector(".gallery"); 

        newDiv.classList.add("openedWindow");
        newImg.classList.add("gallery");
        newBtn.classList.add("closeBtn");
	newBtn.setAttribute("display", "inline-block", "padding", "5px 10px");
        newBtn.innerText = "Zamknij";        
        newImg.setAttribute("src", imgSrc);
       gallery.appendChild(newDiv);
	newDiv.appendChild(newImg);
        newDiv.appendChild(newBtn);
        newBtn.addEventListener("click", function(event){
            newDiv.parentNode.removeChild(newDiv);
        });
    }

for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", showImg);
    }

    
});