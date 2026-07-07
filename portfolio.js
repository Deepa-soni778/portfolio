const button1 = document.querySelector(".download-btn");

if(button1){

button1.addEventListener("click", () => {

    window.location.href =
    "mailto:sonideepa414@gmail.com?subject=Let's%20Inquiry&body=Hi,%20I%20visited%20your%20portfolio.";

});

}



const downloadBtn = document.getElementById("downloadResume");

if(downloadBtn){

downloadBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const link = document.createElement("a");

    link.href = "./assets/resume2.pdf";

    link.setAttribute("download","Deepa_Soni_Resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});

}



const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

const icon = themeBtn.querySelector("i");

// Load saved theme

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light-theme");

    icon.className="fa-solid fa-moon";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        icon.className="fa-solid fa-moon";

        localStorage.setItem("theme","light");

    }

    else{

        icon.className="fa-solid fa-sun";

        localStorage.setItem("theme","dark");

    }

});

}