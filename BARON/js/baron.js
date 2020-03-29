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
var pieceIdRecord={'OU1':'skoma','HI1':'skoma','KA1':'skoma','KI1':'skoma','KI2':'skoma','GI1':'skoma','GI2':'skoma',
			 'KE1':'skoma','KE2':'skoma','KY1':'skoma','KY2':'skoma',
			 'FU1':'skoma','FU2':'skoma','FU3':'skoma','FU4':'skoma','FU5':'skoma','FU6':'skoma','FU7':'skoma','FU8':'skoma','FU9':'skoma',
			 'OU2':'gkoma','HI2':'gkoma','KA2':'gkoma','KI3':'gkoma','KI4':'gkoma','GI3':'gkoma','GI4':'gkoma',
			 'KE3':'gkoma','KE4':'gkoma','KY3':'gkoma','KY4':'gkoma',
			 'FU10':'gkoma','FU11':'gkoma','FU12':'gkoma','FU13':'gkoma','FU14':'gkoma','FU15':'gkoma','FU16':'gkoma','FU17':'gkoma','FU18':'gkoma'
		    };
var myPieceMotionArray=[];//選択した駒の移動可能マスを保持する配列
//強制終了フラグ
var tumiFlg=false;//詰みです
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
var gyakuTeban="後手";//逆の手番
var firstChoiceFlg=true;//最初に駒を選択できる状態:true
var firstPromotionFlg=false;//最初に選択した駒は成駒か？

var currentKomaClass="";//現在の駒クラス
var currentKomaId="";//現在の駒のId
var currentKomaIdName="";//現在の駒のid二文字
var currentMasu="";//カレントのマスのid
var firstTouchMasu="";//一度目にタッチしたマスのid
var firstTouchPieceId="";//一度目にタッチした駒のid
var firstTouchPieceName="";//一度目にタッチした駒のid二文字
var firstTouchMasuInOut;//最初にタッチしたマスは盤内か？
var currentMasuInout;//現在のマスは盤内か？

var sClassArray=["skoma","skoma promotion","OU2","OU1"];
var gClassArray=["gkoma","gkoma promotion","OU1","OU2"];
var justBefore=[];//直前の指し手のマスを格納する配列
var nihudesuFlg=false;//二歩チェック用

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

var tempDominanceArray=[];//一時保存用配列
var allPieceDominanceArray=[];//tempDominanceArrayの重複を削除した配列

var legalHandPieceArray=[];//合法手の駒
var legalHandMasuArray=[];//合法手のマス
var toiOuteLegalHandMasuArray=[];//遠い王手の合法手のマス
//詰み判定関連
var outeFlg=false;//王手がかけられているか？
var toiOuteFlg=false;//1枚の駒に遠い王手をかけられいてる。

var checkmateArray=[[],[],[],[],[],[],[]];
//(0)王手をかけられた王の位置,(1)王手をかけてきた駒,(2)王手をかけてきた駒のクラス,(3)王手をかけてきた駒のマス,
//(4)近い距離の王手:1,遠い距離の王手:2,(5)間のマスに移動できる盤上の駒;
var aidanoMasuArray=[];//間のマス


//詰み判定
function tumiJudge(){
	let wOuteFlg=wOute();//w王手か？
	let tempMotigomaArray=getPieceArrayReturen(teban);//手番の持ち駒
	//console.log("王手をかけられた王の位置"+checkmateArray[0]);
	//console.log("ダブル王手"+wOuteFlg);//trueならダブル王手
	//legalHandMasuArray=[justBefore[justBefore.length-1]];//合法手のマス

	if(teban=="先手"){
		setMyPieceMotion("OU","skoma",checkmateArray[0]);//自玉の動きを求める
		king="OU1";
	}else{
		setMyPieceMotion("OU","gkoma",checkmateArray[0]);
		king="OU2";
	}
	myKingMotion();//myPieceMotionArrayに相手の駒の利きを考慮した王の動けるマスを再格納
	setAidanoMasu(checkmateArray[0],justBefore[justBefore.length-1]);//王手をかけた駒と王の間のマスを求める

	console.log("王手の種類　"+checkmateArray[4]+myPieceMotionArray);//近い距離,遠い距離の王手//王の動けるマス
	
	//王に動けるマスがある
	if(myPieceMotionArray.length!=0){
		legalHandPieceArray.push(king);//王を合法手に格納
	}
	//ダブル王手なら
	if(wOuteFlg==true){
		if(myPieceMotionArray.length==0){
			//王が動けるマスがない
			alert("Ｗ王手から詰みました。");
			tumiFlg=true;//詰みです
			return;
		}
	}
	checkmateArray[5].length=0;//リセット、取り返すことの出来る駒
	setAllPieceDominance(gyakuTeban);//直前に指した手に対して取り返すことの出来る駒を探す
	//console.log(checkmateArray[5]);//王手をかけてきた駒を取り返すことの出来る駒
	for(let i=checkmateArray[5].length-1;i>=0;i--){
		if(checkmateArray[5][i].toString().substr(0,2)=="OU"){
			checkmateArray[5].splice(i,1);//王があれば削除する
		}
	}
	//console.log(checkmateArray[5]);//王手をかけてきた駒を取り返すことの出来る駒
	
	//1枚の近い距離の王手
	if((checkmateArray[4].indexOf("近い距離の王手")!=-1)&&(checkmateArray[4].indexOf("遠い距離の王手")==-1)){
		console.log("1枚の近い距離の王手です");
		//王が動けるマスがない&王以外の駒で取り返せる駒がない
		if((myPieceMotionArray.length==0)&&(checkmateArray[5].length<2)){
			alert("詰みました。");
			tumiFlg=true;//詰みです
			return;
		}
		//王以外の駒で取り返せる駒がある
		if(checkmateArray[5].length>0){
			for(let i=0;i<checkmateArray[5].length;i++){
				legalHandPieceArray.push(checkmateArray[5][i]);//王のみを合法手に格納
			}
			//return;
		}
	}
	//console.log("間のマス"+aidanoMasuArray+"間のマスに移動できる駒"+checkmateArray[6]);
	//王を削除する
	for(let i=checkmateArray[6].length-1;i>=0;i--){
		if(checkmateArray[6][i].toString().substr(0,2)=="OU"){
			checkmateArray[6].splice(i,1);//王があれば削除する
		}
	}
	console.log("間のマス"+aidanoMasuArray+"間のマスに移動できる駒"+checkmateArray[6]);

	//1枚の遠い距離の王手
	if((checkmateArray[4].length==1)&&(checkmateArray[4].indexOf("遠い距離の王手")!=-1)){
		toiOuteFlg=true;//1枚の駒に遠い王手をかけられた
		console.log("1枚の遠い距離の王手です");
		//取り返せる駒がある
		if(checkmateArray[5].length>0){
			for(let i=0;i<checkmateArray[5].length;i++){
				legalHandPieceArray.push(checkmateArray[5][i]);//取り返せる駒を合法手に格納
			}
		}
		//王以外の駒が間に移動できる
		if(checkmateArray[6].length>0){
			for(let i=0;i<checkmateArray[6].length;i++){
				legalHandPieceArray.push(checkmateArray[6][i]);//間に移動できる駒を合法手に格納
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
				}else{
					console.log(tempMotigomaArray[i]+"は使用できません");
				}
			}
		}
	}
	
console.log("持ち駒"+tempMotigomaArray);//手番の持ち駒
//console.log("間のマス"+aidanoMasuArray);

console.log("王の位置"+checkmateArray[0]);//オブジェクト
console.log("取り返せる駒"+checkmateArray[5]);
console.log("選択できる駒"+legalHandPieceArray);
console.log("選択できるマス"+legalHandMasuArray);
//console.log(king);
//console.log("直前の指し手"+justBefore[justBefore.length-1]);
	
	
	
	return;//詰んでいない
}

//持ち駒の合駒使用チェック
function checkAigoma(targetPieceId){
	let gouhouMasuArray=[];//合駒可能な合法マス
	//let tempMotigomaArray=getPieceArrayReturen(teban);//手番の持ち駒
	//console.log("持ち駒"+tempMotigomaArray);//手番の持ち駒
	//console.log("間のマス"+aidanoMasuArray);//間のマス
	
	for(let i=0;i<aidanoMasuArray.length;i++){
		//let targetMasu1d=Number(aidanoMasuArray[i].toString().substr(1,1));//段
		let targetMasu1s=Number(aidanoMasuArray[i].toString().substr(3,1));//段
		let targetPieceName=targetPieceId.toString().substr(0,2);//対象の持ち駒の名前

		//もし盤外から歩を使うなら、二歩チェックをする。
		if(targetPieceName=="FU"){
			nihuCheck(targetMasu1s);//二歩チェック
			if(nihudesuFlg){
				nihudesuFlg=false;//二歩フラグをfalseに戻しておく
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

//タッチされた時のイベントの処理
function touchScreen(tx,ty){
	getCoordinate(tx,ty);//座標、盤内外の取得
	//駒の選択から移動まで
	if(firstChoiceFlg==true){
		//自分の駒を選択している。
		if(isMyPiece()==true){
			choice();
	console.log(outeFlg);
	//console.log(legalHandPieceArray);
	//console.log(legalHandMasuArray);
	//console.log(firstTouchPieceId);
	console.log(checkmateArray[6]);//間のマスに移動出来る駒

			//王手をかけられていたら合法手の駒しか選択できない
			if((outeFlg==true)&&(legalHandPieceArray.indexOf(firstTouchPieceId)==-1)){
				console.log("ぬけます");
				allReset();
				return;
			}
			//合法の持ち駒を選択しているのであれば
			if((toiOuteFlg==true)&&(firstTouchMasuInOut==false)){
				let aiMasuLen=checkAigoma(firstTouchPieceId).length;//選択した駒に対して合駒できるマスの数
				console.log(aiMasuLen);
				console.log("持ち駒を合駒に使用しようとしています。");
				myPieceMotionArray.length=0;//リセット
				//合駒合法マスのみをmyPieceMotionArrayにセットする
				for(let i=0;i<aiMasuLen;i++){
					myPieceMotionArray.push(checkAigoma(firstTouchPieceId)[i]);//returnされた配列をセットしていく
				}
				for(let i=0;i<myPieceMotionArray.length;i++){
					changeCssMyPieceMotion(myPieceMotionArray[i]);//cssの変更
				}
			}
			//最初にタッチしたマスが盤内なら駒の動きを表示する
			if(firstTouchMasuInOut==true){
				setMyPieceMotion(firstTouchPieceName,pieceIdRecord[firstTouchPieceId],currentMasu);//myPieceMotionArrayに動きをセットする
				if(firstTouchPieceName=="OU"){
					setAllPieceDominance(teban);//盤内の相手の駒の利きを全て求める。
					myKingMotion();//王の動き
				}
			console.log("間のマス"+aidanoMasuArray);
			console.log("間のマスに移動できる駒"+checkmateArray[6]);
				//もし王手をかけられていたら合法マスしか選択できないように変更する
				if((outeFlg==true)&&(!(firstTouchPieceName=="OU"))){
					let getJustBeforeFlg=false;//直前の駒の王手した駒を取り返せない
					let tempMyPieceMotionArray=[];//一時保存用
					//1枚の駒に遠くの王手をかけられているなら
					if(toiOuteFlg==true){
						//直前に王手をかけた相手の駒を取り返すことが出来るなら
						if(myPieceMotionArray.indexOf(justBefore[justBefore.length-1])!=-1){
							getJustBeforeFlg=true;//直前の駒の王手をした駒を取り返せる
						}
						//間のマスに移動できる盤上の駒であれば
						if(checkmateArray[6].indexOf(firstTouchPieceId)!=-1){
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
							myPieceMotionArray.push(justBefore[justBefore.length-1]);//王手をかけた直前のマスを追加する
							getJustBeforeFlg=false;
						}
					}else{
					//1枚の駒に近くの王手をかけられているなら
						myPieceMotionArray.length=0;//リセット
						myPieceMotionArray.push(justBefore[justBefore.length-1]);//王手をかけた直前のマスのみをセット
					}
				}
				for(let i=0;i<myPieceMotionArray.length;i++){
					changeCssMyPieceMotion(myPieceMotionArray[i]);//cssの変更
				}
			}
			firstChoiceFlg=false;
			return;
		}else{
		//自分の駒を選択していない。
			allReset();
			return;
		}
	}
	
	//遠い王手をかけられている&持ち駒から合駒を使用しようとしている&合法マスにないマスを選択した。
	if((toiOuteFlg==true)&&(firstTouchMasuInOut==false)&&(myPieceMotionArray.indexOf(currentMasu)==-1)){
		allReset();
		return;
	}

	//二回目にタッチしたマスに自分の駒がある。又は、盤外である。
	//盤内からの移動かつ配列内に存在しない場所をタップした
	//最初にタッチしたマスが盤外かつ相手の駒がある
	if((isMyPiece())||(!InOut(kys,kxs))||
	   ((firstTouchMasuInOut)&&(myPieceMotionArray.indexOf(currentMasu)==-1))||
	   ((firstTouchMasuInOut==false)&&(isRivalPiece()==true))){
		allReset();
		return;
	}
	//もし盤外から歩を使うなら、二歩チェックをする。
	if((firstTouchMasuInOut==false)&&(firstTouchPieceName=="FU")){
		nihuCheck(kxs);//二歩チェック
		if(nihudesuFlg){
			alert("二歩です。");
			nihudesuFlg=false;//二歩フラグをfalseに戻しておく
			allReset();
			return;
		}
	}
	//もし盤外から歩を使うなら、１段目(９段目)をチェックする。
	if((firstTouchMasuInOut==false)&&
	   (firstTouchPieceName=="FU")&&
	   (checkRivalAriaKyouFu(currentMasu))){
		allReset();
		return;
	}
	//もし盤外から桂,香を使うなら、桂,香チェックをする。
	if((firstTouchMasuInOut==false)&&
	   (checkRivalAriaKeima(currentMasu))&&
	   ((firstTouchPieceName=="KE")||(firstTouchPieceName=="KY"))){
		allReset();
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
		movePiece(getPiece,tempArea);//駒の追加
		sortPiece();//駒台の並び替え(駒が増えた時)
		getFlg=false;
	}
	//最初に選択した駒が成り駒であるなら
	if(firstPromotionFlg==true){
		document.getElementById(firstTouchPieceId).remove();//最初に選択した駒の削除
		GameRecord[firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
		//駒を削除した後に、マスの色を元に戻す
		allReverseCss();
		movePromotion();//成り駒用の移動
		PlaySound();//音を出す
		//console.log("成り駒を移動しました。");
	}else{
		moveCommit();
	}
	changeCssJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	gameCount++;
	document.getElementById("gamecount").innerHTML=gameCount+"手目";//何手目か？
	//王様を取っていたら勝敗判定
	if(endFlg==true){
		alert("王様をとりました。"+teban+"の勝ちです。")
		document.getElementById("windisp").innerHTML=teban+"の勝ちです。";//勝敗結果
		document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//お疲れ様でした
		document.getElementById("gamemode").innerHTML="検討モード";
		document.getElementById("inpModeEnd").innerHTML="";
		return;
	}
	if(teban=="先手"){
		teban="後手";
		gyakuTeban="先手";
	}else{
		teban="先手";
		gyakuTeban="後手";
	}
	document.getElementById("teban").innerHTML=teban;//手番
	resetFlg();//フラグのリセット
	resetArray();//配列のリセット

	checkmateArray[0].length=0;//王手をかけられた王の位置
	checkmateArray[6].length=0;//間のマスに移動できる駒
	aidanoMasuArray.length=0;//王手をかけた駒と王の間のマス
	resetCheckmateArray();//詰み関連のリセット
	outeFlg=false;//王手フラグ
	toiOuteFlg=false;//遠い王手フラグ
	wOuteFlg=false;//w王手フラグ
	legalHandPieceArray.length=0;//合法手の駒
	legalHandMasuArray.length=0;//合法手のマス
	toiOuteLegalHandMasuArray.length=0;//遠い王手の合法手のマス
	setAllPieceDominance(teban);//盤内の相手の駒の利きを全て求める。王手確認をする。
	
	//王手をかけられていたら
	if(outeFlg==true){
		document.getElementById("outedisp").innerHTML="王手";
		tumiJudge();
	
	}else{
		document.getElementById("outedisp").innerHTML="";
		aidanoMasuArray.length=0;//王手をかけた駒と王の間のマス
	}
	
	resetArray();//配列のリセット
	checkmateArray[0].length=0;//王手をかけられた王の位置
	resetCheckmateArray();//詰み関連のリセット
	return;
}



//詰み判定用の変数のリセット
function resetCheckmateArray(){
	//checkmateArray.length=0;
	//checkmateArray[0].length=0;//王手をかけられた王の位置
	checkmateArray[1].length=0;//王手をかけてきた駒
	checkmateArray[2].length=0;//王手をかけてきた駒のクラス
	checkmateArray[3].length=0;//王手をかけてきた駒のマス
	checkmateArray[4].length=0;//近い距離の王手:1,遠い距離の王手:2
	checkmateArray[5].length=0;//王手をかけてきた駒を取り返すことの出来る駒
	//checkmateArray[6].length=0;//間のマスに利いている盤上の駒;
}

//駒の選択
function choice(){
	touka(currentKomaId,0.3);//タッチした駒の透過率を変える
	firstTouchMasu="d"+kys+"s"+kxs;//一度目にタッチしたマスのid
	firstTouchPieceId=currentKomaId;//一度目にタッチした駒のid
	firstTouchPieceName=firstTouchPieceId.substr(0,2);//一度目にタッチした駒のid二文字
	firstTouchMasuInOut=InOut(kys,kxs);//一度目にタッチした場所は盤内か？
	firstPromotionFlg=firstPromotion();//一度目にタッチした駒は成り駒か？
	startKys=kys;
	startKxs=kxs;
	
}

//リセット用
function allReset(){
	if((pieceId.indexOf(firstTouchPieceId)!=-1)){
		touka(firstTouchPieceId,1);//一度目にタッチした駒の透過率を戻す
	}
	resetPieceAndMasu();//駒,マスのリセット
	resetFlg();//フラグのリセット
	resetArray();//配列のリセット
	resetCheckmateArray();//詰み関連のリセット
	allReverseCss();//cssの変更を元に戻す
	if(justBefore.length>0){
		changeCssJustBefore(justBefore[justBefore.length-1]);//直前のマスのcssを変更する
	}
	//document.getElementById("kihu").innerHTML=kihuDisplay+convertPiece;//棋譜の表示
}

//フラグのリセット
function resetFlg(){
	firstChoiceFlg=true;//最初に駒を選択できる状態:true
	kihuFirstTouchFlg=true;//棋譜用に使うフラグ、最初にタッチできる時:true
	firstPromotionFlg=false;//最初に選択した駒は成駒か？
	getFlg=false;//駒をとっていない
}

//配列のリセット
function resetArray(){
	myPieceMotionArray.length=0;//駒の動きのマス
	allPieceDominanceArray.length=0;//相手の駒の利き(重複なし)
	tempDominanceArray.length=0;//相手の駒の利き(重複あり)
}

//駒,マスのリセット
function resetPieceAndMasu(){
	currentKomaClass="リセット";
	currentKomaId="リセット";
	currentKomaIdName="リセット";
	firstTouchPieceId="リセット";
	firstTouchPieceName="リセット";
	firstTouchMasu="リセット";
}

//全ての駒の利きを求め、allPieceDominanceArray(重複なし配列)に格納する。
//tebanPlayer:求めたいプレイヤーの逆(先手を渡せば後手の全駒の利きを求める)
function setAllPieceDominance(tebanPlayer){
	let regex1=new RegExp(/^d[1-9]/);//盤内のマスを抽出する正規表現に使用
	let allBanMasuId=[];//盤内のマスを格納
	let allBanPieceId=[];//盤内にある駒Idを格納
	let rivalPieceIdArray=[];//盤内にある相手の駒Idを格納
	let rivalPieceClassArray=[];//相手の駒のクラス
	let rivalPieceMasuArray=[];//相手の駒の存在するマスId
	let rivalClass;
	//駒の利きを求める対象のクラスを確認する
	if(tebanPlayer=="先手"){
		rivalClass=gClassArray;//["gkoma","gkoma promotion"];
	}else{
		rivalClass=sClassArray;//["skoma","skoma promotion"];
	}
	for(masuId in GameRecord){
		banInOut=regex1.test(masuId);
		if(banInOut){
			allBanMasuId.push(masuId);//盤内のマスのみを抽出
		}
	}
	//console.log(allBanMasuId);//盤内のみ
	for(let i=0;i<allBanMasuId.length;i++){
		//もし駒があれば
		if(!(GameRecord[allBanMasuId[i]]=="EMP")){
			allBanPieceId.push(GameRecord[allBanMasuId[i]]);//盤内にある駒Idのみを格納
		}
	}
	//console.log(allBanPieceId);//盤内の全ての駒
	for(let i=0;i<allBanPieceId.length;i++){
		//相手の駒クラスであれば
		if((pieceIdRecord[allBanPieceId[i]]==rivalClass[0])||(pieceIdRecord[allBanPieceId[i]]==rivalClass[1])){
			rivalPieceIdArray.push(allBanPieceId[i]);//盤内にある相手の駒Idのみを格納
			rivalPieceClassArray.push(pieceIdRecord[allBanPieceId[i]]);//盤内にある相手の駒クラス
		}
	}
	//console.log("相手の駒"+rivalPieceIdArray);//盤内の相手の駒
	let keys=Object.keys(GameRecord);//全てのキー
	//console.log("全てのキー"+keys);
	//盤内の相手の駒の枚数だけループする
	for(let i=0;i<rivalPieceIdArray.length;i++){
		//その駒がどのマスかを探す
		for(let j=0;j<keys.length;j++){
			//駒=連想配列の値なら、キーを抽出する
			if(rivalPieceIdArray[i]==GameRecord[keys[j]]){
				rivalPieceMasuArray.push(keys[j]);//盤内の相手の駒が存在するマスIdを格納
			}
		}
	}
	//相手の盤内の駒の分だけループする。
	for(let i=0;i<rivalPieceIdArray.length;i++){
		setPieceDominance(rivalPieceIdArray[i],rivalPieceClassArray[i],rivalPieceMasuArray[i]);
		//相手の駒の効きを求める
	}
	//配列から重複した値を削除する
	allPieceDominanceArray=tempDominanceArray.filter((x,i,self)=>self.indexOf(x)===i);
//console.log("マス"+rivalPieceMasuArray);//相手のマスId
//console.log("相手の駒"+rivalPieceIdArray);//相手の駒
//console.log("相手の駒クラス"+rivalPieceClassArray);//相手の駒クラス
//console.log(" "+rivalPieceIdArray[0]+" "+rivalPieceClassArray[0]+" "+rivalPieceMasuArray[0]);//相手の駒クラス
//setPieceDominance(rivalPieceIdArray[0],rivalPieceClassArray[0],rivalPieceMasuArray[0]);
//console.log("重複なし配列"+allPieceDominanceArray);
//console.log(tempDominanceArray);
}

//駒の利きを求める。(対象の駒Id,対象の駒のクラス,対象の駒があるマス)
function setPieceDominance(targetPieceId,targetPieceClass,targetPieceMasu){
	let typeMotion,motionY,motionX,addY,addX;
	let targetPieceName=targetPieceId.substr(0,2);//Name:頭文字二文字、Id:フル
	let indexNumber=checkPieceId.indexOf(targetPieceName);//配列の何番目にあるか？
	let targetPieceMotion;//仮の駒の利きのマス
	let startY=targetPieceMasu.toString().substr(1,1);
	let startX=targetPieceMasu.toString().substr(3,1);
	//成銀,成桂,成香,とはindexNumberを3にし、金と同じ動きを参照する
	if(((targetPieceName=="GI")||(targetPieceName=="KE")||(targetPieceName=="KY")||(targetPieceName=="FU"))&&
	   ((targetPieceClass=="skoma promotion")||(targetPieceClass=="gkoma promotion"))){
		indexNumber=3;
	}
	if((targetPieceName=="HI")&&
	   ((targetPieceClass=="skoma promotion")||(targetPieceClass=="gkoma promotion"))){
		indexNumber=8;
	}
	if((targetPieceName=="KA")&&
	   ((targetPieceClass=="skoma promotion")||(targetPieceClass=="gkoma promotion"))){
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
			if((targetPieceClass=="skoma")||(targetPieceClass=="skoma promotion")){
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
				if(GameRecord[targetPieceMotion]==switchClassArray[2]){
					outeFlg=true;
					//(0)王手をかけられた王の位置,(1)王手をかけてきた駒,(2)王手をかけてきた駒のクラス,(3)王手をかけてきた駒のマス
					checkmateArray[0].push(targetPieceMotion);//王手をかけられた王の位置
					checkmateArray[1].push(targetPieceName);//王手をかけてきた駒
					checkmateArray[2].push(targetPieceClass);//王手をかけてきた駒のクラス
					checkmateArray[3].push(targetPieceMasu);//王手をかけてきた駒のマス
					if(distanceCount==0){
						checkmateArray[4].push("近い距離の王手");//近い距離の王手
					}else{
						checkmateArray[4].push("遠い距離の王手");//遠い距離の王手
					}
					console.log(checkmateArray[0]+"の位置の王に"+checkmateArray[1]+" "+checkmateArray[2]+""+checkmateArray[3]+"から王手をかけました");
				}
				//遠い１枚の王手で間のマスに移動できる駒
				if(aidanoMasuArray.length>0){
					for(let i=0;i<aidanoMasuArray.length;i++){
						if(targetPieceMotion==aidanoMasuArray[i]){
							checkmateArray[6].push(GameRecord[targetPieceMasu]);//間のマスに動くことのできる盤上の駒;
						}
					}
				}
				if(InOut(motionY,motionX)==false){
					break;//利きがあるマスが盤外なら抜ける
				}
				tempDominanceArray.push(targetPieceMotion);//相手の駒の効いているマスを配列に格納する

				//直前に指した手に対して利いている駒
				if(targetPieceMotion==justBefore[justBefore.length-1]){
					//console.log(GameRecord[targetPieceMasu]);//効いている駒Id
					checkmateArray[5].push(GameRecord[targetPieceMasu]);//王手をかけてきた駒を取り返すことの出来る駒
				}
				if(moveIsRivalPiece(pieceIdRecord[GameRecord[targetPieceMotion]])){
					break;//set後、利きに自陣の駒があれば抜ける
				}
				if(typeMotion==1){
					break;//１の時は繰り返さずにdo～whileを抜ける
				}
				//２の動きで相手の王を貫通した先の１マスを格納する
				if((typeMotion==2)&&
					((GameRecord[targetPieceMotion]=="OU1")||(GameRecord[targetPieceMotion]=="OU2"))){
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
			}while(GameRecord[targetPieceMotion]=="EMP");//移動先に駒がない＆飛車,角,香,竜,馬の２の動きの間は繰り返す。
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
	//checkmateArray[4]//王手の種類
	console.log("王手した駒"+checkmateArray[1]);//王手をかけてきた駒
	if(checkmateArray[1].length>=2){
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

//スタート
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
//パソコン用マウスダウン
function mousedown(e){
	//try{
	//	if((tumiFlg==false)&&(endFlg==false)&&(endModeFlg==false)){
			touchScreen(e.pageX,e.pageY);
	//	}else{
	//		throw new Error("お疲れ様でした(*_ _)");
	//	}
	//}
	//catch(e){
	//	document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//勝敗
	//	document.getElementById("windisp").innerHTML="";//勝敗結果
	//	document.getElementById("inpModeEnd").innerHTML="";
	//	document.getElementById("gamemode").innerHTML="検討モード";
	//}
}
//スマホ用タッチスタート
function touchstart(e){
	try{
		if((tumiFlg==false)&&(endFlg==false)&&(endModeFlg==false)){
			//もしタッチされたのが一箇所であるなら
			if(e.targetTouches.length==1){
				touch=e.targetTouches[0];
				touchScreen(touch.pageX,touch.pageY);
			}
		}else{
			throw new Error("お疲れ様でした(*_ _)");
		}
	}
	catch(e){
		document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";//勝敗
		document.getElementById("windisp").innerHTML="";//勝敗結果
		document.getElementById("inpModeEnd").innerHTML="";
		document.getElementById("gamemode").innerHTML="検討モード";
	}
}

//start()系終了---------------------------------------------------------------------------------------



//touchScreen()系開始----------------------------------------------------------------------------------


//座標
function getCoordinate(tx,ty){
//console.log(GameRecord);
	let banX=36;//将棋盤までのpx横幅(距離)
	let banY=165;//将棋盤までのpx高さ(距離)
	let gW1=36;//g1までの横の距離
	let gH1=101;//g1までの縦の距離
	let sW1=36;//s1までの横の距離
	let sH1=485;//s1までの縦の距離
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



//選択した駒の移動完了まで
function moveCommit(){
	let getPieceArray;//持ち駒配列
	let movePromotionFlg=false;//成りを選択していない状態
	let res;
	document.getElementById(firstTouchPieceId).remove();//最初に選択した駒の削除
	GameRecord[firstTouchMasu]='EMP';//最初に選択した駒が置かれていたマスを無しにする
	//持ち駒を使用した時(firstTouchMasuInOut==false:持ち駒を使用した時)
	if(firstTouchMasuInOut==false){
		//console.log(firstTouchPieceId+"を持ち駒として使用しました。");
		if(teban=="先手"){
			getPieceArray=sGetPieceArray;//先手の駒台配列
		}else{
			getPieceArray=gGetPieceArray;//先手の駒台配列
		}
		//console.log(getPieceArray);//駒台の駒Id
		//配列から使用した持ち駒(firstTouchPieceId)の削除
		for(let i=getPieceArray.length-1;i>=0;i--){
			if(getPieceArray[i]==firstTouchPieceId){
				getPieceArray.splice(i,1);
			}
		}
		sortPiece();//駒台の並び替え(駒が増えた時)
	}
	allReverseCss();//駒を削除した後に、マスの色を元に戻す
	//成るか成らないかの判定
	while(movePromotionFlg==false){
		//成り駒でない＆最初は盤内＆成れる駒
		if((firstPromotionFlg==false)&&(firstTouchMasuInOut)&&(possiblePromotion.indexOf(firstTouchPieceId)!=-1)){
			//桂馬が１,２段目(８,９段目)に移動したら強制的に成る
			if((checkRivalAriaKeima(currentMasu))&&(firstTouchPieceName=="KE")){
				movePromotionFlg=true;
				break;
			}
			//香,歩が１段目(９段目)に移動したら強制的に成る
			if((checkRivalAriaKyouFu(currentMasu))&&((firstTouchPieceName=="KY")||(firstTouchPieceName=="FU"))){
				movePromotionFlg=true;
				break;
			}
			//移動後のマスが敵陣である。又は、移動前のマスが敵陣＆飛車,角,銀の成り返りである。
			if((checkRivalAria(currentMasu))||
			   ((checkRivalAria(firstTouchMasu))&&
			   ((firstTouchPieceName=="HI")||(firstTouchPieceName=="KA")||(firstTouchPieceName=="GI")))){
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
		movePiece(firstTouchPieceId,currentMasu);//駒の追加
		//移動完了の前のバグ確認(マスの中に２枚存在するバグ対策)
		if(document.getElementById(currentMasu).children.length>1){
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
	if(teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(addMasu).insertAdjacentHTML('afterbegin',piece[indexNumber]);
	document.getElementById(pieceId[indexNumber]).setAttribute('class',switchClassArray[0]);//駒にクラスの設定
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
	}
	justBefore.push(addMasu);//配列に直前の指し手のマスを格納
}
//駒の昇格,成り駒の移動
function movePromotion(){
	let indexNumber=pieceId.indexOf(firstTouchPieceId);//最初にタッチした駒が、駒配列の何番目にあるか？
	let switchClassArray;
	if(teban=="先手"){
		switchClassArray=sClassArray;
	}else{
		switchClassArray=gClassArray;
	}
	document.getElementById(currentMasu).insertAdjacentHTML('afterbegin',promotionPiece[indexNumber]);
	document.getElementById(pieceId[indexNumber]).setAttribute('class',switchClassArray[1]);//駒にクラスの設定
	GameRecord[currentMasu]=firstTouchPieceId;//現在のマスに駒を追加する
	pieceIdRecord[firstTouchPieceId]=switchClassArray[1];//昇格クラスにする
//駒の移動が完了したら
	kihuConvertMasu(kys,kxs,startKys,startKxs,1);//棋譜を記録として残す。
	kihuConvertPiece(firstTouchPieceName,1);//棋譜を記録として残す。
//王手判定-----------------------------------------------------------------------------------------------------
	document.getElementById("outedisp").innerHTML="";

	justBefore.push(currentMasu);//配列に直前の指し手のマスを格納
}

//駒の動き(駒の名前,駒のクラス,駒のあるマス)
function setMyPieceMotion(myPieceName,myPieceClass,startMasu){
	let typeMotion,motionY,motionX,addY,addX;
	let indexNumber=checkPieceId.indexOf(myPieceName);//配列の何番目にあるか？
	let pieceMotion;//仮の移動先のマス
//console.log(myPieceName);
//console.log(myPieceClass);
//console.log(startMasu);
	//成銀,成桂,成香,とはindexNumberを3にし、金と同じ動きを参照する
	if(((myPieceName=="GI")||(myPieceName=="KE")||(myPieceName=="KY")||(myPieceName=="FU"))&&
	   ((myPieceClass=="skoma promotion")||(myPieceClass=="gkoma promotion"))){
		indexNumber=3;
	}
	if((myPieceName=="HI")&&
	   ((myPieceClass=="skoma promotion")||(myPieceClass=="gkoma promotion"))){
		indexNumber=8;
	}
	if((myPieceName=="KA")&&
	   ((myPieceClass=="skoma promotion")||(myPieceClass=="gkoma promotion"))){
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
				myPieceMotionArray.push(pieceMotion);//配列にルールを格納
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
	let sortRankId=["FU","KY","KE","GI","KI","KA","HI","OU"];//並び替え順番
	//持ち駒を全て並び替えた配列。"FU","KY","KE","GI","KI","KA","KA","OU"の順盤に先頭に格納
	let sortPieceArray=[['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP'],['EMP']];
	let tempSortPieceArray=[];//隙間のない並び替え
	let numPieceArray=[];//駒の種類別の枚数を格納する配列
	let switchClassArray,getPieceArray,storageArea;
	let tempPieceId;//駒Id
	let indexNumber;//駒配列の何番目にあるか？
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
			indexNumber=pieceId.indexOf(sortPieceArray[i][sortPieceArray[i].length-1]);//駒配列の何番目にあるか？
			tempPieceId=sortPieceArray[i][sortPieceArray[i].length-1];
			document.getElementById(storageArea[xx]).insertAdjacentHTML('afterbegin',piece[indexNumber]);//駒台に並び替えた駒を順番に追加する
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
//addClassName(numGetPiece,'numGetPiece');
		if(teban=="先手"){
			numGetPiece.style.top=11+"px";//cssの調整(topから11pxの位置に配置する)、フレキブルデザイン今後の課題
		}else{
			numGetPiece.style.top=5+"px";//cssの調整、フレキブルデザイン今後の課題
		}
//console.log(numGetPiece);
//console.log(numGetPiece.style.top);
		}
	}
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
// console.log("駒クラス:"+pieceIdRecord[GameRecord["s1"]]);//s1にある駒
// console.log("s1にある駒Id:"+GameRecord["s1"]);//s1にある駒
console.log(teban+"の持ち駒"+getPieceArray);//駒台の駒Id
//console.log(getPieceArray);//駒台の駒Id
}

//移動可能なマスの色を変更する
function changeCssMyPieceMotion(ruleMasu){
	if(outeFlg==true){
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
function isRivalPiece(){
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
//王の制約に使用。相手の駒の効いている(動ける)マスに相手の駒があるか？
function moveIsRivalPiece(tempClass){
	if(((teban=="先手")&&(tempClass=="gkoma"))||((teban=="先手")&&(tempClass=="gkoma promotion"))||
	   ((teban=="後手")&&(tempClass=="skoma"))||((teban=="後手")&&(tempClass=="skoma promotion"))){
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
function checkRivalAria(checkMasu){
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
	if(teban=="先手"){
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
	if(teban=="先手"){
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
	let indexNumberHead,indexNumberTail;
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
	let indexNumber;//配列の何番目にあるか？
	indexNumber=convertPieceIdArray.indexOf(tempPieceName);
	if(firstPromotionFlg==true){
		convertPiece=convertPiecePromotionKanjiArray[indexNumber];
	}else{
		convertPiece=convertPieceKanjiArray[indexNumber];
		if((convertPiece=="王")&&(teban=="後手")){
			convertPiece="玉";
			//console.log(convertPiece);
		}
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
	document.getElementById("gamemode").innerHTML="検討モード";
	document.getElementById("inpModeEnd").innerHTML="";
	document.getElementById("outedisp").innerHTML="";
	document.getElementById("gamecount").innerHTML="";
	document.getElementById("windisp").innerHTML="";
	document.getElementById("enddisp").innerHTML="お疲れ様でした(*_ _)";
	endModeFlg=true;
}

//音楽関連
var audioElem;
function PlaySound(){
	audioElem=new Audio();
	audioElem.src="mp/komaoto.mp3";//ここにmp3パスを設定する。
	audioElem.volume=0.5;
	audioElem.play();
}

