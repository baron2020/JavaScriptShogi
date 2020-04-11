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
var checkPieceId=["OU","HI","KA","KI","GI","KE","KY","FU","RY","UM"];
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
var PieceIdRecord={'OU1':'skoma','HI1':'skoma','KA1':'skoma','KI1':'skoma','KI2':'skoma','GI1':'skoma','GI2':'skoma',
					'KE1':'skoma','KE2':'skoma','KY1':'skoma','KY2':'skoma',
					'FU1':'skoma','FU2':'skoma','FU3':'skoma','FU4':'skoma','FU5':'skoma','FU6':'skoma','FU7':'skoma','FU8':'skoma','FU9':'skoma',
					'OU2':'gkoma','HI2':'gkoma','KA2':'gkoma','KI3':'gkoma','KI4':'gkoma','GI3':'gkoma','GI4':'gkoma',
					'KE3':'gkoma','KE4':'gkoma','KY3':'gkoma','KY4':'gkoma',
					'FU10':'gkoma','FU11':'gkoma','FU12':'gkoma','FU13':'gkoma','FU14':'gkoma','FU15':'gkoma','FU16':'gkoma','FU17':'gkoma','FU18':'gkoma'
					};

//座標関連
var Page ={ cy:0,//現在のy
			cx:0,//現在のx
			cys:0,//現在の整数y
			cxs:0,//現在の整数x
			firstY:0,//最初の選択時の整数y
			firstX:0//最初の選択時の整数x
			};
//ゲームの情報
var Game ={ teban:"先手",
			rivalTeban:"後手",//逆の手番
			count:1,//何手目か？
			currentPieceId:"",//現在の駒のId
			currentPieceName:"",//現在の駒(二文字)
			currentPieceClass:"",//現在の駒クラス
			currentMasu:"",//現在のマスのid
			firstTouchPieceId:"",//一度目にタッチした駒のid
			firstTouchPieceName:"",//一度目にタッチした駒(二文字)
			firstTouchMasu:""//一度目にタッチしたマスのid
			};
//フラグ
var Flg = { //強制終了フラグ
			tumi:false,//詰んでいる？
			endMode:false,//false:対局モード中
			//選択後
			firstTouchMasuInOut:false,//最初にタッチしたマスは盤内か？
			currentMasuInout:false,//現在のマスは盤内か？
			firstChoice:true,//最初に駒を選択できる状態:true
			firstPromotion:false,//最初に選択した駒は成駒か？
			get:false,//駒をとっていない
			//詰み判定関連
			oute:false,//王手がかけられているか？
			toiOute:false,//1枚の駒に遠い王手をかけられいてる。
			//禁じ手フラグ
			nihudesuFlg:false,//二歩チェック用
			kinjite:false,
			kinjiteNoGet:false,//禁じ手、王手した駒を取り返せないフラグ
			utiFuOute:false,//打ち歩で王手していない
			//棋譜用
			kihuFirstTouch:true//棋譜用に使うフラグ、最初にタッチできる時:true
			};
//詰み判定情報
var TumiJudge={ kingPosition:'None',//王の位置
				outePiece:'None',//王手をした駒
				outePieceMasu:'None',//王手をした駒のマス
				outeType:'None',//王手の種類
				wOuteCount:0//Ｗ王手判定用変数
				};

var pLen=11;//駒台の長さ
var sClassArray=["skoma","skoma promotion","OU2","OU1"];
var gClassArray=["gkoma","gkoma promotion","OU1","OU2"];
var sGetPieceArray=[];//先手の全持ち駒
var gGetPieceArray=[];//後手の全持ち駒
var justBefore=[];//直前の指し手のマスを格納する配列

//棋譜関連
var gameRecodeDisplay="";//棋譜記録の表示用
var kihuDisplay;//棋譜
var convertPiece="";//漢字に変換
var gameRecodeEndMasuArray=[];//最終のマスを格納する棋譜記録用の配列
var gameRecodeStartMasuArray=[];//移動前のマスを格納する棋譜記録用の配列
var gameRecodePieceArray=[];//駒を格納する棋譜記録用の配列

//駒の制約,王手回避,詰み判定関連
var myPieceMotionArray=[];//選択した駒の移動可能マスを保持する配列
var rivalPieceMotionArray=[];//ライバルの駒の移動範囲
var tempDominanceArray=[];//相手の駒の利き(一時保存用)配列
var allPieceDominanceArray=[];//tempDominanceArrayの重複を削除した配列
var legalHandPieceArray=[];//合法手の駒
var dominanceArray=[];//対象のプレイヤーの全駒の利き配列
var getCurrentPieceArray=[];//現在のマスの駒を取り返せる駒
var getOutePieceArray=[];//王手に対して取り返すことの出来る駒
var getOutePiecePositionArray=[];//王手に対して取り返すことの出来る駒の位置
var aidanoMasuArray=[];//王と王手をかけた駒の間のマス
var aidanoMasuMovePieceArray=[];//王手に対して盤から合駒できる駒;

var GameRecodeArray=[];//盤面の記録
var PieceRecordArray=[];//駒クラスの記録
var recordCount=0;

//パソコン用マウスダウン
function mousedown(e){
	try{
		if((Flg.tumi==false)&&(Flg.endMode==false)){
			touchScreen(e.clientX,e.clientY);
			//touchScreen(e.pageX,e.pageY);
		}else{
			throw new Error("お疲れ様でした(*_ _)");
		}
	}
	catch(e){
			document.getElementById("ky").innerHTML="";//y座標
			document.getElementById("kx").innerHTML="";//x座標
			document.getElementById("gamemode").innerHTML="検討モード";
			document.getElementById("inpModeEnd").innerHTML="";
			document.getElementById("outedisp").innerHTML="";
			document.getElementById("gamecount").innerHTML="";
			document.getElementById("windisp").innerHTML="";//勝敗結果
			document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";
			document.getElementById("test1").innerHTML="";
	}
}
//スマホ用タッチスタート
function touchstart(e){
	try{
		if((Flg.tumi==false)&&(Flg.endMode==false)){
			//もしタッチされたのが一箇所であるなら
			if(e.targetTouches.length==1){
				touch=e.targetTouches[0];
				touchScreen(touch.clientX,touch.clientY);
				//touchScreen(touch.pageX,touch.pageY);
			}
		}else{
			throw new Error("お疲れ様でした(*_ _)");
		}
	}
	catch(e){
			document.getElementById("ky").innerHTML="";//y座標
			document.getElementById("kx").innerHTML="";//x座標
			document.getElementById("gamemode").innerHTML="検討モード";
			document.getElementById("inpModeEnd").innerHTML="";
			document.getElementById("outedisp").innerHTML="";
			document.getElementById("gamecount").innerHTML="";
			document.getElementById("windisp").innerHTML="";//勝敗結果
			document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";
			document.getElementById("test1").innerHTML="";
	}
}

//座標
function getCoordinate(tx,ty){
	let d1s1Element=document.getElementById("d1s1");
	let g1Element=document.getElementById("g1");
	let s1Element=document.getElementById("s1");

	let d1s1rect=d1s1Element.getBoundingClientRect();
	let g1rect=g1Element.getBoundingClientRect();
	let s1rect=s1Element.getBoundingClientRect();
	
	console.log("d1s1までの横"+Math.round(d1s1rect.left));//四捨五入
	console.log("d1s1までの高さ"+Math.round(d1s1rect.top));
	console.log("d1s1の幅"+d1s1rect.width);
	console.log("d1s1の高さ"+d1s1rect.height);

	let banX=Math.round(d1s1rect.left);//将棋盤(d1s1)までの横幅(距離)
	let banY=Math.round(d1s1rect.top);//将棋盤(d1s1)までの高さ(距離)
	let gW1=g1rect.left;//g1までの横の距離
	let gH1=g1rect.top;//g1までの縦の距離
	let sW1=s1rect.left;//s1までの横の距離
	let sH1=s1rect.top;//s1までの縦の距離
	Page.cx=Math.floor(tx);
	Page.cy=Math.floor(ty);
	Page.cxs=Math.floor(((tx-banX)/d1s1rect.width)+1);
	Page.cys=Math.floor(((ty-banY)/d1s1rect.height)+1);
	gxs=Math.floor(((tx-gW1)/g1rect.width)+1);
	gys=Math.floor(((ty-gH1)/g1rect.height)+1);
		console.log(gxs);
		console.log(gys);

	sxs=Math.floor(((tx-sW1)/s1rect.width)+1);
	sys=Math.floor(((ty-sH1)/s1rect.height)+1);
	Game.currentMasu="d"+Page.cys+"s"+Page.cxs;//カレントのタッチマス
	Flg.currentMasuInout=InOut(Page.cys,Page.cxs);//カレントのマスは盤内？盤外？
	//y,x座標の表示
	document.getElementById("ky").innerHTML=Page.cy;//y座標
	document.getElementById("kx").innerHTML=Page.cx;//x座標
	if(gys==1){
		Game.currentMasu="g"+gxs;
	}else if(sys==1){
		Game.currentMasu="s"+sxs;
	}else{
	;
	}
	//console.log(Game.currentMasu);
	Game.currentPieceId=GameRecord[Game.currentMasu];//現在のマスにある駒のId
	//console.log(Game.currentPieceId);
	if((typeof Game.currentPieceId==="undefined")||(Game.currentPieceId===null)||(Game.currentPieceId=="EMP")){
		Game.currentPieceId="";
		Game.currentPieceClass="";
	}else{
		Game.currentPieceClass=PieceIdRecord[Game.currentPieceId];//現在のマスにある駒のクラス
	}
	Game.currentPieceName=Game.currentPieceId.substr(0,2);//現在のマスにある駒のId二文字
	kihuConvertMasu(Page.cys,Page.cxs,Page.firstY,Page.firstX,0);//棋譜形式に変換
	if(Flg.kihuFirstTouch==true){
		kihuConvertPiece(Game.currentPieceIdName,0);
		//自分の駒を選択している。
		if(isMyPiece()==true){
			Flg.kihuFirstTouch=false;
		}
	}else{
		kihuConvertPiece(Game.firstTouchPieceName,0);
		Flg.kihuFirstTouch=true;
	}
	if((typeof convertPiece==="undefined")||(kihuDisplay=="盤外です")){
		convertPiece="";
	}
	document.getElementById("kihudisplay").innerHTML=kihuDisplay+convertPiece;//棋譜の表示
}

//ユーザーチェック
function userCheck(){
	let userB=window.navigator.appName;//ユーザーブラウザ
	let wnu=window.navigator.userAgent;//ユーザーエージェント
	let userOs;//ユーザーos
	let userW=document.documentElement.offsetWidth;//window.innerWidth;//ウィンドウの横幅
	let userH=document.documentElement.offsetHeight;//window.innerHeight;//ウィンドウの高さ
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
	//console.log(document.documentElement.offsetWidth);
	//console.log(document.documentElement.clientWidth);
	//console.log(window.innerWidth);
	//console.log(document.documentElement.offsetHeight);
	//console.log(document.documentElement.clientHeight);
	//console.log(window.innerHeight);
}

//スタート
function start(){
	let supportTouch='ontouchend'in document;//タッチイベントがサポートされているか
	let EVENTNAME=supportTouch ? 'touchstart':'mousedown';//タッチイベントかマウスダウンか
	let tempInp;
	gAria();
	mainAria();
	sAria();
	sNumAria();
	userCheck();
	//駒の配置とイベントリスナの登録
	setUp();
	document.getElementById("gamemode").innerHTML="対局モード";
	document.getElementById("teban").innerHTML=Game.teban;//手番
	document.getElementById("gamecount").innerHTML=Game.count+"手目";//何手目か？
	tempInp="<input type='button' value='対局モードの終了'onClick='endMode()'size='10'>";
	document.getElementById("inpModeEnd").innerHTML=tempInp;

	let clonGameRecord=Object.assign({},GameRecord);//ゲームレコードのコピー
	let clonPieceRecord=Object.assign({},PieceIdRecord);//ゲームレコードのコピー
	//console.log(clonGameRecord);
	//console.log(clonPieceRecord);
	GameRecodeArray.push(clonGameRecord);//盤面の記録を残す
	PieceRecordArray.push(clonPieceRecord);//駒クラスの記録を残す

	//イベント分岐
	if(EVENTNAME=='touchstart'){
		document.addEventListener("touchstart",touchstart);
	}else{
		document.addEventListener("mousedown",mousedown);
	}
}

//記録の検討
function considerMode(){
	let backStart="<input type='button' value='|◀'onClick='backStart()'style='width:12%'>";
	let back1="<input type='button' value='◀'onClick='back1()'style='width:12%'>";
	let go1="<input type='button' value='▶'onClick='go1()'style='width:12%'>";
	let goEnd="<input type='button' value='▶|'onClick='goEnd()'style='width:12%'>";
	document.getElementById("backStart").innerHTML=backStart;
	document.getElementById("back1").innerHTML=back1;
	document.getElementById("go1").innerHTML=go1;
	document.getElementById("goEnd").innerHTML=goEnd;
	document.getElementById("recordCountDisp").innerHTML=recordCount+"手目";//検討の局面
	//document.getElementById("hanten").innerHTML="反転";//検討の局面
}
//局面の生成
function createKyokumen(){
	let gameKeys=Object.keys(GameRecodeArray[recordCount]);//ゲームの全てのキー
	let pieceKeys=Object.keys(PieceRecordArray[recordCount]);//駒の全てのキー
	if(recordCount==0){
		document.getElementById("recordCountDisp").innerHTML=recordCount+"手目";//検討の局面
	}else{
		document.getElementById("recordCountDisp").innerHTML=returnTargetRecord(recordCount-1);//検討の局面
	}
	for(let i=0;i<pieceKeys.length;i++){
		let tempElement=document.getElementById(pieceKeys[i]);
		//nullチェック
		if(!(tempElement===null)){
			tempElement.remove();//駒の削除
		}
	}
	console.log(GameRecodeArray);
	console.log(PieceRecordArray);
	console.log(justBefore);
	let banElements=document.getElementsByClassName("ban");
	for(let i=0;i<banElements.length;i++){
		banElements[i].style.backgroundColor="khaki";
		banElements[i].style.border="0.5px solid black";
		banElements[i].style.boxSizing="border-box";
	}
	//駒の配置とクラスのセット
	for(let i=0;i<gameKeys.length;i++){
		if(!(GameRecodeArray[recordCount][gameKeys[i]]=="EMP")){
			let indexNumber=pieceId.indexOf(GameRecodeArray[recordCount][gameKeys[i]]);//配列の何番目にあるか？
			
			if((PieceRecordArray[recordCount][GameRecodeArray[recordCount][gameKeys[i]]]=="skoma")||
				(PieceRecordArray[recordCount][GameRecodeArray[recordCount][gameKeys[i]]]=="gkoma")){
					document.getElementById(gameKeys[i]).insertAdjacentHTML('afterbegin',piece[indexNumber]);//駒のセット
			}else{
					document.getElementById(gameKeys[i]).insertAdjacentHTML('afterbegin',promotionPiece[indexNumber]);//駒のセット
			}
			//console.log("駒オブジェエクト"+piece[indexNumber]);//駒
			//console.log("駒クラス"+PieceRecordArray[0][GameRecodeArray[0][gameKeys[i]]]);//駒クラス
			document.getElementById(GameRecodeArray[recordCount][gameKeys[i]]).setAttribute('class',PieceRecordArray[recordCount][GameRecodeArray[recordCount][gameKeys[i]]]);//クラスのセット
		}
	}
	if(!(recordCount==0)){
		changeCssJustBefore(justBefore[recordCount-1]);//直前のマスのcssを変更する
		//PlaySound();
	}
}

//棋譜記録を取得する
function returnTargetRecord(count){
	let targetRecord;
	targetRecord=" "+Number(count+1)+" "+gameRecodeEndMasuArray[count]+gameRecodePieceArray[count]+"("+gameRecodeStartMasuArray[count]+")";
	console.log(gameRecodeEndMasuArray);
	console.log(gameRecodePieceArray);
	console.log(gameRecodeStartMasuArray);
	return targetRecord;
}

//開始局面に戻る
function backStart(){
	recordCount=0;
	createKyokumen();
}

function back1(){
	if(recordCount>0){
		recordCount--;
		createKyokumen();
	}
}

function go1(){
	if(recordCount<justBefore.length){
		recordCount++;
		createKyokumen();
	}
}

function goEnd(){
	recordCount=justBefore.length;
	createKyokumen();
}



//打ち歩詰め確認
function utiFuCheck(){
	//引数:手番,削除するマス,追加するマス,追加する駒,type( 0:禁じ手確認 1:詰み判定 2:打ち歩詰め確認 )
	kinjiteCheck("rivalPiece",Game.firstTouchMasu,Game.currentMasu,Game.firstTouchPieceId,2);
}

//禁じ手確認、targetPlayerがmyPieceなら自分の駒の利きを求める
//引数:手番,削除するマス,追加するマス,追加する駒,type( 0:禁じ手確認 1:詰み判定 2:打ち歩詰め確認 )
function kinjiteCheck(targetPlayer,deleteMasu,addMasu,addPiece,checkType){
	let clonGameRecord=Object.assign({},GameRecord);//ゲームレコードのコピー
	let komadaiIdArray=['s1','s2','s3','s4','s5','s6','s7','s8','s9','g1','g2','g3','g4','g5','g6','g7','g8','g9'];//駒台のId
	let regex1=new RegExp(/^d[1-9]/);//盤内のマスを抽出する正規表現に使用
	let allBanMasuId=[];//盤内のマスを格納
	let targetHiKaKyIdArray=[];//盤内のライバルの飛,角,香,竜,馬
	let targetHiKaKyPositionArray=[];//盤内のライバルの飛,角,香,竜,馬の位置
	let targetHiKaKyClassArray=[];//盤内のライバルの飛,角,香,竜,馬のクラス
	let targetClass;//相手の駒クラス
	let targetKingPosition;//相手の王の位置
	
	//console.log(clonGameRecord[Game.firstTouchMasu]);//最初のマス
	//console.log(clonGameRecord[Game.currentMasu]);//仮の移動先マス
	//console.log("最初に選択したマス"+Game.firstTouchMasu);//一度目にタッチしたマスのid
	//console.log("最初に選択した駒"+Game.firstTouchPieceId);//一度目にタッチした駒のid
	//console.log("現在のマス"+Game.currentMasu);//カレントのタッチマス
	//console.log("現在の駒"+Game.currentPieceId);//現在のマスにある駒のId
	//駒の利きを求める対象のクラスを確認する
	
	//駒の利きを求める対象のクラスを確認する
	if(((targetPlayer=="myPiece")&&(Game.teban=="先手"))||((targetPlayer=="rivalPiece")&&(Game.teban=="後手"))){
		targetClass=sClassArray;//["skoma","skoma promotion"];
	}
	if(((targetPlayer=="myPiece")&&(Game.teban=="後手"))||((targetPlayer=="rivalPiece")&&(Game.teban=="先手"))){
		targetClass=gClassArray;//["gkoma","gkoma promotion"];
	}
	
	for(masuId in clonGameRecord){
		let banInOut=regex1.test(masuId);
		if(banInOut){
			allBanMasuId.push(masuId);//盤内のマスのみを抽出
		}
	}
	//console.log(allBanMasuId);//盤内のマスのみ
	//仮想の将棋盤で動かす
	//詰み判定に使用する場合は、1枚の王手に対して、王手した駒の位置に取り返せる駒を移動させる
	for(let i=0;i<komadaiIdArray.length;i++){
		clonGameRecord[komadaiIdArray[i]]='EMP';//駒台のマスを空にする
	}
	clonGameRecord[deleteMasu]='EMP';//最初のマスを空にする
	clonGameRecord[addMasu]=addPiece;//現在のマスに駒を移動する
	
	//打ち歩詰め確認では
	if(checkType==2){
		//console.clear();
		for(let i=0;i<allBanMasuId.length;i++){
		//もし対象の王なら
			if((clonGameRecord[allBanMasuId[i]].toString().substr(0,2)=="OU")&&
				(PieceIdRecord[clonGameRecord[allBanMasuId[i]]]==targetClass[0])){
					targetKingPosition=allBanMasuId[i];//対象の王の位置
				}
		}
		setPieceMotion("rivalPiece","OU",targetClass[0],targetKingPosition);//対象の駒の動きを求める
		//console.log("相手玉の位置"+targetKingPosition);//対象の駒の動き
		console.log("相手玉の移動範囲"+rivalPieceMotionArray);//対象の駒の動き
		//console.log(clonGameRecord);//仮想のゲーム盤
		dominanceArray.length=0;//駒の利き
		getCurrentPieceArray.length=0;//取り返せる駒

		setAllPieceDominance("myPiece",clonGameRecord,1);//自分の駒の利きを求める。打ち歩詰め確認用
		//console.log(dominanceArray);//自分の駒の利き
		//持ち駒の歩で王手している
		if(Flg.utiFuOute==true){
			//相手玉と自陣の全駒の利きから、相手玉の移動可能マスを求める
			for(let i=rivalPieceMotionArray.length-1;i>=0;i--){
				for(let j=0;j<dominanceArray.length;j++){
					if(rivalPieceMotionArray[i]==dominanceArray[j]){
						rivalPieceMotionArray.splice(i,1);//自玉の駒の利きがあるマスは、相手玉の移動範囲から削除する
					}
				}
			}
			console.log("相手玉の移動範囲"+rivalPieceMotionArray);//対象の駒の動き
			dominanceArray.length=0;//駒の利き
			getCurrentPieceArray.length=0;//取り返せる駒
			setAllPieceDominance("rivalPiece",clonGameRecord,1);//ライバルの駒の利きを求める。打ち歩詰め確認用
			console.log(getCurrentPieceArray);//取り返せる駒
			for(let i=getCurrentPieceArray.length-1;i>=0;i--){
				if(getCurrentPieceArray[i].toString().substr(0,2)=="OU"){
					getCurrentPieceArray.splice(i,1);//王があれば削除する
				}
			}
			console.log(getCurrentPieceArray);//取り返せる駒
			//console.log("ライバルの駒の利き"+dominanceArray);//ライバルの駒の利き
			//rivalPieceMotionArray
			//getCurrentPieceArray
			return;
		}else{
			return;
		}
	}
	
	for(let i=0;i<allBanMasuId.length;i++){
		//もし飛車角香なら
		if((clonGameRecord[allBanMasuId[i]].toString().substr(0,2)=="HI")||
			(clonGameRecord[allBanMasuId[i]].toString().substr(0,2)=="KA")||
			(clonGameRecord[allBanMasuId[i]].toString().substr(0,2)=="KY")){
			//検索対象の駒なら
			if((PieceIdRecord[clonGameRecord[allBanMasuId[i]]]==targetClass[0])||(PieceIdRecord[clonGameRecord[allBanMasuId[i]]]==targetClass[1])){
				//成香でない
				if(!((clonGameRecord[allBanMasuId[i]].toString().substr(0,2)=="KY")&&(PieceIdRecord[clonGameRecord[allBanMasuId[i]]]==targetClass[1]))){
					targetHiKaKyIdArray.push(clonGameRecord[allBanMasuId[i]]);//盤内にある検索対象の駒Idのみを格納
					targetHiKaKyClassArray.push(PieceIdRecord[clonGameRecord[allBanMasuId[i]]]);//盤内にある検索対象の駒クラス
					targetHiKaKyPositionArray.push(allBanMasuId[i]);//盤内にある検索対象の駒Idのみを格納
				}
			}
		}
	}
	//console.log(targetHiKaKyIdArray);//盤内の対象の飛,角,香,竜,馬
	//console.log("相手の駒クラス"+targetHiKaKyClassArray);//盤内の対象の飛,角,香,竜,馬のクラス
	//console.log(targetHiKaKyPositionArray);//盤内の対象の飛,角,香,竜,馬の位置
	//console.log(clonGameRecord);//仮想のゲーム盤
	
	//禁じ手確認では、盤内の対象の飛,角,香,竜,馬の数だけループする。
	if(checkType==0){
		for(let i=0;i<targetHiKaKyIdArray.length;i++){
			rivalHiKaKyDominance(clonGameRecord,targetHiKaKyIdArray[i],targetHiKaKyClassArray[i],targetHiKaKyPositionArray[i],0);
			//対象の飛,角,香,竜,馬の利きから禁じ手を確認する。
		}
	}
	//詰み確認では
	if(checkType==1){
		for(let i=0;i<targetHiKaKyIdArray.length;i++){
			rivalHiKaKyDominance(clonGameRecord,targetHiKaKyIdArray[i],targetHiKaKyClassArray[i],targetHiKaKyPositionArray[i],1);
			//(詰み判定用)対象の飛,角,香,竜,馬の利きから禁じ手を確認する。
		}
	}
	return;
}


//タッチされた時のイベントの処理
function touchScreen(tx,ty){
	getCoordinate(tx,ty);//座標、盤内外の取得
	//console.log("合法駒"+legalHandPieceArray);
	//駒の選択から移動まで
	if(Flg.firstChoice==true){
		//自分の駒を選択している。
		if(isMyPiece()==true){
			choice();
			//王手をかけられていたら合法手の駒しか選択できない
			if((Flg.oute==true)&&(legalHandPieceArray.indexOf(Game.firstTouchPieceId)==-1)){
				console.log("王手を回避できる駒を選択していません");
				allReset();
				return;
			}
			//console.log(TumiJudge.outeType);

			//合法の持ち駒を選択しているのであれば
			if((Flg.toiOute==true)&&(Flg.firstTouchMasuInOut==false)){
				let aiMasuLen=checkAigoma(Game.firstTouchPieceId).length;//選択した駒に対して合駒できるマスの数
				console.log(aiMasuLen);
				console.log("持ち駒を合駒に使用しようとしています。");
				myPieceMotionArray.length=0;//リセット
				//合駒合法マスのみをmyPieceMotionArrayにセットする
				for(let i=0;i<aiMasuLen;i++){
					myPieceMotionArray.push(checkAigoma(Game.firstTouchPieceId)[i]);//returnされた配列をセットしていく
				}
				for(let i=0;i<myPieceMotionArray.length;i++){
					changeCssMyPieceMotion(myPieceMotionArray[i]);//cssの変更
				}
			}
			//最初にタッチしたマスが盤内なら駒の動きを表示する
			if(Flg.firstTouchMasuInOut==true){
				setPieceMotion("myPiece",Game.firstTouchPieceName,PieceIdRecord[Game.firstTouchPieceId],Game.currentMasu);//myPieceMotionArrayに動きをセットする
				if(Game.firstTouchPieceName=="OU"){
					//console.log(myPieceMotionArray);
					//console.log(allPieceDominanceArray);
					allPieceDominanceArray.length=0;//相手の駒の利き(重複なし)
					tempDominanceArray.length=0;//相手の駒の利き(重複あり)
					setAllPieceDominance("rivalPiece",GameRecord,0);//盤内の相手の駒の利きを全て求める。
					myKingMotion();//王の動き
				}
				//console.log("間のマス"+aidanoMasuArray);
				//console.log("間のマスに移動できる駒"+aidanoMasuMovePieceArray);

				//もし1枚の駒に遠くの王手をかけられているなら、合法マスしか選択できないように変更する
				if((Flg.oute==true)&&(Flg.toiOute==true)&&(!(Game.firstTouchPieceName=="OU"))){
					let getJustBeforeFlg=false;//直前の駒の王手した駒を取り返せない
					let tempMyPieceMotionArray=[];//一時保存用
					//直前に王手をかけた相手の駒を取り返すことが出来るなら
					if(myPieceMotionArray.indexOf(TumiJudge['outePieceMasu'])!=-1){
						getJustBeforeFlg=true;//直前の駒の王手をした駒を取り返せる
					}
					//間のマスに移動できる盤上の駒であれば
					if(aidanoMasuMovePieceArray.indexOf(Game.firstTouchPieceId)!=-1){
						//間のマスと駒の動きの突合せ
						for(let i=0;i<aidanoMasuArray.length;i++){
							for(let j=0;j<myPieceMotionArray.length;j++){
								if(aidanoMasuArray[i]==myPieceMotionArray[j]){
									tempMyPieceMotionArray.push(aidanoMasuArray[i]);//間のマスが移動範囲にあれば一時保存用に格納
								}
							}
						}
					}
					myPieceMotionArray.length=0;//リセット
					for(let i=0;i<tempMyPieceMotionArray.length;i++){
						myPieceMotionArray.push(tempMyPieceMotionArray[i])
					}
					if(getJustBeforeFlg==true){
						myPieceMotionArray.push(TumiJudge['outePieceMasu']);//王手をかけた直前のマスを追加する
						getJustBeforeFlg=false;
					}
				}
				//1枚の駒に近くの王手をかけられているなら
				if((Flg.oute==true)&&(Flg.toiOute==false)&&(!(Game.firstTouchPieceName=="OU"))){
					myPieceMotionArray.length=0;//リセット
					console.log(TumiJudge['outePieceMasu']);//王手をかけた駒の位置をセット
					myPieceMotionArray.push(TumiJudge['outePieceMasu']);//王手をかけた直前のマスのみをセット
				}
				for(let i=0;i<myPieceMotionArray.length;i++){
					changeCssMyPieceMotion(myPieceMotionArray[i]);//cssの変更
				}
			}
			Flg.firstChoice=false;
			return;
		}else{
		//自分の駒を選択していない。
			allReset();
			return;
		}
	}
	
	//遠い王手をかけられている&持ち駒から合駒を使用しようとしている&合法マスにないマスを選択した。
	if((Flg.toiOute==true)&&(Flg.firstTouchMasuInOut==false)&&(myPieceMotionArray.indexOf(Game.currentMasu)==-1)){
		allReset();
		return;
	}

	//二回目にタッチしたマスに自分の駒がある。又は、盤外である。
	//盤内からの移動かつ配列内に存在しない場所をタップした
	//最初にタッチしたマスが盤外かつ相手の駒がある
	if((isMyPiece())||(!InOut(Page.cys,Page.cxs))||
	   ((Flg.firstTouchMasuInOut)&&(myPieceMotionArray.indexOf(Game.currentMasu)==-1))||
	   ((Flg.firstTouchMasuInOut==false)&&(isRivalPiece()==true))){
		allReset();
		return;
	}
	//もし盤外から歩を使うなら、二歩チェックをする。
	if((Flg.firstTouchMasuInOut==false)&&(Game.firstTouchPieceName=="FU")){
		nihuCheck(Page.cxs);//二歩チェック
		if(Flg.nihudesu==true){
			alert("二歩です。");
			Flg.nihudesu=false;//二歩フラグをfalseに戻しておく
			allReset();
			return;
		}
	}
	//もし盤外から歩を使うなら、１段目(９段目)をチェックする。
	if((Flg.firstTouchMasuInOut==false)&&
	   (Game.firstTouchPieceName=="FU")&&
	   (checkRivalAriaKyouFu(Game.currentMasu))){
		allReset();
		return;
	}
	//もし盤外から桂,香を使うなら、桂,香チェックをする。
	if((Flg.firstTouchMasuInOut==false)&&
	   (checkRivalAriaKeima(Game.currentMasu))&&
	   ((Game.firstTouchPieceName=="KE")||(Game.firstTouchPieceName=="KY"))){
		allReset();
		return;
	}
	
	//打ち歩詰め確認
	if((Flg.firstTouchMasuInOut==false)&&(Game.firstTouchPieceName=="FU")){
		console.log("打ち歩詰め確認です");
		utiFuCheck();
		console.log(getCurrentPieceArray);//取り返せる駒
		console.log(rivalPieceMotionArray);//王の動き
		console.log(Flg.utiFuOute);//持ち駒の歩で王手しているか？
		if((Flg.utiFuOute==true)&&(getCurrentPieceArray.length==0)&&(rivalPieceMotionArray.length==0)){
			alert("打ち歩詰めです");
			Flg.utiFuOute=false;//打ち歩で王手していない
			allReset();
			return;
		}
		getCurrentPieceArray.length=0;
		rivalPieceMotionArray.length=0;
		Flg.utiFuOute=false;//打ち歩で王手していない
	}
	
	//指す前の禁じ手確認
	if(Flg.firstTouchMasuInOut==true){
		kinjiteCheck("rivalPiece",Game.firstTouchMasu,Game.currentMasu,Game.firstTouchPieceId,0);//引数:手番,削除するマス,追加するマス,追加する駒,詰み判定用か？
		if(Flg.kinjite==true){
			Flg.kinjite=false
			alert("相手の駒の利きがあります");
			allReset();
			return;
		}
	}
	
	//移動先に相手の駒が存在する。＝相手の駒を取った場合の処理
	if(isExistPiece()){
		let getPiece;//取得した駒
		let tempArea;//持ち駒を仮格納するマス
		Flg.get=true;//駒をとった
		getPiece=Game.currentPieceId;//取った駒のid
		document.getElementById(getPiece).remove();//駒の削除
		GameRecord[Game.currentMasu]='EMP';//現在のマスにある駒（相手の駒）を無しにする。削除と同時に連想配列をEMPにする
		if(Game.teban=="先手"){
			tempArea="s9";
			sGetPieceArray.push(getPiece);//先手の駒台配列に格納
		}else{
			tempArea="g1";
			gGetPieceArray.push(getPiece);//後手の駒台配列に格納
		}
		movePiece(getPiece,tempArea);//駒の追加
		sortPiece();//駒台の並び替え(駒が増えた時)
		Flg.get=false;
	}
	//最初に選択した駒が成り駒であるなら
	if(Flg.firstPromotion==true){
		document.getElementById(Game.firstTouchPieceId).remove();//最初に選択した駒の削除
		GameRecord[Game.firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
		//駒を削除した後に、マスの色を元に戻す
		allReverseCss();
		movePromotion();//成り駒用の移動
		PlaySound();//音を出す
		//console.log("成り駒を移動しました。");
	}else{
		moveCommit();
	}
	
	changeCssJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	Game.count++;
	document.getElementById("gamecount").innerHTML=Game.count+"手目";//何手目か？
	
	if(Game.teban=="先手"){
		Game.teban="後手";
		Game.rivalTeban="先手";
	}else{
		Game.teban="先手";
		Game.rivalTeban="後手";
	}
	let clonGameRecord=Object.assign({},GameRecord);//ゲームレコードのコピー
	let clonPieceRecord=Object.assign({},PieceIdRecord);//ゲームレコードのコピー
	GameRecodeArray.push(clonGameRecord);//盤面の記録を残す
	PieceRecordArray.push(clonPieceRecord);//駒クラスの記録を残す
//console.log(GameRecodeArray);
//console.log(PieceRecordArray);

	document.getElementById("teban").innerHTML=Game.teban;//手番
	resetFlg();//フラグのリセット
	resetArray();//配列のリセット
	
	aidanoMasuArray.length=0;//王手をかけた駒と王の間のマス
	aidanoMasuMovePieceArray.length=0;//間のマスに移動できる駒
	getOutePieceArray.length=0;//王手をかけてきた駒を取り返すことの出来る駒
	getOutePiecePositionArray.length=0;//王手をかけてきた駒を取り返すことの出来る駒
	Flg.oute=false;//王手フラグ
	Flg.toiOute=false;//遠い王手フラグ

	legalHandPieceArray.length=0;//合法手の駒
	setAllPieceDominance("rivalPiece",GameRecord,0);//盤内の相手の駒の利きを全て求める。王手確認をする。
	
	//王手をかけられていたら
	if(Flg.oute==true){
		document.getElementById("outedisp").innerHTML="王手";
		tumiJudge();
	}else{
		document.getElementById("outedisp").innerHTML="";
		aidanoMasuArray.length=0;//王手をかけた駒と王の間のマス
		aidanoMasuMovePieceArray.length=0;//間のマスに移動できる駒
		resetArray();//配列のリセット
	}
	return;
}

//詰み判定
function tumiJudge(){
	let wOuteFlg=wOute();//w王手か？
	let tempMotigomaArray=getPieceArrayReturen(Game.teban);//手番の持ち駒	
	console.log("ダブル王手フラグ"+wOuteFlg);//trueならダブル王手

	if(Game.teban=="先手"){
		setPieceMotion("myPiece","OU","skoma",TumiJudge['kingPosition']);//自玉の動きを求める
		king="OU1";
	}else{
		setPieceMotion("myPiece","OU","gkoma",TumiJudge['kingPosition']);
		king="OU2";
	}
	myKingMotion();//myPieceMotionArrayに相手の駒の利きを考慮した王の動けるマスを再格納
	setAidanoMasu(TumiJudge['kingPosition'],TumiJudge['outePieceMasu']);//王手をかけた駒と王の間のマスを求める

	//console.log("王手の種類"+TumiJudge['outeType']+myPieceMotionArray);//近い距離,遠い距離の王手//王の動けるマス
	//王に動けるマスがある
	if(myPieceMotionArray.length!=0){
		legalHandPieceArray.push(king);//王を合法手に格納
	}
	//ダブル王手なら
	if(wOuteFlg==true){
		if(myPieceMotionArray.length==0){
			//王が動けるマスがない
			alert("Ｗ王手から詰みました。"+Game.rivalTeban+"の勝ちです。");
			document.getElementById("windisp").innerHTML=Game.rivalTeban+"の勝ちです。";//勝敗結果
			document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//お疲れ様でした
			document.getElementById("gamemode").innerHTML="検討モード";
			document.getElementById("inpModeEnd").innerHTML="";
			considerMode();
			Flg.tumi=true;//詰みです
			return;
		}
	}
	getOutePieceArray.length=0;//リセット、取り返すことの出来る駒
	getOutePiecePositionArray.length=0;//リセット、取り返すことの出来る駒の位置
	setAllPieceDominance("myPiece",GameRecord,0);//直前に指した手に対して取り返すことの出来る駒を探す
	
	for(let i=getOutePieceArray.length-1;i>=0;i--){
		if(getOutePieceArray[i].toString().substr(0,2)=="OU"){
			getOutePieceArray.splice(i,1);//王があれば削除する
			getOutePiecePositionArray.splice(i,1);//王の位置も削除する
		}
	}
	//console.log(getOutePieceArray);//取り返せる駒
	//console.log(getOutePiecePositionArray);//取り返せる駒の位置
	//console.log(TumiJudge['outePieceMasu']);//王手をかけている駒
	//ライバルの飛車角香竜馬を考慮した取り返せる駒
	for(let i=getOutePieceArray.length-1;i>=0;i--){
		kinjiteCheck("rivalPiece",getOutePiecePositionArray[i],TumiJudge['outePieceMasu'],getOutePieceArray[i],1);
		if(Flg.kinjiteNoGet==true){
			getOutePieceArray.splice(i,1);//取り返せる駒から削除する
			getOutePiecePositionArray.splice(i,1);//位置も削除する
			Flg.kinjiteNoGet=false;
		}
	}
	//console.log(getOutePieceArray);//取り返せる駒
	//1枚の近い距離の王手
	if((TumiJudge['outeType']=="近い距離の王手")){
		console.log("1枚の近い距離の王手です");
		//王が動けるマスがない&王以外の駒で取り返せる駒がない
		if((myPieceMotionArray.length==0)&&(getOutePieceArray.length==0)){
			alert("詰みました。"+Game.rivalTeban+"の勝ちです。");
			document.getElementById("windisp").innerHTML=Game.rivalTeban+"の勝ちです。";//勝敗結果
			document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//お疲れ様でした
			document.getElementById("gamemode").innerHTML="検討モード";
			document.getElementById("inpModeEnd").innerHTML="";
			considerMode();
			Flg.tumi=true;//詰みです
			return;
		}
		//王以外の駒で取り返せる駒がある
		if(getOutePieceArray.length>0){
			for(let i=0;i<getOutePieceArray.length;i++){
				legalHandPieceArray.push(getOutePieceArray[i]);//取り返せる駒を合法手に格納
			}
			//return;
		}
	}
	//console.log("間のマス"+aidanoMasuArray+"間のマスに移動できる駒"+aidanoMasuMovePieceArray);
	//王を削除する
	for(let i=aidanoMasuMovePieceArray.length-1;i>=0;i--){
		if(aidanoMasuMovePieceArray[i].toString().substr(0,2)=="OU"){
			aidanoMasuMovePieceArray.splice(i,1);//王があれば削除する
		}
	}
	console.log("間のマス"+aidanoMasuArray+"間のマスに移動できる駒"+aidanoMasuMovePieceArray);

	//1枚の遠い距離の王手
	if((TumiJudge['outeType']=="遠い距離の王手")){
		let aigomaFlg=false;//持ち駒から合駒できない
		Flg.toiOute=true;//1枚の駒に遠い王手をかけられた
		console.log("1枚の遠い距離の王手です");
		
		console.log(getOutePieceArray);
		console.log(aidanoMasuMovePieceArray);
		console.log(myPieceMotionArray);

		//王以外の駒で取り返せる駒がある
		if(getOutePieceArray.length>0){
			for(let i=0;i<getOutePieceArray.length;i++){
				legalHandPieceArray.push(getOutePieceArray[i]);//取り返せる駒を合法手に格納
			}
		}
		//盤面の駒(王以外)で合駒できる
		if(aidanoMasuMovePieceArray.length>0){
			for(let i=0;i<aidanoMasuMovePieceArray.length;i++){
				legalHandPieceArray.push(aidanoMasuMovePieceArray[i]);//間に移動できる駒を合法手に格納
			}
		}
		//持ち駒がある
		if(tempMotigomaArray.length>0){
			//合駒使用可能マスを確認
			for(let i=0;i<tempMotigomaArray.length;i++){
				//合駒できるマスがある
				if(checkAigoma(tempMotigomaArray[i]).length>0){
					console.log(tempMotigomaArray[i]+"は使用できます");
					legalHandPieceArray.push(tempMotigomaArray[i]);//持ち駒を合法手に格納
					aigomaFlg=true;//合駒できる駒が存在する
				}else{
					console.log(tempMotigomaArray[i]+"は使用できません");
				}
			}
		}
		//詰み判定
		//王に移動範囲がない&王以外の駒で取り返せる駒がない&盤面の駒で合駒できない&持ち駒から合駒できない
		if((myPieceMotionArray.length==0)&&(getOutePieceArray.length==0)&&(aidanoMasuMovePieceArray.length==0)&&(aigomaFlg==false)){
			alert("詰みました。"+Game.rivalTeban+"の勝ちです。");
			document.getElementById("windisp").innerHTML=Game.rivalTeban+"の勝ちです。";//勝敗結果
			document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//お疲れ様でした
			document.getElementById("gamemode").innerHTML="検討モード";
			document.getElementById("inpModeEnd").innerHTML="";
			considerMode();
			Flg.tumi=true;//詰みです
			return;
		}
		//console.log("取り返せる駒"+getOutePieceArray+"盤面の合駒"+aidanoMasuMovePieceArray+"合駒できるか"+aigomaFlg);
	}
	//console.log("持ち駒"+tempMotigomaArray);//手番の持ち駒
	//console.log("間のマス"+aidanoMasuArray);
	//console.log("取り返せる駒"+getOutePieceArray);
	//console.log("選択できる駒"+legalHandPieceArray);
	//console.log("選択できるマス"+legalHandMasuArray);
	//console.log(king);
	//console.log("直前の指し手"+justBefore[justBefore.length-1]);
	Flg.tumi=false;//詰んでいません
	return;//詰んでいない
}


//ライバルの飛車角香竜馬の利きを探す(checkType 0:禁じ手用 1:詰み判定用)
function rivalHiKaKyDominance(targetGameRecord,pieceId,pieceClass,startMasu,checkType){
	let typeMotion,motionY,motionX,addY,addX;
	let targetPieceName=pieceId.substr(0,2);//Name:頭文字二文字、Id:フル
	let indexNumber=checkPieceId.indexOf(targetPieceName);//配列の何番目にあるか？
	let targetPieceMotion;//仮の駒の利きのマス
	let startY=startMasu.toString().substr(1,1);
	let startX=startMasu.toString().substr(3,1);
	let switchClassArray;//["〇koma","〇koma promotion","OU〇","OU〇"];
	//console.log(targetGameRecord);//仮想のゲーム盤
	if((targetPieceName=="HI")&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=8;
	}
	if((targetPieceName=="KA")&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=9;
	}
	for(let i=0;i<sPieceMotionYX.length;i++){
		typeMotion=pieceMotionTable[indexNumber][i];
		motionY=Number(startY);
		motionX=Number(startX);
		if(typeMotion==0){
			continue;
		}
		if(typeMotion>=1){
			if((pieceClass=="skoma")||(pieceClass=="skoma promotion")){
				addY=sPieceMotionYX[i][0];
				addX=sPieceMotionYX[i][1];
				switchClassArray=sClassArray;
			}else{
				addY=gPieceMotionYX[i][0];
				addX=gPieceMotionYX[i][1];
				switchClassArray=gClassArray;
			}
			do{
				motionY+=addY;
				motionX+=addX;
				targetPieceMotion="d"+motionY+"s"+motionX;
				//王手チェック
				if((checkType==0)&&(targetGameRecord[targetPieceMotion]==switchClassArray[2])){
					Flg.kinjite=true;//王に利きがある場合は禁じ手、true
					console.log(pieceId+"の利きがあります");
					return;
				}
				if((checkType==1)&&(targetGameRecord[targetPieceMotion]==switchClassArray[2])){
					Flg.kinjiteNoGet=true;//王手した駒を取り返せない
					console.log("取り返せません。");
					return;
				}
				if((InOut(motionY,motionX)==false)||
					(moveIsRivalPiece(PieceIdRecord[targetGameRecord[targetPieceMotion]]))){
					break;//利きがあるマスが盤外、又は、ライバルの駒の利きがライバルの駒にぶつかった場合は抜ける
				}
				if(typeMotion==1){
					break;//１の時は繰り返さずにdo～whileを抜ける
				}
			}while(targetGameRecord[targetPieceMotion]=="EMP");//移動先に駒がない＆飛車,角,香,竜,馬の２の動きの間は繰り返す。
		}
	}
}

//持ち駒の合駒使用チェック
function checkAigoma(pieceId){
	let gouhouMasuArray=[];//合駒可能な合法マス
	//let tempMotigomaArray=getPieceArrayReturen(Game.teban);//手番の持ち駒
	//console.log("持ち駒"+tempMotigomaArray);//手番の持ち駒
	//console.log("間のマス"+aidanoMasuArray);//間のマス
	for(let i=0;i<aidanoMasuArray.length;i++){
		//let targetMasu1d=Number(aidanoMasuArray[i].toString().substr(1,1));//段
		let targetMasu1s=Number(aidanoMasuArray[i].toString().substr(3,1));//段
		let targetPieceName=pieceId.toString().substr(0,2);//対象の持ち駒の名前

		//もし盤外から歩を使うなら、二歩チェックをする。
		if(targetPieceName=="FU"){
			nihuCheck(targetMasu1s);//二歩チェック
			if(Flg.nihudesu==true){
				Flg.nihudesu=false;//二歩フラグをfalseに戻しておく
				continue;
			}
		}
		//もし盤外から歩を使うなら、１段目(９段目)をチェックする。
		if((targetPieceName=="FU")&&(checkRivalAriaKyouFu(aidanoMasuArray[i]))){
			continue;
		}
		//もし盤外から桂,香を使うなら、桂,香チェックをする。
		if((checkRivalAriaKeima(aidanoMasuArray[i]))&&
			((targetPieceName=="KE")||(targetPieceName=="KY"))){
			continue;
		}
		gouhouMasuArray.push(aidanoMasuArray[i]);//持ち駒から使用できるマスを格納する
	}
	console.log("合駒できるマス"+gouhouMasuArray);
	return gouhouMasuArray;
}

//持ち駒を返す関数
function getPieceArrayReturen(targetPlayer){
	let tempGetPieceArray=[];
	let sAriaId=['s1','s2','s3','s4','s5','s6','s7','s8','s9'];
	let gAriaId=['g1','g2','g3','g4','g5','g6','g7','g8','g9'];
	let switchId;//スイッチ用
	if(targetPlayer=="先手"){
		switchId=sAriaId;
	}else{
		switchId=gAriaId;
	}
	for(let i=0;i<switchId.length;i++){
		if(GameRecord[switchId[i]]!="EMP"){
			tempGetPieceArray.push(GameRecord[switchId[i]]);
		}
	}
	//console.log(tempGetPieceArray);//持ち駒の配列
	return tempGetPieceArray;
}

//駒の選択
function choice(){
	touka(Game.currentPieceId,0.3);//タッチした駒の透過率を変える
	Game.firstTouchMasu="d"+Page.cys+"s"+Page.cxs;//一度目にタッチしたマスのid
	Game.firstTouchPieceId=Game.currentPieceId;//一度目にタッチした駒のid
	Game.firstTouchPieceName=Game.firstTouchPieceId.substr(0,2);//一度目にタッチした駒のid二文字
	Flg.firstTouchMasuInOut=InOut(Page.cys,Page.cxs);//一度目にタッチした場所は盤内か？
	Flg.firstPromotion=firstPromotion();//一度目にタッチした駒は成り駒か？
	Page.firstY=Page.cys;
	Page.firstX=Page.cxs;
}

//リセット用
function allReset(){
	if((pieceId.indexOf(Game.firstTouchPieceId)!=-1)){
		touka(Game.firstTouchPieceId,1);//一度目にタッチした駒の透過率を戻す
	}
	resetPieceAndMasu();//駒,マスのリセット
	resetFlg();//フラグのリセット
	resetArray();//配列のリセット
	allReverseCss();//cssの変更を元に戻す
	if(justBefore.length>0){
		changeCssJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	}
	//document.getElementById("kihu").innerHTML=kihuDisplay+convertPiece;//棋譜の表示
}

//フラグのリセット
function resetFlg(){
	Flg.firstChoice=true;//最初に駒を選択できる状態:true
	Flg.kihuFirstTouch=true;//棋譜用に使うフラグ、最初にタッチできる時:true
	Flg.firstPromotion=false;//最初に選択した駒は成駒か？
	Flg.get=false;//駒をとっていない
}

//配列のリセット
function resetArray(){
	myPieceMotionArray.length=0;//自分の駒の動きのマス
	rivalPieceMotionArray.length=0;//ライバルの駒の動きのマス
	allPieceDominanceArray.length=0;//相手の駒の利き(重複なし)
	tempDominanceArray.length=0;//相手の駒の利き(重複あり)
	dominanceArray.length=0;//駒の利き
	getCurrentPieceArray.length=0;//取り返せる駒
}

//駒,マスのリセット
function resetPieceAndMasu(){
	Game.currentPieceClass="リセット";
	Game.currentPieceId="リセット";
	Game.currentPieceName="リセット";
	Game.firstTouchPieceId="リセット";
	Game.firstTouchPieceName="リセット";
	Game.firstTouchMasu="リセット";
}

//targetPlayerで指定した全ての駒の利きを求め、allPieceDominanceArray(重複なし配列)に格納する。
//targetPlayerが先手なら先手の駒の利きを求める。 checkType 0:王手確認 1:打ち歩詰め確認

function setAllPieceDominance(targetPlayer,targetGameRecord,checkType){
	let regex1=new RegExp(/^d[1-9]/);//盤内のマスを抽出する正規表現に使用
	let allBanMasuId=[];//盤内のマスを格納
	let allBanPieceId=[];//盤内にある駒Idを格納
	let targetPieceIdArray=[];//盤内にある対象プレイヤーの駒Idを格納
	let targetPieceClassArray=[];//対象の駒のクラス
	let targetPieceMasuArray=[];//対象の駒の存在するマスId
	let targetClass;//対象のクラス
	//駒の利きを求める対象のクラスを確認する
	if(((targetPlayer=="myPiece")&&(Game.teban=="先手"))||((targetPlayer=="rivalPiece")&&(Game.teban=="後手"))){
		targetClass=sClassArray;//["skoma","skoma promotion"];
	}
	if(((targetPlayer=="myPiece")&&(Game.teban=="後手"))||((targetPlayer=="rivalPiece")&&(Game.teban=="先手"))){
		targetClass=gClassArray;//["gkoma","gkoma promotion"];
	}
	
	for(masuId in targetGameRecord){
		let banInOut=regex1.test(masuId);
		if(banInOut){
			allBanMasuId.push(masuId);//盤内のマスのみを抽出
		}
	}
	//console.log(allBanMasuId);//盤内のみ
	for(let i=0;i<allBanMasuId.length;i++){
		//もし駒があれば
		if(!(targetGameRecord[allBanMasuId[i]]=="EMP")){
			allBanPieceId.push(targetGameRecord[allBanMasuId[i]]);//盤内にある駒Idのみを格納
		}
	}
	//console.log(allBanPieceId);//盤内の全ての駒
	for(let i=0;i<allBanPieceId.length;i++){
		//対象の駒クラスであれば
		if((PieceIdRecord[allBanPieceId[i]]==targetClass[0])||(PieceIdRecord[allBanPieceId[i]]==targetClass[1])){
			targetPieceIdArray.push(allBanPieceId[i]);//盤内にある対象の駒Idのみを格納
			targetPieceClassArray.push(PieceIdRecord[allBanPieceId[i]]);//盤内にある対象の駒クラス
		}
	}
	//console.log("対象の駒"+targetPieceIdArray);//盤内の対象プレイヤーの駒
	let keys=Object.keys(targetGameRecord);//全てのキー
	//console.log("全てのキー"+keys);
	//console.log(typeof keys);

	//盤内の対象プレイヤーの駒の枚数だけループする
	for(let i=0;i<targetPieceIdArray.length;i++){
		//その駒がどのマスかを探す
		for(let j=0;j<keys.length;j++){
			//駒=連想配列の値なら、キーを抽出する
			if(targetPieceIdArray[i]==targetGameRecord[keys[j]]){
				targetPieceMasuArray.push(keys[j]);//盤内の対象プレイヤーの駒が存在するマスIdを格納
			}
		}
	}
	//checkType 0:王手確認用
	if(checkType==0){
		//盤内の対象プレイヤーの駒の分だけループする。
		for(let i=0;i<targetPieceIdArray.length;i++){
			setPieceDominance(targetGameRecord,targetPieceIdArray[i],targetPieceClassArray[i],targetPieceMasuArray[i],0);
			//対象プレイヤーの駒の効きを求める
		}
		TumiJudge.wOuteCount=0;//Ｗ王手カウント用変数のリセット
		//配列から重複した値を削除する
		allPieceDominanceArray=tempDominanceArray.filter((x,i,self)=>self.indexOf(x)===i);
		return;
	}
	
	//checkType 1:打ち歩詰め確認用 対象の全駒の利きを求める、打ち歩詰めチェック用
	if(checkType==1){
		//相手の盤内の駒の分だけループする。
		for(let i=0;i<targetPieceIdArray.length;i++){
			setPieceDominance(targetGameRecord,targetPieceIdArray[i],targetPieceClassArray[i],targetPieceMasuArray[i],1);
			//対象プレイヤーの駒の効きを求める
		}
		return;
	}
	//console.log("マス"+targetPieceMasuArray);//対象のマスId
	//console.log("対象プレイヤーの駒"+targetPieceIdArray);//対象プレイヤーの駒
	//console.log("対象プレイヤーの駒クラス"+targetPieceClassArray);//対象プレイヤーの駒クラス
	//console.log(" "+targetPieceIdArray[0]+" "+targetPieceClassArray[0]+" "+targetPieceMasuArray[0]);//対象プレイヤーの駒クラス
	//console.log("重複なし配列"+allPieceDominanceArray);
	//console.log(tempDominanceArray);
}

//駒の利きを求める。(対象のゲーム記録,対象の駒Id,対象の駒のクラス,対象の駒があるマス) checkType 0:王手確認 1:打ち歩詰め確認
function setPieceDominance(targetGameRecord,pieceId,pieceClass,startMasu,checkType){
	let typeMotion,motionY,motionX,addY,addX;
	let targetPieceName=pieceId.substr(0,2);//Name:頭文字二文字、Id:フル
	let indexNumber=checkPieceId.indexOf(targetPieceName);//配列の何番目にあるか？
	let targetPieceMotion;//仮の駒の利きのマス
	let startY=startMasu.toString().substr(1,1);
	let startX=startMasu.toString().substr(3,1);
	//成銀,成桂,成香,とはindexNumberを3にし、金と同じ動きを参照する
	if(((targetPieceName=="GI")||(targetPieceName=="KE")||(targetPieceName=="KY")||(targetPieceName=="FU"))&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=3;
	}
	if((targetPieceName=="HI")&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=8;
	}
	if((targetPieceName=="KA")&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=9;
	}
	for(let i=0;i<sPieceMotionYX.length;i++){
		let distanceCount=0;//1以上で遠い距離の王手
		typeMotion=pieceMotionTable[indexNumber][i];
		motionY=Number(startY);
		motionX=Number(startX);
		if(typeMotion==0){
			continue;
		}
		if(typeMotion>=1){
			if((pieceClass=="skoma")||(pieceClass=="skoma promotion")){
				addY=sPieceMotionYX[i][0];
				addX=sPieceMotionYX[i][1];
				switchClassArray=sClassArray;//["skoma","skoma promotion","OU2","OU1"];
			}else{
				addY=gPieceMotionYX[i][0];
				addX=gPieceMotionYX[i][1];
				switchClassArray=gClassArray;
			}
			do{
				motionY+=addY;
				motionX+=addX;
				targetPieceMotion="d"+motionY+"s"+motionX;
				
				if(checkType==0){
					//王手チェック
					if(targetGameRecord[targetPieceMotion]==switchClassArray[2]){
						Flg.oute=true;//王に利きがある場合true
						//王の位置,王手した駒,王手をかけたマス
						TumiJudge['kingPosition']=targetPieceMotion;//王手をかけられた王の位置
						TumiJudge['outePiece']=pieceId;//王手をした駒
						TumiJudge['outePieceMasu']=startMasu;//王手をした駒のマス
						if(distanceCount==0){
							TumiJudge['outeType']="近い距離の王手";//王手の種類
						}else{
							TumiJudge['outeType']="遠い距離の王手";//王手の種類
						}
						if(TumiJudge.wOuteCount>=1){
							TumiJudge['outeType']="ダブル王手";//Ｗ王手
						}
						TumiJudge.wOuteCount++;//Ｗ王手判定に使用
						console.log(TumiJudge['kingPosition']+"の位置の王に"+TumiJudge['outePiece']+" "+TumiJudge['outePieceMasu']+"から王手をかけました");
						console.log("王手した位置"+TumiJudge['outePieceMasu']);
					}
					//遠い１枚の王手で間のマスに移動できる駒
					if(aidanoMasuArray.length>0){
						for(let i=0;i<aidanoMasuArray.length;i++){
							if(targetPieceMotion==aidanoMasuArray[i]){
								aidanoMasuMovePieceArray.push(targetGameRecord[startMasu]);//間のマスに動くことのできる盤上の駒;
							}
						}
					}
				}
				if(InOut(motionY,motionX)==false){
					break;//利きがあるマスが盤外なら抜ける
				}
				
				if(checkType==0){
					tempDominanceArray.push(targetPieceMotion);//対象の駒の効いているマスを配列に格納する
					//王手に対して取り返すことの出来る駒
					if(targetPieceMotion==TumiJudge['outePieceMasu']){
						getOutePieceArray.push(targetGameRecord[startMasu]);//王手に対して取り返すことの出来る駒
						getOutePiecePositionArray.push(startMasu);//王手に対して取り返すことの出来る駒の位置
					}
				}
				//オプションなし、打ち歩詰め確認用
				if(checkType==1){
					let rivalKing;
					if(Game.teban=="先手"){
						rivalKing="OU2";
					}else{
						rivalKing="OU1";
					}
					if(targetGameRecord[targetPieceMotion]==rivalKing){
						//console.log("歩で王手をかけられました。");
						console.log("王に利いている駒"+pieceId);
						Flg.utiFuOute=true;//打ち歩で王手している
					}
					dominanceArray.push(targetPieceMotion);//対象の駒の効いているマスを配列に格納する
					if(Game.currentMasu==targetPieceMotion){
						//console.log("取り返せる駒は"+pieceId);
						getCurrentPieceArray.push(pieceId);
					}
				}
				if(moveIsRivalPiece(PieceIdRecord[targetGameRecord[targetPieceMotion]])){
					break;//set後、利きに自陣の駒があれば抜ける
				}
				if(typeMotion==1){
					break;//１の時は繰り返さずにdo～whileを抜ける
				}
				
				if(checkType==0){
					//２の動きで相手の王を貫通した先の１マスを格納する
					if((typeMotion==2)&&((targetGameRecord[targetPieceMotion]=="OU1")||(targetGameRecord[targetPieceMotion]=="OU2"))){
						motionY+=addY;
						motionX+=addX;
						targetPieceMotion="d"+motionY+"s"+motionX;
						if(InOut(motionY,motionX)==true){
							tempDominanceArray.push(targetPieceMotion);//相手の王を貫通した先の１マスを配列に格納する
							//console.log(targetPieceMotion);
						}
						break;//繰り返さずにdo～whileを抜ける
					}
					distanceCount++;
				}
			}while(targetGameRecord[targetPieceMotion]=="EMP");//移動先に駒がない＆飛車,角,香,竜,馬の２の動きの間は繰り返す。
		}
	}
}

//王の動き
function myKingMotion(){
	for(let i=myPieceMotionArray.length-1;i>=0;i--){
		for(let j=0;j<allPieceDominanceArray.length;j++){
			if(myPieceMotionArray[i]==allPieceDominanceArray[j]){
				//console.log("相手の駒の利きがあります");
				myPieceMotionArray.splice(i,1);//相手の駒の利きがあるマスは移動可能マスから削除する
			}
		}
	}
	return;
}

//ダブル王手か？
function wOute(){
	//TumiJudge['outeType']='ダブル王手'//王手の種類
	//console.log("王手した駒"+TumiJudge['outePiece']);//王手をかけた駒
	if(TumiJudge['outeType']=="ダブル王手"){
		return true;
	}else{
		return false;
	}
}

//王手をかけた駒と王の間のマス
function setAidanoMasu(targetMasu1,targetMasu2){
	let targetMasu1d=Number(targetMasu1.toString().substr(1,1));
	let targetMasu1s=Number(targetMasu1.toString().substr(3,1));
	let targetMasu2d=Number(targetMasu2.toString().substr(1,1));
	let targetMasu2s=Number(targetMasu2.toString().substr(3,1));
	let kaesuMasu;//返す枚数
	let kihonY=targetMasu1d;//足す対象Y
	let kihonX=targetMasu1s;//足す対象X
	let addY;//段に足す数
	let addX;//筋に足す数
	kaesuMasu=Math.abs(targetMasu1d-targetMasu2d)-1;//返すマスの枚数
	if(kaesuMasu==-1){
		kaesuMasu=Math.abs(targetMasu1s-targetMasu2s)-1;//返すマスの枚数
	}
	if(targetMasu1d<targetMasu2d){
		addY=1;
	}else if(targetMasu1d>targetMasu2d){
		addY=-1;
	}else{
		addY=0;
	}
	if(targetMasu1s<targetMasu2s){
		addX=1;
	}else if(targetMasu1s>targetMasu2s){
		addX=-1;
	}else{
		addX=0;
	}
	for(let i=0;i<kaesuMasu;i++){
		kihonY+=addY;
		kihonX+=addX;
		aidanoMasu='d'+kihonY+'s'+kihonX;
		aidanoMasuArray.push(aidanoMasu);
	}
}

//後手駒台の作成
function gAria(){
	let gDisplay="<table border='0'align='center'>";//後手駒台表示用
	for(let i=0;i<pLen;i++){
			if(i==0){
			gDisplay+="<tr>";
		}
		gDisplay+="<td class='gStand'id='g"+i+"'>　</td>";
		if(i==10){
			gDisplay+="</tr></table>";
		}
	}
	document.getElementById("gdisp").innerHTML=gDisplay;
}

//中央メイン盤の作成
function mainAria(){
	let mainDisplay="<table border='1'align='center'>";//メイン表示用
	let mainDisplayTop="<table border='0'align='center'>";//上用
	let mainDisplayBottom="<table border='0'align='center'>";//下用
	//main
	for(let y=1;y<10;y++){
		for(let x=1;x<10;x++){
			if(x==1){
				mainDisplay+="<tr>";
			}
			mainDisplay+="<td class='ban'id='d"+y+"s"+x+"'>　</td>";
			if(x==9){
				mainDisplay+="</tr>";
			}
			if((y==9)&&(x==9)){
				mainDisplay+="</table>";
				break;
			}
		}
	}
	//top
	for(let i=0;i<11;i++){
		if(i==0){
			mainDisplayTop+="<tr>";
		}
		mainDisplayTop+="<td class='topEdge'id='d0s"+i+"'>　</td>";
		if(i==10){
			mainDisplayTop+="</tr></table>";
			break;
		}
	}
	//bottom
	for(let i=0;i<11;i++){
		if(i==0){
			mainDisplayBottom+="<tr>";
		}
		mainDisplayBottom+="<td class='bottomEdge'id='d10s"+i+"'>　</td>";
		if(i==10){
			mainDisplayBottom+="</tr></table>";
			break;
		}
	}
	document.getElementById("mainDispTop").innerHTML=mainDisplayTop;
	document.getElementById("maindisp").innerHTML=mainDisplay;
	document.getElementById("mainDispBottom").innerHTML=mainDisplayBottom;
}

//先手駒台の作成
function sAria(){
	let sDisplay="<table border='0'align='center'>";//先手駒台表示用
	for(let i=0;i<pLen;i++){
		if(i==0){
			sDisplay+="<tr>";
		}
		sDisplay+="<td class='sStand'id='s"+i+"'>　</td>";
		if(i==10){
			sDisplay+="</tr></table>";
		}
	}
	document.getElementById("sdisp").innerHTML=sDisplay;
}
//先手駒台の作成
function sNumAria(){
	let sNumDisp="<table border='0'align='center'>";//先手駒台表示用
	let gNumDisp="<table border='0'align='center'>";//後手駒台表示用
	for(let i=11;i<22;i++){
		if(i==11){
			sNumDisp+="<tr>";
			gNumDisp+="<tr>";
		}
		sNumDisp+="<td class='sNum'id='s"+i+"'>　</td>";
		gNumDisp+="<td class='gNum'id='g"+i+"'>　</td>";
		if(i==21){
			sNumDisp+="</tr></table>";
			gNumDisp+="</tr></table>";

		}
	}
	document.getElementById("sNum").innerHTML=sNumDisp;
	document.getElementById("gNum").innerHTML=gNumDisp;
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

//start()系終了---------------------------------------------------------------------------------------

//touchScreen()系開始----------------------------------------------------------------------------------

//選択した駒の移動完了まで
function moveCommit(){
	let getPieceArray;//持ち駒配列
	let movePromotionFlg=false;//成りを選択していない状態
	let res;
	document.getElementById(Game.firstTouchPieceId).remove();//最初に選択した駒の削除
	GameRecord[Game.firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
	//持ち駒を使用した時(Flg.firstTouchMasuInOut==false:持ち駒を使用した時)
	if(Flg.firstTouchMasuInOut==false){
		//console.log(Game.firstTouchPieceId+"を持ち駒として使用しました。");
		if(Game.teban=="先手"){
			getPieceArray=sGetPieceArray;//先手の駒台配列
		}else{
			getPieceArray=gGetPieceArray;//先手の駒台配列
		}
		//console.log(getPieceArray);//駒台の駒Id
		//配列から使用した持ち駒(Game.firstTouchPieceId)の削除
		for(let i=getPieceArray.length-1;i>=0;i--){
			if(getPieceArray[i]==Game.firstTouchPieceId){
				getPieceArray.splice(i,1);
			}
		}
		sortPiece();//駒台の並び替え(駒が増えた時)
	}
	allReverseCss();//駒を削除した後に、マスの色を元に戻す
	//成るか成らないかの判定
	while(movePromotionFlg==false){
		//成り駒でない＆最初は盤内＆成れる駒
		if((Flg.firstPromotion==false)&&(Flg.firstTouchMasuInOut)&&(possiblePromotion.indexOf(Game.firstTouchPieceId)!=-1)){
			//桂馬が１,２段目(８,９段目)に移動したら強制的に成る
			if((checkRivalAriaKeima(Game.currentMasu))&&(Game.firstTouchPieceName=="KE")){
				movePromotionFlg=true;
				break;
			}
			//香,歩が１段目(９段目)に移動したら強制的に成る
			if((checkRivalAriaKyouFu(Game.currentMasu))&&((Game.firstTouchPieceName=="KY")||(Game.firstTouchPieceName=="FU"))){
				movePromotionFlg=true;
				break;
			}
			//移動後のマスが敵陣である。又は、移動前のマスが敵陣＆飛車,角,銀の成り返りである。
			if((checkRivalAria(Game.currentMasu))||
			   ((checkRivalAria(Game.firstTouchMasu))&&
			   ((Game.firstTouchPieceName=="HI")||(Game.firstTouchPieceName=="KA")||(Game.firstTouchPieceName=="GI")))){
				res=confirm("成りますか？");
   				if(res==true){
					movePromotionFlg=true;
					break;
				}	
			}
		}
		break;//ループせずに必ず抜ける
	}
	if(movePromotionFlg==true){
		movePromotion();//駒の昇格:成り駒でない→成り駒
		gameRecodePieceArray[gameRecodePieceArray.length-1]=convertPiece+"成";//棋譜記録を成に修正
		document.getElementById("kihudisplay").innerHTML=kihuDisplay+convertPiece+"成";//棋譜の表示
	}else{
		movePiece(Game.firstTouchPieceId,Game.currentMasu);//駒の追加
		//移動完了の前のバグ確認(マスの中に２枚存在するバグ対策)
		if(document.getElementById(Game.currentMasu).children.length>1){
			alert("バグです。盤の中に２枚以上入りまみた。");
		}
	}
	PlaySound();//音を出す
	allReset();
	return;
}
//駒の移動
function movePiece(addPiece,addMasu){
	let indexNumber=pieceId.indexOf(addPiece);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(Game.teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(addMasu).insertAdjacentHTML('afterbegin',piece[indexNumber]);
	document.getElementById(pieceId[indexNumber]).setAttribute('class',switchClassArray[0]);//駒にクラスの設定
	GameRecord[addMasu]=addPiece;//現在のマスに駒を追加する	
	PieceIdRecord[addPiece]=switchClassArray[0];
	//駒を駒台に追加する時は通過しない(棋譜に記録しない)
	if(Flg.get==false){
	//駒の移動が完了したら
		kihuConvertMasu(Page.cys,Page.cxs,Page.firstY,Page.firstX,1);//棋譜を記録として残す。
		kihuConvertPiece(Game.firstTouchPieceName,1);//棋譜を記録として残す。
		justBefore.push(addMasu);//配列に直前の指し手のマスを格納
	}
}
//駒の昇格,成り駒の移動
function movePromotion(){
	let indexNumber=pieceId.indexOf(Game.firstTouchPieceId);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(Game.teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(Game.currentMasu).insertAdjacentHTML('afterbegin',promotionPiece[indexNumber]);
	document.getElementById(pieceId[indexNumber]).setAttribute('class',switchClassArray[1]);//駒にクラスの設定
	GameRecord[Game.currentMasu]=Game.firstTouchPieceId;//現在のマスに駒を追加する
	PieceIdRecord[Game.firstTouchPieceId]=switchClassArray[1];//昇格クラスにする
//駒の移動が完了したら
	kihuConvertMasu(Page.cys,Page.cxs,Page.firstY,Page.firstX,1);//棋譜を記録として残す。
	kihuConvertPiece(Game.firstTouchPieceName,1);//棋譜を記録として残す。
	justBefore.push(Game.currentMasu);//配列に直前の指し手のマスを格納
}


//駒の動き(ターゲットのプレイヤー(myPiece,rivalPiece),駒の名前,駒のクラス,駒のあるマス)
function setPieceMotion(targetPlayer,pieceName,pieceClass,startMasu){
	let typeMotion,motionY,motionX,addY,addX;
	let indexNumber=checkPieceId.indexOf(pieceName);//配列の何番目にあるか？
	let pieceMotion;//仮の移動先のマス
//console.log(pieceName);
//console.log(pieceClass);
//console.log(startMasu);
	//成銀,成桂,成香,とはindexNumberを3にし、金と同じ動きを参照する
	if(((pieceName=="GI")||(pieceName=="KE")||(pieceName=="KY")||(pieceName=="FU"))&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=3;
	}
	if((pieceName=="HI")&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=8;
	}
	if((pieceName=="KA")&&
	   ((pieceClass=="skoma promotion")||(pieceClass=="gkoma promotion"))){
		indexNumber=9;
	}
	for(let i=0;i<sPieceMotionYX.length;i++){
		typeMotion=pieceMotionTable[indexNumber][i];
		motionY=Number(startMasu.toString().substr(1,1));
		motionX=Number(startMasu.toString().substr(3,1));
		if(typeMotion==0){
			continue;
		}
		if(typeMotion>=1){
			if(((targetPlayer=="myPiece")&&(Game.teban=="先手"))||((targetPlayer=="rivalPiece")&&(Game.teban=="後手"))){
				addY=sPieceMotionYX[i][0];
				addX=sPieceMotionYX[i][1];
			}
			if(((targetPlayer=="myPiece")&&(Game.teban=="後手"))||((targetPlayer=="rivalPiece")&&(Game.teban=="先手"))){
				addY=gPieceMotionYX[i][0];
				addX=gPieceMotionYX[i][1];
			}
			do{
				motionY+=addY;
				motionX+=addX;
				pieceMotion="d"+motionY+"s"+motionX;
				if(InOut(motionY,motionX)==false){
					break;//移動先が盤外であればスルーする
				}
				if(targetPlayer=="myPiece"){
					if(moveIsMyPiece(PieceIdRecord[GameRecord[pieceMotion]])){
						break;//移動先に自陣の駒がある
					}
				}else{
					if(moveIsRivalPiece(PieceIdRecord[GameRecord[pieceMotion]])){
						break;//移動先に自陣の駒がある
					}
				}
				if(targetPlayer=="myPiece"){
					myPieceMotionArray.push(pieceMotion);//自分の駒の動きを配列に格納
				}else{
					rivalPieceMotionArray.push(pieceMotion);//ライバルの駒の動きを配列に格納
				}
				if(typeMotion==1){
					break;//１の時は繰り返さずにdo～whileを抜ける
				}
			}while(GameRecord[pieceMotion]=="EMP");//移動先に駒がない＆飛車,角,香,竜,馬の２の動きの間は繰り返す。
		}
	}
}

//駒の並び替え
function sortPiece(){
	let sStorageArea=["s1","s2","s3","s4","s5","s6","s7","s8","s9"];//駒置き場の順番
	let gStorageArea=["g9","g8","g7","g6","g5","g4","g3","g2","g1"];//駒置き場の順番
	let sNumStorageArea=["s12","s13","s14","s15","s16","s17","s18","s19","s20"];
	let gNumStorageArea=["g20","g19","g18","g17","g16","g15","g14","g13","g12"];
	let sortRankId=["FU","KY","KE","GI","KI","KA","HI","OU"];//並び替え順番
	//持ち駒を全て並び替えた配列。"FU","KY","KE","GI","KI","KA","KA","OU"の順盤に先頭に格納
	let sortPieceArray=[['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP']];
	let tempSortPieceArray=[];//隙間のない並び替え
	let numPieceArray=[];//駒の種類別の枚数を格納する配列
	let switchClassArray,getPieceArray,storageArea,numStorageArea;
	let tempPieceId;//駒Id
	let indexNumber;//駒配列の何番目にあるか？
	if(Game.teban=="先手"){
		switchClassArray=sClassArray;//クラス
		getPieceArray=sGetPieceArray;//持ち駒
		storageArea=sStorageArea;//駒の置き場所
		numStorageArea=sNumStorageArea;
	}else{
		switchClassArray=gClassArray;
		getPieceArray=gGetPieceArray;
		storageArea=gStorageArea;
		numStorageArea=gNumStorageArea;
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
	//複数枚表記の全削除
	for(let i=0;i<numStorageArea.length;i++){
		let tempElement=document.getElementById(numStorageArea[i]).firstElementChild;
		//nullチェック
		if(!(tempElement===null)){
			console.log(tempElement);//並び替えた駒台の駒Id
			tempElement.remove();//html盤面から持ち駒を削除
		}
	}


	let xx=0;//配置場所
	for(let i=0;i<sortPieceArray.length;i++){
		if(sortPieceArray[i][sortPieceArray[i].length-1]=="EMP"){
			continue;
		}else{
			indexNumber=pieceId.indexOf(sortPieceArray[i][sortPieceArray[i].length-1]);//駒配列の何番目にあるか？
			tempPieceId=sortPieceArray[i][sortPieceArray[i].length-1];
			document.getElementById(storageArea[xx]).insertAdjacentHTML('afterbegin',piece[indexNumber]);//駒台に並び替えた駒を順番に追加する
			document.getElementById(tempPieceId).setAttribute('class',switchClassArray[0]);//駒にクラスの設定
			GameRecord[storageArea[xx]]=tempPieceId;//jsのゲーム記録を配列の最後尾のIdに設定し、整合性を合わせる
			PieceIdRecord[GameRecord[storageArea[xx]]]=switchClassArray[0];//js内の駒クラスの整合性を合わせる
//console.log("js駒台Id:"+storageArea[xx]);
//console.log("js駒Id:"+GameRecord[storageArea[xx]]);
//console.log("js駒クラス:"+PieceIdRecord[GameRecord[storageArea[xx]]]);
//console.log(sortPieceArray[i].length);
			//駒の複数枚の表示
			//駒が2枚以上あるなら
			if(sortPieceArray[i].length>=3){
				let numTemp=sortPieceArray[i].length-1;//駒の枚数
				let tempText;
				if(Game.teban=="先手"){
					tempText="<p class='skoma'>"+numTemp+"</p>";
				}else{
					tempText="<p class='gkoma'>"+numTemp+"</p>";
				}
				document.getElementById(numStorageArea[xx]).insertAdjacentHTML('afterbegin',tempText);//駒の複数枚の表示
			}
			xx++;
			continue;
		}
	}
	console.log(sortPieceArray);

	//駒の複数枚の表示
	//for(let i=0;i<sortPieceArray.length;i++){
		//駒が2枚以上あるなら
	//	if(sortPieceArray[i].length>=3){
	//		let numTemp=sortPieceArray[i].length-1;//駒の枚数
	//		let tempText="<sup class='numDisp'>"+numTemp+"</sup>";
	//		let numGetPiece=document.getElementById(sortPieceArray[i][sortPieceArray[i].length-1]);
			
	//		numGetPiece.insertAdjacentHTML('beforeend',tempText);//駒の複数枚の表示
//numGetPiece.style.position="absolute";
//addClassName(numGetPiece,'numGetPiece');
	//	if(Game.teban=="先手"){
	//		numGetPiece.style.top=3+"px";//cssの調整(topから11pxの位置に配置する)、フレキブルデザイン今後の課題
	//	}else{
	//		numGetPiece.style.top=5+"px";//cssの調整、フレキブルデザイン今後の課題
	//	}
//console.log(numGetPiece);
//console.log(numGetPiece.style.top);
	//	}
	//}
//console.log(sortPieceArray);//並び替えた駒台の駒Id
//console.log("種類数"+numPieceArray.length);//駒の類数
//console.log("種類ごとの枚数"+numPieceArray);//駒の枚数
//console.log("配列の全ての駒"+getPieceArray);
//console.log(piece[indexNumber]);
//console.log("komaId"+tempPieceId);
//console.log("配列の末尾"+sortPieceArray[0][sortPieceArray[0].length-1]);//駒の枚数
//console.log(tempSortPieceArray);
//console.log("種類数"+numPieceArray.length);//駒の類数
//console.log("持ち駒の数:"+sortPieceArray.length);//駒台にある駒Id
//console.log("並び替えた駒:"+sortPieceArray);
// console.log("駒Id:"+GameRecord["s1"]);//s1にある駒
// console.log("駒クラス:"+PieceIdRecord[GameRecord["s1"]]);//s1にある駒
// console.log("s1にある駒Id:"+GameRecord["s1"]);//s1にある駒
console.log(Game.teban+"の持ち駒"+getPieceArray);//駒台の駒Id
//console.log(getPieceArray);//駒台の駒Id
}

//移動可能なマスの色を変更する
function changeCssMyPieceMotion(ruleMasu){
	if(Flg.oute==true){
		document.getElementById(ruleMasu).style.backgroundColor="skyblue";
		document.getElementById(ruleMasu).style.border="1px solid blue";
	}else{
		document.getElementById(ruleMasu).style.backgroundColor="lightpink";
		document.getElementById(ruleMasu).style.border="1px solid red";
	}
	document.getElementById(ruleMasu).style.boxSizing="border-box";
}
//直前の指し手のマスの色を変更する
function changeCssJustBefore(justBeforeMasu){
	document.getElementById(justBeforeMasu).style.backgroundColor="#FFFF66";//yellow系
	document.getElementById(justBeforeMasu).style.border="1px solid orange";
	document.getElementById(justBeforeMasu).style.boxSizing="border-box";
}
//全ての盤クラスの変更を元に戻す
function allReverseCss(){
	var banElements=document.getElementsByClassName("ban");
	for(let i=0;i<banElements.length;i++){
		banElements[i].style.backgroundColor="khaki";
		banElements[i].style.border="0.5px solid black";
		banElements[i].style.boxSizing="border-box";
	}
}

//最初に選択した駒は成り駒か？
function firstPromotion(){
	if((Game.currentPieceClass=="skoma promotion")||(Game.currentPieceClass=="gkoma promotion")){
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
	if(((Game.teban=="先手")&&(Game.currentPieceClass=="skoma"))||((Game.teban=="先手")&&(Game.currentPieceClass=="skoma promotion"))||
	   ((Game.teban=="後手")&&(Game.currentPieceClass=="gkoma"))||((Game.teban=="後手")&&(Game.currentPieceClass=="gkoma promotion"))){
		return true;
	}
	return false;
}
//相手の駒を選択しているか？対局相手の駒ですか？
function isRivalPiece(){
	if(((Game.teban=="先手")&&(Game.currentPieceClass=="gkoma"))||((Game.teban=="先手")&&(Game.currentPieceClass=="gkoma promotion"))||
	   ((Game.teban=="後手")&&(Game.currentPieceClass=="skoma"))||((Game.teban=="後手")&&(Game.currentPieceClass=="skoma promotion"))){
		return true;
	}
	return false;
}
//タッチしたマスに駒が存在するか？
function isExistPiece(){
	if((Game.currentPieceClass=="skoma")||(Game.currentPieceClass=="gkoma")||
	   (Game.currentPieceClass=="skoma promotion")||(Game.currentPieceClass=="gkoma promotion")){
		return true;
	}
	return false;
}
//駒の制約に使用。駒の移動先できる先に自分の駒があるか？
function moveIsMyPiece(tempClass){
	if(((Game.teban=="先手")&&(tempClass=="skoma"))||((Game.teban=="先手")&&(tempClass=="skoma promotion"))||
	   ((Game.teban=="後手")&&(tempClass=="gkoma"))||((Game.teban=="後手")&&(tempClass=="gkoma promotion"))){
		return true;
	}
	return false;
}
//王の制約に使用。相手の駒の効いている(動ける)マスに相手の駒があるか？
function moveIsRivalPiece(tempClass){
	if(((Game.teban=="先手")&&(tempClass=="gkoma"))||((Game.teban=="先手")&&(tempClass=="gkoma promotion"))||
	   ((Game.teban=="後手")&&(tempClass=="skoma"))||((Game.teban=="後手")&&(tempClass=="skoma promotion"))){
		return true;
	}
	return false;
}
//二歩チェックメソッド
function nihuCheck(suji){
	let switchNihuCheck;//スイッチ用
	let nihuCheckMasu;
	if(Game.teban=="先手"){
		switchNihuCheck="skoma";
	}else{
		switchNihuCheck="gkoma";
	}
	//1から9まで回す。
	for(let i=1;i<10;i++){
		nihuCheckMasu="d"+i+"s"+suji;//筋を取得
		if((GameRecord[nihuCheckMasu].substr(0,2)=="FU")&&
   		   (PieceIdRecord[GameRecord[nihuCheckMasu]]==switchNihuCheck)){
			//リセット
			Flg.nihudesu=true;
			return;	
		}
		Flg.nihudesu=false;
	}
	return;
}
//対局相手の陣地ですか？
function checkRivalAria(checkMasu){
	//正規表現
	let regex1,regex2,regex3;
	let promotion1,promotion2,promotion3;
	if(Game.teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
		regex2=new RegExp(/d2s[1-9]/);
		regex3=new RegExp(/d3s[1-9]/);
	}else{
		regex1=new RegExp(/d7s[1-9]/);
		regex2=new RegExp(/d8s[1-9]/);
		regex3=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(checkMasu);
	promotion2=regex2.test(checkMasu);
	promotion3=regex3.test(checkMasu);
	if((promotion1)||(promotion2)||(promotion3)){
		return true;
	}
	return false;
}

//(桂馬が強制的に成るマス||駒台から置けないマス)ですか？(１,２段目(８,９段目))
function checkRivalAriaKeima(checkMasu){
	//正規表現
	let regex1,regex2;
	let promotion1,promotion2;
	if(Game.teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
		regex2=new RegExp(/d2s[1-9]/);
	}else{
		regex1=new RegExp(/d8s[1-9]/);
		regex2=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(checkMasu);
	promotion2=regex2.test(checkMasu);
	if((promotion1)||(promotion2)){
		return true;
	}
	return false;
}
//(香,歩が強制的に成るマス||駒台から置けないマス)ですか？(１段目(９段目))
function checkRivalAriaKyouFu(checkMasu){
	//正規表現
	let regex1;
	let promotion1;
	if(Game.teban=="先手"){
		regex1=new RegExp(/d1s[1-9]/);
	}else{
		regex1=new RegExp(/d9s[1-9]/);
	}
	promotion1=regex1.test(checkMasu);
	if(promotion1){
		return true;
	}
	return false;
}

//選択した駒(id)の透過率を変化させる
function touka(targetPieceId,toukaritu){
	document.getElementById(targetPieceId).style.opacity=toukaritu;//0.3:30%
}
//駒台の並び替えメソッド

//読みやすい棋譜に変換
function kihuConvertMasu(endY,endX,startY,startX,commit){
	let kihuHeadArray=[1,2,3,4,5,6,7,8,9];
	let kihuTailArray=[1,2,3,4,5,6,7,8,9];
	let kihuHeadDispArray=["１","２","３","４","５","６","７","８","９"];
	let kihuTailDispArray=["一","二","三","四","五","六","七","八","九"];
	let kihuHead,kihuTail;
	let indexNumberHead,indexNumberTail;
	let kihuEndMasu,kihuFirstTouchMasu;//棋譜用のマス
	let kihuTeban;
	//if(isMyPiece()==true){
		if(Game.teban=="先手"){
			kihuTeban="▲";
		}else{
			kihuTeban="△";
		}
	//}else{
		//kihuTeban="";
	//}
	if(InOut(Page.cys,Page.cxs)){
		kihuHead=(10-endX);
		kihuTail=endY;
		indexNumberHead=kihuHeadArray.indexOf(kihuHead);
		kihuHeadDisp=kihuHeadDispArray[indexNumberHead];
		indexNumberTail=kihuTailArray.indexOf(kihuTail);
		kihuTailDisp=kihuTailDispArray[indexNumberTail];
		kihuFirstTouchMasu=kihuHead+''+kihuTail;//半角数字に変換
		kihuEndMasu=kihuHeadDisp+kihuTailDisp;//全角に変換
		//commitが1:完全に指し終えている時
		if(commit==1){
			gameRecodeEndMasuArray.push(kihuTeban+kihuEndMasu);//最終のマスを棋譜配列に格納
			kihuHead=(10-startX);
			kihuTail=startY;
			kihuFirstTouchMasu=kihuHead+''+kihuTail;//移動前のマスを半角数字に変換
			if(Flg.firstTouchMasuInOut==true){
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
	let indexNumber;//配列の何番目にあるか？
	indexNumber=convertPieceIdArray.indexOf(tempPieceName);
	if(Flg.firstPromotion==true){
		convertPiece=convertPiecePromotionKanjiArray[indexNumber];
	}else{
		convertPiece=convertPieceKanjiArray[indexNumber];
		if((convertPiece=="王")&&(Game.teban=="後手")){
			convertPiece="玉";
			//console.log(convertPiece);
		}
	}
	//commitが1:完全に指し終えている時
	if(commit==1){
		if(Flg.firstTouchMasuInOut==true){
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
		game+=i+" "+gameRecodeEndMasuArray[i]+gameRecodePieceArray[i]+"("+gameRecodeStartMasuArray[i]+")"+"　";
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
//コンソール削除
function logDelete(){
	console.clear();
}

function endMode(){
	document.getElementById("ky").innerHTML="";//y座標
	document.getElementById("kx").innerHTML="";//x座標
	document.getElementById("gamemode").innerHTML="検討モード";
	document.getElementById("inpModeEnd").innerHTML="";
	document.getElementById("outedisp").innerHTML="";
	document.getElementById("gamecount").innerHTML="";
	document.getElementById("windisp").innerHTML="";
	document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";
	document.getElementById("test1").innerHTML="";
	considerMode();
	Flg.endMode=true;
}

//音楽関連
var audioElem;
function PlaySound(){
	audioElem=new Audio();
	audioElem.src="mp/komaoto.mp3";//ここにmp3パスを設定する。
	audioElem.volume=0.5;
	audioElem.play();
}

