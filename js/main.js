
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

