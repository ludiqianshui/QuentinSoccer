var zXml = {
    useActiveX: (typeof ActiveXObject != "undefined"),
    useXmlHttp: (typeof XMLHttpRequest != "undefined")
};

zXml.ARR_XMLHTTP_VERS = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.3.0"];

function zXmlHttp() { }

zXmlHttp.createRequest = function () {
    if (zXml.useXmlHttp) return new XMLHttpRequest();

    if (zXml.useActiveX)  //IE < 7.0 = use ActiveX
    {
        if (!zXml.XMLHTTP_VER) {
            for (var i = 0; i < zXml.ARR_XMLHTTP_VERS.length; i++) {
                try {
                    new ActiveXObject(zXml.ARR_XMLHTTP_VERS[i]);
                    zXml.XMLHTTP_VER = zXml.ARR_XMLHTTP_VERS[i];
                    break;
                } catch (oError) { }
            }
        }
        if (zXml.XMLHTTP_VER) return new ActiveXObject(zXml.XMLHTTP_VER);
    }
    alert("å¯¹ä¸èµ·ï¼Œæ‚¨çš„ç”µè„‘ä¸æ”¯æŒ XML æ’ä»¶ï¼Œè¯·å®‰è£…å¥½æˆ–å‡çº§æµè§ˆå™¨ã€‚");
};
function Hashtable() {
    this._hash = new Object();
    this.add = function (key, value) {
        if (typeof (key) != "undefined") {
            this._hash[key] = typeof (value) == "undefined" ? null : value;
            return true;
        }
        else
            return false;
    }
    this.remove = function (key) { delete this._hash[key]; }
    this.keys = function () {
        var keys = new Array();
        for (var key in this._hash) {
            keys.push(key);
        }
        return keys;
    }
    this.count = function () { var i = 0; for (var k in this._hash) { i++; } return i; }
    this.items = function (key) { return this._hash[key]; }
    this.contains = function (key) {
        return typeof (this._hash[key]) != "undefined";
    }
    this.clear = function () { for (var k in this._hash) { delete this._hash[k]; } }
}

var GoalCn = "å¹³æ‰‹,å¹³/åŠ,åŠçƒ,åŠ/ä¸€,ä¸€çƒ,ä¸€/çƒåŠ,çƒåŠ,çƒåŠ/ä¸¤,ä¸¤çƒ,ä¸¤/ä¸¤çƒåŠ,ä¸¤çƒåŠ,ä¸¤çƒåŠ/ä¸‰,ä¸‰çƒ,ä¸‰/ä¸‰çƒåŠ,ä¸‰çƒåŠ,ä¸‰çƒåŠ/å››çƒ,å››çƒ,å››/å››çƒåŠ,å››çƒåŠ,å››çƒåŠ/äº”,äº”çƒ,äº”/äº”çƒåŠ,äº”çƒåŠ,äº”çƒåŠ/å…­,å…­çƒ,å…­/å…­çƒåŠ,å…­çƒåŠ,å…­çƒåŠ/ä¸ƒ,ä¸ƒçƒ,ä¸ƒ/ä¸ƒçƒåŠ,ä¸ƒçƒåŠ,ä¸ƒçƒåŠ/å…«,å…«çƒ,å…«/å…«çƒåŠ,å…«çƒåŠ,å…«çƒåŠ/ä¹,ä¹çƒ,ä¹/ä¹çƒåŠ,ä¹çƒåŠ,ä¹çƒåŠ/å,åçƒ".split(",");
var GoalCn3 = ["0", "-0/0.5", "-0.5", "-0.5/1", "-1", "-1/1.5", "-1.5", "-1.5/2", "-2", "-2/2.5", "-2.5", "-2.5/3", "-3", "-3/3.5", "-3.5", "-3.5/4", "-4", "-4/4.5", "-4.5", "-4.5/5", "-5", "-5/5.5", "-5.5", "-5.5/6", "-6", "-6/6.5", "-6.5", "-6.5/7", "-7", "-7/7.5", "-7.5", "-7.5/8", "-8", "-8/8.5", "-8.5", "-8.5/9", "-9", "-9/9.5", "-9.5", "-9.5/10", "-10"];
var GoalCn2 = ["0", "0/0.5", "0.5", "0.5/1", "1", "1/1.5", "1.5", "1.5/2", "2", "2/2.5", "2.5", "2.5/3", "3", "3/3.5", "3.5", "3.5/4", "4", "4/4.5", "4.5", "4.5/5", "5", "5/5.5", "5.5", "5.5/6", "6", "6/6.5", "6.5", "6.5/7", "7", "7/7.5", "7.5", "7.5/8", "8", "8/8.5", "8.5", "8.5/9", "9", "9/9.5", "9.5", "9.5/10", "10", "10/10.5", "10.5", "10.5/11", "11", "11/11.5", "11.5", "11.5/12", "12", "12/12.5", "12.5", "12.5/13", "13", "13/13.5", "13.5", "13.5/14", "14"];
function Goal2GoalCn(goal) { //æ•°å­—ç›˜å£è½¬æ±‰æ±‰å­—	
    if (goal == null || goal + "" == "")
        return "";
    else {
        if (goal > 10 || goal < -10) return goal + "çƒ";
        if (goal >= 0) return GoalCn[parseInt(goal * 4)];
        else return "<font color='red'>*</font>" + GoalCn[Math.abs(parseInt(goal * 4))];
    }
}
function Goal2GoalCn2(goal) {
    if (typeof (goal) == "undefined"||(typeof (goal) != "undefined" && goal.toString()== ""))
        return "";
    else {
        if (goal > 14) return goal;
        else if (goal >= 0) return GoalCn2[parseInt(goal * 4)];
        else return GoalCn3[Math.abs(parseInt(goal * 4))];
    }
}
var scoreStateHt = new Hashtable();
var Config = new Object();
Config.haveLetGoal = 1;
Config.haveTotal = 1;
Config.haveEurope = 0;
Config.h1 = 3; Config.f1 = 9; Config.h2 = 15; Config.f2 = 21; //è®©çƒã€å¤§å°
Config.goalType1 = 1; Config.goalType2 = 2;
Config.close1_half = 0; Config.close1 = 0; Config.close2_half = 0; Config.close2 = 0;
Config.getCookie = function () {
    var Cookie = getCookie("detailCookie");
    if (Cookie == null) Cookie = "";
    var Cookie = Cookie.split("^");
    if (Cookie.length != 3) writeCookie("detailCookie", null);
    else {
        this.haveLetGoal = parseInt(Cookie[0]);
        this.haveTotal = parseInt(Cookie[1]);
        this.haveEurope = parseInt(Cookie[2]);
    }
    Config.setStates();
    Config.setShowType()
}
Config.setStates = function (type) {
    try {
        document.getElementById("checkLet").checked = (Config.haveLetGoal == 1);
        document.getElementById("checkEu").checked = (Config.haveEurope == 1);
        document.getElementById("checkTotal").checked = (Config.haveTotal == 1);
    }
    catch (e) { }
}
Config.writeCookie = function () {
    var value = this.haveLetGoal + "^" + this.haveTotal + "^" + this.haveEurope;
    writeCookie("detailCookie", value);
    Config.setShowType();
}
Config.setShowType = function ()
{
    Config.h1 = 3; Config.f1 = 9; Config.h2 = 15; Config.f2 = 21; //è®©çƒã€å¤§å°
    if (Config.haveLetGoal == 0) {//å¤§å°ã€æ¬§èµ”
        Config.h1 = 15;
        Config.f1 = 21;
        Config.h2 = 27;
        Config.f2 = 33;
        Config.goalType1 = 2;
        Config.goalType2 = 3;
    }
    else {
        if (Config.haveEurope == 1) {//è®©çƒã€æ¬§èµ”
            Config.h2 = 27;
            Config.f2 = 33;
            Config.goalType2 = 3;
        }
    }
}
Config.setFeng = function (arrs)
{
    var close_letHalf = arrs[40] == 1;//å°ç›˜æ ‡è¯†
    var close_let = arrs[41] == 1;
    var close_totalHalf = arrs[42] == 1;
    var close_total = arrs[43] == 1;
    var close_standHalf = arrs[44] == 1;
    var close_stand = arrs[45] == 1;//å°ç›˜æ ‡è¯†
    Config.close1_half = close_letHalf;//è®©çƒã€å¤§å°
    Config.close1 = close_let;
    Config.close2_half = close_totalHalf;
    Config.close2 = close_total;
    if (Config.haveLetGoal == 0) {//å¤§å°ã€æ¬§èµ”
        Config.close1_half = close_totalHalf;
        Config.close1 = close_total;
        Config.close2_half = close_standHalf;
        Config.close2 = close_stand;
    }
    else if (Config.haveEurope == 1) {//è®©çƒã€æ¬§èµ”
        Config.close1_half = close_letHalf;
        Config.close1 = close_let;
        Config.close2_half = close_standHalf;
        Config.close2 = close_stand;
    }
}
function getCookie(name) {
    var cname = name + "=";
    var dc = document.cookie;
    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return dc.substring(begin, end);
        }
    }
    return null;
}
function writeCookie(name, value) {
    delCookie(name);
    var expire = "";
    var hours = 365;
    expire = new Date((new Date()).getTime() + hours * 3600000);
    expire = ";path=/;expires=" + expire.toGMTString() + ";domain=" + getDoMain();
    document.cookie = name + "=" + value + expire; //escape(
}
function delCookie(name)//åˆ é™¤cookie 
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1000 * 3600);
    var cval = getCookie(name);
    if (cval != null && cval != "null")
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
function getDoMain() {
    var arrDoms = location.href.split("/")[2].split(".");
    var isNum = /^\d+$/;
    if (isNum.test(arrDoms[1]))
        return arrDoms[0] + "." + arrDoms[1] + "." + arrDoms[2] + "." + arrDoms[3].split(":")[0];
    else
        return arrDoms[1] + "." + arrDoms[2];
}
function setType(t) {
    var objLet = document.getElementById("checkLet");
    var objEu = document.getElementById("checkEu");
    var objTotal = document.getElementById("checkTotal");
    if (objLet.checked && objEu.checked && objTotal.checked) {
        if (t == 1)
            objLet.checked = false;
        else if (t == 2)
            objTotal.checked = false;
        else if (t == 3)
            objEu.checked = false;
        alert("åŒæ—¶åªèƒ½é€‰æ‹©ä¸¤ç§ç±»åž‹ï¼");
    }
    if (!objLet.checked && !objEu.checked && !objTotal.checked) {
        if (t == 1)
            objLet.checked = true;
        else if (t == 2)
            objTotal.checked = true;
        else if (t == 3)
            objEu.checked = true;
    }
    var num = 0;
    if (objLet.checked) num++;
    if (objEu.checked) num++;
    if (objTotal.checked) num++;
    if (num == 1) return;
    else {
        Config.haveLetGoal = objLet.checked ? 1 : 0;
        Config.haveEurope = objEu.checked ? 1 : 0;
        Config.haveTotal = objTotal.checked ? 1 : 0;
        Config.writeCookie();
        maketable();
        //Config.setStates();
    }
}
var oXmlHttp = zXmlHttp.createRequest();
var oXmlCornerHttp = zXmlHttp.createRequest();
var oldXml = "", oldCornerXml = "";
var ieNum = 0;
try {
    if (document.all && typeof (document.documentMode) != "undefined")
        ieNum = document.documentMode;
}
catch (e) {
    ieNum = 0;
}
function LoadLiveFile() {
    var allDate = document.getElementById("allDate");
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.charset = "gb2312";
    s.src = "/jsData/" + getFilePath() + scheduleID + ".js?" + Date.parse(new Date());
    allDate.removeChild(allDate.firstChild);
    allDate.appendChild(s, "script");
    //window.setTimeout("LoadLiveFile()", 1800 * 1000);
}
function getxml() {
    if (state == -1) return;
    if (typeof (sOdds) == "undefined") return;
    //if (typeof (sOdds[0][0]) == "undefined") return;
    if (getSpanHour(matchTime) <= 3) {//3å°æ—¶åŽç®—å®Œåœº
        oXmlHttp.open("get", "/xml/" + getFilePath() + "ch_" + scheduleID + ".xml?" + Date.parse(new Date()), true);
        oXmlHttp.onreadystatechange = refresh;
        oXmlHttp.send(null);
        window.setTimeout("getxml()", 6000);
    }
}
function LoadCornerLiveFile() {
    var allDate = document.getElementById("allCornerDate");
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.charset = "utf-8";
    s.src = "/jsData/corner/" + getFilePath() + scheduleID + ".js?" + Date.parse(new Date());
    allDate.removeChild(allDate.firstChild);
    allDate.appendChild(s, "script");
    //window.setTimeout("LoadLiveFile()", 1800 * 1000);
}
function getcornerxml() {
    //if (state == -1) return;
    if (typeof (cOdds) == "undefined") return;
    //if (typeof (sOdds[0][0]) == "undefined") return;
    if (getSpanHour(matchTime) <= 3) {//3å°æ—¶åŽç®—å®Œåœº
    oXmlCornerHttp.open("get", "/xml/corner/" + getFilePath() + "ch_" + scheduleID + ".xml?" + Date.parse(new Date()), true);
    oXmlCornerHttp.onreadystatechange = refreshCorner;
    oXmlCornerHttp.send(null);
    window.setTimeout("getcornerxml()", 6000);
     }
}
function getFilePath() {
    return scheduleID.toString().substr(0, 2) + "/" + scheduleID.toString().substr(2, 2) + "/";
}
function refresh() {
    try {
        if (oXmlHttp.readyState != 4 || (oXmlHttp.status != 200 && oXmlHttp.status != 0)) return;
        if (oldXml == oXmlHttp.responseText) return
        oldXml = oXmlHttp.responseText;
        if (oXmlHttp.responseXML == null) return;
        var root = oXmlHttp.responseXML.documentElement;
        var D = new Array();
        var odds;
        //var obj = document.getElementById("oddsTbody"); //oddsTable
        var obj = document.getElementById("oddsTable").tBodies[0]
        //var tr2 = obj.rows[obj.rows.length - 1];
        //var tr1 = null;
        //if (obj.rows.length > 4)
        //    tr1 = obj.rows[obj.rows.length - 2];
        var oddsLocHalf = "6,8,18,20,30,32".split(',');
        var oddsLocFull = "12,14,24,26,36,38".split(',');
        for (var i = 0; i < root.childNodes.length; i++) {
            if (document.all && parseInt(ieNum) < 10)
                D = root.childNodes[i].text.split(";");
            else
                D = root.childNodes[i].textContent.split(";");
            for (var j = 0; j < D.length; j++) {
                var data = D[j].split(',');
                Config.setFeng(data);//è®¾ç½®æ˜¯å¦å°ç›˜
                var odds2 = D[j].split(',');
                var isOneRow = (parseInt(data[39]) > 1 || parseInt(data[39]) == -1); //ä¸­åœºåŽæ²¡æœ‰åŠåœºèµ”çŽ‡
                var tr1, tr2;
                var key = (data[0] == "æ—©é¤" ? 1 : data[0] == "æœªå¼€åœº" ? 2 : 3) + "_" + data[1] + "_" + data[2] + "_" + data[39];
                if (scoreStateHt.contains(key)) {
                    var arrHt = scoreStateHt.items(key).split(',');
                    var trLoc = parseInt(arrHt[0]);// + parseInt(arrh[1]);
                    tr2 = obj.rows[trLoc];
                    if (!isOneRow)
                        tr2 = obj.rows[trLoc + 1];
                        tr1 = obj.rows[trLoc];
                        try {
                            odds = tr2.attributes["odds"].value.split(",");
                        }
                        catch (e) {
                            odds = tr1.attributes["odds"].value.split(",");
                        }                   
                    for (var k = 0; k < oddsLocHalf.length; k++) {
                        if (typeof (odds[oddsLocHalf[k]]) != "undefined" && typeof (data[oddsLocHalf[k]]) != "undefined") {
                            if (parseFloat(odds[oddsLocHalf[k]]) > parseFloat(data[oddsLocHalf[k]])) data[oddsLocHalf[k]] = "<span class=greedBg>" + data[oddsLocHalf[k]] + "</span>";
                            else if (parseFloat(odds[oddsLocHalf[k]]) < parseFloat(data[oddsLocHalf[k]])) data[oddsLocHalf[k]] = "<span class=redBg>" + data[oddsLocHalf[k]] + "</span>";
                        }
                    }
                    for (var k = 0; k < oddsLocFull.length; k++) {
                        if (typeof (odds[oddsLocFull[k]]) != "undefined" && typeof (data[oddsLocFull[k]]) != "undefined") {
                            if (parseFloat(odds[oddsLocFull[k]]) > parseFloat(data[oddsLocFull[k]])) data[oddsLocFull[k]] = "<span class=greedBg>" + data[oddsLocFull[k]] + "</span>";
                            else if (parseFloat(odds[oddsLocFull[k]]) < parseFloat(data[oddsLocFull[k]])) data[oddsLocFull[k]] = "<span class=redBg>" + data[oddsLocFull[k]] + "</span>";
                        }
                    }
                    window.setTimeout("restoreOddsColor(" + D.length + ")", 30000);
                    if (!isOneRow && data[0] != '') {
                        tr1.cells[0].innerHTML = (data[39] == 1 && parseInt(data[0].toString()) > 45 ? "45" : data[0]);
                        for (var k = 0; k < 6; k++) {
                            var num = Config.h1 + k;
                            if (data[num] == '') continue;
                            var isClose = Config.close1_half;// isOneRow ? Config.close1 : Config.close1_half;
                            if (isClose && k > 2 && k < 5)//å°ç›˜æ—¶ï¼Œ3,4ä½éœ€è¦åŠ æ ·å¼éšè—åŠ æ¡†
                                tr1.cells[k + 3].setAttribute("class", "no_RB");
                            else
                                tr1.cells[k + 3].setAttribute("class", "");
                            tr1.cells[k + 3].innerHTML = getShowOdds(data, num, k, 1, isClose);                           
                        }
                        for (var k = 0; k < 6; k++) {
                            var num = Config.h2 + k;
                            if (data[num] == '') continue;
                            var isClose = Config.close2_half;// isOneRow ? Config.close2 : Config.close2_half;
                            if (isClose && k > 2 && k < 5)//å°ç›˜æ—¶ï¼Œ3,4ä½éœ€è¦åŠ æ ·å¼éšè—åŠ æ¡†
                                tr1.cells[k + 9].setAttribute("class", "no_RB");
                            else
                                tr1.cells[k + 9].setAttribute("class", "");
                            tr1.cells[k + 9].innerHTML = getShowOdds(data, num, k, 2, isClose);                           
                        }
                    }
                    if (isOneRow && data[0] != '')
                        tr2.cells[0].innerHTML = data[0];
                    for (var k = 0; k < 6; k++) {
                        var count = isOneRow ? 3 : 1;
                        var num = Config.f1 + k;
                        if (data[num] == '') continue;
                        var isClose = Config.close1;// isOneRow ? Config.close1 : Config.close1_half;
                        if (isClose && k > 2 && k < 5)//å°ç›˜æ—¶ï¼Œ3,4ä½éœ€è¦åŠ æ ·å¼éšè—åŠ æ¡†
                            tr2.cells[k + count].setAttribute("class", "no_RB");
                        else
                            tr2.cells[k + count].setAttribute("class", "");
                        tr2.cells[k + count].innerHTML = getShowOdds(data, num, k, 1, isClose);
                    }
                    for (var k = 0; k < 6; k++) {
                        var count = isOneRow ? 9 : 7;
                        var num = Config.f2 + k;
                        if (data[num] == '') continue;
                        var isClose = Config.close2;// isOneRow ? Config.close2 : Config.close2_half;
                        if (isClose && k > 2 && k < 5)//å°ç›˜æ—¶ï¼Œ3,4ä½éœ€è¦åŠ æ ·å¼éšè—åŠ æ¡†
                            tr2.cells[k + count].setAttribute("class", "no_RB");
                        else
                            tr2.cells[k + count].setAttribute("class", "");
                        tr2.cells[k + count].innerHTML = getShowOdds(data, num, k, 2, isClose);
                    }
                }
                else {//å“ˆå¸Œè¡¨ä¸åŒ…å«æ­¤æ•°æ®ï¼Œéœ€è‡ªåŠ¨æ·»åŠ                     
                    var fra = document.createDocumentFragment();
                    var newTr0 = document.createElement("tr");
                    newTr0.setAttribute("odds", D[j]);
                    newTr0.setAttribute("bgcolor", "#FFFFFF");
                    //newTr0.innerHTML = oneRow(D[j], false, 1);
                    newTr0 = oneRowTd(data, 1, newTr0);
                    fra.appendChild(newTr0);
                    var key = (data[0] == "æ—©é¤" ? 1 : data[0] == "æœªå¼€åœº" ? 2 : 3) + "_" + data[1] + "_" + data[2] + "_" + data[39];
                    var keys = scoreStateHt.keys();
                    var arrHt = scoreStateHt.items(keys[keys.length - 1]).split(',');
                    scoreStateHt.add(key, (parseInt(arrHt[0]) + parseInt(arrHt[1])) + "," + ((data[39] > 1 || data[39] == -1) ? 1 : 2));
                    if (!isOneRow) {
                        var newTr1 = document.createElement("tr");
                        newTr1.setAttribute("bgcolor", "#FFFFFF");
                        newTr1 = oneRowTd(data, 2, newTr1);
                        fra.appendChild(newTr1);
                    }
                    obj.appendChild(fra);
                }
                if (j == D.length - 1) {
                    if (isOneRow)
                        tr2.attributes["odds"].value = odds2;
                    else
                        tr1.attributes["odds"].value = odds2;
                }
            }
        }
    } catch (e) { }
}
function getShowOdds(data, num, k, t,isClose) {
    var retVal = "";
    var isShowData = typeof (data[num]) != "undefined" && String(data[num]) != '';
    if (k == 1 || k == 4) {
        var goal = 0;
        if (t == 1)
            goal = (Config.h1 == 3 ? Goal2GoalCn(data[num]) : Goal2GoalCn2(data[num])); //3 è®© 15 å¤§å°
        else
            goal = (Config.h2 == 15 ? Goal2GoalCn2(data[num]) : data[num]); //15 å¤§å° 27 æ¬§
        if (!isClose)
            retVal = isShowData ? goal : "&nbsp;";
        else
            retVal = isShowData && k == 1 ? goal : k == 4 ? "<span style='color:green;'>å°</span>" : "&nbsp;";
    }
    else {
        if (!isClose)
            retVal = isShowData ? data[num] : "&nbsp;";
        else
            retVal = isShowData && k < 3 ? data[num] : "&nbsp;";
    }
    return retVal;
}
function getSpanHour(date) {
    var now = new Date();
    var span = now.getTime() - date.getTime()
    var leave1 = span % (24 * 3600 * 1000)    //è®¡ç®—å¤©æ•°åŽå‰©ä½™çš„æ¯«ç§’æ•°
    var hours = Math.floor(leave1 / (3600 * 1000))
    return hours;
}
function restoreOddsColor(num) {
    var obj = document.getElementById("oddsTable");
    if (obj == null) return;
    var tr1 = obj.rows[obj.rows.length - 2];
    var tr2 = obj.rows[obj.rows.length - 1];
    if (num > 1) {
        var tr3 = obj.rows[obj.rows.length - 4];
        var tr4 = obj.rows[obj.rows.length - 3];
    }
    for (var i = 0; i < tr1.cells.length; i++) {
        tr1.cells[i].innerHTML = tr1.cells[i].innerHTML.toLowerCase().replace(/<span class=redBg>/g, "").replace(/<span class=greedBg>/g, "").replace(/<\/span>/g, "");
    }
    for (var i = 0; i < tr2.cells.length; i++) {
        tr2.cells[i].innerHTML = tr2.cells[i].innerHTML.toLowerCase().replace(/<span class=redBg>/g, "").replace(/<span class=greedBg>/g, "").replace(/<\/span>/g, "");
    }
    if (num > 1) {
        for (var i = 0; i < tr3.cells.length; i++) {
            tr3.cells[i].innerHTML = tr3.cells[i].innerHTML.toLowerCase().replace(/<span class=redBg>/g, "").replace(/<span class=greedBg>/g, "").replace(/<\/span>/g, "");
        }
        for (var i = 0; i < tr4.cells.length; i++) {
            tr4.cells[i].innerHTML = tr4.cells[i].innerHTML.toLowerCase().replace(/<span class=redBg>/g, "").replace(/<span class=greedBg>/g, "").replace(/<\/span>/g, "");
        }
    }
}

function isInsert(oldOdds, newOdds) {
    //var reg = new RegExp("^\d+$");
    var oldScores = parseInt(oldOdds[1]) + parseInt(oldOdds[2]);
    var newScores = parseInt(newOdds[1]) + parseInt(newOdds[2]);
    //if ((oldOdds[0] == "æ—©é¤" && newOdds[0] == "æœªå¼€åœº") || (oldOdds[0] == "æœªå¼€åœº" && reg.test(newOdds[0])) || (reg.test(oldOdds[0])) && newOdds[0] == "ä¸­åœº" || (oldOdds[0] == "ä¸­åœº" && reg.test(newOdds[0])) || oldScores != newScores)
    if ((oldOdds[0] == "æ—©é¤" && newOdds[0] == "æœªå¼€åœº") || (oldOdds[0] == "æœªå¼€åœº" && !isNaN(newOdds[0])) || (!isNaN(oldOdds[0]) && newOdds[0] == "ä¸­åœº") || (oldOdds[0] == "ä¸­åœº" && !isNaN(newOdds[0])) || oldScores != newScores || (oldOdds[39] == "1" && newOdds[39] == "3"))
        return true;
    else
        return false;
}
function maketable() {
    var html = new Array();
    if (typeof (sOdds) == "undefined") return;
    if (typeof (sOdds[0][0]) == "undefined") return;
    html.push('<div class="content">');
    html.push('<table class="zsTable" width="800" align="center" cellpadding="0" cellspacing="0" id="oddsTable">');
    html.push('<tbody id="oddsTbody">');
    html.push('<th colspan="15" align="center" bgcolor="#0B79C9">å³æ—¶èµ”çŽ‡ç»Ÿè®¡åˆ†æž');
    html.push('<input type="checkbox" name="checkbox4" id="checkLet" onclick="setType(1)"/>');
    html.push('è®©');
    html.push('<input type="checkbox" name="checkbox" id="checkTotal" onclick="setType(2)"/>');
    html.push('å¤§');
    html.push('<input type="checkbox" name="checkbox" id="checkEu" onclick="setType(3)"/>');
    html.push('æ¬§ </th>');
    html.push('</tr>');
    html.push('<tr bgcolor="#FFFFFF">');
    html.push('<td rowspan="2" align="center" bgcolor="#F0F0FF">æ—¶é—´</td>');
    html.push('<td rowspan="2" align="center" bgcolor="#F0F0FF">æ¯”åˆ†</td>');
    html.push('<td rowspan="2" align="center" bgcolor="#F0F0FF" class="rightline">åŠå…¨åœº</td>');
    html.push('<td height="20" colspan="6" align="center" bgcolor="#FCEAAB"><strong>' + (Config.haveLetGoal == 1 ? 'è®©çƒ' : 'å¤§å°') + '</strong></td>');
    html.push('<td colspan="6" align="center" bgcolor="#FCEAAB" class="leftline"><strong>' + (Config.haveEurope == 1 ? 'æ¬§èµ”' : 'å¤§å°') + '</strong></td>');
    html.push('</tr>');
    html.push('<tr bgcolor="#FFFFFF">');
    html.push('<td height="20" colspan="3" align="center">å¼€ç›˜</td>');
    html.push('<td colspan="3" align="center" bgcolor="#FFFFD0">å³æ—¶</td>');
    html.push('<td colspan="3" align="center" class="leftline">å¼€ç›˜</td>');
    html.push('<td colspan="3" align="center" bgcolor="#FFFFD0">å³æ—¶</td>');
    html.push('</tr>');
    var trStart = 3;
    for (var i = 0; i < sOdds.length; i++) {
        html.push(oneRow(sOdds[i], i == sOdds.length - 1, 0));
        var arrs = sOdds[i];
        var key = (arrs[0] == "æ—©é¤" ? 1 : arrs[0] == "æœªå¼€åœº" ? 2 : 3) + "_" + arrs[1] + "_" + arrs[2] + "_" + arrs[39];
        scoreStateHt.add(key, trStart + "," + ((arrs[39] > 1 || arrs[39] == -1) ? 1 : 2));
        trStart += ((arrs[39] > 1 || arrs[39] == -1) ? 1 : 2);
        //var startTr = (i + 1) * ((arrs[39] > 1 || arrs[39] == -1) ? 1 : 2) + 2;        
    }
    html.push('</tbody></table>');
    //html.push('<div class="discription"><div>è¯´æ˜Žï¼š</div>');
    // html.push('èƒŒæ™¯ <span style="background-color:#ECFBFB">&nbsp;&nbsp;&nbsp;&nbsp;</span> è¡¨ç¤ºåŽ†å²æ•°æ®, &nbsp;&nbsp;');
    //html.push('èƒŒæ™¯ <span style="background-color:#FFFFD0">&nbsp;&nbsp;&nbsp;&nbsp;</span> è¡¨ç¤ºæœ€æ–°æ•°æ®</div>');
    html.push('</div>');
    html.push('</div>');
    document.getElementById("oddsDiv").innerHTML = html.join("");
    Config.getCookie();
}
function oneRow(data, isEnd, t) {
    var arrs = data;
    if (t > 0)
        arrs = data.split(',');
    var html = new Array();
    var score = (arrs[0] == "æ—©é¤" || arrs[0] == "æœªå¼€åœº" ? "&nbsp;" : arrs[1] + ":" + arrs[2]);
    var bgColor = (arrs[0] == "æ—©é¤" ? "#349F00" : arrs[0] == "æœªå¼€åœº" ? "#FF3333" : "#0066FF");
    //var close_letHalf = arrs[40] == 1;//å°ç›˜æ ‡è¯†
    //var close_let = arr[41] == 1;
    //var close_totalHalf = arrs[42] == 1;
    //var close_total = arr[43] == 1;
    //var close_standHalf = arrs[44] == 1;
    //var close_stand = arr[45] == 1;//å°ç›˜æ ‡è¯†
    //var h1 = 3, f1 = 9, h2 = 15, f2 = 21, goalType1 = 1, goalType2 = 2; //è®©çƒã€å¤§å°
    //var close1_half = close_letHalf, close1 = close_let, close2_half = close_totalHalf, close2 = close_total;
    //if (Config.haveLetGoal == 0) {//å¤§å°ã€æ¬§èµ”
    //    h1 = 15;
    //    f1 = 21;
    //    h2 = 27;
    //    f2 = 33;
    //    goalType1 = 2;
    //    goalType2 = 3;
    //}
    //else {
    //    if (Config.haveEurope == 1) {//è®©çƒã€æ¬§èµ”
    //        h2 = 27;
    //        f2 = 33;
    //        goalType2 = 3;
    //    }
    //}
    Config.setFeng(arrs);//è®¾ç½®æ˜¯å¦å°ç›˜
    var isOneRow = (arrs[39] > 1 || arrs[39] == -1);   
    if (t == 0)
        html.push('<tr bgcolor="#FFFFFF"' + (isEnd ? " odds='" + data + "'" : "") + '>');
    if (t == 0 || t == 1) {
        html.push('<td width="50"' + (isOneRow ? '' : ' rowspan="2"') + ' align="center" bgcolor="' + bgColor + '" class="write">' + (arrs[39] == 1 && arrs[0] != '' && parseInt(arrs[0].toString()) > 45 ? "45" : arrs[0]) + '</td>');
        html.push('<td width="50"' + (isOneRow ? '' : ' rowspan="2"') + ' align="center" bgcolor="#FFFFFF" class="red_number">' + score + '</td>');
        html.push('<td width="50" height="24" align="center" bgcolor="#FFFFFF" class="rightline">' + (isOneRow ? 'å…¨åœº' : 'åŠåœº') + '</td>');
        for (var i = 0; i < 6; i++) {
            var num = Config.h1 + i;
            if (isOneRow)
                num = Config.f1 + i;
            var color = (i < 3 ? "#FFFFFF" : isEnd ? "#ECFBFB" : "#ECFBFB");//#FFFFD0
            var goal = arrs[num];
            if (i == 1 || i == 4)
                var goal = (Config.h1 == 3 ? Goal2GoalCn(arrs[num]) : Goal2GoalCn2(arrs[num])); //3 è®© 15 å¤§å°
            if ((isOneRow ? Config.close1 : Config.close1_half) && i > 2)
                html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType1 + ')" width="' + (i == 4 ? "70" : "40") + (i < 5 ? " class='no_RB'" : "") + '" align="center" bgcolor="' + color + '">' + (i == 4 ? "<span style='color:green;'>å°</span>" : "&nbsp;") + '</td>');
            else
                html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType1 + ')" width="' + (i == 1 || i == 4 ? "70" : "40") + '" align="center" bgcolor="' + color + '">' + (typeof (arrs[num]) != "undefined" && String(arrs[num]) != '' ? goal : "&nbsp;") + '</td>');
        }
        for (var i = 0; i < 6; i++) {
            var num = Config.h2 + i;
            if (isOneRow)
                num = Config.f2 + i;
            var color = (i < 3 ? "#FFFFFF" : isEnd ? "#ECFBFB" : "#ECFBFB");
            var goal = arrs[num];
            if (i == 1 || i == 4)
                goal = (Config.h2 == 15 ? Goal2GoalCn2(arrs[num]) : arrs[num]); //15 å¤§å° 27 æ¬§
            if ((isOneRow ? Config.close2 : Config.close2_half) && i > 2) 
                html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType2 + ')" width="' + (i == 4 ? "70" : i == 5 ? 42 : "40") + '" align="center"' + (i < 5 ? " class='no_RB'" : "") + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (i == 4 ? "<span style='color:green;'>å°</span>" : "&nbsp;") + '</td>')
            else
                html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType2 + ')" width="' + (i == 1 || i == 4 ? "70" : i == 5 ? 42 : "40") + '" align="center"' + (i == 0 ? ' class="leftline"' : '') + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (typeof (arrs[num]) != "undefined" && String(arrs[num]) != '' ? goal : "&nbsp;") + '</td>');//+ (isEnd && i >= 3 ? "<span class=\"isnew\">" : "") +   (isEnd && i > 3 ? "</span>" : "") +
        }
    }
    if (t == 0) {
        html.push('</tr>');
        if (!isOneRow)
            html.push('<tr bgcolor="#FFFFFF">');
    }
    if (!isOneRow) {
        if (t == 0 || t == 2) {
            html.push('<td height="24" align="center" class="rightline">å…¨åœº</td>');
            for (var i = 0; i < 6; i++) {
                var num = Config.f1 + i;
                var color = (i < 3 ? "#FFFFFF" : isEnd ? "#ECFBFB" : "#ECFBFB");
                var goal = arrs[num];
                if (i == 1 || i == 4)
                    goal = (Config.h1 == 3 ? Goal2GoalCn(arrs[num]) : Goal2GoalCn2(arrs[num])); //3 è®© 15 å¤§å°
                if (Config.close1 && i > 2)
                    html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType1 + ')"' + (color != "" ? ' bgcolor="' + color + '"' : '') + (i < 5 ? " class='no_RB'" : "") + ' align="center">' + (i == 4 ? "<span style='color:green;'>å°</span>" : "&nbsp;") + '</td>');
                else
                    html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType1 + ')" align="center"' + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (typeof (arrs[num]) != "undefined" && String(arrs[num]) != '' ? goal : "&nbsp;") + '</td>');
            }
            for (var i = 0; i < 6; i++) {
                var num = Config.f2 + i;
                var color = (i < 3 ? "#FFFFFF" : isEnd ? "#ECFBFB" : "#ECFBFB");
                var goal = arrs[num];
                if (i == 1 || i == 4)
                    goal = (Config.h2 == 15 ? Goal2GoalCn2(arrs[num]) : arrs[num]); //15 å¤§å° 27 æ¬§
                if (Config.close2 && i > 2) 
                    html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType2 + ')"' + (color != "" ? ' bgcolor="' + color + '"' : '') + ' align="center"' + (i < 5 ? " class='no_RB'" : "") + '>' + (i == 4 ? "<span style='color:green;'>å°</span>" : "&nbsp;") + '</td>')
                else
                    html.push('<td style="cursor:pointer;" onclick="goPage(' + Config.goalType2 + ')" align="center"' + (i == 0 ? ' class="leftline"' : '') + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (typeof (arrs[num]) != "undefined" && String(arrs[num]) != '' ? goal : "&nbsp;") + '</td>');//(isEnd && i >= 3 ? "<span class=\"isnew\">" : "") +   + (isEnd && i > 3 ? "</span>" : "")
            }
        }
    }
    if (t == 0 && !isOneRow)
        html.push('</tr>');
    return html.join("");
}
function oneRowTd(data, t, tr) {
    var score = (data[0] == "æ—©é¤" || data[0] == "æœªå¼€åœº" ? "&nbsp;" : data[1] + ":" + data[2]);
    var bgColor = (data[0] == "æ—©é¤" ? "#349F00" : data[0] == "æœªå¼€åœº" ? "#FF3333" : "#0066FF");
    //var h1 = 3, f1 = 9, h2 = 15, f2 = 21, goalType1 = 1, goalType2 = 2; //è®©çƒã€å¤§å°   goalType: 1 è®©çƒï¼› 2 å¤§å°ï¼› 3 æ¬§èµ”
    //if (Config.haveLetGoal == 0) {//å¤§å°ã€æ¬§èµ”
    //    h1 = 15;
    //    f1 = 21;
    //    h2 = 27;
    //    f2 = 33;
    //    goalType1 = 2;
    //    goalType2 = 3;
    //}
    //else {
    //    if (Config.haveEurope == 1) {//è®©çƒã€æ¬§èµ”
    //        h2 = 27;
    //        f2 = 33;
    //        goalType2 = 3;
    //    }
    //}
    var isOneRow = (data[39] > 1 || data[39] == -1);
    var attrNameList = "";
    var attrValList = "";
    if (t == 1) {
        attrNameList = "width," + (isOneRow ? '' : 'rowspan,') + "align,bgcolor,class";
        attrValList = "50," + (isOneRow ? '' : '2,') + "center," + bgColor + ",write";
        tr.appendChild(createTd(attrNameList, attrValList, data[0], 0));
        attrNameList = "width," + (isOneRow ? '' : 'rowspan,') + "align,bgcolor,class";
        attrValList = "50," + (isOneRow ? '' : '2,') + "center,#FFFFFF,red_number";
        tr.appendChild(createTd(attrNameList, attrValList, score, 0));
        attrNameList = "width,height,align,bgcolor,class";
        attrValList = "50,24,center,#FFFFFF,rightline";
        tr.appendChild(createTd(attrNameList, attrValList, isOneRow ? 'å…¨åœº' : 'åŠåœº', 0));
        for (var i = 0; i < 6; i++) {
            var num = Config.h1 + i;
            if (isOneRow)
                num = Config.f1 + i;
            var color = (i < 3 ? "#FFFFFF" : "#ECFBFB");
            var goal = data[num];
            if (i == 1 || i == 4)
                var goal = (Config.h1 == 3 ? Goal2GoalCn(data[num]) : Goal2GoalCn2(data[num])); //3 è®© 15 å¤§å°
            attrNameList = "width,align,bgcolor,class";
            attrValList = (i == 1 || i == 4 ? "70" : "40") + ",center," + color + ",rightline";
            tr.appendChild(createTd(attrNameList, attrValList, (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;"), Config.goalType1));
            //html.push('<td width="' + (i == 1 || i == 4 ? "70" : "40") + '" align="center" bgcolor="' + color + '">' + (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;") + '</td>');
        }
        for (var i = 0; i < 6; i++) {
            var num = Config.h2 + i;
            if (isOneRow)
                num = Config.f2 + i;
            var color = (i < 3 ? "#FFFFFF" : "#ECFBFB");
            var goal = data[num];
            if (i == 1 || i == 4)
                goal = (Config.h2 == 15 ? Goal2GoalCn2(data[num]) : data[num]); //15 å¤§å° 27 æ¬§
            attrNameList = "width,align," + (i == 0 ? "class," : "") + (color != "" ? "bgcolor" : "");
            attrValList = (i == 1 || i == 4 ? "70" : i == 5 ? 42 : "40") + ",center," + (i == 0 ? "leftline," : "") + (color != "" ? color : "");
            tr.appendChild(createTd(attrNameList, attrValList, (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;"), Config.goalType2));
            //html.push('<td width="' + (i == 1 || i == 4 ? "70" : i == 5 ? 42 : "40") + '" align="center"' + (i == 0 ? ' class="leftline"' : '') + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;") + '</td>');
        }
    }
    else if (t == 2) {
        attrNameList = "height,align,class";
        attrValList = "24,center,rightline";
        tr.appendChild(createTd(attrNameList, attrValList, 'å…¨åœº'), 0);
        for (var i = 0; i < 6; i++) {
            var num = Config.f1 + i;
            var color = (i < 3 ? "#FFFFFF" : "#ECFBFB");
            var goal = data[num];
            if (i == 1 || i == 4)
                goal = (Config.h1 == 3 ? Goal2GoalCn(data[num]) : Goal2GoalCn2(data[num])); //3 è®© 15 å¤§å°
            attrNameList = "align," + (color != "" ? "bgcolor" : "");
            attrValList = "center," + (color != "" ? color : "");
            tr.appendChild(createTd(attrNameList, attrValList, (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;"), Config.goalType1));
            //html.push('<td align="center"' + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;") + '</td>');
        }
        for (var i = 0; i < 6; i++) {
            var num = Config.f2 + i;
            var color = (i < 3 ? "#FFFFFF" : "#ECFBFB");
            var goal = data[num];
            if (i == 1 || i == 4)
                goal = (Config.h2 == 15 ? Goal2GoalCn2(data[num]) : data[num]); //15 å¤§å° 27 æ¬§
            attrNameList = "align," + (i == 0 ? "class," : "") + (color != "" ? "bgcolor" : "");
            attrValList = "center," + (i == 0 ? "leftline," : "") + (color != "" ? color : "");
            tr.appendChild(createTd(attrNameList, attrValList, (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;"), Config.goalType2));
            // html.push('<td align="center"' + (i == 0 ? ' class="leftline"' : '') + (color != "" ? ' bgcolor="' + color + '"' : '') + '>' + (typeof (data[num]) != "undefined" && String(data[num]) != '' ? goal : "&nbsp;") + '</td>');
        }
    }
    return tr;
}
function createTd(attrNameList, attrValList, txt, goalType) {
    var arrName = attrNameList.split(',');
    var arrVal = attrValList.split(',');
    var attributeList = "";
    try {
        for (var i = 0; i < arrName.length; i++) {
            attributeList += " " + arrName[i] + "='" + arrVal[i] + "'";
        }
        var td = document.createElement("<td style=\"cursor:pointer;\" onclick=\"goPage(" + goalType + ")\" " + attributeList + "></td>");
        td.innerHTML = txt;
        return td;
    } catch (e) {
        var td = document.createElement("td");
        td.setAttribute("onclick", "goPage(" + goalType + ")");
        td.setAttribute("style", "cursor:pointer;")
        for (var i = 0; i < arrName.length; i++) {
            td.setAttribute(arrName[i], arrVal[i]);
        }
        td.innerHTML = txt;
        return td;
    }
}
function goPage(goalType) {
    if (goalType > 0) {
        var url = "";
        if (goalType == 1)
            url = "http://vip.win007.com/changeDetail/handicap.aspx?id=" + scheduleID + "&companyID=3&l=0";
        else if (goalType == 2)
            url = "http://vip.win007.com/changeDetail/overunder.aspx?id=" + scheduleID + "&companyID=3&l=0";
        else
            url = "http://vip.win007.com/changeDetail/1x2.aspx?id=" + scheduleID + "&companyID=3&l=0";
        window.open(url);
    }
}

function makecornertable() {
    var html = new Array();
    if (typeof (cOdds) == "undefined") return;
    if (typeof (cOdds[0]) == "undefined" && typeof (cOdds[6]) == "undefined") return;
    html.push('<div class="content">');
    html.push('<table width="100%" cellpadding="0" cellspacing="0">');
    html.push('<tbody>');
    html.push('<tr><th colspan="8" align="center" class="bg1">365è§’çƒèµ”çŽ‡</th></tr>');
    if (typeof (cOdds[0]) != "undefined") {
        html.push('<tr bgcolor="#FCEAAB">');
        html.push('<td colspan="8" align="center"><strong>è®©çƒ</strong></td>');
        html.push('</tr>');
        html.push('<tr onclick="goCorner(' + scheduleID + ')" style="cursor:pointer;" align="center" class="bg1" id="trCornerLetgoal" odds=' + cOdds[3] + ',' + cOdds[4] + ',' + cOdds[5] + '>');// style="cursor:hand;"
        html.push('<td width="14%" bgcolor="#EBF2F8">åˆç›˜</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[1] + ' </td>');
        html.push('<td width="12%" class="bg2">' + Goal2GoalCn2(cOdds[0]) + '</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[2] + '</td>');
        html.push('<td width="14%" bgcolor="#EBF2F8">å³æ—¶</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[4] + '</td>');
        html.push('<td width="12%" class="bg2">' + Goal2GoalCn2(cOdds[3]) + '</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[5] + '</td>');
        html.push('</tr>');
    }
    if (typeof (cOdds[6]) != "undefined") {
        html.push('<tr bgcolor="#FCEAAB">');
        html.push('<td colspan="8" align="center"><strong>å¤§å°</strong></td>');
        html.push('</tr>');
        html.push('<tr onclick="goCorner(' + scheduleID + ')" style="cursor:pointer;" align="center" class="bg1"  id="trCornerTotal" odds=' + cOdds[9] + ',' + cOdds[10] + ',' + cOdds[11] + '>');// style="cursor:hand;"
        html.push('<td width="14%" bgcolor="#EBF2F8">åˆç›˜</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[7] + ' </td>');
        html.push('<td width="12%" class="bg2">' + Goal2GoalCn2(cOdds[6]) + '</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[8] + '</td>');
        html.push('<td width="14%" bgcolor="#EBF2F8">å³æ—¶</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[10] + '</td>');
        html.push('<td width="12%" class="bg2">' + Goal2GoalCn2(cOdds[9]) + '</td>');
        html.push('<td width="12%" class="bg2">' + cOdds[11] + '</td>');
        html.push('</tr>');
    }
    html.push('</tbody></table>');
    html.push('</div>');
    document.getElementById("cornerOddsDiv").innerHTML = html.join("");
}
function goCorner(id) {
    var url = "http://vip.win007.com/ChangeDetail/corner.aspx?id=" + id + "&companyid=8&l=0";
    window.open(url);
}
function refreshCorner() {
    try {
        if (oXmlCornerHttp.readyState != 4 || (oXmlCornerHttp.status != 200 && oXmlCornerHttp.status != 0)) return;
        if (oldCornerXml == oXmlCornerHttp.responseText) return
        oldCornerXml = oXmlCornerHttp.responseText;
        if (oXmlCornerHttp.responseXML == null) return;
        var root = oXmlCornerHttp.responseXML.documentElement;
        var D = new Array();
        var odds;
        //var obj = document.getElementById("oddsTbody"); //oddsTable
        var obj = document.getElementById("oddsTable").tBodies[0]
        var trLet = document.getElementById("trCornerLetgoal");
        var trTotal = document.getElementById("trCornerTotal");
        if (root.childNodes.length > 0) {
            if (document.all && parseInt(ieNum) < 10)
                D = root.childNodes[0].text.split(";");
            else
                D = root.childNodes[0].textContent.split(";");
            for (var j = 0; j < D.length; j++) {
                var data = D[j].split(',');
                var odds2 = D[j].split(',');
                if (trLet != null && typeof (data[0]) != "undefined" && data[0] != '') {
                    var oldOdds = trLet.attributes["odds"].value.split(",");
                    for (var k = 1; k < 3; k++) {
                        if (typeof (oldOdds[k]) != "undefined" && typeof (data[k]) != "undefined") {
                            if (parseFloat(oldOdds[k]) > parseFloat(data[k])) data[k] = "<span class=greedBg>" + data[k] + "</span>";
                            else if (parseFloat(oldOdds[k]) < parseFloat(data[k])) data[k] = "<span class=redBg>" + data[k] + "</span>";
                        }
                    }
                    trLet.cells[5].innerHTML = data[1];
                    trLet.cells[6].innerHTML = data[0];
                    trLet.cells[7].innerHTML = data[2];
                    trLet.attributes["odds"].value = odds2[0] + ',' + odds2[1] + ',' + odds2[2]
                }
                if (trTotal != null && typeof (data[3]) != "undefined" && data[3] != '') {
                    var oldOdds = trTotal.attributes["odds"].value.split(",");
                    for (var k = 1; k < 3; k++) {
                        if (typeof (oldOdds[k]) != "undefined" && typeof (data[k + 3]) != "undefined") {
                            if (parseFloat(oldOdds[k]) > parseFloat(data[k + 3])) data[k + 3] = "<span class=greedBg>" + data[k + 3] + "</span>";
                            else if (parseFloat(oldOdds[k]) < parseFloat(data[k + 3])) data[k + 3] = "<span class=redBg>" + data[k + 3] + "</span>";
                        }
                    }
                    trTotal.cells[5].innerHTML = data[4];
                    trTotal.cells[6].innerHTML = data[3];
                    trTotal.cells[7].innerHTML = data[5];
                    trTotal.attributes["odds"].value = odds2[3] + ',' + odds2[4] + ',' + odds2[5]
                }
            }
            window.setTimeout("restoreCornerOddsColor()", 30000);
        }
    } catch (e) { }
}
function restoreCornerOddsColor(num) {
    var trLet = document.getElementById("trCornerLetgoal");
    var trTotal = document.getElementById("trCornerTotal");
    if (trLet != null) {
        for (var i = 0; i < trLet.cells.length; i++) {
            trLet.cells[i].innerHTML = trLet.cells[i].innerHTML.toLowerCase().replace(/<span class=redBg>/g, "").replace(/<span class=greedBg>/g, "").replace(/<\/span>/g, "");
        }
    }
    if (trTotal != null) {
        for (var i = 0; i < trTotal.cells.length; i++) {
            trTotal.cells[i].innerHTML = trTotal.cells[i].innerHTML.toLowerCase().replace(/<span class=redBg>/g, "").replace(/<span class=greedBg>/g, "").replace(/<\/span>/g, "");
        }
    }
}