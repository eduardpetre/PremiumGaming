// Game gallery

setTimeout(myTimeout,1500);
function myTimeout(){
    document.getElementById('subs').style.display="block";
}

var myInterval = setInterval(nextgame,3000);

var poz=1;
document.addEventListener('keydown', move);
function move(e){
    if (e.keyCode == 37 || e.keyCode == 65){
        clearInterval(myInterval);
        prevgame();
    }
    else if (e.keyCode == 39 || e.keyCode == 68){
        clearInterval(myInterval);
        nextgame();
    }
}

document.getElementById("prev").onmouseenter = prevgame;
document.getElementById("next").onmouseenter = nextgame;

function prevgame(){
    if (poz==0){
        poz=4;
        document.getElementById("game0").style.display ="flex";
        document.getElementById("game0").style.gridColumn ="3 / 4";
        document.getElementById("game1").style.display ="flex";
        document.getElementById("game1").style.gridColumn ="4 / 5";
        document.getElementById("game2").style.display ="none";
        document.getElementById("game3").style.display ="none";
        document.getElementById("game4").style.display ="flex";
        document.getElementById("game4").style.gridColumn ="2 / 3";
    }
    else if(poz==1){
        poz--;
        document.getElementById("game0").style.display ="flex";
        document.getElementById("game0").style.gridColumn ="2 / 3";
        document.getElementById("game1").style.display ="flex";
        document.getElementById("game1").style.gridColumn ="3 / 4";
        document.getElementById("game2").style.display ="flex";
        document.getElementById("game2").style.gridColumn ="4 / 5";
        document.getElementById("game3").style.display ="none";
        document.getElementById("game4").style.display ="none";
    }
    else if(poz==2){
        poz--;
        document.getElementById("game0").style.display ="none";
        document.getElementById("game1").style.display="flex";
        document.getElementById("game1").style.gridColumn ="2 / 3";
        document.getElementById("game2").style.display ="flex";
        document.getElementById("game2").style.gridColumn ="3 / 4";
        document.getElementById("game3").style.display ="flex";
        document.getElementById("game3").style.gridColumn ="4 / 5";
        document.getElementById("game4").style.display ="none";
    }
    else if(poz==3){
        poz--;
        document.getElementById("game0").style.display ="none";
        document.getElementById("game1").style.display ="none";
        document.getElementById("game2").style.display ="flex";
        document.getElementById("game2").style.gridColumn ="2 / 3";
        document.getElementById("game3").style.display ="flex";
        document.getElementById("game3").style.gridColumn ="3 / 4";
        document.getElementById("game4").style.display ="flex";
        document.getElementById("game4").style.gridColumn ="4 / 5";
    }
    else if (poz==4){
        poz--;
        document.getElementById("game0").style.display ="flex";
        document.getElementById("game0").style.gridColumn ="4 / 5";
        document.getElementById("game1").style.display ="none";
        document.getElementById("game2").style.display ="none";
        document.getElementById("game3").style.display ="flex";
        document.getElementById("game3").style.gridColumn ="2 / 3";
        document.getElementById("game4").style.display ="flex";
        document.getElementById("game4").style.gridColumn ="3 / 4";
    }

}

function nextgame(){
    if (poz==0){
        poz++;
        document.getElementById("game0").style.display ="none";
        document.getElementById("game1").style.display="flex";
        document.getElementById("game1").style.gridColumn ="2 / 3";
        document.getElementById("game2").style.display ="flex";
        document.getElementById("game2").style.gridColumn ="3 / 4";
        document.getElementById("game3").style.display ="flex";
        document.getElementById("game3").style.gridColumn ="4 / 5";
        document.getElementById("game4").style.display ="none";
    }
    else if(poz==1){
        poz++;
        document.getElementById("game0").style.display ="none";
        document.getElementById("game1").style.display ="none";
        document.getElementById("game2").style.display ="flex";
        document.getElementById("game2").style.gridColumn ="2 / 3";
        document.getElementById("game3").style.display ="flex";
        document.getElementById("game3").style.gridColumn ="3 / 4";
        document.getElementById("game4").style.display ="flex";
        document.getElementById("game4").style.gridColumn ="4 / 5";
    }
    else if(poz==2){
        poz++;
        document.getElementById("game0").style.display ="flex";
        document.getElementById("game0").style.gridColumn ="4 / 5";
        document.getElementById("game1").style.display ="none";
        document.getElementById("game2").style.display ="none";
        document.getElementById("game3").style.display ="flex";
        document.getElementById("game3").style.gridColumn ="2 / 3";
        document.getElementById("game4").style.display ="flex";
        document.getElementById("game4").style.gridColumn ="3 / 4";
    }
    else if(poz==3){
        poz++;
        document.getElementById("game0").style.display ="flex";
        document.getElementById("game0").style.gridColumn ="3 / 4";
        document.getElementById("game1").style.display ="flex";
        document.getElementById("game1").style.gridColumn ="4 / 5";
        document.getElementById("game2").style.display ="none";
        document.getElementById("game3").style.display ="none";
        document.getElementById("game4").style.display ="flex";
        document.getElementById("game4").style.gridColumn ="2 / 3";
    }
    else if (poz==4){
        poz=0;
        document.getElementById("game0").style.display ="flex";
        document.getElementById("game0").style.gridColumn ="2 / 3";
        document.getElementById("game1").style.display ="flex";
        document.getElementById("game1").style.gridColumn ="3 / 4";
        document.getElementById("game2").style.display ="flex";
        document.getElementById("game2").style.gridColumn ="4 / 5";
        document.getElementById("game3").style.display ="none";
        document.getElementById("game4").style.display ="none";
    }

}


// Search Bar

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchGames");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchGamesList");
    ul.removeAttribute("hidden");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.addEventListener("click", hideSearchList);
function hideSearchList(){
    document.getElementById("searchGamesList").setAttribute("hidden","true");
    document.getElementById("searchGames").value="";
}


// Dark/Light mode button

let bodyStyle = window.getComputedStyle(document.body); 
let colortheme = bodyStyle.getPropertyValue('background-color');
console.log(colortheme);
function darkmodetoggle(){
    if (colortheme == "rgb(18, 18, 18)"){
        document.getElementById('bdy').style.backgroundColor="white";
        document.getElementById('nvb').style.backgroundColor="rgba(26,115,232,.7)";
        document.getElementById('mnu').style.backgroundColor="rgba(26,115,232,.7)";
        document.getElementById('shp').style.backgroundColor="rgba(26,115,232,.5)";
        colortheme="white";
    } else if (colortheme=="white") {
        document.getElementById('bdy').style.backgroundColor="#121212";
        document.getElementById('nvb').style.backgroundColor="hsla(0, 0%, 100%, 0.05)";
        document.getElementById('mnu').style.backgroundColor="hsla(0, 0%, 100%, 0.05)";
        document.getElementById('shp').style.backgroundColor="#121212";
        colortheme="rgb(18, 18, 18)";
    }
}


//Show details 

const informations = [
    {
        id: 1,
        name: "Counter-Strike: GO",
        topteams: ["NAVI", "NIP", "G2"],
        players: "0.75mil/day",
        year: 2012
    },
    {
        id: 2,
        name: "League of Legends",
        topteams: ["Cloud9", "Fnatic", "G2"],
        players: "3.5mil/day",
        year: 2009
    },
    {
        id: 3,
        name: "Rocket League",
        topteams: ["Vitality", "NAVI", "Team Liquid"],
        players: "6mil/day",
        year: 2015
   },
   {
        id: 4,
        name: "TFT: Teamfight Tactics",
        topteams: ["GLG MAIKEL", "PieHat", "AU Poison"],
        players: "10mil/day",
        year: 2019 
    },
    {
        id: 5,
        name: "Valorant",
        topteams: ["G2", "Team Liquid", "Fnatic"],
        players: "1.5mil/day",
        year: 2019
   }];


let detailsTxt = document.createElement("p");
detailsTxt.setAttribute('id',"detailstxt");
detailsTxt.innerHTML="Details: ";

let detailsList = document.createElement("ul");
detailsList.style.listStyle="none";
detailsList.setAttribute("id", "detailsList");
for(i=0;i<informations.length;i++){
    let details = document.createElement("li");
    details.setAttribute("class", "details");
    details.innerHTML=informations[i].id + '. ' + informations[i].name + ' ' +  informations[i].year;

    details.addEventListener("click", (e)=>{
        let j = parseInt(details.innerHTML)-1;
        details.innerHTML="Top teams: " + informations[j].topteams + '; Average players: ' + informations[j].players;
        e.stopPropagation();
    });

    detailsList.append(details);
}
let show=0;
function showDetails(){
    if(show==0){
        let date =  output.getElementsByTagName('p')[0];
        while (date){
            date.remove();
            date =  output.getElementsByTagName('p')[0];
        }
        document.getElementById('output').append(detailsTxt);   
        document.getElementById('output').append(detailsList); 
        show=1;
    }
    else{
        detailsTxt.remove();
        detailsList.remove();
        show=0;
    }
}


// Add to cart

let cart=[];
let ok=[0, 0, 0, 0, 0];

function addtocart0(){
    if (ok[0]==0){
        cart.push(" Rocket League");
        document.getElementById("cartlist").innerHTML=cart;
        document.getElementById("link0").style.backgroundImage="linear-gradient(to bottom right, #3CB371, #2DA462, #1E9553, #4BC280)";
        document.getElementById("link0").style.color="lightgreen";
        document.getElementById("link0").innerHTML="Claimed";
        document.getElementById("wtb0").checked=true;
        ok[0]=1;
        localStorage.setItem("Rocket League", new Date().toLocaleString());
    }
}

function addtocart1(){
    if (ok[1]==0){
        cart.push(" Counter-Strike: Global Offensive");
        document.getElementById("cartlist").innerHTML=cart;
        document.getElementById("link1").style.backgroundImage="linear-gradient(to bottom right, #3CB371, #2DA462, #1E9553, #4BC280)";
        document.getElementById("link1").style.color="lightgreen";
        document.getElementById("link1").innerHTML="Claimed";
        document.getElementById("wtb1").checked=true;
        ok[1]=1;
        localStorage.setItem("Counter-Strike: Global Offensive", new Date().toLocaleString());
    }
}
function addtocart2(){
    if (ok[2]==0){
        cart.push(" League of Legends");
        document.getElementById("cartlist").innerHTML=cart;
        document.getElementById("link2").style.backgroundImage="linear-gradient(to bottom right, #3CB371, #2DA462, #1E9553, #4BC280)";
        document.getElementById("link2").style.color="lightgreen";
        document.getElementById("link2").innerHTML="Claimed";
        document.getElementById("wtb2").checked=true;
        ok[2]=1;
        localStorage.setItem("League of Legends", new Date().toLocaleString());
    }
}
function addtocart3(){
    if (ok[3]==0){
        cart.push(" Valorant");
        document.getElementById("cartlist").innerHTML=cart;
        document.getElementById("link3").style.backgroundImage="linear-gradient(to bottom right, #3CB371, #2DA462, #1E9553, #4BC280)";
        document.getElementById("link3").style.color="lightgreen";
        document.getElementById("link3").innerHTML="Claimed";
        document.getElementById("wtb3").checked=true;
        ok[3]=1;
        localStorage.setItem("Valorant", new Date().toLocaleString());
    }
}

function addtocart4(){
    if (ok[4]==0){
        cart.push(" TFT: Teamfight Tactics");
        document.getElementById("cartlist").innerHTML=cart;
        document.getElementById("link4").style.backgroundImage="linear-gradient(to bottom right, #3CB371, #2DA462, #1E9553, #4BC280)";
        document.getElementById("link4").style.color="lightgreen";
        document.getElementById("link4").innerHTML="Claimed";
        document.getElementById("wtb4").checked=true;
        ok[4]=1;
        localStorage.setItem("TFT: Teamfight Tactics", new Date().toLocaleString());
    }
}


// Show dates

var dateTxt = document.createElement("p");
dateTxt.setAttribute('id',"datetxt");
dateTxt.innerHTML="Date: ";
var newDateList = document.createElement("p");
newDateList.setAttribute('id',"datelist");

let dates = [];
function showDates(){
    dates = [];
    if(ok[0]==1)
        dates.push('<br>'+"Rocket League - "+localStorage.getItem("Rocket League"));
    if (ok[1]==1)
        dates.push(" Counter-Strike: Global Offensive - "+localStorage.getItem("Counter-Strike: Global Offensive"));
    if (ok[2]==1)
        dates.push('<br>'+"League of Legends - "+localStorage.getItem("League of Legends"));
    if (ok[3]==1)
        dates.push('<br>'+"Valorant - "+localStorage.getItem("Valorant"));
    if (ok[4]==1)
        dates.push('<br>'+"TFT: Teamfight Tactics - "+localStorage.getItem("TFT: Teamfight Tactics"));
    dates.sort();
    
    detailsList.remove();
    detailsTxt.remove();
    show=0;
    document.getElementById('output').append(dateTxt);   
    newDateList.innerHTML=dates;
    document.getElementById('output').append(newDateList);   
}


// Delete last

function popfromcart(){
    cart.sort(); 
    // Am sortat vectorul pentru a putea reveni la style-urile dinaintea claim-urilor 
    // si pentru a implementa mai usor proprietatile localStorage-ului
    cart.pop();
    document.getElementById("cartlist").innerHTML=cart;
    dates.pop();
    newDateList.innerHTML=dates;
    if(ok[4]==1){
        document.getElementById("link4").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link4").style.color="white";
        document.getElementById("link4").innerHTML="Claim";
        localStorage.removeItem("TFT: Teamfight Tactics");
        document.getElementById("wtb4").checked=false;
        ok[4]=0;
    }
    else if (ok[3]==1){
        document.getElementById("link3").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link3").style.color="white";
        document.getElementById("link3").innerHTML="Claim";
        localStorage.removeItem("Valorant");
        document.getElementById("wtb3").checked=false;
        ok[3]=0;
    }
    else if (ok[2]==1){
        document.getElementById("link2").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link2").style.color="white";
        document.getElementById("link2").innerHTML="Claim";
        localStorage.removeItem("League of Legends");
        document.getElementById("wtb2").checked=false;
        ok[2]=0;
    }
    else if (ok[1]==1){
        document.getElementById("link1").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link1").style.color="white";
        document.getElementById("link1").innerHTML="Claim";
        localStorage.removeItem("Counter-Strike: Global Offensive");
        document.getElementById("wtb1").checked=false;
        ok[1]=0;
    }
    else if (ok[0]==1){
        document.getElementById("link0").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link0").style.color="white";
        document.getElementById("link0").innerHTML="Claim";
        localStorage.removeItem("RocketLeague");
        document.getElementById("wtb0").checked=false;
        ok[0]=0;
    }

    if(cart.length==0){
        localStorage.clear();
        dateTxt.remove();
    }
}


// Sort

function sortcart(){
    cart.sort();
    document.getElementById("cartlist").innerHTML=cart;
}


// submit function

function submitfunction() {
    document.getElementById("gamesform").submit();
}


// update function (app.put)

function update(){
    let data = {
      "serviciu" : "Premium"
    }
    console.log(JSON.stringify(data));
    fetch("/views/page4.ejs/update/" + JSON.stringify(data), {
      method: "PUT"
    }).then(rest => {
    console.log("update");
  })
  }


  //   delete function (app.delete)

  function deleteAll(){
    let data = {
      "cumpara" : "ok"
    }
    fetch("/views/page4.ejs/delete/" + JSON.stringify(data), {
      method: "DELETE"
    }).then(rest => {
    console.log("delete");
  })
  }