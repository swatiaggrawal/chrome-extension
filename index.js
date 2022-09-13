
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

let leadFromlocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadFromlocalStorage)

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    console.log( localStorage.getItem("myLeads") )
    
    
})
function renderLeads(){
let listItems=""

for(let i=0;i<myLeads.length;i++){
   //ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"

   //const li=document.createElement("li")
   //li.textContent=myLeads[i]
   //ulEl.append(li)

listItems+= `
                <li>
                    <a href='${myLeads[i]}' target='_blank' >
                        ${myLeads[i]}
                    </a>
                </li>
            `
}
ulEl.innerHTML=listItems
}
