
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")

const leadFromlocalStorage=JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadFromlocalStorage)

if(leadFromlocalStorage){
    myLeads=leadFromlocalStorage
    renderLeads()
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
   // console.log( localStorage.getItem("myLeads") )
    
    
})
function renderLeads(){
let listItems=""

for(let i=0;i<myLeads.length;i++){
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
