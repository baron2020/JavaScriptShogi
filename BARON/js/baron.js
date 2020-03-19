//駒のId(先手,後手)(len40)
var pieceId=["OU1","HI1","KA1","KI1","KI2","GI1","GI2","KE1","KE2","KY1","KY2","FU1","FU2","FU3","FU4","FU5","FU6","FU7","FU8","FU9",
			 "OU2","HI2","KA2","KI3","KI4","GI3","GI4","KE3","KE4","KY3","KY4","FU10","FU11","FU12","FU13","FU14","FU15","FU16","FU17","FU18"];
//成ることが可能な駒のId(先手,後手)(len34)
var possiblePromotion=["HI1","KA1","GI1","GI2","KE1","KE2","KY1","KY2","FU1","FU2","FU3","FU4","FU5","FU6","FU7","FU8","FU9",
					   "HI2","KA2","GI3","GI4","KE3","KE4","KY3","KY4","FU10","FU11","FU12","FU13","FU14","FU15","FU16","FU17","FU18"];
//駒の配列(先手,後手)(len40)
var piece=["<p id='OU1'>王</p>","<p id='HI1'>飛</p>","<p id='KA1'>角</p>",
			"<p id='KI1'>金</p>","<p id='KI2'>金</p>","<p id='GI1'>銀</p>","<p id='GI2'>銀</p>",
			"<p id='KE1'>桂</p>","<p id='KE2'>桂</p>","<p id='KY1'>香</p>","<p id='KY2'>香</p>",
			"<p id='FU1'>歩</p>","<p id='FU2'>歩</p>","<p id='FU3'>歩</p>",
			"<p id='FU4'>歩</p>","<p id='FU5'>歩</p>","<p id='FU6'>歩</p>",
			"<p id='FU7'>歩</p>","<p id='FU8'>歩</p>","<p id='FU9'>歩</p>",
			"<p id='OU2'>玉</p>","<p id='HI2'>飛</p>","<p id='KA2'>角</p>",
			"<p id='KI3'>金</p>","<p id='KI4'>金</p>","<p id='GI3'>銀</p>","<p id='GI4'>銀</p>",
			"<p id='KE3'>桂</p>","<p id='KE4'>桂</p>","<p id='KY3'>香</p>","<p id='KY4'>香</p>",
			"<p id='FU10'>歩</p>","<p id='FU11'>歩</p>","<p id='FU12'>歩</p>",
			"<p id='FU13'>歩</p>","<p id='FU14'>歩</p>","<p id='FU15'>歩</p>",
			"<p id='FU16'>歩</p>","<p id='FU17'>歩</p>","<p id='FU18'>歩</p>"
			];
//成り駒の配列(先手,後手)(len40)
var promotionPiece=["None","<p id='HI1'>竜</p>","<p id='KA1'>馬</p>",
					"None","None","<p id='GI1'>全</p>","<p id='GI2'>全</p>",
					"<p id='KE1'>圭</p>","<p id='KE2'>圭</p>","<p id='KY1'>杏</p>","<p id='KY2'>杏</p>",
					"<p id='FU1'>と</p>","<p id='FU2'>と</p>","<p id='FU3'>と</p>",
					"<p id='FU4'>と</p>","<p id='FU5'>と</p>","<p id='FU6'>と</p>",
					"<p id='FU7'>と</p>","<p id='FU8'>と</p>","<p id='FU9'>と</p>",
					"None","<p id='HI2'>竜</p>","<p id='KA2'>馬</p>",
					"None","None","<p id='GI3'>全</p>","<p id='GI4'>全</p>",
					"<p id='KE3'>圭</p>","<p id='KE4'>圭</p>","<p id='KY3'>杏</p>","<p id='KY4'>杏</p>",
					"<p id='FU10'>と</p>","<p id='FU11'>と</p>","<p id='FU12'>と</p>",
					"<p id='FU13'>と</p>","<p id='FU14'>と</p>","<p id='FU15'>と</p>",
					"<p id='FU16'>と</p>","<p id='FU17'>と</p>","<p id='FU18'>と</p>"
					];
//駒の動き
//⑧×⑨
//⑦⓪①
//⑥駒②
//⑤④③
//10種類の駒と10種類の動き
var CheckPieceId=["OU","HI","KA","KI","GI","KE","KY","FU","RY","UM"];
var pieceMotionTable=[[1,1,1,1,1,1,1,1,0,0],//王
					  [2,0,2,0,2,0,2,0,0,0],//飛
					  [0,2,0,2,0,2,0,2,0,0],//角
					  [1,1,1,0,1,0,1,1,0,0],//金
					  [1,1,0,1,0,1,0,1,0,0],//銀
					  [0,0,0,0,0,0,0,0,1,1],//桂
					  [2,0,0,0,0,0,0,0,0,0],//香
					  [1,0,0,0,0,0,0,0,0,0],//歩
					  [2,1,2,1,2,1,2,1,0,0],//竜
					  [1,2,1,2,1,2,1,2,0,0],//馬
					 ];
var sPieceMotionYX=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-2,-1],[-2,+1]];
var gPieceMotionYX=[[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[2,1],[2,-1]];
var GameRecord={'g1':'EMP','g2':'EMP','g3':'EMP','g4':'EMP','g5':'EMP','g6':'EMP','g7':'EMP','g8':'EMP','g9':'EMP',
				'd1s1':'KY4','d1s2':'KE4','d1s3':'GI4','d1s4':'KI4','d1s5':'OU2','d1s6':'KI3','d1s7':'GI3','d1s8':'KE3','d1s9':'KY3',
				'd2s1':'EMP','d2s2':'HI2','d2s3':'EMP','d2s4':'EMP','d2s5':'EMP','d2s6':'EMP','d2s7':'EMP','d2s8':'KA2','d2s9':'EMP',
				'd3s1':'FU18','d3s2':'FU17','d3s3':'FU16','d3s4':'FU15','d3s5':'FU14','d3s6':'FU13','d3s7':'FU12','d3s8':'FU11','d3s9':'FU10',
				'd4s1':'EMP','d4s2':'EMP','d4s3':'EMP','d4s4':'EMP','d4s5':'EMP','d4s6':'EMP','d4s7':'EMP','d4s8':'EMP','d4s9':'EMP',
				'd5s1':'EMP','d5s2':'EMP','d5s3':'EMP','d5s4':'EMP','d5s5':'EMP','d5s6':'EMP','d5s7':'EMP','d5s8':'EMP','d5s9':'EMP',
				'd6s1':'EMP','d6s2':'EMP','d6s3':'EMP','d6s4':'EMP','d6s5':'EMP','d6s6':'EMP','d6s7':'EMP','d6s8':'EMP','d6s9':'EMP',
				'd7s1':'FU1','d7s2':'FU2','d7s3':'FU3','d7s4':'FU4','d7s5':'FU5','d7s6':'FU6','d7s7':'FU7','d7s8':'FU8','d7s9':'FU9',
				'd8s1':'EMP','d8s2':'KA1','d8s3':'EMP','d8s4':'EMP','d8s5':'EMP','d8s6':'EMP','d8s7':'EMP','d8s8':'HI1','d8s9':'EMP',
				'd9s1':'KY1','d9s2':'KE1','d9s3':'GI1','d9s4':'KI1','d9s5':'OU1','d9s6':'KI2','d9s7':'GI2','d9s8':'KE2','d9s9':'KY2',
				's1':'EMP','s2':'EMP','s3':'EMP','s4':'EMP','s5':'EMP','s6':'EMP','s7':'EMP','s8':'EMP','s9':'EMP',
				};

//１.skoma２.skoma promotion３.gkoma４.gkoma promotion
var pieceIdRecord={'OU1':'skoma','HI1':'skoma','KA1':'skoma','KI1':'skoma','KI2':'skoma','GI1':'skoma','GI2':'skoma',
			 'KE1':'skoma','KE2':'skoma','KY1':'skoma','KY2':'skoma',
			 'FU1':'skoma','FU2':'skoma','FU3':'skoma','FU4':'skoma','FU5':'skoma','FU6':'skoma','FU7':'skoma','FU8':'skoma','FU9':'skoma',
			 'OU2':'gkoma','HI2':'gkoma','KA2':'gkoma','KI3':'gkoma','KI4':'gkoma','GI3':'gkoma','GI4':'gkoma',
			 'KE3':'gkoma','KE4':'gkoma','KY3':'gkoma','KY4':'gkoma',
			 'FU10':'gkoma','FU11':'gkoma','FU12':'gkoma','FU13':'gkoma','FU14':'gkoma','FU15':'gkoma','FU16':'gkoma','FU17':'gkoma','FU18':'gkoma'
		    };
var movePossibleArray=[];//タッチした駒の移動可能マスを保持する配列
//強制終了フラグ
var endFlg=false;//勝敗がついたか？
var endModeFlg=false;//false:対局モード中
//座標関連
var ky=0;
var kx=0;
var kys=0;//整数y
var kxs=0;//整数x
var startKys=0;//スタートの整数y
var startKxs=0;//スタートの整数x
var pLen=11;//駒台の長さ
var gameCount=1;
//フラグ関連
var teban="先手";
var firstChoiceFlg=true;//最初に駒を選択できる状態:true
var promotionFlg=false;//成駒か？

var currentKomaClass="";//現在の駒クラス
var currentKomaId="";//現在の駒のId
var currentKomaIdName="";//現在の駒のid二文字
var currentMasu="";//カレントのマスのid
var firstTouchMasu="";//一度目にタッチしたマスのid
var firstTouchPieceId="";//一度目にタッチした駒のid
var firstTouchPieceName="";//一度目にタッチした駒のid二文字
var firstTouchMasuInOut;//最初にタッチしたマスは盤内か？
var currentMasuInout;//現在のマスは盤内か？

var standId;//空いている駒台のid

var sClassArray=["skoma","skoma promotion","OU2"];
var gClassArray=["gkoma","gkoma promotion","OU1"];
var justBefore=[];//直前の指し手のマスを格納する配列
var nihudesuFlg=false;//二歩チェック用
var outeCheckArray=[];//王手チェック用の配列

var gameRecodeDisplay="";//棋譜記録の表示用
var kihuDisplay;//棋譜
var convertPiece="";//漢字に変換
var kihuFirstTouchFlg=true;//棋譜用に使うフラグ、最初にタッチできる時:true
var getFlg=false;//駒をとっていない

var gameRecodeEndMasuArray=[];//最終のマスを格納する棋譜記録用の配列
var gameRecodeStartMasuArray=[];//移動前のマスを格納する棋譜記録用の配列
var gameRecodePieceArray=[];//駒を格納する棋譜記録用の配列

var sGetPieceArray=[];//先手の全持ち駒
var gGetPieceArray=[];//後手の全持ち駒

function sortPiece(){
	let sStorageArea=["s1","s2","s3","s4","s5","s6","s7","s8","s9"];//駒置き場の順番
	let gStorageArea=["g9","g8","g7","g6","g5","g4","g3","g2","g1"];//駒置き場の順番
	let sortRankId=["FU","KY","KE","GI","KI","KA","HI","OU"];//並び替え順番
	//持ち駒を全て並び替えた配列。"FU","KY","KE","GI","KI","KA","KA","OU"の順盤に先頭に格納
	let sortPieceArray=[['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP']];
	let tempSortPieceArray=[];//隙間のない並び替え
	let numPieceArray=[];//駒の種類別の枚数を格納する配列
	let switchClassArray,getPieceArray,storageArea;
	let tempPieceId;//駒Id
	let whatNumber;//駒配列の何番目にあるか？
	if(teban=="先手"){
		switchClassArray=sClassArray;//クラス
		getPieceArray=sGetPieceArray;//持ち駒
		storageArea=sStorageArea;//駒の置き場所
	}else{
		switchClassArray=gClassArray;
		getPieceArray=gGetPieceArray;
		storageArea=gStorageArea;
	}
//console.log("配列の全ての駒"+getPieceArray);
	//tempSortPieceArray:持ち駒を全て並び替えた配列、"FU","KY","KE","GI","KI","KA","HI"の順盤に格納
	for(let i=0;i<sortRankId.length;i++){
		let numPiece=0;//駒の枚数
		for(let j=0;j<getPieceArray.length;j++){
			if(getPieceArray[j].substr(0,2)==sortRankId[i]){
				sortPieceArray[i].push(getPieceArray[j]);
				tempSortPieceArray.push(getPieceArray[j]);//隙間のない並び替え配列
				numPiece++;//駒の枚数
			}
		}
		if(numPiece!=0){
			numPieceArray.push(numPiece);//種類ごとの枚数を格納
		}
	}
//console.log(getPieceArray);//並び替えた駒台の駒Id
	//駒台の全削除
	for(let i=0;i<getPieceArray.length;i++){
		let tempElement=document.getElementById(getPieceArray[i]);
		//nullチェック
		if(!(tempElement===null)){
			tempElement.remove();//html盤面から持ち駒を削除

		}
	}
	//js内の盤面情報を'EMP'にする
	for(let i=0;i<storageArea.length;i++){
		GameRecord[storageArea[i]]='EMP';//js内の駒台のリセット
	}

	let xx=0;//配置場所
	for(let i=0;i<sortPieceArray.length;i++){
		if(sortPieceArray[i][sortPieceArray[i].length-1]=="EMP"){
			continue;
		}else{
			whatNumber=pieceId.indexOf(sortPieceArray[i][sortPieceArray[i].length-1]);//駒配列の何番目にあるか？
			tempPieceId=sortPieceArray[i][sortPieceArray[i].length-1];
			document.getElementById(storageArea[xx]).insertAdjacentHTML('afterbegin',piece[whatNumber]);//駒台に並び替えた駒を順番に追加する
			document.getElementById(tempPieceId).setAttribute('class',switchClassArray[0]);//駒にクラスの設定
			GameRecord[storageArea[xx]]=tempPieceId;//jsのゲーム記録を配列の最後尾のIdに設定し、整合性を合わせる
			pieceIdRecord[GameRecord[storageArea[xx]]]=switchClassArray[0];//js内の駒クラスの整合性を合わせる
//console.log("js駒台Id:"+storageArea[xx]);
//console.log("js駒Id:"+GameRecord[storageArea[xx]]);
//console.log("js駒クラス:"+pieceIdRecord[GameRecord[storageArea[xx]]]);
//console.log(sortPieceArray[i].length);
			xx++;
			continue;
		}
	}
	//駒の複数枚の表示
	for(let i=0;i<sortPieceArray.length;i++){
		//駒が2枚以上あるなら
		if(sortPieceArray[i].length>=3){
		let numTemp=sortPieceArray[i].length-1;//駒の枚数
		let tempText="<sup class='numDisp'>"+numTemp+"</sup>";
		let numGetPiece=document.getElementById(sortPieceArray[i][sortPieceArray[i].length-1]);
		numGetPiece.insertAdjacentHTML('beforeend',tempText);//駒の複数枚の表示
//numGetPiece.style.position="absolute";
	if(teban=="先手"){
		numGetPiece.style.top=11+"px";//cssの調整(topから11pxの位置に配置する)、フレキブルデザイン今後の課題
	}else{
		numGetPiece.style.top=5+"px";//cssの調整、フレキブルデザイン今後の課題
	}
//console.log(numGetPiece);
//console.log(numGetPiece.style.top);
		}
	}
console.log(sortPieceArray);//並び替えた駒台の駒Id
//console.log("種類数"+numPieceArray.length);//駒の類数
//console.log("種類ごとの枚数"+numPieceArray);//駒の枚数
//console.log("配列の全ての駒"+getPieceArray);
//console.log(piece[whatNumber]);
//console.log("komaId"+tempPieceId);
//console.log("配列の末尾"+sortPieceArray[0][sortPieceArray[0].length-1]);//駒の枚数
//console.log(tempSortPieceArray);
//console.log("種類数"+numPieceArray.length);//駒の類数
//console.log("持ち駒の数:"+sortPieceArray.length);//駒台にある駒Id
//console.log("並び替えた駒:"+sortPieceArray);
// console.log("駒Id:"+GameRecord["s1"]);//s1にある駒
// console.log("駒クラス:"+pieceIdRecord[GameRecord["s1"]]);//s1にある駒
// console.log("s1にある駒Id:"+GameRecord["s1"]);//s1にある駒
}

function start(){
	let supportTouch='ontouchend'in document;//タッチイベントがサポートされているか
	let EVENTNAME=supportTouch ? 'touchstart':'mousedown';//タッチイベントかマウスダウンか
	let tempInp;
	gAria();
	mainAria();
	sAria();
	userCheck();
	//駒の配置とイベントリスナの登録
	setUp();
	document.getElementById("gamemode").innerHTML="対局モード";
	document.getElementById("teban").innerHTML=teban;//手番
	document.getElementById("gamecount").innerHTML=gameCount+"手目";//何手目か？
	tempInp="<input type='button' value='対局モードの終了'onClick='endMode()'size='10'>";
	document.getElementById("inpModeEnd").innerHTML=tempInp;
	//イベント分岐
	if(EVENTNAME=='touchstart'){
		document.addEventListener("touchstart",touchstart);
	}else{
		document.addEventListener("mousedown",mousedown);
	}
}

//後手駒台の作成
function gAria(){
	let gDisplay="";//後手駒台表示用
	let gKomadai=[];//後手の駒台
	let gPaneru;
	gKomadai=new Array(pLen);
	for(let i=0;i<pLen;i++){
		gPaneru="<div class='gStand'id='g"+i+"'>　</div>";
		gKomadai[i]=gPaneru;
	}
	for(let i=0;i<pLen;i++){
		gDisplay+=gKomadai[i];
	}
	document.getElementById("gdisp").innerHTML=gDisplay;
}
//先手駒台の作成
function sAria(){
	let sDisplay="";//先手駒台表示用
	let sKomadai=[];//先手の駒台
	let sPaneru;
	sKomadai=new Array(pLen);
	for(let i=0;i<pLen;i++){
		sPaneru="<div class='sStand'id='s"+i+"'>　</div>";
		sKomadai[i]=sPaneru;
	}
	for(let i=0;i<pLen;i++){
		sDisplay+=sKomadai[i];
	}
	document.getElementById("sdisp").innerHTML=sDisplay;
}

//中央メイン盤の作成
function mainAria(){
	let mainDisplay="";//メイン表示用
	let board=[];//メインの将棋盤
	let paneru;
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
		mainDisplay+=board[y][x];
		if((y==10)&&(x==10)){
		break;
		}
		if(x==10){
		mainDisplay+="<br>";
		}
		}
	}
	document.getElementById("maindisp").innerHTML=mainDisplay;
}

//ユーザーチェック
function userCheck(){
	let userB=window.navigator.appName;//ユーザーブラウザ
	let wnu=window.navigator.userAgent;//ユーザーエージェント
	let userOs;//ユーザーos
	let userW=window.innerWidth;//ウィンドウの横幅
	let userH=window.innerHeight;//ウィンドウの高さ
	if(wnu.indexOf('iPhone')!=-1){
		userOs="iPhone";
	}else if(wnu.indexOf('iPod')!=-1){
		userOs="iPod";
	}else if(wnu.indexOf('Android')!=-1){
		userOs="Android";
	}else if(wnu.indexOf('Windows')!=-1){
		userOs="Windows";
	}else{
		userOs="わかりません";
	}
	document.getElementById("useros").innerHTML=userOs;//userのosを表示
	document.getElementById("userw").innerHTML=userW;//userの横幅を表示
	document.getElementById("userh").innerHTML=userH;//userの高さを表示
}
//駒の配置
function setUp(){
	//初期配置用のマスのId(先手,後手)
	let initialPlacementMasuId=["d9s5","d8s8","d8s2","d9s4","d9s6","d9s3","d9s7","d9s2","d9s8","d9s1","d9s9","d7s1","d7s2","d7s3","d7s4","d7s5","d7s6","d7s7","d7s8","d7s9",
								"d1s5","d2s2","d2s8","d1s6","d1s4","d1s7","d1s3","d1s8","d1s2","d1s9","d1s1","d3s9","d3s8","d3s7","d3s6","d3s5","d3s4","d3s3","d3s2","d3s1"];
	//駒の配置(先手,後手)
	for(let i=0;i<piece.length;i++){
		document.getElementById(initialPlacementMasuId[i]).insertAdjacentHTML('afterbegin',piece[i]);
		if(i<20){
			document.getElementById(pieceId[i]).setAttribute('class','skoma');//.setAttribute('class','skoma');.className='skoma';
		}else{
			document.getElementById(pieceId[i]).setAttribute('class','gkoma');
		}
	}
}
//パソコン用マウスダウン
function mousedown(e){
	try{
		if((endFlg==false)&&(endModeFlg==false)){
			touchPiece(e.pageX,e.pageY);
		}else{
			throw new Error("お疲れ様でした(*_ _)");
		}
	}
	catch(e){
		document.getElementById("windisp").innerHTML="";//勝敗結果
		document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//勝敗
	}
}
//スマホ用タッチスタート
function touchstart(e){
	try{
		if((endFlg==false)&&(endModeFlg==false)){
			//もしタッチされたのが一箇所であるなら
			if(e.targetTouches.length==1){
				touch=e.targetTouches[0];
				touchPiece(touch.pageX,touch.pageY);
			}
		}else{
			throw new Error("お疲れ様でした(*_ _)");
		}
	}
	catch(e){
		document.getElementById("windisp").innerHTML="";//勝敗結果
		document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//勝敗
	}
}
//start()系終了---------------------------------------------------------------------------------------
//touchPiece()系開始----------------------------------------------------------------------------------
//タッチされた時のイベントの処理
function touchPiece(tx,ty){
	getCoordinate(tx,ty);//座標、盤内外の取得
	//駒の選択から移動まで
	if(firstChoiceFlg==true){
		//自分の駒を選択している。
		if(isMyPiece()==true){
			choice();
			firstChoiceFlg=false;
			return;
		}else{
		//自分の駒を選択していない。
			reset();
			return;
		}
	}
	//二回目にタッチしたマスに自分の駒がある。又は、盤外である。
	//盤内からの移動かつ配列内に存在しない場所をタップした
	//最初にタッチしたマスが盤外かつ相手の駒がある
	if((isMyPiece())||(!InOut(kys,kxs))||
	   ((firstTouchMasuInOut)&&(movePossibleArray.indexOf(currentMasu)==-1))||
	   ((firstTouchMasuInOut==false)&&(isOpponentPiece()==true))){
		reset();
		return;
	}
	//もし盤外から歩を使うなら、二歩チェックをする。
	if((firstTouchMasuInOut==false)&&(firstTouchPieceName=="FU")){
		nihuCheck(kxs);//二歩チェック
		if(nihudesuFlg){
			alert("二歩です。");
			nihudesuFlg=false;//二歩フラグをfalseに戻しておく
			reset();
			return;
		}
	}
	//もし盤外から歩を使うなら、１段目(９段目)をチェックする。
	if((firstTouchMasuInOut==false)&&
	   (firstTouchPieceName=="FU")&&
	   (checkOpponentAriaKyouFu(currentMasu))){
		reset();
		return;
	}
	//もし盤外から桂,香を使うなら、桂,香チェックをする。
	if((firstTouchMasuInOut==false)&&
	   (checkOpponentAriaKeima(currentMasu))&&
	   ((firstTouchPieceName=="KE")||(firstTouchPieceName=="KY"))){
		reset();
		return;
	}
//移動先に相手の駒が存在する。＝相手の駒を取った場合の処理
	if(isExistPiece()){
		let getPiece;//取得した駒
		let tempArea;//持ち駒を仮格納するマス
		getFlg=true;//駒をとった
		getPiece=currentKomaId;//取った駒のid
		document.getElementById(getPiece).remove();//駒の削除
		GameRecord[currentMasu]='EMP';//現在のマスにある駒（相手の駒）を無しにする。削除と同時に連想配列をEMPにする
	if(teban=="先手"){
		tempArea="s9";
		sGetPieceArray.push(getPiece);//先手の駒台配列に格納
	}else{
		tempArea="g1";
		gGetPieceArray.push(getPiece);//後手の駒台配列に格納
	}
	pieceMove(getPiece,tempArea);//駒の追加
//駒台の並び替え(駒が増えた時)
	sortPiece();
	getFlg=false;
	}
	//最初に選択した駒が成り駒であるなら
	if(promotionFlg==true){
		document.getElementById(firstTouchPieceId).remove();//最初に選択した駒の削除
		GameRecord[firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
		//駒を削除した後に、マスの色を元に戻す
		AllReverseCssRule();
		promotionMove();//成り駒用の移動
		PlaySound();//音を出す
		console.log("成り駒を移動しました。");
	}else{
		MoveCommit();
	}
	changeCssJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	gameCount++;
	document.getElementById("gamecount").innerHTML=gameCount+"手目";//何手目か？
//王様を取っていたら勝敗判定
	if(endFlg==true){
		alert("王様をとりました。"+teban+"の勝ちです。")
		document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//お疲れ様でした
		document.getElementById("windisp").innerHTML=teban+"の勝ちです。";//勝敗結果
		return;
	}
	if(teban=="先手"){
		teban="後手";
	}else{
		teban="先手";
	}
	document.getElementById("teban").innerHTML=teban;//手番
	movePossibleArray.length=0;//駒の移動可能マスを格納した配列を0にする
	firstChoiceFlg=true;
	kihuFirstTouchFlg=true;
	promotionFlg=false;
	getFlg=false;//駒をとっていない
	return;
}
//座標,
function getCoordinate(tx,ty){
//console.log(GameRecord);
	let banX=36;//将棋盤までのpx横幅(距離)
	let banY=140;//将棋盤までのpx高さ(距離)
	let gW1=36;//g1までの横の距離
	let gH1=76;//g1までの縦の距離
	let sW1=36;//s1までの横の距離
	let sH1=460;//s1までの縦の距離
	kx=Math.floor(tx);
	ky=Math.floor(ty);
	kxs=Math.floor(((tx-banX)/32)+1);
	kys=Math.floor(((ty-banY)/32)+1);
	gxs=Math.floor(((tx-gW1)/32)+1);
	gys=Math.floor(((ty-gH1)/32)+1);
	sxs=Math.floor(((tx-sW1)/32)+1);
	sys=Math.floor(((ty-sH1)/32)+1);
	currentMasu="d"+kys+"s"+kxs;//カレントのタッチマス
	currentMasuInout=InOut(kys,kxs);//カレントのマスは盤内？盤外？
	//y,x座標の表示
	document.getElementById("ky").innerHTML=ky;//y座標
	document.getElementById("kx").innerHTML=kx;//x座標
	if(gys==1){
		currentMasu="g"+gxs;
	}else if(gys==2){
		currentMasu="g"+Number(11+gxs);
	}else if(sys==1){
		currentMasu="s"+sxs;
	}else if(sys==2){
		currentMasu="s"+Number(11+sxs);
	}else{
	;
	}
//console.log(currentMasu);
	currentKomaId=GameRecord[currentMasu];//現在のマスにある駒のId
//console.log(currentKomaId);
//aaa=document.getElementById(GameRecord["d5s5"]);//null
//console.log(aaa);
//console.log(pieceIdRecord[GameRecord["d5s5"]]);//
	if((typeof currentKomaId==="undefined")||(currentKomaId===null)||(currentKomaId=="EMP")){
		currentKomaId="";
		currentKomaClass="";
	}else{
		currentKomaClass=pieceIdRecord[currentKomaId];//現在のマスにある駒のクラス
	}
	currentKomaIdName=currentKomaId.substr(0,2);//現在のマスにある駒のId二文字
	kihuConvertMasu(kys,kxs,startKys,startKxs,0);//棋譜形式に変換
	if(kihuFirstTouchFlg==true){
		kihuConvertPiece(currentKomaIdName,0);
		//自分の駒を選択している。
		if(isMyPiece()==true){
			kihuFirstTouchFlg=false;
		}
	}else{
		kihuConvertPiece(firstTouchPieceName,0);
		kihuFirstTouchFlg=true;
	}
	if((typeof convertPiece==="undefined")||(kihuDisplay=="盤外です")){
		convertPiece="";
	}
	document.getElementById("kihudisplay").innerHTML=kihuDisplay+convertPiece;//棋譜の表示
}

//駒の選択
function choice(){
	touka(currentKomaId,0.3);//タッチした駒の透過率を変える
	firstTouchMasu="d"+kys+"s"+kxs;//一度目にタッチしたマスのid
	firstTouchPieceId=currentKomaId;//一度目にタッチした駒のid
	firstTouchPieceName=firstTouchPieceId.substr(0,2);//一度目にタッチした駒のid二文字
	firstTouchMasuInOut=InOut(kys,kxs);//一度目にタッチした場所は盤内か？
	promotionFlg=firstPromotion();//一度目にタッチした駒は成り駒か？
	startKys=kys;
	startKxs=kxs;
console.log(firstTouchPieceId);
	//最初にタッチしたマスが盤内なら駒の動きを表示する
	if(firstTouchMasuInOut){
		pieceMotionRule();
		for(let i=0;i<movePossibleArray.length;i++){
			changeCssPieceMotionRule(movePossibleArray[i]);//cssの変更
		}
	outeCheckArray.length=0;//王手確認用の配列を0にする。
	}
}
//リセット用
function reset(){
	if((pieceId.indexOf(firstTouchPieceId)!=-1)){
		touka(firstTouchPieceId,1);//一度目にタッチした駒の透過率を戻す
	}
	firstChoiceFlg=true;
	kihuFirstTouchFlg=true;
	promotionFlg=false;
	currentKomaClass="リセット";
	currentKomaId="リセット";
	currentKomaIdName="リセット";
	firstTouchPieceId="リセット";
	firstTouchPieceName="リセット";
	firstTouchMasu="リセット";
	getFlg=false;//駒をとっていない
	movePossibleArray.length=0;//移動可能マスの配列を0にする。
	outeCheckArray.length=0;//王手確認用の配列を0にする。
	AllReverseCssRule();//全ての盤クラスの変更を元に戻す
	if(justBefore.length>0){
		changeCssJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	}
	//document.getElementById("kihu").innerHTML=kihuDisplay+convertPiece;//棋譜の表示
}

//選択した駒の移動完了まで
function MoveCommit(){
	let getPieceArray;//持ち駒配列
	let promotionMoveFlg=false;
	let res;
	document.getElementById(firstTouchPieceId).remove();//最初に選択した駒の削除
	GameRecord[firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
//持ち駒を使用した時(firstTouchMasuInOut==false:持ち駒を使用した時)
	if(firstTouchMasuInOut==false){
console.log(firstTouchPieceId+"を持ち駒として使用しました。");
		if(teban=="先手"){
			getPieceArray=sGetPieceArray;//先手の駒台配列
		}else{
			getPieceArray=gGetPieceArray;//先手の駒台配列
		}
console.log(getPieceArray);//駒台の駒Id
//配列から使用した持ち駒(firstTouchPieceId)の削除
	for(let i=0;i<getPieceArray.length;i++){
		if(getPieceArray[i]==firstTouchPieceId){
console.log(i+"番目にあります");
			getPieceArray.splice(i,1);
		}
	}
	console.log(getPieceArray);//駒台の駒Id
//駒台の並び替え(駒が増えた時)
	sortPiece();
	}
	
	AllReverseCssRule();//駒を削除した後に、マスの色を元に戻す
//ここで成るか成らないかの判定-----------------------------------------------------------------
	while(promotionMoveFlg==false){
		//成り駒でない＆最初は盤内＆成れる駒
		if((promotionFlg==false)&&(firstTouchMasuInOut)&&(possiblePromotion.indexOf(firstTouchPieceId)!=-1)){
			//桂馬が１,２段目(８,９段目)に移動したら強制的に成る
			if((checkOpponentAriaKeima(currentMasu))&&(firstTouchPieceName=="KE")){
				promotionMoveFlg=true;
				break;
			}
			//香,歩が１段目(９段目)に移動したら強制的に成る
			if((checkOpponentAriaKyouFu(currentMasu))&&((firstTouchPieceName=="KY")||(firstTouchPieceName=="FU"))){
				promotionMoveFlg=true;
				break;
			}
			//移動後のマスが敵陣である。又は、移動前のマスが敵陣＆飛車,角,銀の成り返りである。
			if((checkOpponentAria(currentMasu))||
			   ((checkOpponentAria(firstTouchMasu))&&
			   ((firstTouchPieceName=="HI")||(firstTouchPieceName=="KA")||(firstTouchPieceName=="GI")))){
				res=confirm("成りますか？");
   				if(res==true){
					promotionMoveFlg=true;
					break;
				}	
			}
		}
		break;//ループせずに必ず抜ける
	}
	if(promotionMoveFlg==true){
		promotionMove();//駒の昇格:成り駒でない→成り駒
		gameRecodePieceArray[gameRecodePieceArray.length-1]=convertPiece+"成";//棋譜記録を成に修正
		document.getElementById("kihudisplay").innerHTML=kihuDisplay+convertPiece+"成";//棋譜の表示
	}else{
		pieceMove(firstTouchPieceId,currentMasu);//駒の追加
		
		//移動完了の前のバグ確認(マスの中に２枚存在するバグ対策)
		if(document.getElementById(currentMasu).children.length>1){
			alert("バグです。盤の中に２枚以上入りまみた。");
		}
	}
	PlaySound();//音を出す
	reset();
	return;
}
function pieceMove(addPiece,addMasu){
	let whatNumber=pieceId.indexOf(addPiece);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(addMasu).insertAdjacentHTML('afterbegin',piece[whatNumber]);
	document.getElementById(pieceId[whatNumber]).setAttribute('class',switchClassArray[0]);//駒にクラスの設定
	GameRecord[addMasu]=addPiece;//現在のマスに駒を追加する	
	pieceIdRecord[addPiece]=switchClassArray[0];
	if(addPiece==switchClassArray[2]){
		endFlg=true;//王様を取ったらフラグをtrueにする
	}
	//駒を駒台に追加する時は通過しない(棋譜に記録しない)
	if(getFlg==false){
	//駒の移動が完了したら
	kihuConvertMasu(kys,kxs,startKys,startKxs,1);//棋譜を記録として残す。
	kihuConvertPiece(firstTouchPieceName,1);//棋譜を記録として残す。
//王手判定-----------------------------------------------------------------------------------------------------
		document.getElementById("outedisp").innerHTML="";
		pieceMotionRule();//王手確認に使用
		//console.log("王手確認用配列:"+outeCheckArray);//王手確認用の配列
		checkOute();
	}
	justBefore.push(addMasu);//配列に直前の指し手のマスを格納
}
//駒の昇格,成り駒の移動
function promotionMove(){
	let whatNumber=pieceId.indexOf(firstTouchPieceId);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(currentMasu).insertAdjacentHTML('afterbegin',promotionPiece[whatNumber]);
	document.getElementById(pieceId[whatNumber]).setAttribute('class',switchClassArray[1]);//駒にクラスの設定
	GameRecord[currentMasu]=firstTouchPieceId;//現在のマスに駒を追加する
	pieceIdRecord[firstTouchPieceId]=switchClassArray[1];//昇格クラスにする
//駒の移動が完了したら
	kihuConvertMasu(kys,kxs,startKys,startKxs,1);//棋譜を記録として残す。
	kihuConvertPiece(firstTouchPieceName,1);//棋譜を記録として残す。
//王手判定-----------------------------------------------------------------------------------------------------
	document.getElementById("outedisp").innerHTML="";
	pieceMotionRule();//王手確認に使用
	//console.log("王手確認用配列:"+outeCheckArray);//王手確認用の配列
	checkOute();
	justBefore.push(currentMasu);//配列に直前の指し手のマスを格納
}

//駒の動きのルール---------------------------------------------------------------------
function pieceMotionRule(){
	let typeMotion,motionY,motionX,addY,addX;
	let indexNumber=CheckPieceId.indexOf(firstTouchPieceName);//配列の何番目にあるか？
	let tempTargetClass=pieceIdRecord[firstTouchPieceId];//対象の駒のクラス
	//成銀,成桂,成香,とはindexNumberを3にし、金と同じ動きを参照する
	if(((firstTouchPieceName=="GI")||(firstTouchPieceName=="KE")||(firstTouchPieceName=="KY")||(firstTouchPieceName=="FU"))&&
	   ((tempTargetClass=="skoma promotion")||(tempTargetClass=="gkoma promotion"))){
		indexNumber=3;
	}
	if((firstTouchPieceName=="HI")&&
	   ((tempTargetClass=="skoma promotion")||(tempTargetClass=="gkoma promotion"))){
		indexNumber=8;
	}
	if((firstTouchPieceName=="KA")&&
	   ((tempTargetClass=="skoma promotion")||(tempTargetClass=="gkoma promotion"))){
		indexNumber=9;
	}
	for(let i=0;i<sPieceMotionYX.length;i++){
		typeMotion=pieceMotionTable[indexNumber][i];
		motionY=kys;
		motionX=kxs;
		if(typeMotion==0){
			continue;
		}
		if(typeMotion>=1){
			if(teban=="先手"){
				addY=sPieceMotionYX[i][0];
				addX=sPieceMotionYX[i][1];
			}else{
				addY=gPieceMotionYX[i][0];
				addX=gPieceMotionYX[i][1];
			}
			do{
				motionY+=addY;
				motionX+=addX;
				pieceMotion="d"+motionY+"s"+motionX;
				if((InOut(motionY,motionX)==false)||
			   	   (moveIsMyPiece(pieceIdRecord[GameRecord[pieceMotion]]))){
					//移動先が盤外または、移動先に自分の駒があればスルーする
					break;
				}
				movePossibleArray.push(pieceMotion);//配列にルールを格納
				outeCheckArray.push(pieceMotion);//王手確認用配列に格納
				if(typeMotion==1){
					break;//１の時は繰り返さずにdo～whileを抜ける
				}
			}while(GameRecord[pieceMotion]=="EMP");//移動先に駒がない＆飛車,角,香,竜,馬の２の動きの間は繰り返す。
		}
	}
}

//王手判定
function checkOute(){
	let checkOU,temp;
	if(teban=="先手"){
		checkOU="OU2";
	}else{
		checkOU="OU1";
	}
	for(let i=0;i<outeCheckArray.length;i++){
		temp=outeCheckArray[i];//(マスId)から駒Idを求める。
		if(GameRecord[temp]==checkOU){
			document.getElementById("outedisp").innerHTML="王手";
			break;
		}
	}
	return;
}

//移動可能なマスの色を変更する
function changeCssPieceMotionRule(ruleMasu){
	document.getElementById(ruleMasu).style.backgroundColor="lightpink";
	document.getElementById(ruleMasu).style.border="1px solid red";
	document.getElementById(ruleMasu).style.boxSizing="border-box";
}
//直前の指し手のマスの色を変更する
function changeCssJustBefore(justBeforeMasu){
	document.getElementById(justBeforeMasu).style.backgroundColor="#FFFF66";//yellow系
	document.getElementById(justBeforeMasu).style.border="1px solid orange";
	document.getElementById(justBeforeMasu).style.boxSizing="border-box";
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

//最初に選択した駒は成り駒か？
function firstPromotion(){
	if((currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion")){
		return true;
	}else{
		return false;
	}
}
//将棋盤の中か？外か？
function InOut(targetY,targetX){
	if(((targetY>=1)&&(targetY<=9))&&((targetX>=1)&&(targetX<=9))){
		return true;
	}
	return false;
}

//自分の駒を選択しているか？
function isMyPiece(){
	if(((teban=="先手")&&(currentKomaClass=="skoma"))||((teban=="先手")&&(currentKomaClass=="skoma promotion"))||
	   ((teban=="後手")&&(currentKomaClass=="gkoma"))||((teban=="後手")&&(currentKomaClass=="gkoma promotion"))){
		return true;
	}
	return false;
}
//相手の駒を選択しているか？対局相手の駒ですか？
function isOpponentPiece(){
	if(((teban=="先手")&&(currentKomaClass=="gkoma"))||((teban=="先手")&&(currentKomaClass=="gkoma promotion"))||
	   ((teban=="後手")&&(currentKomaClass=="skoma"))||((teban=="後手")&&(currentKomaClass=="skoma promotion"))){
		return true;
	}
	return false;
}
//タッチしたマスに駒が存在するか？
function isExistPiece(){
	if((currentKomaClass=="skoma")||(currentKomaClass=="gkoma")||
	   (currentKomaClass=="skoma promotion")||(currentKomaClass=="gkoma promotion")){
		return true;
	}
	return false;
}
//駒の制約に使用。駒の移動先できる先に自分の駒があるか？
function moveIsMyPiece(tempClass){
	if(((teban=="先手")&&(tempClass=="skoma"))||((teban=="先手")&&(tempClass=="skoma promotion"))||
	   ((teban=="後手")&&(tempClass=="gkoma"))||((teban=="後手")&&(tempClass=="gkoma promotion"))){
		return true;
	}
	return false;
}
//二歩チェックメソッド
function nihuCheck(kxs){
	let switchNihuCheck;//スイッチ用
	let nihuCheckMasu;
	if(teban=="先手"){
		switchNihuCheck="skoma";
	}else{
		switchNihuCheck="gkoma";
	}
	//1から9まで回す。
	for(let i=1;i<10;i++){
		nihuCheckMasu="d"+i+"s"+kxs;//筋を取得
		if((GameRecord[nihuCheckMasu].substr(0,2)=="FU")&&
   		   (pieceIdRecord[GameRecord[nihuCheckMasu]]==switchNihuCheck)){
			//リセット
			nihudesuFlg=true;
			return;	
		}
		nihudesuFlg=false;
	}
	return;
}
//対局相手の陣地ですか？
function checkOpponentAria(tempMasu){
	//正規表現
	let regex1,regex2,regex3;
	let promotion1,promotion2,promotion3;
	if(teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
		regex2=new RegExp(/d2s[1-9]/);
		regex3=new RegExp(/d3s[1-9]/);
	}else{
		regex1=new RegExp(/d7s[1-9]/);
		regex2=new RegExp(/d8s[1-9]/);
		regex3=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(tempMasu);
	promotion2=regex2.test(tempMasu);
	promotion3=regex3.test(tempMasu);
	if((promotion1)||(promotion2)||(promotion3)){
		return true;
	}
	return false;
}

//(桂馬が強制的に成るマス||駒台から置けないマス)ですか？(１,２段目(８,９段目))
function checkOpponentAriaKeima(currentMasu){
	//正規表現
	let regex1,regex2;
	let promotion1,promotion2;
	if(teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
		regex2=new RegExp(/d2s[1-9]/);
	}else{
		regex1=new RegExp(/d8s[1-9]/);
		regex2=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(currentMasu);
	promotion2=regex2.test(currentMasu);
	if((promotion1)||(promotion2)){
		return true;
	}
	return false;
}
//(香,歩が強制的に成るマス||駒台から置けないマス)ですか？(１段目(９段目))
function checkOpponentAriaKyouFu(currentMasu){
	//正規表現
	let regex1;
	let promotion1;
	if(teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
	}else{
		regex1=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(currentMasu);
	if(promotion1){
		return true;
	}
	return false;
}

//選択した駒(id)の透過率を変化させる
function touka(currentKomaId,toukaritu){
	document.getElementById(currentKomaId).style.opacity=toukaritu;//0.3:30%
}
//駒台の並び替えメソッド

//読みやすい棋譜に変換
function kihuConvertMasu(endY,endX,startY,startX,commit){
	let kihuHeadArray=[1,2,3,4,5,6,7,8,9];
	let kihuTailArray=[1,2,3,4,5,6,7,8,9];
	let kihuHeadDispArray=["１","２","３","４","５","６","７","８","９"];
	let kihuTailDispArray=["一","二","三","四","五","六","七","八","九"];
	let kihuHead,kihuTail;
	let whatNumberHead,whatNumberTail;
	let kihuEndMasu,kihuFirstTouchMasu;//棋譜用のマス
	let kihuTeban;
	//if(isMyPiece()==true){
		if(teban=="先手"){
			kihuTeban="▲";
		}else{
			kihuTeban="△";
		}
	//}else{
		//kihuTeban="";
	//}
	if(InOut(kys,kxs)){
		kihuHead=(10-endX);
		kihuTail=endY;
		whatNumberHead=kihuHeadArray.indexOf(kihuHead);
		kihuHeadDisp=kihuHeadDispArray[whatNumberHead];
		whatNumberTail=kihuTailArray.indexOf(kihuTail);
		kihuTailDisp=kihuTailDispArray[whatNumberTail];
		kihuFirstTouchMasu=kihuHead+''+kihuTail;//半角数字に変換
		kihuEndMasu=kihuHeadDisp+kihuTailDisp;//全角に変換
		//commitが1:完全に指し終えている時
		if(commit==1){
			gameRecodeEndMasuArray.push(kihuTeban+kihuEndMasu);//最終のマスを棋譜配列に格納
			kihuHead=(10-startX);
			kihuTail=startY;
			kihuFirstTouchMasu=kihuHead+''+kihuTail;//移動前のマスを半角数字に変換
			if(firstTouchMasuInOut==true){
				kihuFirstTouchMasu=kihuHead+''+kihuTail;//移動前のマスを半角数字に変換
			}else{
				kihuFirstTouchMasu=0;//盤外から駒を打った場合は(0)にする
			}
			gameRecodeStartMasuArray.push(kihuFirstTouchMasu);//移動前のマスを棋譜配列に格納
		}
		kihuDisplay=kihuTeban+kihuEndMasu;
	}else{
		kihuDisplay="盤外です";
	}
	return;
}

//駒を漢字に変換する。
function kihuConvertPiece(tempPieceName,commit){
	let convertPieceIdArray=["OU","HI","KA","KI","GI","KE","KY","FU"];//棋譜変換用駒Id配列(8種類)
	let convertPieceKanjiArray=["王","飛","角","金","銀","桂","香","歩"];
	let convertPiecePromotionKanjiArray=["None","竜","馬","None","成銀","成桂","成香","と"];
	let whatNumber;//配列の何番目にあるか？
	whatNumber=convertPieceIdArray.indexOf(tempPieceName);
	if(promotionFlg==true){
		convertPiece=convertPiecePromotionKanjiArray[whatNumber];
	}else{
		convertPiece=convertPieceKanjiArray[whatNumber];
	}
	//commitが1:完全に指し終えている時
	if(commit==1){
		if(firstTouchMasuInOut==true){
			gameRecodePieceArray.push(convertPiece);//棋譜漢字配列に格納
		}else{
			gameRecodePieceArray.push(convertPiece+"打");//棋譜漢字配列に格納
		}
	}
	return;
}

//全ての棋譜記録を取得する
function kihuAllConvert(){
	let game="";
	for(let i=0;i<gameRecodeEndMasuArray.length;i++){
		game+=gameRecodeEndMasuArray[i]+gameRecodePieceArray[i]+"("+gameRecodeStartMasuArray[i]+")"+"　";
	}
	console.log(game);
	return game;
}

//ボタンで棋譜の表示
function GameRecode(){
	document.getElementById("gameRecorddisp").innerHTML=kihuAllConvert();//棋譜変換
}

//continue:リロード
function inputContinue(){
	window.location.reload();
}

function endMode(){
	document.getElementById("ky").innerHTML="";//y座標
	document.getElementById("kx").innerHTML="";//x座標
	document.getElementById("gamemode").innerHTML="棋譜再生モード";
	document.getElementById("inpModeEnd").innerHTML="";
	document.getElementById("outedisp").innerHTML="";
	document.getElementById("gamecount").innerHTML="";
	document.getElementById("windisp").innerHTML="";
	document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";
	endModeFlg=true;
}

//音楽関連
var audioElem;
function PlaySound() {
	audioElem = new Audio();
	audioElem.src = "mp/komaoto.mp3";//ここにmp3パスを設定する。
	audioElem.volume = 0.5;
	audioElem.play();
}

