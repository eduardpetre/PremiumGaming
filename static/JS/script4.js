let cart=[];
let ok=[0, 0, 0, 0, 0];

function addtocart0(){
    if (ok[0]==0){
        cart.push(" Rocket League");
        document.getElementById("cartlist").innerHTML=cart;
        document.getElementById("link0").style.backgroundImage="linear-gradient(to bottom right, #3CB371, #2DA462, #1E9553, #4BC280)";
        document.getElementById("link0").style.color="lightgreen";
        document.getElementById("link0").innerHTML="Claimed";
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
        ok[4]=1;
        localStorage.setItem("TFT: Teamfight Tactics", new Date().toLocaleString());
    }
}

var dateTxt = document.createElement("p");
dateTxt.setAttribute('id',"datetxt");
dateTxt.innerHTML="Date: ";
var newDateList = document.createElement("p");
newDateList.setAttribute('id',"datelist");

let dates = [];
function showDates(){
    dates = [];
    if(ok[0]==1)
        dates.push("Rocket League - "+localStorage.getItem("Rocket League")+'<br>');
    if (ok[1]==1)
        dates.push("Counter-Strike: Global Offensive - "+localStorage.getItem("Counter-Strike: Global Offensive")+'<br>');
    if (ok[2]==1)
        dates.push("League of Legends - "+localStorage.getItem("League of Legends")+'<br>');
    if (ok[3]==1)
        dates.push("Valorant - "+localStorage.getItem("Valorant")+'<br>');
    if (ok[4]==1)
        dates.push("TFT: Teamfight Tactics - "+localStorage.getItem("TFT: Teamfight Tactics")+'<br>');
    
    
    document.getElementById('date').append(dateTxt);   
    newDateList.innerHTML=dates;
    document.getElementById('date').append(newDateList);   
}

function popfromcart(){
    cart.sort(); 
    dates.sort();
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
        ok[4]=0;
    }
    else if (ok[3]==1){
        document.getElementById("link3").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link3").style.color="white";
        document.getElementById("link3").innerHTML="Claim";
        localStorage.removeItem("Valorant");
        ok[3]=0;
    }
    else if (ok[2]==1){
        document.getElementById("link2").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link2").style.color="white";
        document.getElementById("link2").innerHTML="Claim";
        localStorage.removeItem("League of Legends");
        ok[2]=0;
    }
    else if (ok[1]==1){
        document.getElementById("link1").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link1").style.color="white";
        document.getElementById("link1").innerHTML="Claim";
        localStorage.removeItem("Counter-Strike: Global Offensive");
        ok[1]=0;
    }
    else if (ok[0]==1){
        document.getElementById("link0").style.backgroundImage="linear-gradient(to bottom right, #73A4FC, #4677CF, #5586DE, #6495ED)";
        document.getElementById("link0").style.color="white";
        document.getElementById("link0").innerHTML="Claim";
        localStorage.removeItem("RocketLeague");
        ok[0]=0;
    }

    if(cart.length==0){
        localStorage.clear();
        dateTxt.remove();
    }
}

function sortcart(){
    cart.sort();
    document.getElementById("cartlist").innerHTML=cart;
}

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
var dark=1;
function darkmodetoggle(){
    if (dark == 1){
        document.getElementById('bdy').style.backgroundColor="white";
        document.getElementById('nvb').style.backgroundColor="rgba(26,115,232,.7)";
        document.getElementById('mnu').style.backgroundColor="rgba(26,115,232,.7)";
        document.getElementById('shp').style.backgroundColor="rgba(26,115,232,.5)";
        dark = 0;
    } else if (dark==0) {
        document.getElementById('bdy').style.backgroundColor="#121212";
        document.getElementById('nvb').style.backgroundColor="hsla(0, 0%, 100%, 0.05)";
        document.getElementById('mnu').style.backgroundColor="hsla(0, 0%, 100%, 0.05)";
        document.getElementById('shp').style.backgroundColor="#121212";
        dark = 1;
    }
}

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
