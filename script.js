let liste = document.querySelector("#list")
let clickButton = document.querySelector("#liveToastBtn")
let deleteButton = document.querySelector(".buttonActive")
let liveToast = document.querySelector("#liveToast")
let items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(items));
let data = JSON.parse(localStorage.getItem('items'));
const data3 = localStorage.getItem('items');
const data2 = JSON.stringify(localStorage.getItem('items'));
console.log(data)

//input value fonksiyonu -oluşan li ve span elementlerine input içerisindeki değeri yazdırır 
document.querySelector("#liveToastBtn").onclick = function(e){
    let item = document.querySelector("#task").value;
    if (item.length > 0){
        let scAlert = document.getElementById('liveToast1')
        let successAlert = new bootstrap.Toast(scAlert)
        scAlert.classList.add("bg-success")
        successAlert.show()
        CreateItem(item)
    }
    else {
        let dnAlert = document.getElementById('liveToast2')
        let dangerAlert = new bootstrap.Toast(dnAlert)
        dnAlert.classList.add("bg-danger")
        dangerAlert.show()
        
    }
    
    //local storage push
    e.preventDefault();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items))
}

// local storage de kayıtlı olan verileri sayfa yüklendiğinde geri yazdırma -- local storage a son olarak remove ekleyeceğiz
data.forEach(item => {
        CreateItem(item)
});

function getItemFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
   } 

//create item event fonksiyonu  tıkladığımızda -li elementleri ve span elementleri oluşturur.
function CreateItem(items) {
    let li = document.createElement("li")
    let liText = document.createTextNode(items)
    li.className = ''
    li.appendChild(liText)
    liste.appendChild(li)

    let closeItem = document.createElement("span")
    closeItem.className = 'buttonActive float-right badge close'
    let closeItemBtn = document.createElement("button")
    let buttonText = document.createTextNode("X")
    closeItemBtn.className = 'btn'
    closeItemBtn.appendChild(buttonText)
    closeItem.appendChild(closeItemBtn)
    li.appendChild(closeItem)
    document.querySelector("#task").value = ''
    
// click 'x' eventi ile local storage ve listeden eleman silme
closeItem.addEventListener("click", function(e){
        let liItem = this.parentElement;
        liItem.remove();
        let dltAlert = document.getElementById('liveToast3')
        let deleteAlert = new bootstrap.Toast(dltAlert)
        dltAlert.classList.add("bg-warning")
        deleteAlert.show()  
        
        let liLS = liItem.firstChild.textContent
        console.log(liText)
        console.log(liText.textContent)
        
        let data = JSON.parse(localStorage.getItem('items'));
        deleteItemLS(liLS)
        
    })  
 }

 // local storage da dizi içersinden silme fonksiyonu
 function deleteItemLS(text) {
    items = JSON.parse(localStorage.getItem('items'));
    items.forEach(function(item,index){
        if (item === text){items.splice(index,1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

 // checked fonksiyonu
liste.addEventListener("click", function (item){
    if(item.target.tagName='li'){
        item.target.classList.toggle('checked');
    if (item.classList = '.checked') {
        let clcAlert = document.getElementById('liveToast4')
        let clickAlert = new bootstrap.Toast(clcAlert)
        clcAlert.style.backgroundColor = "#276678"
        clickAlert.show()
    }    
    }

})

