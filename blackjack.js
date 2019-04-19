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
function setcards()
{
	for(i=1;i<4;i++)
	{
		do
		{
			var x=Math.floor((Math.random() * 52) + 1);
		}while(arr[x]==0);
		var id="c"+i;
		document.getElementById(id).src=arr[x];
		// arr[x]=0;
		console.log(x);
	}
	do
	{
		var hide=Math.floor((Math.random() * 52) + 1);
	}while(arr[hide]==0);
	console.log(hide);
	document.getElementById("dealBtn").disabled=true;
	document.getElementById("hitBtn").style.display="block";
	document.getElementById("standBtn").style.display="block";
	document.getElementById("doubleBtn").style.display="block";
	// var a=document.getElementById("c1");
	// var b=document.getElementById("c2");
	// console.log(a);
	// console.log(b);
	// if(cardvalue[a]==cardvalue[b])
	// {
	// 	document.getElementById("splitBtn").style.display="block";
	// }
}
// function hit()
// {
// 	i=4;
// 	do
// 	{
// 		var x=Math.floor((Math.random() * 52) + 1);
// 	}while(arr[x]==0);
// 	var id="c"+i;
// 	document.getElementById(id).style.display="block";
// 	document.getElementById(id).src=arr[x];
// 	arr[x]=0;
// 	console.log(x);
// }
function stand()
{
	document.getElementById("hitBtn").disabled=true;
}
function changecoin(s)
{
	document.getElementById("dealc").style.display="block";
	document.getElementById("dealc").src=s;
}
