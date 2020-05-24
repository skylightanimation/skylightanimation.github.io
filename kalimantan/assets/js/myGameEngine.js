	var player1,player2;
	var scorePlayer1, scorePlayer2;
		scorePlayer1 = 0;
		scorePlayer2 = 0;
	var nswerTrue, answerInput, point;

	function userInput() {
		player1 = document.getElementById("user1Name").value;
		player2 = document.getElementById("user2Name").value;
 
		if (player1 == '' || player2 == '' ) {
			alert("Please Check username form input !!!");
		} else {
			document.getElementById("user1NamePrint").innerHTML = player1;
			document.getElementById("user2NamePrint").innerHTML = player2;
			$('#carousel-example-generic').carousel('next');
			$("#goTime").hide();
			$("#goGame").show();
		}
	}

	var	mainTime, turnTime;
	function timeInput(){
		mainTime = document.getElementById("mainTime").value;
		turnTime = document.getElementById("turnTime").value;
		

		if (mainTime == '' || turnTime == '' ) {
			alert("Please check time input");
			$('#play').modal('show');
		} else {
			document.getElementById("mainTimePrint").innerHTML = mainTime;
			//document.getElementById("trueTimePrint").innerHTML = turnTime;
			$('#userAuth').hide();
			$('#carousel-example-generic').carousel('next');
			$("#goTime").show();
			$("#goGame").hide();
			playgame();
		}
	}

	function quest() {
		$('#answer').focus();
		document.getElementById('answerForm').reset();
		answerTrue = 0;
		answerInput = 0 ;

		x = Math.floor((Math.random() * 10) + 1);
		y = Math.floor((Math.random() * 10) + 1);
				
		document.getElementById("questPrint").innerHTML = x + " x " + y + " = ";
		//document.getElementById("show_turn").innerHTML = "<i><b>" + p1 + "</b></i> this is tour turn";

	}

	function nextInput(){
		$('#carousel-example-generic').carousel('next');
	}

		function answerCheck() {
				$("#btnsoal2").show();
				$("#btnchack2").hide(); 
				answer =  document.getElementById("answer").value;
				answerTrue = x * y; 
				//document.getElementById("b_cont").innerHTML = tx;
				//document.getElementById("a_cont").innerHTML = z;
						
				if (answer == answerTrue) {
					point = point + 1;
					quest();
					movePlayerTrue();
				}else {
					point = point - 1;
					quest();
					movePlayerFlase();
				}

				document.getElementById("turnScoreBox").innerHTML = point;

		}

	 var stepMove;
	stepMove = 0;

	function movePlayerTrue(){
	 	if (nameUserNow == player1) {
			stepMove = player1Object.pos.index;
			if (stepMove < 55){
				stepMove = stepMove + 1;
				player1Object.pos.index = stepMove;
				if (stepMove == 55) {
					$('#questSelect').hide();
					hangTimer();
					document.getElementById("usernameTurnFinalPrint").innerHTML = nameUserNow;
					document.getElementById("scoreFinal").innerHTML = scorePlayer1;
					}
			}

		}else if (nameUserNow == player2) {
			stepMove = player2Object.pos.index;
			if (stepMove < 55){
				stepMove = stepMove + 1;
				player2Object.pos.index = stepMove;
				if (stepMove == 55) {
					$('#questSelect').hide();
					hangTimer();
					document.getElementById("usernameTurnFinalPrint").innerHTML = nameUserNow;
					document.getElementById("scoreFinal").innerHTML = scorePlayer2;
					}
			}
		}
	}

	 function movePlayerFlase(){
	 		if (nameUserNow == player1) {
	 			stepMove = player1Object.pos.index;
	 			if (stepMove <= 0) {
	 				stepMove = stepMove - 1;
	 				player1Object.pos.index = 0;
				}else if (stepMove >= 0){
					stepMove = stepMove - 1;
		 			player1Object.pos.index = stepMove;
				}

			}else if (nameUserNow == player2) {
				stepMove = player2Object.pos.index;
				if (stepMove <= 0) {
	 				stepMove = stepMove - 1;
	 				player2Object.pos.index = 0;
				}else if (stepMove >= 0){
					stepMove = stepMove - 1;
					player2Object.pos.index = stepMove;
				}
			}
	 }



	 function scoreCounter(){

	 	if (nameUserNow == player1) {
	 		scorePlayer1 = scorePlayer1 + point;
	 		document.getElementById("scorePlayer1").innerHTML = scorePlayer1;
	 		document.getElementById("point").innerHTML = point;
	 		goNotivication();
	 		$('#player2ButtonTurn').show();

		}else if (nameUserNow == player2) {
			scorePlayer2 = scorePlayer2 + point;
			document.getElementById("scorePlayer2").innerHTML = scorePlayer2;
			document.getElementById("point").innerHTML = point;
	 		goNotivication();
	 		$('#player1ButtonTurn').show();
		}
	
		  
	}


	//timer
	var	countTurn;
		
		function hangTimer(){
			defaultHangTime = 2;
			countTimerMain = 0;
			countTurn = 0;

			countHang= defaultHangTime;
			var counter=setInterval(timer, 1000);
			
			function timer(){
				countHang = countHang - 1;
				if (countHang < 0)
				{
					clearInterval(counter);
					goWin();					
					countHang = defaultHangTime;
					return;
				}	
			}
		}


		function turnTimer(){

			countTurn= turnTime;
			document.getElementById("turnTimePrint").innerHTML=countTurn;
			var counter=setInterval(timer, 1000);
			
			function timer(){
				countTurn = countTurn - 1;
				if (countTurn < 0)
				{
					clearInterval(counter);
					scoreCounter();
					countTurn = turnTime;
					return;
				}else if (countTurn) {
					clearTimeout(countTurn);
				}
				document.getElementById("turnTimePrint").innerHTML=countTurn;
			}
		}

		function mainTimer(){
			//countTimerMain = mainTime;
				document.getElementById("mainTimePrint").innerHTML=countTimerMain;
				var countMain=setInterval(timer, 1000);
					
				function timer(){
					countTimerMain=countTimerMain-1;
					if (countTimerMain < 0){
						clearInterval(countMain);
						$('#questSelect').hide();
						hangTimer();
						return;
					}else if (countTimerMain) {
						clearTimeout(countTimerMain);
					}
					document.getElementById("mainTimePrint").innerHTML=countTimerMain;
				}
		}
	//timer



//control page
	function goWin(){
		countTurn = 0;


		if (scorePlayer1 > scorePlayer2) {
			document.getElementById("usernameTurnFinalPrint").innerHTML = player1 + ' WIN';
			document.getElementById("scoreFinal").innerHTML = scorePlayer1;
		}else if (scorePlayer1 < scorePlayer2){
			document.getElementById("usernameTurnFinalPrint").innerHTML = player2 + ' WIN';
			document.getElementById("scoreFinal").innerHTML = scorePlayer2;
		}else if (scorePlayer1 == scorePlayer2 || titik[player1Object.pos.index].x == titik[player2Object.pos.index].x){
			document.getElementById("usernameTurnFinalPrint").innerHTML =  player1 + ' and ' + player2 + " <br>DRAW";
		}


		if (nameUserNow == player1) {
			document.getElementById("scoreFinal").innerHTML = scorePlayer1;
		}else if (nameUserNow == player2) {
			document.getElementById("scoreFinal").innerHTML = scorePlayer2;
		}

		
		
		//$('#gamePage').hide();
		$('#afterplayPage').modal('show');

	}

	function goNotivication() {
		$('#bodyTurnRun').hide();
		$('#bodyTurnOver').show();
		// body...
	}
	
	function load() {
		// loader();
		$('#gamePage').hide();
		$('#beforePlayPage').show();
	}

	function defaultControl(){
		/*$('#play').modal('show');
		$("#userInput").show();
		$("#timeInput").hide();*/

		$("#goTime").show();
		$("#goGame").hide();
	}


	function playgame(){
		$("#gamePage").show();
		$("#afterplayPage").hide();
		$("#beforePlayPage").hide();
		$('#questSelect').show();

		$('#turnStartPanel').show();
		$('#turnPlayerPanel').hide();

		$('#secondFrame').hide();
		$('#firstFrame').show();
		$('#player1ButtonTurn').hide();
		$('#player2ButtonTurn').hide();
		countTimerMain = mainTime;
		var scorePlayer1, scorePlayer2;
		scorePlayer1 = 0;
		scorePlayer2 = 0;
		nameUserNow = null;

		document.getElementById("scorePlayer1").innerHTML = scorePlayer1;
		document.getElementById("scorePlayer2").innerHTML = scorePlayer2;
		document.getElementById("mainTimePrint").innerHTML=countTimerMain;
		 
		gameReader();
	}

	function goPlay() {
		//code temp
			document.getElementById("firstPlayerPrint").innerHTML = player1;

		//code name temp
		$('#secondFrame').show();
		$('#firstFrame').hide();
		$('#player1ButtonTurn').show();
		mainTimer();
	}

	function goReset() {
		$('#afterplayPage').modal('hide');
		playgame();
	}


function questPlayer1(){
	nameUserNow = player1;
	point =0;
	document.getElementById("usernameTurnPrint").innerHTML = nameUserNow;
	document.getElementById("turnScoreBox").innerHTML = point;
	
	$('#turnStartPanel').hide();
	$('#turnPlayerPanel').show();
	$('#bodyTurnRun').show();
	$('#bodyTurnOver').hide();

	quest();
	turnTimer();
	$('#player1ButtonTurn').hide();
	
}

function questPlayer2(){
	nameUserNow = player2;
	point =0;
	document.getElementById("usernameTurnPrint").innerHTML = nameUserNow;
	document.getElementById("turnScoreBox").innerHTML = point;

	$('#player1ButtonTurn').hide();
	$('#turnPlayerPanel').show();
	$('#bodyTurnRun').show();
	$('#bodyTurnOver').hide();

	quest();
	turnTimer();
	$('#player2ButtonTurn').hide();
}

	function goHome(){
		location.href='./index.html';
	}
	function goUser(){
		location.href='./playgame.html';
	}


//control page



//js game
		function gameReader(){
						player1Object = new playeR(player1, 0,  "#279", new posPly(0));
						player2Object = new playeR(player2, 0,  "#CCC", new posPly(0));


						var background = new Image();
						background.src="assets/img/maping.png"; 
							
						var startPoint = new Image();
						startPoint.src = 'assets/img/start.png';
						var finishPoint = new Image();
						finishPoint.src = 'assets/img/fin.png';

						 var canvas = document.getElementById('background');
						 var context = canvas.getContext("2d");
						  var titik =[
						  new logP(247, 388), new logP(226, 373), new logP(202, 362), new logP(175, 356), 
						  new logP(148, 359), new logP(121, 356), new logP(95, 345), new logP(78, 320), 
						  new logP(65, 295),  new logP(49, 268),  new logP(42, 240), new logP(50, 210), 
						  new logP(76, 220), new logP(82, 248), new logP(97, 274), new logP(112, 301),
						  new logP(138, 320), new logP(168, 321), new logP(198, 326), new logP(226, 326),
						  new logP(254, 321), new logP(277, 300), new logP(260, 278), new logP(234, 276),
						  new logP(207, 280), new logP(179, 276), new logP(150, 265), new logP(128, 245),
						  new logP(112, 218), new logP(120, 190), new logP(138, 166), new logP(172, 154),
						  new logP(196, 132), new logP(212, 105), new logP(234, 84), new logP(263, 74),
						  new logP(278, 48), new logP(298, 28), new logP(321, 30), new logP(340, 50),
						  new logP(334, 74), new logP(312, 89), new logP(287, 112), new logP(265, 134),
						  new logP(244, 158), new logP(226, 178), new logP(205, 200), new logP(200, 227),
						  new logP(226, 237), new logP(253, 238), new logP(282, 236), new logP(308, 227), 
						  new logP(332, 221), new logP(340, 199),  new logP(315, 186), new logP(293, 180), 
						  //new logP(200, 200),
						  ];

							/*
							var titik =[new logP(120, 390), new logP(140, 410), new logP(165, 435), new logP(200, 450), new logP(245, 470), new logP(290, 485),
										new logP(335, 490), new logP(375, 470), new logP(365, 430), new logP(335, 395), new logP(310, 365),
										new logP(285, 330), new logP(255, 300), new logP(225, 280), new logP(200, 260), new logP(210, 235),
										new logP(240, 230), new logP(280, 250), new logP(320, 270), new logP(370, 290), new logP(420, 300),
										new logP(460, 290), new logP(440, 260), new logP(400, 245), new logP(360, 230), new logP(350, 190),
										new logP(360, 150), new logP(380, 120), new logP(390, 100),  new logP(400, 80), new logP(420, 60)];
							*/
						window.requestAnimationFrame(draw);
						var pnt = new Image();
						pnt.src = 'assets/img/crosspoint.png';
						var ply = new Image();
						ply.src = 'assets/img/player1.png';
						var ply2 = new Image();
						ply2.src = 'assets/img/player2.png';



  						function draw() {
							for (var i = 0; i < titik.length; i++) {
								context.drawImage(pnt, titik[i].x, titik[i].y, 30, 30  );

							}

								if (titik[player1Object.pos.index].x == titik[player2Object.pos.index].x) {
									context.drawImage(ply, titik[player1Object.pos.index].x-9, titik[player1Object.pos.index].y-9, 55, 55);
								}

								context.beginPath();
								context.drawImage(ply, titik[player1Object.pos.index].x, titik[player1Object.pos.index].y, 35, 35); 
								context.fill();

								
								context.beginPath();
								context.drawImage(ply2, titik[player2Object.pos.index].x, titik[player2Object.pos.index].y, 35, 35);
								context.fill();
								

							var tm = setTimeout(function() {
							context.drawImage(background, 0, 0, 440, 440);
							context.drawImage(startPoint, 255, 380, 40, 10);
							context.drawImage(finishPoint, 287, 175, 40, 10);
							clearTimeout();
							}, 100);
						window.requestAnimationFrame(draw);
						}

						function logP(x,y){
							this.x = x;
							this.y = y;
						}

						function posPly(index){
							this.index = index;
						}


						function playeR(name, score,  warna, pos){
							this.name = name;
							this.score = score;
							this.warna = warna;
							this.pos = pos;
						}


					}
//js game
