
//reference https://www.w3schools.com/js/js_cookies.asp


function checkCookie() {
    let username = getCookie("username");
    let points = getCookie("points");

    console.log(points)
    if (username != "") {
        $(".span").html("Hello, " + username + ". You've racked up " + points + " points.");
    } else {
        setCookie("username", "recruiter", 365);
        setCookie("points", 0,365);
        $(".span").html("Hello, " + "recruiter" + ". You've racked up " + 0 + " points.");

    }
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