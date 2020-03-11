//先手,後手の駒
var ou1,hisya1,kaku1,kin1,kin2,gin1,gin2,keima1,keima2,kyou1,kyou2,hu1,hu2,hu3,hu4,hu5,hu6,hu7,hu8,hu9;
var ou2,hisya2,kaku2,kin3,kin4,gin3,gin4,keima3,keima4,kyou3,kyou4,hu10,hu11,hu12,hu13,hu14,hu15,hu16,hu17,hu18;
//先手,後手の成り駒
var ryu1,uma1,nGin1,nGin2,nKei1,nKei2,nKyou1,nKyou2,to1,to2,to3,to4,to5,to6,to7,to8,to9;
var ryu2,uma2,nGin3,nGin4,nKei3,nKei4,nKyou3,nKyou4,to10,to11,to12,to13,to14,to15,to16,to17,to18;
//先手の駒の配列20枚
var sPiece=["<p class='skoma'id='ou1'>王</p>","<p class='skoma'id='hisya1'>飛</p>","<p class='skoma'id='kaku1'>角</p>",
			"<p class='skoma'id='kin1'>金</p>","<p class='skoma'id='kin2'>金</p>","<p class='skoma'id='gin1'>銀</p>","<p class='skoma'id='gin2'>銀</p>",
			"<p class='skoma'id='keima1'>桂</p>","<p class='skoma'id='keima2'>桂</p>","<p class='skoma'id='kyou1'>香</p>","<p class='skoma'id='kyou2'>香</p>",
			"<p class='skoma'id='hu1'>歩</p>","<p class='skoma'id='hu2'>歩</p>","<p class='skoma'id='hu3'>歩</p>",
			"<p class='skoma'id='hu4'>歩</p>","<p class='skoma'id='hu5'>歩</p>","<p class='skoma'id='hu6'>歩</p>",
			"<p class='skoma'id='hu7'>歩</p>","<p class='skoma'id='hu8'>歩</p>","<p class='skoma'id='hu9'>歩</p>"
			];
//後手の駒の配列
var gPiece=["<p class='gkoma'id='ou2'>玉</p>","<p class='gkoma'id='hisya2'>飛</p>","<p class='gkoma'id='kaku2'>角</p>",
			"<p class='gkoma'id='kin3'>金</p>","<p class='gkoma'id='kin4'>金</p>","<p class='gkoma'id='gin3'>銀</p>","<p class='gkoma'id='gin4'>銀</p>",
			"<p class='gkoma'id='keima3'>桂</p>","<p class='gkoma'id='keima4'>桂</p>","<p class='gkoma'id='kyou3'>香</p>","<p class='gkoma'id='kyou4'>香</p>",
			"<p class='gkoma'id='hu10'>歩</p>","<p class='gkoma'id='hu11'>歩</p>","<p class='gkoma'id='hu12'>歩</p>",
			"<p class='gkoma'id='hu13'>歩</p>","<p class='gkoma'id='hu14'>歩</p>","<p class='gkoma'id='hu15'>歩</p>",
			"<p class='gkoma'id='hu16'>歩</p>","<p class='gkoma'id='hu17'>歩</p>","<p class='gkoma'id='hu18'>歩</p>"
			];
//先手の成り駒
var sPromotionPiece=["None","<p class='skoma promotion'id='hisya1'>竜</p>","<p class='skoma promotion'id='kaku1'>馬</p>",
					 "None","None","<p class='skoma promotion'id='gin1'>全</p>","<p class='skoma promotion'id='gin2'>全</p>",
					 "<p class='skoma promotion'id='keima1'>圭</p>","<p class='skoma promotion'id='keima2'>圭</p>","<p class='skoma promotion'id='kyou1'>杏</p>","<p class='skoma promotion'id='kyou2'>杏</p>",
					 "<p class='skoma promotion'id='hu1'>と</p>","<p class='skoma promotion'id='hu2'>と</p>","<p class='skoma promotion'id='hu3'>と</p>",
					 "<p class='skoma promotion'id='hu4'>と</p>","<p class='skoma promotion'id='hu5'>と</p>","<p class='skoma promotion'id='hu6'>と</p>",
					 "<p class='skoma promotion'id='hu7'>と</p>","<p class='skoma promotion'id='hu8'>と</p>","<p class='skoma promotion'id='hu9'>と</p>"
					 ];
//後手の成り駒
var gPromotionPiece=["None","<p class='gkoma promotion'id='hisya2'>竜</p>","<p class='gkoma promotion'id='kaku2'>馬</p>",
					 "None","None","<p class='gkoma promotion'id='gin3'>全</p>","<p class='gkoma promotion'id='gin4'>全</p>",
					 "<p class='gkoma promotion'id='keima3'>圭</p>","<p class='gkoma promotion'id='keima4'>圭</p>","<p class='gkoma promotion'id='kyou3'>杏</p>","<p class='gkoma promotion'id='kyou4'>杏</p>",
					 "<p class='gkoma promotion'id='hu10'>と</p>","<p class='gkoma promotion'id='hu11'>と</p>","<p class='gkoma promotion'id='hu12'>と</p>",
					 "<p class='gkoma promotion'id='hu13'>と</p>","<p class='gkoma promotion'id='hu14'>と</p>","<p class='gkoma promotion'id='hu15'>と</p>",
					 "<p class='gkoma promotion'id='hu16'>と</p>","<p class='gkoma promotion'id='hu17'>と</p>","<p class='gkoma promotion'id='hu18'>と</p>"
					 ];
//先手,後手の駒のId配列
var sPieceId=["ou1","hisya1","kaku1","kin1","kin2","gin1","gin2","keima1","keima2","kyou1","kyou2","hu1","hu2","hu3","hu4","hu5","hu6","hu7","hu8","hu9"]
var gPieceId=["ou2","hisya2","kaku2","kin3","kin4","gin3","gin4","keima3","keima4","kyou3","kyou4","hu10","hu11","hu12","hu13","hu14","hu15","hu16","hu17","hu18"];
//成ることが可能な駒
var possiblePromotion=["hisya1","hisya2","kaku1","kaku2","gin1","gin2","gin3","gin4",
					   "keima1","keima2",,"keima3","keima4","kyou1","kyou2","kyou3","kyou4",
					   "hu1","hu2","hu3","hu4","hu5","hu6","hu7","hu8","hu9","hu10","hu11","hu12","hu13","hu14","hu15","hu16","hu17","hu18"
					   ];
//駒の動き
//⑧×⑨
//⑦⓪①
//⑥駒②
//⑤④③
var CheckPieceId=["ou","hisya","kaku","kin","gin","keima","kyou","hu","ryu","uma"];
var pieceMotionTable=[[1,1,1,1,1,1,1,1,0,0],
					  [2,0,2,0,2,0,2,0,0,0],
					  [0,2,0,2,0,2,0,2,0,0],
					  [1,1,1,0,1,0,1,1,0,0],
					  [1,1,0,1,0,1,0,1,0,0],
					  [0,0,0,0,0,0,0,0,1,1],
					  [2,0,0,0,0,0,0,0,0,0],
					  [1,0,0,0,0,0,0,0,0,0],
					  [2,1,2,1,2,1,2,1,0,0],
					  [1,2,1,2,1,2,1,2,0,0],
					 ];
var pieceMotionYX=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-2,-1],[-2,+1]];
//座標関連
var ky=0;
var kx=0;
var kys=0;//整数y
var kxs=0;//整数x
var banx=36;//将棋盤までのpx横幅(距離)
var bany=172;//将棋盤までのpx高さ(距離)
var plen=22;//駒置き場の長さ

var maindisp="";//メイン表示用
var sdisp="";//先手駒台表示用
var gdisp="";//後手駒台表示用
var userb=window.navigator.appName;//ユーザーブラウザ
var wnu=window.navigator.userAgent;//ユーザーエージェント
var useros;//ユーザーos
var userw=window.innerWidth;//ウィンドウの横幅
var userh=window.innerHeight;//ウィンドウの高さ

//フラグ関連
var teban="先手";
var touchFlg=true;
var promotionFlg=false;
var mainCount=0;
var komaClass="komaClass初期化";
var komaId="komaId初期化";
var	firstTouchMasu;//一度目にタッチしたマスのid
var firstTouchPiece;//一度目にタッチした駒のid
var masuCurrent;//カレントのマスのid
var firstTouchMasuInOut;//最初にタッチしたマスが盤内か？
var firstTouchPiecePromotion;
var toukaritu;//透過率
var ytemp;
var xtemp;
var motigoma;//取得した駒
var supportTouch='ontouchend'in document;//タッチイベントがサポートされているか
var EVENTNAME=supportTouch ? 'touchstart':'mousedown';//タッチイベントかマウスダウンか

var promotion;//駒が成れるか？
var standId;//空いている駒台のid
var headId;//駒台のidの頭文字s又はg
var gamerecord="";
var kihu;

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
	document.getElementById("teban").innerHTML=teban;//手番
	//駒の配置とイベントリスナの登録
	setUp();
	//イベント分岐
	if(EVENTNAME=='touchstart'){
		document.addEventListener("touchstart",touchstart);
	}else{
		document.addEventListener("mousedown",mousedown);
	}
}

//後手駒台の作成
function gAria(){
	var gotekomadai=[];//後手の駒台
	gotekomadai=new Array(plen);
	for(let i=0;i<plen;i++){
		gpaneru="<div class='gStand'id='g"+i+"'>　</div>";
		gotekomadai[i]=gpaneru;
	}
	for(let i=0;i<plen;i++){
		gdisp+=gotekomadai[i];
		if(i==21){
		break;
		}
		if(i==10){
		gdisp+="<br>";
		}
	}
}
//先手駒台の作成
function sAria(){
	var sentekomadai=[];//先手の駒台
	sentekomadai=new Array(plen);
	for(let i=0;i<plen;i++){
		spaneru="<div class='sStand'id='s"+i+"'>　</div>";
		sentekomadai[i]=spaneru;
	}
	for(let i=0;i<plen;i++){
		sdisp+=sentekomadai[i];
		if(i==21){
		break;
		}
		if(i==10){
		sdisp+="<br>";
		}
	}
}

//中央メイン盤の作成
function mainAria(){
	var board=[];//メインの将棋盤
	board=new Array(11);
	for(let y=0;y<11;y++){
		board[y]=new Array(11)
		for(let x=0;x<11;x++){
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
	for(let y=0;y<11;y++){
		for(let x=0;x<11;x++){
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

//駒の配置＆イベントリスナの登録
function setUp(){
	//先手の駒の配置
	document.getElementById("d9s5").insertAdjacentHTML('afterbegin',sPiece[0]);
	document.getElementById("d8s8").insertAdjacentHTML('afterbegin',sPiece[1]);
	document.getElementById("d8s2").insertAdjacentHTML('afterbegin',sPiece[2]);
	document.getElementById("d9s4").insertAdjacentHTML('afterbegin',sPiece[3]);
	document.getElementById("d9s6").insertAdjacentHTML('afterbegin',sPiece[4]);
	document.getElementById("d9s3").insertAdjacentHTML('afterbegin',sPiece[5]);
	document.getElementById("d9s7").insertAdjacentHTML('afterbegin',sPiece[6]);
	document.getElementById("d9s2").insertAdjacentHTML('afterbegin',sPiece[7]);
	document.getElementById("d9s8").insertAdjacentHTML('afterbegin',sPiece[8]);
	document.getElementById("d9s1").insertAdjacentHTML('afterbegin',sPiece[9]);
	document.getElementById("d9s9").insertAdjacentHTML('afterbegin',sPiece[10]);
	document.getElementById("d7s1").insertAdjacentHTML('afterbegin',sPiece[11]);
	document.getElementById("d7s2").insertAdjacentHTML('afterbegin',sPiece[12]);
	document.getElementById("d7s3").insertAdjacentHTML('afterbegin',sPiece[13]);
	document.getElementById("d7s4").insertAdjacentHTML('afterbegin',sPiece[14]);
	document.getElementById("d7s5").insertAdjacentHTML('afterbegin',sPiece[15]);
	document.getElementById("d7s6").insertAdjacentHTML('afterbegin',sPiece[16]);
	document.getElementById("d7s7").insertAdjacentHTML('afterbegin',sPiece[17]);
	document.getElementById("d7s8").insertAdjacentHTML('afterbegin',sPiece[18]);
	document.getElementById("d7s9").insertAdjacentHTML('afterbegin',sPiece[19]);
	//後手の駒の配置
	document.getElementById("d1s5").insertAdjacentHTML('afterbegin',gPiece[0]);
	document.getElementById("d2s2").insertAdjacentHTML('afterbegin',gPiece[1]);
	document.getElementById("d2s8").insertAdjacentHTML('afterbegin',gPiece[2]);
	document.getElementById("d1s6").insertAdjacentHTML('afterbegin',gPiece[3]);
	document.getElementById("d1s4").insertAdjacentHTML('afterbegin',gPiece[4]);
	document.getElementById("d1s7").insertAdjacentHTML('afterbegin',gPiece[5]);
	document.getElementById("d1s3").insertAdjacentHTML('afterbegin',gPiece[6]);
	document.getElementById("d1s8").insertAdjacentHTML('afterbegin',gPiece[7]);
	document.getElementById("d1s2").insertAdjacentHTML('afterbegin',gPiece[8]);
	document.getElementById("d1s9").insertAdjacentHTML('afterbegin',gPiece[9]);
	document.getElementById("d1s1").insertAdjacentHTML('afterbegin',gPiece[10]);
	document.getElementById("d3s9").insertAdjacentHTML('afterbegin',gPiece[11]);
	document.getElementById("d3s8").insertAdjacentHTML('afterbegin',gPiece[12]);
	document.getElementById("d3s7").insertAdjacentHTML('afterbegin',gPiece[13]);
	document.getElementById("d3s6").insertAdjacentHTML('afterbegin',gPiece[14]);
	document.getElementById("d3s5").insertAdjacentHTML('afterbegin',gPiece[15]);
	document.getElementById("d3s4").insertAdjacentHTML('afterbegin',gPiece[16]);
	document.getElementById("d3s3").insertAdjacentHTML('afterbegin',gPiece[17]);
	document.getElementById("d3s2").insertAdjacentHTML('afterbegin',gPiece[18]);
	document.getElementById("d3s1").insertAdjacentHTML('afterbegin',gPiece[19]);
	//全ての駒にイベントを追加する
	for(var i=0;i<sPieceId.length;i++){
		document.getElementById(sPieceId[i]).addEventListener(EVENTNAME,getId,false);
		document.getElementById(gPieceId[i]).addEventListener(EVENTNAME,getId,false);
	}
}

//パソコン用マウスダウン
function mousedown(e){
	touchPiece(e.pageX,e.pageY);
}

//スマホ用タッチスタート
function touchstart(e){
	//もしタッチされたのが一箇所であるなら
	if(e.targetTouches.length==1){
		touch=e.targetTouches[0];
		touchPiece(touch.pageX,touch.pageY);
	}
}

//start()系終了---------------------------------------------------------------------------------------

//追加したい条件：masuCurrentがpieceMotion1

//touchPiece()系開始----------------------------------------------------------------------------------
//タッチされた時のイベントの処理
function touchPiece(tx,ty){
	getCoordinate(tx,ty);//座標、盤内外の取得
	//駒の選択から移動まで
	if(touchFlg==true){
		//自分の駒を選択している。
		if(isMyPiece()==true){
			choice();
			touchFlg=false;
			return;
		}else{
		//自分の駒を選択していない。
			reset();
			return;
		}
	}
	//二回目にタッチしたマスに自分の駒がある。又は、盤外である。
	//追加したい条件：(masuCurrent!=pieceMotion1)

	if(isMyPiece()||!InOut(kys,kxs)){
		reset();
		return;
	}
	//移動先に相手の駒が存在する。
	//駒を取った場合の処理
	if(isExistPiece()){
		motigoma=komaId;//取った駒のid
		document.getElementById(motigoma).remove();//駒の削除
		if((komaClass=="gkoma")||(komaClass=="gkoma promotion")){
			headId="s";
		}else{
			headId="g";
		}
		VacantStandId(headId);//standId(空いている駒台のid)を返す
		pieseInsert(motigoma,standId,teban);//駒とイベントリスナの追加
	}
	//最初に選択した駒が成り駒であるなら
	if(promotionFlg==true){
		document.getElementById(firstTouchPiece).remove();//最初に選択した駒の削除
		//駒を削除した後に、マスの色を元に戻す
		//AllReverseCssRule();
		promotionMove();//成り駒用の移動
		PlaySound();//音を出す
		console.log("成り駒を移動しました。");
	}else{
		MoveCommit();
	}
	if(teban=="先手"){
		teban="後手";
	}else{
		teban="先手";
	}
	document.getElementById("teban").innerHTML=teban;//手番
	touchFlg=true;
	promotionFlg=false;
	return;
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
	//document.getElementById("teban").innerHTML=teban;//手番
	document.getElementById("classtest").innerHTML=komaClass;//選択したクラス
	document.getElementById("idtest").innerHTML=komaId;//選択したid
	document.getElementById("yxtest").innerHTML=masuCurrent;//選択したマス
	//GameRecord
	kihuConvert(teban,kys,kxs,firstTouchPiece);//棋譜形式に変換
	document.getElementById("kihu").innerHTML=kihu;//棋譜の表示
	document.getElementById("inout").innerHTML=inout//盤内か？外か？
}

//駒の選択
function choice(){
	toukaritu=0.3;
	touka(komaId,toukaritu);//タッチした駒の透過率を変える
	firstTouchMasu="d"+kys+"s"+kxs;//一度目にタッチしたマスのid	
	firstTouchPiece=komaId;//一度目にタッチした駒のid
	firstTouchMasuInOut=InOut(kys,kxs);//一度目にタッチした場所は盤内か？
	promotionFlg=firstPromotion();//一度目にタッチした駒は成り駒か？
	console.log(promotionFlg);
	pieceMotionRule();//駒の動きを表示する
	komaClass="リセット"
}


//駒の動きのルール---------------------------------------------------------------------------------
function pieceMotionRule(){
if(teban=="先手"){
	var index;
	index=CheckPieceId.indexOf(firstTouchPiece.slice(0,-1));
	for(let i=0;i<pieceMotionYX.length;i++){
		temp=pieceMotionTable[index][i];
		if(temp==1){
			console.log(i);
			a=pieceMotionYX[i][0];//-1
			b=pieceMotionYX[i][1];//0
			motionY=kys+a;
			motionX=kxs+b;
			pieceMotion="d"+motionY+"s"+motionX;//歩の動き①
			cssRule(pieceMotion);
		}
	}	
}
}


//移動可能なマスの色を変更する
function cssRule(rulePiece){
document.getElementById(rulePiece).style.backgroundColor="lightpink";
document.getElementById(rulePiece).style.border="1px solid red";
document.getElementById(rulePiece).style.boxSizing="border-box";
}
//全ての盤クラスの変更を元に戻す
function AllReverseCssRule(){
	var banElements=document.getElementsByClassName("ban");
	for(let i=0;i<banElements.length;i++){
		banElements[i].style.backgroundColor="khaki";
		banElements[i].style.border="0.5px solid black";
		banElements[i].style.boxSizing="border-box";
	}
}

//リセット用
function reset(){//
	touka(firstTouchPiece,1);//一度目にタッチした駒の透過率を戻す
	touchFlg=true;
	promotionFlg=false;
	komaClass="classリセット";
	komaId="idリセット";
	firstTouchPiece="リセット";
	firstTouchMasu="リセット";
	//ここに選択可能マスを戻す処理を記載する
	AllReverseCssRule();
}

//選択した駒の移動完了まで
function MoveCommit(){
	var res;
	document.getElementById(firstTouchPiece).remove();//最初に選択した駒の削除
	//駒を削除した後に、マスの色を元に戻す
AllReverseCssRule();
//ここで成るか成らないかの判定-----------------------------------------------------------------
console.log(firstTouchPiece.substr(0,5));//駒id５文字の切り出し
	//成り駒でない＆先手＆盤内＆成れる駒
	if((promotionFlg==false)&&(teban=="先手")&&(firstTouchMasuInOut)&&
	   (possiblePromotion.indexOf(firstTouchPiece)!=-1)){
		//桂馬が１,２段目に移動したら強制的に成る
		if((firstTouchPiece.substr(0,5)=="keima")&&(gotejinKeima(masuCurrent))){
			promotionMove();//駒の昇格
			PlaySound();//音を出す
			reset();
			return;
		}
		//香,歩が１段目に移動したら強制的に成る
		if((gotejinKyouHu(masuCurrent))&&
		   ((firstTouchPiece.substr(0,4)=="kyou")||(firstTouchPiece.substr(0,2)=="hu"))){
			promotionMove();//駒の昇格
			PlaySound();//音を出す
			reset();
			return;
		}
		//後手陣である。又は、飛車,角,銀の成り返りである。
		if((gotejin(masuCurrent))||
		   ((gotejin(firstTouchMasu))&&
		   ((firstTouchPiece.substr(0,5)=="hisya")||
		   (firstTouchPiece.substr(0,4)=="kaku")||
		   (firstTouchPiece.substr(0,3)=="gin")))){
			res=confirm("成りますか？");
   			if(res==true){
				promotionMove();//駒の昇格
				PlaySound();//音を出す
				reset();
				return;
			}else{
				;
			}	
		}
	}
	//ここで成るか成らないかの判定
	if((promotionFlg==false)&&(teban=="後手")&&(firstTouchMasuInOut)&&
		(possiblePromotion.indexOf(firstTouchPiece)!=-1)){
		//桂馬が８,９段目に移動したら強制的に成る
		if((firstTouchPiece.substr(0,5)=="keima")&&(sentejinKeima(masuCurrent))){
			promotionMove();//駒の昇格
			PlaySound();//音を出す
			reset();
			return;
		}
		//香,歩が９段目に移動したら強制的に成る
		if((sentejinKyouHu(masuCurrent))&&
		   ((firstTouchPiece.substr(0,4)=="kyou")||(firstTouchPiece.substr(0,2)=="hu"))){
			promotionMove();//駒の昇格
			PlaySound();//音を出す
			reset();
			return;
		}
	//先手陣である。又は、飛車,角,銀の成り返りである。
		if((sentejin(masuCurrent))||
		   ((sentejin(firstTouchMasu))&&
		   ((firstTouchPiece.substr(0,5)=="hisya")||
		   (firstTouchPiece.substr(0,4)=="kaku")||
		   (firstTouchPiece.substr(0,3)=="gin")))){
			res=confirm("成りますか？");
			if(res==true){
				promotionMove();//駒の昇格
				PlaySound();//音を出す
				reset();
				return;
			}else{
				;
			}	
		}
	}
	pieseInsert(firstTouchPiece,masuCurrent,teban);//駒とイベントリスナの追加
	//移動完了の前のバグ確認
	//マスの中に２枚存在するバグ対策
	if(document.getElementById(masuCurrent).children.length>1){
		alert("バグです。盤の中に２枚以上入りまみた。");
		//マスに追加した駒を消す
		//document.getElementById(firstTouchPiece).remove();
		//最初にタッチしたマス(firstTouchMasu)に駒(firstTouchPiece)をもどす
		//pieseInsert(firstTouchPiece,firstTouchMasu,teban);
		//透過する
		//toukaritu=0.3;
		//touka(firstTouchPiece,toukaritu);
		//komaClass="リセット"
		//touchFlg=false;
		//return;
	}
	PlaySound();//音を出す
	gamerecord+=kihu+"　"//棋譜を記録として残す。
	reset();
}

//最初に選択した駒は成り駒か？
function firstPromotion(){
	if((komaClass=="skoma promotion")||(komaClass=="gkoma promotion")){
		return true;
	}else{
		return false;
}
}
//将棋盤の中か？外か？
function InOut(y,x){
	if(((x>=1)&&(x<=9))&&((y>=1)&&(y<=9))){
		return true;
	}
	return false;
}
//自分の駒を選択しているか？、先手はskomaクラス,後手はgkomaクラス
function isMyPiece(){
	if(((teban=="先手")&&(komaClass=="skoma"))||((teban=="先手")&&(komaClass=="skoma promotion"))||
	   ((teban=="後手")&&(komaClass=="gkoma"))||((teban=="後手")&&(komaClass=="gkoma promotion"))){
		return true;
	}
	return false;
}

//タッチしたマスに駒が存在するか？
function isExistPiece(){
	if((komaClass=="skoma")||(komaClass=="gkoma")||
	   (komaClass=="skoma promotion")||(komaClass=="gkoma promotion")){
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

//桂馬が必ず成る後手陣の１段目,２段目か？
function gotejinKeima(masuCurrent){
	//正規表現
	var regex1=new RegExp(/d1s[1-9]/);
	var regex2=new RegExp(/d2s[1-9]/);
	var promotion1=regex1.test(masuCurrent);
	var promotion2=regex2.test(masuCurrent);
	if((promotion1)||(promotion2)){
	return true;
	}
	return false;
}
//香,歩が必ず成る後手陣の１段目か？
function gotejinKyouHu(masuCurrent){
	//正規表現
	var regex1=new RegExp(/d1s[1-9]/);
	var promotion1=regex1.test(masuCurrent);
	if(promotion1){
	return true;
	}
	return false;
}
//桂馬が必ず成る先手陣の８段目,９段目か？
function sentejinKeima(masuCurrent){
	//正規表現
	var regex1=new RegExp(/d8s[1-9]/);
	var regex2=new RegExp(/d9s[1-9]/);
	var promotion1=regex1.test(masuCurrent);
	var promotion2=regex2.test(masuCurrent);
	if((promotion1)||(promotion2)){
	return true;
	}
	return false;
}
//香,歩が必ず成る先手陣の９段目か？
function sentejinKyouHu(masuCurrent){
	//正規表現
	var regex1=new RegExp(/d9s[1-9]/);
	var promotion1=regex1.test(masuCurrent);
	if(promotion1){
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

var choicetemp;//選択した駒
//選択した駒(id)の透過率を変化させる
function touka(komaId,toukaritu){
	document.getElementById(komaId).style.opacity=toukaritu;//0.3:30%
}

//新生する。駒とイベントリスナの追加
function pieseInsert(firstTouchPiece,masuCurrent,teban){
	var whatNumber;
	//先手の駒
	if(sPieceId.indexOf(firstTouchPiece)!=-1){
		whatNumber=sPieceId.indexOf(firstTouchPiece);
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',sPiece[whatNumber]);
		
		//後手の駒台経由の処理はここを通過する。クラスをgkomaクラスに変更する。
		if(teban=="後手"){
			document.getElementById(firstTouchPiece).className="gkoma";
		}
		document.getElementById(firstTouchPiece).addEventListener(EVENTNAME,getId,false);
	}
	//後手の駒
	if(gPieceId.indexOf(firstTouchPiece)!=-1){
		whatNumber=gPieceId.indexOf(firstTouchPiece);
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gPiece[whatNumber]);
		
		//先手の駒台経由の処理はここを通過する。
		if(teban=="先手"){
			document.getElementById(firstTouchPiece).className="skoma";
		}
		document.getElementById(firstTouchPiece).addEventListener(EVENTNAME,getId,false);
	}
}

//駒の昇格,成り駒の移動
function promotionMove(){
	var whatNumber;
	//先手の駒
	if(sPieceId.indexOf(firstTouchPiece)!=-1){
		whatNumber=sPieceId.indexOf(firstTouchPiece);
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',sPromotionPiece[whatNumber]);
		//後手が先手から取った駒を移動する時、クラスをgkomaクラスに変更する。
		if(teban=="後手"){
			document.getElementById(firstTouchPiece).className="gkoma promotion";
		}
		document.getElementById(firstTouchPiece).addEventListener(EVENTNAME,getId,false);
	}
	//後手の駒
	if(gPieceId.indexOf(firstTouchPiece)!=-1){
		whatNumber=gPieceId.indexOf(firstTouchPiece);
		document.getElementById(masuCurrent).insertAdjacentHTML('afterbegin',gPromotionPiece[whatNumber]);
		//先手が後手から取った駒を移動する時、クラスをgkomaクラスに変更する。
		if(teban=="先手"){
			document.getElementById(firstTouchPiece).className="skoma promotion";
		}
		document.getElementById(firstTouchPiece).addEventListener(EVENTNAME,getId,false);
	}
}

//読みやすい棋譜に変換
function kihuConvert(teban,kys,kxs,firstTouchPiece){
	if(InOut(kxs,kys)){
		if(teban=="先手"){
		tebanDisp="▲";
		}else{
		tebanDisp="△";
		}
		kihuHead=(10-kxs);
		kihuTail=kys;
		//全角に変換
		if(kihuHead==1){
			kihuHeadDisp="１";
		}else if(kihuHead==2){
			kihuHeadDisp="２";
		}else if(kihuHead==3){
			kihuHeadDisp="３";
		}else if(kihuHead==4){
			kihuHeadDisp="４";
		}else if(kihuHead==5){
			kihuHeadDisp="５";
		}else if(kihuHead==6){
			kihuHeadDisp="６";
		}else if(kihuHead==7){
			kihuHeadDisp="７";
		}else if(kihuHead==8){
			kihuHeadDisp="８";
		}else if(kihuHead==9){
			kihuHeadDisp="９";
		}
		//全角漢数字に変換
		if(kihuTail==1){
			kihuTailDisp="一";
		}else if(kihuTail==2){
			kihuTailDisp="二";
		}else if(kihuTail==3){
			kihuTailDisp="三";
		}else if(kihuTail==4){
			kihuTailDisp="四";
		}else if(kihuTail==5){
			kihuTailDisp="五";
		}else if(kihuTail==6){
			kihuTailDisp="六";
		}else if(kihuTail==7){
			kihuTailDisp="七";
		}else if(kihuTail==8){
			kihuTailDisp="八";
		}else if(kihuTail==9){
			kihuTailDisp="九";
		}
		kihu=tebanDisp+kihuHeadDisp+kihuTailDisp;//+firstTouchPiece
	}else{
		kihu="盤外です";
	}
}
//棋譜の表示
function GameRecord(){
		document.getElementById("gamerecord").innerHTML=gamerecord;//棋譜変換
}

//全角に変換
function zenkaku2Hankaku(str){
	return str.replace(/[A-Za-z0-9]/g,function(s){
		return String.fromCharCode(s.charCodeAt(0)+0xFEE0);
	});
}

//音楽関連
var audioElem;
function PlaySound() {
	audioElem = new Audio();
	audioElem.src = "mp/komaoto.mp3";//ここにmp3パスを設定する。
	audioElem.volume = 0.5;
	audioElem.play();
}

