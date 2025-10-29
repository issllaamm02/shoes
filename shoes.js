let buttons = document.getElementsByClassName("btn-ss");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let sndo9 = this.parentElement;
    
    let datas = sndo9.getElementsByClassName("lm")[0].textContent;
    let datas2 = sndo9.getElementsByClassName("lm2")[0].textContent;
    let datas3 = sndo9.getElementsByClassName("img-lm")[0].getAttribute("src");
    
    localStorage.setItem("data", datas);
    localStorage.setItem("prix", datas2);
    localStorage.setItem("imggg", datas3);
    
    window.location.href = "../index.html";
  });
}

window.addEventListener("load", () => {
  let p1 = document.getElementsByClassName("p1")[0];
  let p2 = document.getElementsByClassName("p3")[0];
  let p3 = document.getElementsByClassName("p0")[0];
  
  let text = localStorage.getItem("data");
  let text2 = localStorage.getItem("prix");
  let src0 = localStorage.getItem("imggg");
  
  if (p1) p1.textContent = text;
  if (p2) p2.textContent = text2 +"da";
  if (p3) p3.setAttribute("src", src0);
});


let bnts = document.getElementsByClassName("bnt");

for (let i = 0; i < bnts.length; i++) {
  bnts[i].addEventListener("click", function() {
    let qnti = document.getElementsByClassName("p2")[0];
    let p4 = document.getElementsByClassName("p4")[0];
    
    if (qnti) {
      let text2 = localStorage.getItem("prix");
      let current = parseInt(qnti.textContent) || 1; 
      let nur= qnti.textContent = current + 1; 
      if (p4) p4.textContent= (text2 * nur +"da")
      }
  });
}
let btncnfrm = document.getElementsByClassName("btn-ordr");

let isssssa = function btncnfrmv(){
  let first=document.getElementById("firsst").value
  let last=document.getElementById("lasst").value
  let inp=document.getElementById("inpt-pr").value
  let p4 = document.getElementsByClassName("p4")[0];
  let p4V = parseFloat(p4.textContent) || 0;

  if (first && last && inp && p4) {
    alert("Request done: " + first + " " + last);
  if (inp === "snai3i") {
      p4.textContent = p4V - 50 +"da";
    }  }
    else {
    alert("dir asmk !");
  }
};

for (let i = 0; i < btncnfrm.length; i++) {
  btncnfrm[i].addEventListener("click", isssssa);
}