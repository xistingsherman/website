
let username = getCookie("username");
let points = getCookie("points");
//reference https://www.w3schools.com/js/js_cookies.asp


function checkCookie() {
    let username = getCookie("username");
    let points = getCookie("points");

    if (username != "") {
        $(".span").html("Hello, " + username + ". You've racked up " + points + " points.");
    } else {
      username = "recruiter";
      if (username != "" && username != null) {
        setCookie("username", username, 365);
        setCookie("points", 0,365);
        $(".span").html("Hello, " + "recruiter" + ". You've racked up " + 0 + " points.");
      }
    }
  }

if (document.cookie.indexOf('visited=true') == -1) {
    var thirtydays = 1000*60*60*24*30;
    var expires = new Date((new Date()).valueOf() +  thirtydays);
    document.cookie = "username=recruiter;points=0;visited=true;domain=alianneasherman.com;expires=" +  expires.toUTCString();
  }


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

checkCookie()