var arr={
	'1':'2C.png','2':'2D.png','3':'2H.png','4':'2S.png',
	'5':'3C.png','6':'3D.png','7':'3H.png','8':'3S.png',
	'9':'4C.png','10':'4D.png','11':'4H.png','12':'4S.png',
	'13':'5C.png','14':'5D.png','15':'5H.png','16':'5S.png',
	'17':'6C.png','18':'6D.png','19':'6H.png','20':'6S.png',
	'21':'7C.png','22':'7D.png','23':'7H.png','24':'7S.png',
	'25':'8C.png','26':'8D.png','27':'8H.png','28':'8S.png',
	'29':'9C.png','30':'9D.png','31':'9H.png','32':'9S.png',
	'33':'10C.png','34':'10D.png','35':'10H.png','36':'10S.png',
	'37':'AC.png','38':'AD.png','39':'AH.png','40':'AS.png',
	'41':'JC.png','42':'JD.png','43':'JH.png','44':'JS.png',
	'45':'QC.png','46':'QD.png','47':'QH.png','48':'QS.png',
	'49':'KC.png','50':'KD.png','51':'KH.png','52':'KS.png'
}
var cardvalue={
	'2C.png':'2','2D.png':'2','2H.png':'2','2S.png':'2',
	'3C.png':'3','3D.png':'3','3H.png':'3','3S.png':'3',
	'4C.png':'4','4D.png':'4','4H.png':'4','4S.png':'4',
	'5C.png':'5','5D.png':'5','5H.png':'5','5S.png':'5',
	'6C.png':'6','6D.png':'6','6H.png':'6','6S.png':'6',
	'7C.png':'7','7D.png':'7','7H.png':'7','7S.png':'7',
	'8C.png':'8','8D.png':'8','8H.png':'8','8S.png':'8',
	'9C.png':'9','9D.png':'9','9H.png':'9','9S.png':'9',
	'10C.png':'10','10D.png':'10','10H.png':'10','10S.png':'10',
	'AC.png':'11','AD.png':'11','AH.png':'11','AS.png':'11',
	'KC.png':'10','KD.png':'10','KH.png':'10','KS.png':'10',
	'QC.png':'10','QD.png':'10','QH.png':'10','QS.png':'10',
	'JC.png':'10','JD.png':'10','JH.png':'10','JS.png':'10'
}
var money=1000;
var bet=0;
var coinvalue={
	'10.png':'10','100.png':'100','11.png':'1'
}
var dealsum=0;
var playersum=0;
var hide="";
var playflag=0;
var dealflag=0;
var send;
var split=0;
function restart()
{
	arr={
		'1':'2C.png','2':'2D.png','3':'2H.png','4':'2S.png',
		'5':'3C.png','6':'3D.png','7':'3H.png','8':'3S.png',
		'9':'4C.png','10':'4D.png','11':'4H.png','12':'4S.png',
		'13':'5C.png','14':'5D.png','15':'5H.png','16':'5S.png',
		'17':'6C.png','18':'6D.png','19':'6H.png','20':'6S.png',
		'21':'7C.png','22':'7D.png','23':'7H.png','24':'7S.png',
		'25':'8C.png','26':'8D.png','27':'8H.png','28':'8S.png',
		'29':'9C.png','30':'9D.png','31':'9H.png','32':'9S.png',
		'33':'10C.png','34':'10D.png','35':'10H.png','36':'10S.png',
		'37':'AC.png','38':'AD.png','39':'AH.png','40':'AS.png',
		'41':'JC.png','42':'JD.png','43':'JH.png','44':'JS.png',
		'45':'QC.png','46':'QD.png','47':'QH.png','48':'QS.png',
		'49':'KC.png','50':'KD.png','51':'KH.png','52':'KS.png'
	}
	cardvalue={
		'2C.png':'2','2D.png':'2','2H.png':'2','2S.png':'2',
		'3C.png':'3','3D.png':'3','3H.png':'3','3S.png':'3',
		'4C.png':'4','4D.png':'4','4H.png':'4','4S.png':'4',
		'5C.png':'5','5D.png':'5','5H.png':'5','5S.png':'5',
		'6C.png':'6','6D.png':'6','6H.png':'6','6S.png':'6',
		'7C.png':'7','7D.png':'7','7H.png':'7','7S.png':'7',
		'8C.png':'8','8D.png':'8','8H.png':'8','8S.png':'8',
		'9C.png':'9','9D.png':'9','9H.png':'9','9S.png':'9',
		'10C.png':'10','10D.png':'10','10H.png':'10','10S.png':'10',
		'AC.png':'11','AD.png':'11','AH.png':'11','AS.png':'11',
		'KC.png':'10','KD.png':'10','KH.png':'10','KS.png':'10',
		'QC.png':'10','QD.png':'10','QH.png':'10','QS.png':'10',
		'JC.png':'10','JD.png':'10','JH.png':'10','JS.png':'10'
	}
	bet=0;
	coinvalue={
		'10.png':'10','100.png':'100','11.png':'1'
	}
	dealsum=0;
	playersum=0;
	hide="";
	playflag=0;
	dealflag=0;
	gl=1;
	z=1;
	document.getElementById("dealc").style.display="none";
	document.getElementById("p").style.display="none";
	document.getElementById("ps").innerHTML="";
	document.getElementById("sum1").innerHTML="";
	document.getElementById("sum2").innerHTML="";
	document.getElementById("d").style.display="none";
	document.getElementById("ds").innerHTML="";

	for(i=1;i<5;i++)
	{
		document.getElementById("s"+i).style.display="none";
		document.getElementById("d"+i).style.display="none";
		document.getElementById("c"+i).src="red_back.png";
	}
	document.getElementById("b").innerHTML="";
	document.getElementById("res").innerHTML="";
	document.getElementById("r").innerHTML="";
	document.getElementById("dealBtn").disabled=false;
	document.getElementById("splitBtn").disabled=false;
	document.getElementById("hitBtn").disabled=false;
	document.getElementById("doubleBtn").disabled=false;
	document.getElementById("standBtn").disabled=false;
	document.getElementById("dealBtn").style.display="none";
	document.getElementById("splitBtn").style.display="none";
	document.getElementById("hitBtn").style.display="none";
	document.getElementById("doubleBtn").style.display="none";
	document.getElementById("standBtn").style.display="none";
	document.getElementById("replayBtn").style.display="none";
	if(money>=100)
		document.getElementById("c100").style.visibility="visible"
	if(money>=10)
		document.getElementById("c10").style.visibility="visible";
	document.getElementById("c11").style.visibility="visible"
}
document.getElementById("dealBtn").disabled=true;
document.getElementById("total").innerHTML=money;
function setcards()
{
	document.getElementById("c11").style.visibility="hidden"
	document.getElementById("c10").style.visibility="hidden"
	document.getElementById("c100").style.visibility="hidden";
	document.getElementById("dealBtn").style.display="none";
	for(i=1;i<4;i++)
	{
		do
		{
			var x=Math.floor((Math.random() * 52) + 1);
		}while(arr[x]==0);
		var id="c"+i;
		document.getElementById(id).src=arr[x];
		if(i==1||i==2)
		{
			if(cardvalue[arr[x]]==11)
				playflag=1;
				send=arr[x];
				arr[x]=0;
			addvalue(send);
		}
		else {
			if(cardvalue[arr[x]]==11)
				dealflag=1;
				send=arr[x];
				arr[x]=0;
			adddeal(send);
		}
	}
	if(playersum<21)
	{
		buttondisplay();
	}
}
function buttondisplay()
{
	document.getElementById("dealBtn").disabled=true;
	document.getElementById("hitBtn").style.display="block";
	document.getElementById("standBtn").style.display="block";
	if(money>=bet)
		document.getElementById("doubleBtn").style.display="block";
	var a=document.getElementById("c1");
	var b=document.getElementById("c2");
	if(cardvalue[a.getAttribute('src')]==cardvalue[b.getAttribute('src')])
	{
		// if(cardvalue[a.getAttribute('src')]==10)
		// {
		// 	var str1=a.getAttribute('src');
		// 	var str2=b.getAttribute('src');
		// 	if(str1[0]==str2[0])
		// 	{
		// 		split=1;
		// 		document.getElementById("splitBtn").style.display="block";
		// 	}
		// }
		// else
		//  {
			 split=1;
			document.getElementById("splitBtn").style.display="block";
		// }
	}
}
function addvalue(a)
{
	playersum=playersum+Number(cardvalue[a]);
	if(playflag==1)
	{
		if(playersum>21)
		{
			playflag=0;
			playersum=playersum-10;
		}
	}
	if(playersum>=21)
	{
		stand();
	}
	document.getElementById("p").style.display="block";
	document.getElementById("ps").innerHTML=playersum;
}
function adddeal(a)
{
	dealsum=dealsum+Number(cardvalue[a]);
	if(dealflag==1)
	{
		if(dealsum>21)
		{
			dealflag=0;
			dealsum=dealsum-10;
		}
	}
}
var gl=1;
function hit()
{
	do
	{
		var x=Math.floor((Math.random() * 52) + 1);
	}while(arr[x]==0);
	var id="s"+gl;
	document.getElementById(id).style.display="inline-block";
	document.getElementById(id).src=arr[x];
	if(cardvalue[arr[x]]==11)
		playflag=1;
	send=arr[x];
	arr[x]=0;
	addvalue(send);
	gl=gl+1;
}
var z=1;
function dealergame()
{
	if(playersum<=21)
	{
	while(dealsum<17)
	{
		do
		{
			var x=Math.floor((Math.random() * 52) + 1);
		}while(arr[x]==0);
		var id="d"+z;
		if(cardvalue[arr[x]]==11)
			dealflag=1;
		document.getElementById(id).style.display="inline-block";
		document.getElementById(id).src=arr[x];
		send=arr[x];
		arr[x]=0;
		adddeal(send);
		z=z+1;
	}
}
	document.getElementById("d").style.display="block";
	document.getElementById("ds").innerHTML=dealsum;
}
function stand()
{
	console.log(split);
	if(split==1)
	{
		sum1=playersum;
		console.log(sum1);
		secondcard();
		split=0;
	}
	else {
	sum2=playersum;
	console.log(sum2);
	do
	{
		hide=Math.floor((Math.random() * 52) + 1);
	}while(arr[hide]==0);
	if(cardvalue[arr[hide]]==11)
		dealflag=1;
	send=arr[hide];
	adddeal(send);
	document.getElementById("c4").src=arr[hide];
	arr[hide]=0
	dealergame();
	result();
	}
}
function changecoin(s)
{
	document.getElementById("dealBtn").style.display="block";
	document.getElementById("dealBtn").disabled=false;
	document.getElementById("dealc").style.display="block";
	document.getElementById("dealc").src=s.src;
	var c=s.getAttribute('src');
	bet=bet+Number(coinvalue[c]);
	money=money-Number(coinvalue[c]);
	document.getElementById("total").innerHTML=money;
	if(money<100)
	{
		document.getElementById("c100").style.visibility="hidden";
	}
	if(money<10)
	{
		document.getElementById("c10").style.visibility="hidden";
	}
	if(money<1)
	{
		document.getElementById("c11").style.visibility="hidden";
	}
	document.getElementById("b").innerHTML=bet;
}
function doubling()
{
	money=money-bet;
	bet=bet+bet;
	if(money<100)
	{
		document.getElementById("c100").style.visibility="hidden";
	}
	if(money<10)
	{
		document.getElementById("c10").style.visibility="hidden";
	}
	if(money<1)
	{
		document.getElementById("c11").style.visibility="hidden";
	}
	document.getElementById("b").innerHTML=bet;
	document.getElementById("total").innerHTML=money;
	hit();
	stand();
}
function result()
{
	if(playersum==dealsum)
	{
		document.getElementById("res").innerHTML="PUSH";
		money=money+bet;
	}
	else if(playersum==21)
	{
		document.getElementById("res").innerHTML="PLAYER BLACKJACK";
		money=money+(2.5*bet);
	}
	else if(dealsum==21)
	{
		document.getElementById("res").innerHTML="DEALER BLACKJACK";
	}
	else if(playersum>21||dealsum>21)
	{
		if(dealsum<playersum)
			document.getElementById("res").innerHTML="DEALER WIN";
		else {
			document.getElementById("res").innerHTML="PLAYER WIN";
			money=money+2*bet;
		}
	}
	else if (dealsum>playersum)
	{
		document.getElementById("res").innerHTML="DEALER WIN";
	}
	else if (playersum>dealsum)
	{
		document.getElementById("res").innerHTML="PLAYER WIN";
		money=money+2*bet;
	}
	document.getElementById("total").innerHTML=money;
	document.getElementById("dealBtn").style.display="none";
	document.getElementById("splitBtn").style.display="none";
	document.getElementById("hitBtn").style.display="none";
	document.getElementById("doubleBtn").style.display="none";
	document.getElementById("standBtn").style.display="none";
	if(money!=0)
	document.getElementById("replayBtn").style.display="block";
	else {
		document.getElementById("r").innerHTML="Game Over";
	}
}
var cardsplit;
var bet1;
var bet2;
var sum1;
var sum2;
function splitcard()
{
	bet1=bet/2;
	bet2=bet/2;
	cardsplit=document.getElementById("c2").getAttribute('src');
	do
	{
		var x=Math.floor((Math.random() * 52) + 1);
	}while(arr[x]==0);
	document.getElementById("c2").src=arr[x];
	sum1=playersum/2;
	sum2=playersum/2;
	playersum=sum1+Number(cardvalue[arr[x]]);
	arr[x]=0
	bet=bet1;
	buttondisplay();
	console.log(playersum);
}
function secondcard()
{
	console.log("hello");
	for(i=1;i<5;i++)
	{
		document.getElementById("s"+i).style.display="none";
	}
	document.getElementById("c1").src=cardsplit;
	do
	{
		var x=Math.floor((Math.random() * 52) + 1);
	}while(arr[x]==0);
	document.getElementById("c2").src=arr[x];
	bet=bet2;
	playersum=sum2+Number(cardvalue[arr[x]]);
	arr[x]=0;
	buttondisplay();
}
