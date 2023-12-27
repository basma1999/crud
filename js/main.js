var nameSiteInput = document.getElementById('siteNameInput');
var urlInput = document.getElementById('siteUrlInput');
var sites;
var sitesList =[];



var alert = document.getElementById("box")
if(localStorage.getItem('sites')!=null){
    sitesList =JSON.parse(localStorage.getItem('sites'));
    displayData()
}

function addSite(){
    if(validUrl()){
        var sites={
        name: nameSiteInput.value,
        url: siteUrlInput.value
    }
    
    sitesList.push(sites);
    clearInput()
    displayData(sitesList)
    localStorage.setItem('sites',JSON.stringify(sitesList))
}
else if(validName()){
    var sites={
 name: nameSiteInput.value,
    url: siteUrlInput.value
    }
    sitesList.push(sites);
    clearInput()
    displayData(sitesList)
    localStorage.setItem('sites',JSON.stringify(sitesList))
}
    else{
        alert.classList.remove("d-none")
    }

    
    
   
}


function clearInput(){
    nameSiteInput.value='';
    siteUrlInput.value='';

}



function displayData(){
     
    cartona='';
    for (var i=0; i<sitesList.length;i++){
        cartona+=`
        <tr>
        <td>${i+1}</td>
        <td>${sitesList[i].name}</td>
        <td><a target="_blank" href="${sitesList[i].url}/"><button class='btn btn-warning' ><i class="fa-solid fa-eye"></i> vsite</button></td>
        <td><button  onclick="deletItem(${i})" class='btn btn-danger'><i class="fa-solid fa-trash"></i> delete</button></td>
    </tr>`
    }

    document.getElementById('tableBody').innerHTML=cartona;
}
function deletItem(index){

    sitesList.splice(index,1);
    localStorage.setItem('sites',JSON.stringify(sitesList))
    displayData();
    console.log( sitesList);

}

 function validName(){

    var words=nameSiteInput.value;
    var ragexname = /^[a-z]{3,10}$/i;
    if(ragexname.test(words)){
        nameSiteInput .classList.add("is-valid");
        nameSiteInput.classList.remove("is-invalid");
   }
   else{
    nameSiteInput.classList.add("is-invalid");
    nameSiteInput.classList.remove("is-valid");
   }
    }

    function validUrl(){
        var words=siteUrlInput.value;
        var ragexurl = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/i;
        if(ragexurl.test(words)){
            siteUrlInput.classList.add("is-valid");
            siteUrlInput.classList.remove("is-invalid");
            return true;
           }
           else{
            siteUrlInput.classList.add("is-invalid");
            siteUrlInput.classList.remove("is-valid");
            return false;
           }

    }
 
    function closeAleret() {
        alert.classList.add("d-none")
     }
 
  
