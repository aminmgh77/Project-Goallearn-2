
function search() {
    let input = document.createElement("input");
    let button = document.createElement("button");
    let search = document.querySelector("#search");
    let close = document.createElement("button");
    let box = document.getElementById("box");


    input.setAttribute("placeholder" , "Type and Enter...")
    box.classList.add("d-flex");
    close.classList = "btn-close , bg-secondary";
    input.classList = "form-control , me-2 , textbox" ;
    button.innerText = "Search";
    button.classList= "btn , bg-secondary , border-1 , me-3";
    button.style.color = "white";

    input.addEventListener("keyup" , e =>{
        e.preventDefault();
        if (e.keyCode===13) {

            let user = input.value

            window.open("http://google.com/search?q=" + user)
            button.click()
        }
    
    })
    
    close.addEventListener("click" , a =>{
        input.remove();
        button.remove();
        close.remove();
        document.querySelector("#box").appendChild(search);
    })
    


    search.remove();
    document.querySelector("#box").appendChild(input);
    document.querySelector("#box").appendChild(button);
    document.querySelector("#box").appendChild(close);
}


function dark() {
    let header = document.querySelector("#header")
    let blog = document.getElementById("blog")
    let aside_blog = document.getElementById("aside-blog")
    let post = document.querySelectorAll(".posts")

    for (let i = 0; i< post.length; i++) {
      post[i].classList.toggle("dark");
       
    }

    aside_blog.classList.toggle("dark-aside")
    aside_blog.classList.toggle("aside-post")
    blog.classList.toggle("dark-lighter")
    blog.classList.toggle("blog")
    header.classList.toggle("dark")

    
}
let scroll = document.querySelector("button.scroll")


window.addEventListener("scroll", e =>{
    if (window.scrollY > 1500) {
        scroll.classList.add("show")
    }else {
        scroll.classList.remove("show")
    }
})


scroll.addEventListener("click", e =>{
    if (scroll.classList.contains("show")) {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    
})


function show1() {
    let card = document.getElementById("card-body");
    let cardMain = document.getElementById("card-main");
    let text = document.getElementById("text");

    card.classList.remove("fade-tex");
    cardMain.classList.toggle("div1");
    cardMain.classList.toggle("card-main");
}

function show2() {
    let card = document.getElementById("card-body");
    let cardMain = document.getElementById("card-main2");
    let text = document.getElementById("text");

    card.classList.remove("fade-tex");
    cardMain.classList.toggle("div1");
    cardMain.classList.toggle("card-main");
}

function show3() {
    let card = document.getElementById("card-body");
    let cardMain = document.getElementById("card-main3");
    let text = document.getElementById("text");

    card.classList.remove("fade-tex");
    cardMain.classList.toggle("div1");
    cardMain.classList.toggle("card-main");
}

function show4() {
    let card = document.getElementById("card-body");
    let cardMain = document.getElementById("card-main4");
    let text = document.getElementById("text");

    card.classList.remove("fade-tex");
    cardMain.classList.toggle("div1");
    cardMain.classList.toggle("card-main");
}

function show5() {
    let card = document.getElementById("card-body");
    let cardMain = document.getElementById("card-main5");
    let text = document.getElementById("text");

    card.classList.remove("fade-tex");
    cardMain.classList.toggle("div1");
    cardMain.classList.toggle("card-main");
}