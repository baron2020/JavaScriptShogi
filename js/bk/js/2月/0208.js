//先手の駒のid
var skomaId=["sou","shisya","skaku","skin1","skin2","sgin1","sgin2","skeima1","skeima2","skyou1","skyou2"
			,"shu1","shu2","shu3","shu4","shu5","shu6","shu7","shu8","shu9"];
//後手の駒のid
var gkomaId=["gou","ghisya","gkaku","gkin1","gkin2","ggin1","ggin2","gkeima1","gkeima2","gkyou1","gkyou2"
			,"ghu1","ghu2","ghu3","ghu4","ghu5","ghu6","ghu7","ghu8","ghu9"];
//先手,後手の駒
var sou,shisya,skaku,skin1,skin2,sgin1,sgin2,skeima1,skeima2,skyou1,skyou2,shu1,shu2,shu3,shu4,shu5,shu6,shu7,shu8,shu9;
var gou,ghisya,gkaku,gkin1,gkin2,ggin1,ggin2,gkeima1,gkeima2,gkyou1,gkyou2,ghu1,ghu2,ghu3,ghu4,ghu5,ghu6,ghu7,ghu8,ghu9;
//先手,後手の駒のイベントリスナの準備
var souevent,shisyaevent,skakuevent,skin1event,skin2event,sgin1event,sgin2event,skeima1event,skeima2event,skyou1event,skyou2event;
var shu1event,shu2event,shu3event,shu4event,shu5event,shu6event,shu7event,shu8event,shu9event;//s歩1～9イベント
var gouevent,ghisyaevent,gkakuevent,gkin1event,gkin2event,ggin1event,ggin2event,gkeima1event,gkeima2event,gkyou1event,gkyou2event;
var ghu1event,ghu2event,ghu3event,ghu4event,ghu5event,ghu6event,ghu7event,ghu8event,ghu9event;//g歩1～9イベント

//先手成り駒
var sryuu,suma,snarigin1,snarigin2,snarikei1,snarikei2,snarikyou1,snarikyou2,stokin1,stokin2,stokin3,stokin4,stokin5,stokin6,stokin7,stokin8,stokin9;
//後手成り駒
var gryuu,guma,gnarigin1,gnarigin2,gnarikei1,gnarikei2,gnarikyou1,gnarikyou2,gtokin1,gtokin2,gtokin3,gtokin4,gtokin5,gtokin6,gtokin7,gtokin8,gtokin9;
//先手成り駒
stokin1="<p class='skoma promotion'id='shu1'>と</p>";
stokin2="<p class='skoma promotion'id='shu2'>と</p>";
stokin3="<p class='skoma promotion'id='shu3'>と</p>";
stokin4="<p class='skoma promotion'id='shu4'>と</p>";
stokin5="<p class='skoma promotion'id='shu5'>と</p>";
stokin6="<p class='skoma promotion'id='shu6'>と</p>";
stokin7="<p class='skoma promotion'id='shu7'>と</p>";
stokin8="<p class='skoma promotion'id='shu8'>と</p>";
stokin9="<p class='skoma promotion'id='shu9'>と</p>";
//後手成り駒
gryuu="<p class='gkoma promotion'id='ghisya'>竜</p>";
guma="<p class='gkoma promotion'id='gkaku'>馬</p>";
gnarigin1="<p class='gkoma promotion'id='ggin1'>全</p>";
gnarigin2="<p class='gkoma promotion'id='ggin2'>全</p>";
gnarikei1="<p class='gkoma promotion'id='gkeima1'>圭</p>";
gnarikei2="<p class='gkoma promotion'id='gkeima2'>圭</p>";
gnarikyou1="<p class='gkoma promotion'id='gkyou1'>杏</p>";
gnarikyou2="<p class='gkoma promotion'id='gkyou2'>杏</p>";
gtokin1="<p class='gkoma promotion'id='ghu1'>と</p>";
gtokin2="<p class='gkoma promotion'id='ghu2'>と</p>";
gtokin3="<p class='gkoma promotion'id='ghu3'>と</p>";
gtokin4="<p class='gkoma promotion'id='ghu4'>と</p>";
gtokin5="<p class='gkoma promotion'id='ghu5'>と</p>";
gtokin6="<p class='gkoma promotion'id='ghu6'>と</p>";
gtokin7="<p class='gkoma promotion'id='ghu7'>と</p>";
gtokin8="<p class='gkoma promotion'id='ghu8'>と</p>";
gtokin9="<p class='gkoma promotion'id='ghu9'>と</p>";

//クラスを返すイベント
var skomaevents;
var gkomaevents;

//座標関連
var ky=0;
var kx=0;
var kys=0;//整数y
var kxs=0;//整数x
var banx=36;//将棋盤までのpx横幅(距離)
var bany=172;//将棋盤までのpx高さ(距離)
var plen=22;//駒置き場の長さ

var board=[];//メインの将棋盤
var gotekomadai=[];//後手の駒台
var sentekomadai=[];//先手の駒台

var maindisp="";//メイン表示用
var sdisp="";//先手駒台表示用
var gdisp="";//後手駒台表示用
var userb=window.navigator.appName;//ユーザーブラウザ
var wnu=window.navigator.userAgent;//ユーザーエージェント
var useros;//ユーザーos
var userw=window.innerWidth;//ウィンドウの横幅
var userh=window.innerHeight;//ウィンドウの高さ


//フラグ関連
var mainCount=0;
var komaClass="komaClass初期化";
var komaId="komaId初期化";
var firstTouchKoma="firstTouchKoma初期化";//一度目にタッチした駒のid
var masuCurrent;//カレントのマスのid
var firstTouchMasuInOut;//最初にタッチしたマスが盤内か？
var toukaritu;//透過率
var ytemp;
var xtemp;
var motigoma;//取得した駒
var supportTouch='ontouchend'in document;//タッチイベントがサポートされているか
var EVENTNAME=supportTouch ? 'touchstart':'mousedown';//タッチイベントかマウスダウンか

var promotion;//駒が成れるか？
var teban;
teban="先手";
var standId;//空いている駒台のid
var headId;//駒台のidの頭文字s又はg


//後手駒台の作成
function gAria(){
	gotekomadai=new Array(plen);
	for(g=0;g<plen;g++){
		gpaneru="<div class='gStand'id='g"+g+"'>　</div>";
		gotekomadai[g]=gpaneru;
	}
	for(g=0;g<plen;g++){
		gdisp+=gotekomadai[g];
		if(g==21){
		break;
		}
		if(g==10){
		gdisp+="<br>";
		}
	}
}
//先手駒台の作成
function sAria(){
	sentekomadai=new Array(plen);
	for(s=0;s<plen;s++){
		spaneru="<div class='sStand'id='s"+s+"'>　</div>";
		sentekomadai[s]=spaneru;
	}
	for(s=0;s<plen;s++){
		sdisp+=sentekomadai[s];
		if(s==21){
		break;
		}
		if(s==10){
		sdisp+="<br>";
		}
	}
}

//中央メイン盤の作成
function mainAria(){
	board=new Array(11);
	for(y=0;y<11;y++){
		board[y]=new Array(11)
		for(x=0;x<11;x++){
			if((y==0)){
				if((x==0)||(x==10)){
					paneru="<div class='topAndCornerEdge'id='d"+y+"s"+x+"'>　</div>";
				}else{
				paneru="<div class='topEdge'id='d"+y+"s"+x+"'>　</div>";
				}
			}
			else if((x==10)&&((y>=1)&&(y<=9))){
				paneru="<div class='rightEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else if((y==10)&&((x>=1)&&(x<=9))){
				paneru="<div class='bottomEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else if((x==0)&&((y>=1)&&(y<=9))){
				paneru="<div class='leftEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else if(((y==10)&&(x==0))||((y==10)&&(x==10))){
				paneru="<div class='bottomAndCornerEdge'id='d"+y+"s"+x+"'>　</div>";
			}
			else{
				paneru="<div class='ban'id='d"+y+"s"+x+"'>　</div>";
			}
			board[y][x]=paneru;
		}
	}
	for(y=0;y<11;y++){
		for(x=0;x<11;x++){
		maindisp+=board[y][x];
		if((y==10)&&(x==10)){
		break;
		}
		if(x==10){
		maindisp+="<br>";
		}
		}
	}	
}

function start(){
	gAria();
	mainAria();
	sAria();
	userCheck();
	document.getElementById("gdisp").innerHTML=gdisp;
	document.getElementById("maindisp").innerHTML=maindisp;
	document.getElementById("sdisp").innerHTML=sdisp;
	document.getElementById("useros").innerHTML=useros;//userのosを表示
	document.getElementById("userw").innerHTML=userw;//userの横幅を表示
	document.getElementById("userh").innerHTML=userh;//userの高さを表示
	//駒の配置とイベントリスナの登録
	setUp();
	//イベント分岐
	if(EVENTNAME=='touchstart'){
		document.addEventListener("touchstart",touchstart);
	}else{
		document.addEventListener("mousedown",mousedown);
	}
}
//パソコン用マウスダウン
function mousedown(e){
	touchpiece(e.pageX,e.pageY);
}

//スマホ用タッチスタート
function touchstart(e){
	//もしタッチされたのが一箇所であるなら
	if(e.targetTouches.length==1){
		touch=e.targetTouches[0];
		touchpiece(touch.pageX,touch.pageY);
	}
}

//自分の駒かの判定、先手はskomaクラス,後手はgkomaクラス
function isMyPiece(teban,komaClass){
	if((teban=="先手")&&(komaClass=="skoma")||(teban=="後手")&&(komaClass=="gkoma")){
		return true;
	}
	return false;
}

//タッチされた時のイベントの処理
function touchpiece(tx,ty){
	getCoordinate(tx,ty);//座標、盤内外の取得
	//駒の選択から移動まで
	//条件：手番が先手かつ選択した駒が先手の駒である。先手の成り駒である。
	if((mainCount==0)&&(teban=="先手")&&((komaClass=="skoma")||(komaClass=="skoma promotion"))){
		choice();	
		firstTouchMasuInOut=InOut(kys,kxs);//一度にタッチした駒は盤内の駒か？
		mainCount=25;
		return;
	}else if((mainCount==0)){
		reset();
		return;
	}
	//タッチしたマスに先手の駒がない＆盤内
	if((mainCount==25)&&(komaClass!="skoma")&&(InOut(kys,kxs))){
		//駒台を経由する処理
		if(komaClass=="gkoma"){
			motigoma=komaId;
			pieseDelete(motigoma);//駒とイベントリスナの削除
			headId="s";
			VacantStandId(headId);//standId(空いている駒台のid)を返す
			pieseInsert(motigoma,standId,teban);//駒とイベントリスナの追加
		}
		MoveCommit();
		teban="後手";
		document.getElementById("teban").innerHTML=teban+"の手番です";//手番
		mainCount=50;//50：後手の操作初期
		return;
	}else if((mainCount==25)){
		reset();
		return;
	}
	
	//後手の操作
	if((mainCount==50)&&(teban=="後手")&&((komaClass=="gkoma")||(komaClass=="gkoma promotion"))){
		choice();
		firstTouchMasuInOut=InOut(kys,kxs);//一度にタッチした駒は盤内の駒か？
		mainCount=75;
		return;
	}else if((mainCount==50)){
		reset();
		mainCount=50;//50：後手の操作初期
		return;
	}
	//タッチしたマスに後手の駒がない＆盤内
	if((mainCount==75)&&(komaClass!="gkoma")&&(InOut(kys,kxs))){
		//持ち駒に追加する
		if(komaClass=="skoma"){
			motigoma=komaId;
			pieseDelete(motigoma);//駒とイベントリスナの削除
			headId="g";
			VacantStandId(headId);//standId(空いている駒台のid)を返す
			pieseInsert(motigoma,standId,teban);//駒とイベントリスナの追加
		}
		MoveCommit();
		teban="先手";
		document.getElementById("teban").innerHTML=teban+"の手番です";//手番
		mainCount=0;//0：先手の操作初期
		return;
	}else if((mainCount==75)){
		reset();
		mainCount=50;//50：後手の操作初期
		return;
	}
}

function getCoordinate(tx,ty){
	kx=Math.trunc(tx);
	ky=Math.trunc(ty);
	kxs=Math.floor(((tx-banx)/32)+1);
	kys=Math.floor(((ty-bany)/32)+1);
	masuCurrent="d"+kys+"s"+kxs;//カレントのタッチマス
	inout=InOut(kxs,kys);//盤内？外？
	//y,x座標の表示
	document.getElementById("ky").innerHTML=ky;//y座標
	document.getElementById("kx").innerHTML=kx;//x座標
	document.getElementById("kys").innerHTML=kys;//y座標の整数
	document.getElementById("kxs").innerHTML=kxs;//x座標の整数
	document.getElementById("classtest").innerHTML=komaClass;//選択したクラス
	document.getElementById("idtest").innerHTML=komaId;//選択したid
	document.getElementById("yxtest").innerHTML=masuCurrent;//選択したマス
	document.getElementById("inout").innerHTML=inout//盤内か？外か？
}
//駒の選択
function choice(){
	toukaritu=0.3;
	touka(komaId,toukaritu);//タッチした駒の透過率を変える
	firstTouchKoma=komaId;//一度目にタッチした駒のid
	komaClass="リセット"
}
//選択した駒の移動完了まで
function MoveCommit(){
	var res;
	pieseDelete(firstTouchKoma);//駒とイベントリスナの削除
	//ここで成るか成らないかの判定
	if((teban=="先手")&&(firstTouchMasuInOut)&&(gotejin(masuCurrent))){
		res=confirm("成りますか？");
		if(res==true){
			promotion(firstTouchKoma,masuCurrent);//駒の昇格
			PlaySound();//音を出す
			reset();
			return;
		}else{
			;
		}	
	}
	//ここで成るか成らないかの判定
	if((teban=="後手")&&(firstTouchMasuInOut)&&(sentejin(masuCurrent))){
		res=confirm("成りますか？");
		if(res==true){
		
		
			alert("馬");
		}else{
			;
		}	
	}
	pieseInsert(firstTouchKoma,masuCurrent,teban);//駒とイベントリスナの追加
	PlaySound();//音を出す
	reset();
}

//後手陣か？
function gotejin(masuCurrent){
	//正規表現
	var regex1=new RegExp(/d1s[1-9]/);
	var regex2=new RegExp(/d2s[1-9]/);
	var regex3=new RegExp(/d3s[1-9]/);
	var promotion1=regex1.test(masuCurrent);
	var promotion2=regex2.test(masuCurrent);
	var promotion3=regex3.test(masuCurrent);
	
	if((promotion1)||(promotion2)||(promotion3)){
	return true;
	}
	return false;
}
//先手陣か？
function sentejin(masuCurrent){
	//正規表現
	var regex1=new RegExp(/d7s[1-9]/);
	var regex2=new RegExp(/d8s[1-9]/);
	var regex3=new RegExp(/d9s[1-9]/);
	var promotion1=regex1.test(masuCurrent);
	var promotion2=regex2.test(masuCurrent);
	var promotion3=regex3.test(masuCurrent);
	
	if((promotion1)||(promotion2)||(promotion3)){
	return true;
	}
	return false;
}

//空いている駒台のidを返す
function VacantStandId(headId){
	var getchild;
	if(headId=="s"){
		headId="s";
	}else{
		headId="g";
	}
	for(let i=0;i<plen;i++){
		if((i==0)||(i==10)||(i==11)){
		continue;//判定しない
		}
		standId=headId+i;
		getchild=document.getElementById(standId).children;
		if(getchild.length==0){
			break;
		}
	}
	return standId;
}
//自身のidを返す
function getId(){
	komaClass=this.className;
	komaId=this.id;
}

//将棋盤の中か？外か？
function InOut(y,x){
	if(((x>=1)&&(x<=9))&&((y>=1)&&(y<=9))){
		return true;
	}
	return false;
}
var choicetemp;//選択した駒
//選択した駒(id)の透過率を変化させる
function touka(komaId,toukaritu){
	choicetemp=document.getElementById(komaId);
	choicetemp.style.opacity=toukaritu;//0.3:30%
}
//リセット用
function reset(){//
	touka(firstTouchKoma,1);//一度目にタッチした駒の透過率を戻す
	mainCount=0;
	komaClass="classリセット";
	komaId="idリセット";
	firstTouchKoma="firstTouchKomaリセット";
}

//ユーザーosチェック
function userCheck(){
if(wnu.indexOf('iPhone')!=-1){
	useros="iPhone";
	}else if(wnu.indexOf('iPod')!==-1){
	useros="iPod";
	}else if(wnu.indexOf('Android')!==-1){
	useros="Android";
	}else if(wnu.indexOf('Windows')!==-1){
	useros="Windows";
	}else{
	useros="わかりません";
	}
	return useros;
}


var classChange;
//要修正
//新生する。駒とイベントリスナの追加
function pieseInsert(firstTouchKoma,masuCurrent,teban){
	//先手の駒
	if(firstTouchKoma=="sou"){
		sou="<p class='skoma'id='sou'>王</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',sou);
		//後手の駒台経由の処理はここを通過する。
		if(teban=="後手"){
			classChange=document.getElementById('sou');
			classChange.className="gkoma";
		}
		souevent=document.getElementById('sou');
		souevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shisya"){
		shisya="<p class='skoma'id='shisya'>飛</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shisya);
		if(teban=="後手"){
			classChange=document.getElementById('shisya');
			classChange.className="gkoma";
		}
		shisyaevent=document.getElementById('shisya');
		shisyaevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skaku"){
		skaku="<p class='skoma'id='skaku'>角</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skaku);
		if(teban=="後手"){
			classChange=document.getElementById('skaku');
			classChange.className="gkoma";
		}
		skakuevent=document.getElementById('skaku');
		skakuevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skin1"){
		skin1="<p class='skoma'id='skin1'>金</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skin1);
		if(teban=="後手"){
			classChange=document.getElementById('skin1');
			classChange.className="gkoma";
		}
		skin1event=document.getElementById('skin1');
		skin1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skin2"){
		skin2="<p class='skoma'id='skin2'>金</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skin2);
		if(teban=="後手"){
			classChange=document.getElementById('skin2');
			classChange.className="gkoma";
		}
		skin2event=document.getElementById('skin2');
		skin2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="sgin1"){
		sgin1="<p class='skoma'id='sgin1'>銀</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',sgin1);
		if(teban=="後手"){
			classChange=document.getElementById('sgin1');
			classChange.className="gkoma";
		}
		sgin1event=document.getElementById('sgin1');
		sgin1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="sgin2"){
		sgin2="<p class='skoma'id='sgin2'>銀</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',sgin2);
		if(teban=="後手"){
			classChange=document.getElementById('sgin2');
			classChange.className="gkoma";
		}
		sgin2event=document.getElementById('sgin2');
		sgin2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skeima1"){
		skeima1="<p class='skoma'id='skeima1'>桂</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skeima1);
		if(teban=="後手"){
			classChange=document.getElementById('skeima1');
			classChange.className="gkoma";
		}
		skeima1event=document.getElementById('skeima1');
		skeima1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skeima2"){
		skeima2="<p class='skoma'id='skeima2'>桂</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skeima2);
		if(teban=="後手"){
			classChange=document.getElementById('skeima2');
			classChange.className="gkoma";
		}
		skeima2event=document.getElementById('skeima2');
		skeima2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skyou1"){
		skyou1="<p class='skoma'id='skyou1'>香</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skyou1);
		if(teban=="後手"){
			classChange=document.getElementById('skyou1');
			classChange.className="gkoma";
		}
		skyou1event=document.getElementById('skyou1');
		skyou1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skyou2"){
		skyou2="<p class='skoma'id='skyou2'>香</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',skyou2);
		if(teban=="後手"){
			classChange=document.getElementById('skyou2');
			classChange.className="gkoma";
		}
		skyou2event=document.getElementById('skyou2');
		skyou2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu1"){
		shu1="<p class='skoma'id='shu1'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu1);
		if(teban=="後手"){
			classChange=document.getElementById('shu1');
			classChange.className="gkoma";
		}
		shu1event=document.getElementById('shu1');
		shu1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu2"){
		shu2="<p class='skoma'id='shu2'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu2);
		if(teban=="後手"){
			classChange=document.getElementById('shu2');
			classChange.className="gkoma";
		}
		shu2event=document.getElementById('shu2');
		shu2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu3"){
		shu3="<p class='skoma'id='shu3'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu3);
		if(teban=="後手"){
			classChange=document.getElementById('shu3');
			classChange.className="gkoma";
		}
		shu3event=document.getElementById('shu3');
		shu3event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu4"){
		shu4="<p class='skoma'id='shu4'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu4);
		if(teban=="後手"){
			classChange=document.getElementById('shu4');
			classChange.className="gkoma";
		}
		shu4event=document.getElementById('shu4');
		shu4event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu5"){
		shu5="<p class='skoma'id='shu5'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu5);
		if(teban=="後手"){
			classChange=document.getElementById('shu5');
			classChange.className="gkoma";
		}
		shu5event=document.getElementById('shu5');
		shu5event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu6"){
		shu6="<p class='skoma'id='shu6'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu6);
		if(teban=="後手"){
			classChange=document.getElementById('shu6');
			classChange.className="gkoma";
		}
		shu6event=document.getElementById('shu6');
		shu6event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu7"){
		shu7="<p class='skoma'id='shu7'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu7);
		if(teban=="後手"){
			classChange=document.getElementById('shu7');
			classChange.className="gkoma";
		}
		shu7event=document.getElementById('shu7');
		shu7event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu8"){
		shu8="<p class='skoma'id='shu8'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu8);
		if(teban=="後手"){
			classChange=document.getElementById('shu8');
			classChange.className="gkoma";
		}
		shu8event=document.getElementById('shu8');
		shu8event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu9"){
		shu9="<p class='skoma'id='shu9'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',shu9);
		if(teban=="後手"){
			classChange=document.getElementById('shu9');
			classChange.className="gkoma";
		}
		shu9event=document.getElementById('shu9');
		shu9event.addEventListener(EVENTNAME,getId,false);
	}
	//後手の駒
	else if(firstTouchKoma=="gou"){
		gou="<p class='gkoma'id='gou'>玉</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gou);
		//先手の駒台経由の処理はここを通過する。
		if(teban=="先手"){
			classChange=document.getElementById('gou');
			classChange.className="skoma";
		}
		gouevent=document.getElementById('gou');
		gouevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghisya"){
		ghisya="<p class='gkoma'id='ghisya'>飛</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghisya);
		if(teban=="先手"){
			classChange=document.getElementById('ghisya');
			classChange.className="skoma";
		}
		ghisyaevent=document.getElementById('ghisya');
		ghisyaevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkaku"){
		gkaku="<p class='gkoma'id='gkaku'>角</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkaku);		
		if(teban=="先手"){
			classChange=document.getElementById('gkaku');
			classChange.className="skoma";
		}
		gkakuevent=document.getElementById('gkaku');
		gkakuevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkin1"){
		gkin1="<p class='gkoma'id='gkin1'>金</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkin1);
		if(teban=="先手"){
			classChange=document.getElementById('gkin1');
			classChange.className="skoma";
		}
		gkin1event=document.getElementById('gkin1');
		gkin1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkin2"){
		gkin2="<p class='gkoma'id='gkin2'>金</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkin2);
		if(teban=="先手"){
			classChange=document.getElementById('gkin2');
			classChange.className="skoma";
		}
		gkin2event=document.getElementById('gkin2');
		gkin2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ggin1"){
		ggin1="<p class='gkoma'id='ggin1'>銀</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ggin1);
		if(teban=="先手"){
			classChange=document.getElementById('ggin1');
			classChange.className="skoma";
		}
		ggin1event=document.getElementById('ggin1');
		ggin1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ggin2"){
		ggin2="<p class='gkoma'id='ggin2'>銀</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ggin2);
		if(teban=="先手"){
			classChange=document.getElementById('ggin2');
			classChange.className="skoma";
		}
		ggin2event=document.getElementById('ggin2');
		ggin2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkeima1"){
		gkeima1="<p class='gkoma'id='gkeima1'>桂</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkeima1);
		if(teban=="先手"){
			classChange=document.getElementById('gkeima1');
			classChange.className="skoma";
		}
		gkeima1event=document.getElementById('gkeima1');
		gkeima1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkeima2"){
		gkeima2="<p class='gkoma'id='gkeima2'>桂</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkeima2);
		if(teban=="先手"){
			classChange=document.getElementById('gkeima2');
			classChange.className="skoma";
		}
		gkeima2event=document.getElementById('gkeima2');
		gkeima2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkyou1"){
		gkyou1="<p class='gkoma'id='gkyou1'>香</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkyou1);
		if(teban=="先手"){
			classChange=document.getElementById('gkyou1');
			classChange.className="skoma";
		}
		gkyou1event=document.getElementById('gkyou1');
		gkyou1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="gkyou2"){
		gkyou2="<p class='gkoma'id='gkyou2'>香</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gkyou2);
		if(teban=="先手"){
			classChange=document.getElementById('gkyou2');
			classChange.className="skoma";
		}
		gkyou2event=document.getElementById('gkyou2');
		gkyou2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu1"){
		ghu1="<p class='gkoma'id='ghu1'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu1);
		if(teban=="先手"){
			classChange=document.getElementById('ghu1');
			classChange.className="skoma";
		}
		ghu1event=document.getElementById('ghu1');
		ghu1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu2"){
		ghu2="<p class='gkoma'id='ghu2'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu2);
		if(teban=="先手"){
			classChange=document.getElementById('ghu2');
			classChange.className="skoma";
		}
		ghu2event=document.getElementById('ghu2');
		ghu2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu3"){
		ghu3="<p class='gkoma'id='ghu3'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu3);
		if(teban=="先手"){
			classChange=document.getElementById('ghu3');
			classChange.className="skoma";
		}
		ghu3event=document.getElementById('ghu3');
		ghu3event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu4"){
		ghu4="<p class='gkoma'id='ghu4'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu4);
		if(teban=="先手"){
			classChange=document.getElementById('ghu4');
			classChange.className="skoma";
		}
		ghu4event=document.getElementById('ghu4');
		ghu4event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu5"){
		ghu5="<p class='gkoma'id='ghu5'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu5);
		if(teban=="先手"){
			classChange=document.getElementById('ghu5');
			classChange.className="skoma";
		}
		ghu5event=document.getElementById('ghu5');
		ghu5event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu6"){
		ghu6="<p class='gkoma'id='ghu6'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu6);
		if(teban=="先手"){
			classChange=document.getElementById('ghu6');
			classChange.className="skoma";
		}
		ghu6event=document.getElementById('ghu6');
		ghu6event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu7"){
		ghu7="<p class='gkoma'id='ghu7'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu7);
		if(teban=="先手"){
			classChange=document.getElementById('ghu7');
			classChange.className="skoma";
		}
		ghu7event=document.getElementById('ghu7');
		ghu7event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu8"){
		ghu8="<p class='gkoma'id='ghu8'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu8);
		if(teban=="先手"){
			classChange=document.getElementById('ghu8');
			classChange.className="skoma";
		}
		ghu8event=document.getElementById('ghu8');
		ghu8event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="ghu9"){
		ghu9="<p class='gkoma'id='ghu9'>歩</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',ghu9);
		if(teban=="先手"){
			classChange=document.getElementById('ghu9');
			classChange.className="skoma";
		}
		ghu9event=document.getElementById('ghu9');
		ghu9event.addEventListener(EVENTNAME,getId,false);
	}
	
}
//要修正
//削除する。選択した駒とイベントリスナの削除
function pieseDelete(firstTouchKoma){
	if(firstTouchKoma=="sou"){
		souevent.removeEventListener(EVENTNAME,getId);//イベントリスナの削除
	}else if(firstTouchKoma=="shisya"){
		shisyaevent.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skaku"){
		skakuevent.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skin1"){
		skin1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skin2"){
		skin2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="sgin1"){
		sgin1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="sgin2"){
		sgin2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skeima1"){
		skeima1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skeima2"){
		skeima2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skyou1"){
		skyou1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="skyou2"){
		skyou2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu1"){
		shu1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu2"){
		shu2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu3"){
		shu3event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu4"){
		shu4event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu5"){
		shu5event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu6"){
		shu6event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu7"){
		shu7event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu8"){
		shu8event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="shu9"){
		shu9event.removeEventListener(EVENTNAME,getId);
	}
	//後手の駒とイベントリスナを削除
	else if(firstTouchKoma=="gou"){
		gouevent.removeEventListener(EVENTNAME,getId);//イベントリスナの削除
	}else if(firstTouchKoma=="ghisya"){
		ghisyaevent.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkaku"){
		gkakuevent.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkin1"){
		gkin1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkin2"){
		gkin2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ggin1"){
		ggin1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ggin2"){
		ggin2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkeima1"){
		gkeima1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkeima2"){
		gkeima2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkyou1"){
		gkyou1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="gkyou2"){
		gkyou2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu1"){
		ghu1event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu2"){
		ghu2event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu3"){
		ghu3event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu4"){
		ghu4event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu5"){
		ghu5event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu6"){
		ghu6event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu7"){
		ghu7event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu8"){
		ghu8event.removeEventListener(EVENTNAME,getId);
	}else if(firstTouchKoma=="ghu9"){
		ghu9event.removeEventListener(EVENTNAME,getId);
	}
	document.getElementById(firstTouchKoma).remove();
}

//駒の昇格
function promotion(){
	if(firstTouchKoma=="shisya"){
		sryuu="<p class='skoma promotion'id='shisya'>竜</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',sryuu);
		//イベントリスナを追加
		shisyaevent=document.getElementById('shisya');
		shisyaevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skaku"){
		suma="<p class='skoma promotion'id='skaku'>馬</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',suma);
		skakuevent=document.getElementById('skaku');
		skakuevent.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="sgin1"){
		snarigin1="<p class='skoma promotion'id='sgin1'>全</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',snarigin1);
		sgin1event=document.getElementById('sgin1');
		sgin1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="sgin2"){
		snarigin2="<p class='skoma promotion'id='sgin2'>全</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',snarigin2);
		sgin2event=document.getElementById('sgin2');
		sgin2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skeima1"){
		snarikei1="<p class='skoma promotion'id='skeima1'>圭</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',snarikei1);
		skeima1event=document.getElementById('skeima1');
		skeima1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skeima2"){
		snarikei2="<p class='skoma promotion'id='skeima2'>圭</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',snarikei2);
		skeima2event=document.getElementById('skeima2');
		skeima2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skyou1"){
		snarikyou1="<p class='skoma promotion'id='skyou1'>杏</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',snarikyou1);
		skyou1event=document.getElementById('skyou1');
		skyou1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="skyou2"){
		snarikyou2="<p class='skoma promotion'id='skyou2'>杏</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',snarikyou2);
		skyou2event=document.getElementById('skyou2');
		skyou2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu1"){
		stokin1="<p class='skoma promotion'id='shu1'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin1);
		shu1event=document.getElementById('shu1');
		shu1event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu2"){
		stokin2="<p class='skoma promotion'id='shu2'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin2);
		shu2event=document.getElementById('shu2');
		shu2event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu3"){
		stokin3="<p class='skoma promotion'id='shu3'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin3);
		shu3event=document.getElementById('shu3');
		shu3event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu4"){
		stokin4="<p class='skoma promotion'id='shu4'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin4);
		shu4event=document.getElementById('shu4');
		shu4event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu5"){
		stokin5="<p class='skoma promotion'id='shu5'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin5);
		shu5event=document.getElementById('shu5');
		shu5event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu6"){
		stokin6="<p class='skoma promotion'id='shu6'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin6);
		shu6event=document.getElementById('shu6');
		shu6event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu7"){
		stokin7="<p class='skoma promotion'id='shu7'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin7);
		shu7event=document.getElementById('shu7');
		shu7event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu8"){
		stokin8="<p class='skoma promotion'id='shu8'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin8);
		shu8event=document.getElementById('shu8');
		shu8event.addEventListener(EVENTNAME,getId,false);
	}else if(firstTouchKoma=="shu9"){
		stokin9="<p class='skoma promotion'id='shu9'>と</p>";
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',stokin9);
		shu9event=document.getElementById('shu9');
		shu9event.addEventListener(EVENTNAME,getId,false);
	}
//後手の駒
}

//駒の配置＆イベントリスナの登録
function setUp(){
	//先手の駒
	sou="<p class='skoma'id='sou'>王</p>";
	shisya="<p class='skoma'id='shisya'>飛</p>";
	skaku="<p class='skoma'id='skaku'>角</p>";
	skin1="<p class='skoma'id='skin1'>金</p>";
	skin2="<p class='skoma'id='skin2'>金</p>";
	sgin1="<p class='skoma'id='sgin1'>銀</p>";
	sgin2="<p class='skoma'id='sgin2'>銀</p>";
	skeima1="<p class='skoma'id='skeima1'>桂</p>";
	skeima2="<p class='skoma'id='skeima2'>桂</p>";
	skyou1="<p class='skoma'id='skyou1'>香</p>";
	skyou2="<p class='skoma'id='skyou2'>香</p>";
	shu1="<p class='skoma'id='shu1'>歩</p>";
	shu2="<p class='skoma'id='shu2'>歩</p>";
	shu3="<p class='skoma'id='shu3'>歩</p>";
	shu4="<p class='skoma'id='shu4'>歩</p>";
	shu5="<p class='skoma'id='shu5'>歩</p>";
	shu6="<p class='skoma'id='shu6'>歩</p>";
	shu7="<p class='skoma'id='shu7'>歩</p>";
	shu8="<p class='skoma'id='shu8'>歩</p>";
	shu9="<p class='skoma'id='shu9'>歩</p>";
	//後手の駒
	gou="<p class='gkoma'id='gou'>玉</p>";
	ghisya="<p class='gkoma'id='ghisya'>飛</p>";
	gkaku="<p class='gkoma'id='gkaku'>角</p>";
	gkin1="<p class='gkoma'id='gkin1'>金</p>";
	gkin2="<p class='gkoma'id='gkin2'>金</p>";
	ggin1="<p class='gkoma'id='ggin1'>銀</p>";
	ggin2="<p class='gkoma'id='ggin2'>銀</p>";
	gkeima1="<p class='gkoma'id='gkeima1'>桂</p>";
	gkeima2="<p class='gkoma'id='gkeima2'>桂</p>";
	gkyou1="<p class='gkoma'id='gkyou1'>香</p>";
	gkyou2="<p class='gkoma'id='gkyou2'>香</p>";
	ghu1="<p class='gkoma'id='ghu1'>歩</p>";
	ghu2="<p class='gkoma'id='ghu2'>歩</p>";
	ghu3="<p class='gkoma'id='ghu3'>歩</p>";
	ghu4="<p class='gkoma'id='ghu4'>歩</p>";
	ghu5="<p class='gkoma'id='ghu5'>歩</p>";
	ghu6="<p class='gkoma'id='ghu6'>歩</p>";
	ghu7="<p class='gkoma'id='ghu7'>歩</p>";
	ghu8="<p class='gkoma'id='ghu8'>歩</p>";
	ghu9="<p class='gkoma'id='ghu9'>歩</p>";
	//先手の駒の配置
	document.getElementById("d9s5").insertAdjacentHTML('afterbegin',sou);
	document.getElementById("d8s8").insertAdjacentHTML('afterbegin',shisya);
	document.getElementById("d8s2").insertAdjacentHTML('afterbegin',skaku);
	document.getElementById("d9s4").insertAdjacentHTML('afterbegin',skin1);
	document.getElementById("d9s6").insertAdjacentHTML('afterbegin',skin2);
	document.getElementById("d9s3").insertAdjacentHTML('afterbegin',sgin1);
	document.getElementById("d9s7").insertAdjacentHTML('afterbegin',sgin2);
	document.getElementById("d9s2").insertAdjacentHTML('afterbegin',skeima1);
	document.getElementById("d9s8").insertAdjacentHTML('afterbegin',skeima2);
	document.getElementById("d9s1").insertAdjacentHTML('afterbegin',skyou1);
	document.getElementById("d9s9").insertAdjacentHTML('afterbegin',skyou2);
	document.getElementById("d7s1").insertAdjacentHTML('afterbegin',shu1);
	document.getElementById("d7s2").insertAdjacentHTML('afterbegin',shu2);
	document.getElementById("d7s3").insertAdjacentHTML('afterbegin',shu3);
	document.getElementById("d7s4").insertAdjacentHTML('afterbegin',shu4);
	document.getElementById("d7s5").insertAdjacentHTML('afterbegin',shu5);
	document.getElementById("d7s6").insertAdjacentHTML('afterbegin',shu6);
	document.getElementById("d7s7").insertAdjacentHTML('afterbegin',shu7);
	document.getElementById("d7s8").insertAdjacentHTML('afterbegin',shu8);
	document.getElementById("d7s9").insertAdjacentHTML('afterbegin',shu9);
	//先手の全駒にイベントを追加する
	souevent=document.getElementById('sou');
	souevent.addEventListener(EVENTNAME,getId,false);
	shisyaevent=document.getElementById('shisya');
	shisyaevent.addEventListener(EVENTNAME,getId,false);
	skakuevent=document.getElementById('skaku');
	skakuevent.addEventListener(EVENTNAME,getId,false);
	skin1event=document.getElementById('skin1');
	skin1event.addEventListener(EVENTNAME,getId,false);
	skin2event=document.getElementById('skin2');
	skin2event.addEventListener(EVENTNAME,getId,false);
	sgin1event=document.getElementById('sgin1');
	sgin1event.addEventListener(EVENTNAME,getId,false);
	sgin2event=document.getElementById('sgin2');
	sgin2event.addEventListener(EVENTNAME,getId,false);
	skeima1event=document.getElementById('skeima1');
	skeima1event.addEventListener(EVENTNAME,getId,false);
	skeima2event=document.getElementById('skeima2');
	skeima2event.addEventListener(EVENTNAME,getId,false);
	skyou1event=document.getElementById('skyou1');
	skyou1event.addEventListener(EVENTNAME,getId,false);
	skyou2event=document.getElementById('skyou2');
	skyou2event.addEventListener(EVENTNAME,getId,false);
	shu1event=document.getElementById('shu1');
	shu1event.addEventListener(EVENTNAME,getId,false);
	shu2event=document.getElementById('shu2');
	shu2event.addEventListener(EVENTNAME,getId,false);
	shu3event=document.getElementById('shu3');
	shu3event.addEventListener(EVENTNAME,getId,false);
	shu4event=document.getElementById('shu4');
	shu4event.addEventListener(EVENTNAME,getId,false);
	shu5event=document.getElementById('shu5');
	shu5event.addEventListener(EVENTNAME,getId,false);
	shu6event=document.getElementById('shu6');
	shu6event.addEventListener(EVENTNAME,getId,false);
	shu7event=document.getElementById('shu7');
	shu7event.addEventListener(EVENTNAME,getId,false);
	shu8event=document.getElementById('shu8');
	shu8event.addEventListener(EVENTNAME,getId,false);
	shu9event=document.getElementById('shu9');
	shu9event.addEventListener(EVENTNAME,getId,false);
	//後手の駒の配置
	document.getElementById("d1s5").insertAdjacentHTML('afterbegin',gou);
	document.getElementById("d2s2").insertAdjacentHTML('afterbegin',ghisya);
	document.getElementById("d2s8").insertAdjacentHTML('afterbegin',gkaku);
	document.getElementById("d1s6").insertAdjacentHTML('afterbegin',gkin1);
	document.getElementById("d1s4").insertAdjacentHTML('afterbegin',gkin2);
	document.getElementById("d1s7").insertAdjacentHTML('afterbegin',ggin1);
	document.getElementById("d1s3").insertAdjacentHTML('afterbegin',ggin2);
	document.getElementById("d1s8").insertAdjacentHTML('afterbegin',gkeima1);
	document.getElementById("d1s2").insertAdjacentHTML('afterbegin',gkeima2);
	document.getElementById("d1s9").insertAdjacentHTML('afterbegin',gkyou1);
	document.getElementById("d1s1").insertAdjacentHTML('afterbegin',gkyou2);
	document.getElementById("d3s9").insertAdjacentHTML('afterbegin',ghu1);
	document.getElementById("d3s8").insertAdjacentHTML('afterbegin',ghu2);
	document.getElementById("d3s7").insertAdjacentHTML('afterbegin',ghu3);
	document.getElementById("d3s6").insertAdjacentHTML('afterbegin',ghu4);
	document.getElementById("d3s5").insertAdjacentHTML('afterbegin',ghu5);
	document.getElementById("d3s4").insertAdjacentHTML('afterbegin',ghu6);
	document.getElementById("d3s3").insertAdjacentHTML('afterbegin',ghu7);
	document.getElementById("d3s2").insertAdjacentHTML('afterbegin',ghu8);
	document.getElementById("d3s1").insertAdjacentHTML('afterbegin',ghu9);
	//後手の全駒にイベントを追加する
	gouevent=document.getElementById('gou');
	gouevent.addEventListener(EVENTNAME,getId,false);
	ghisyaevent=document.getElementById('ghisya');
	ghisyaevent.addEventListener(EVENTNAME,getId,false);
	gkakuevent=document.getElementById('gkaku');
	gkakuevent.addEventListener(EVENTNAME,getId,false);
	gkin1event=document.getElementById('gkin1');
	gkin1event.addEventListener(EVENTNAME,getId,false);
	gkin2event=document.getElementById('gkin2');
	gkin2event.addEventListener(EVENTNAME,getId,false);
	ggin1event=document.getElementById('ggin1');
	ggin1event.addEventListener(EVENTNAME,getId,false);
	ggin2event=document.getElementById('ggin2');
	ggin2event.addEventListener(EVENTNAME,getId,false);
	gkeima1event=document.getElementById('gkeima1');
	gkeima1event.addEventListener(EVENTNAME,getId,false);
	gkeima2event=document.getElementById('gkeima2');
	gkeima2event.addEventListener(EVENTNAME,getId,false);
	gkyou1event=document.getElementById('gkyou1');
	gkyou1event.addEventListener(EVENTNAME,getId,false);
	gkyou2event=document.getElementById('gkyou2');
	gkyou2event.addEventListener(EVENTNAME,getId,false);
	ghu1event=document.getElementById('ghu1');
	ghu1event.addEventListener(EVENTNAME,getId,false);
	ghu2event=document.getElementById('ghu2');
	ghu2event.addEventListener(EVENTNAME,getId,false);
	ghu3event=document.getElementById('ghu3');
	ghu3event.addEventListener(EVENTNAME,getId,false);
	ghu4event=document.getElementById('ghu4');
	ghu4event.addEventListener(EVENTNAME,getId,false);
	ghu5event=document.getElementById('ghu5');
	ghu5event.addEventListener(EVENTNAME,getId,false);
	ghu6event=document.getElementById('ghu6');
	ghu6event.addEventListener(EVENTNAME,getId,false);
	ghu7event=document.getElementById('ghu7');
	ghu7event.addEventListener(EVENTNAME,getId,false);
	ghu8event=document.getElementById('ghu8');
	ghu8event.addEventListener(EVENTNAME,getId,false);
	ghu9event=document.getElementById('ghu9');
	ghu9event.addEventListener(EVENTNAME,getId,false);
}

//音楽関連
var audioElem;
function PlaySound() {
	audioElem = new Audio();
	audioElem.src = "mp/komaoto.mp3";//ここにmp3パスを設定する。
	audioElem.volume = 0.5;
	audioElem.play();
}

