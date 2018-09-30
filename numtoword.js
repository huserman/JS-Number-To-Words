/*
### Converts Numbers (Digits) to Azerbaijani (Azeri, Turkish) words 
### Created_by_H_Huseynov
### aka Spatial
### aka Huserman
### Copyright (c) 2011 [H. Huseynov]
### Can be used under MIT LICENSE
*/

birler = new Array("sıfır","bir","iki","üç","dörd","beş","altı","yeddi","səkkiz","doqquz");
onlar = new Array("on","iyirmi","otuz","qırx","əlli","altmış","yetmiş","səksən","doxsan");
yuzler = new Array("yüz");
minler = new Array("min");

var digitParts = {

	round1: function(p1, p2){
	
			for(var i=9; i>=1; i--)
			{
				if (p1 > i*10)
				{
					p2 += onlar[i-1];
					p2 += " " + birler[p1 - i*10];
					i = 0;
				}
				else if (p1 == i*10)
				{
					p2 += onlar[i-1];
					i = 0;
				} 						
				else if (p1 == i)
				{
					p2 += birler[i];
					i = 0;
				}
			}
	return p2;	
	},
	
	round2: function(p1, p2){
	
			for(var i=9; i>=1; i--)
			{
				if ((p1> i*100) && (i != 1))
				{
					p2 += birler[i] + " " + yuzler[0] + " ";
					p1 = p1 - i*100;			
					//////////////////
						return digitParts.round1(p1, p2);
					/////////////////// 
				}
				else if ((p1 > i*100) && (i == 1))
				{
					p2 += yuzler[0] + " ";
					p1 = p1 - i*100;
					//////////////////
						return digitParts.round1(p1, p2);
					/////////////////
				}
				else if ((p1 == i*100) && (i!=1))
				{
					p2 += birler[i] + " " + yuzler[0];
					i = 0;
					return p2;
				}
				else if (p1 == i*100) {	p2 += yuzler[0]; i = 0; return p2; };
			}
	},
	
	round3: function(p1, p2){
	
			for(var i=9; i>=1; i--)
			{
				if (p1 >= i*1000)
				{
					p2 += birler[i] + " " + minler[0] + " ";
					p1 = p1 - i*1000;
					/////////////////////////////
						if (p1<100)
						{ return digitParts.round1(p1, p2); }
						else if(p1>=100)
						{ return digitParts.round2(p1, p2); }
					////////////////////////////
				}
				else if ((p1 == i*1000) && (i!=1))
				{
					p2 += birler[i] + " " + minler[0];
					i = 0;
					return p2;
				}
			};		
	},
	
	round4: function(p1, p2){
	
			for(var i=9; i>=1; i--)
			{
                if (p1 > i*10000)
                {
                    p2 += onlar[i-1] + " ";
					p1 = p1 - i*10000;
                    if (p1 < 100)
                    { p2 += minler[0] + " "; return digitParts.round1(p1, p2) }
                    else if ((p1>=100) && (p1<1000))
                    { p2 += minler[0] + " "; return digitParts.round2(p1, p2); }
                    else if (p1>=1000)
                    { return digitParts.round3(p1, p2); }
                }
                else if ((p1 == i*10000) && (i!=1))
                {
                    p2 += onlar[i-1] + " " + minler[0];
					i = 0;
					return p2;
                }
                else if (p1 == i*10000) { p2 += onlar[0] + " " + minler[0]; return p2; };
			};
	},

    round5: function(p1, p2){
                        
            for(var i=9; i>=1; i--)
            {
                if ((p1 > i*100000) && (i != 1))
                {
                    p2 += birler[i] + " " + yuzler[0] + " ";
                    p1 = p1 - i*100000;
                    if (p1 < 100)
                    { p2 += minler[0] + " "; return digitParts.round1(p1, p2); }
                    else if ((p1>=10) && (p1<1000))
                    { p2 += minler[0] + " "; return digitParts.round2(p1, p2); }
                    else if ((p1>=1000) && (p1<10000))
                    { return digitParts.round3(p1, p2); }
                    else if (p1>=10000)
                    { return digitParts.round4(p1, p2); }
                }
                 else if ((p1 > i*100000) && (i == 1))
                {
                    p2 += yuzler[0] + " ";
                    p1 = p1 - i*100000;
                    if (p1 < 100)
                    { p2 += minler[0] + " "; return digitParts.round1(p1, p2); }
                    else if ((p1>=10) && (p1<1000))
                    { p2 += minler[0] + " "; return digitParts.round2(p1, p2); }
                    else if ((p1>=1000) && (p1<10000))
                    { return digitParts.round3(p1, p2); }
                    else if (p1>=10000)
                    { return digitParts.round4(p1, p2); }
                }
                else if ((p1 == i*100000) && (i != 1))
                { p2 += birler[i] + " " + yuzler[0] + " " + minler[0]; return p2; }
                else if ((p1 == i*100000) && (i == 1))
                { p2 += yuzler[0] + " " + minler[0]; return p2; }
            };
    }
	
}

/* BEGIN DIGITS */
var digits = { 

	onlarF: function(dat1){ //BIRLER ve ONLAR
			var txt1 = "";
			st = digitParts.round1(dat1, txt1);
			document.getElementById('lbtxt').innerHTML = st;			
		},
	
	yuzlerF: function(dat2){ //YUZLER
			var txt2 = "";
			st = digitParts.round2(dat2, txt2);
			document.getElementById('lbtxt').innerHTML = st;
		},
		
	minlerF: function(dat3){ //MINLER
			var txt3 = "";
			st = digitParts.round3(dat3, txt3);
			document.getElementById('lbtxt').innerHTML = st;
		},
		
	onminlerF: function(dat4){ //ON MINLER
			var txt4 = "";
			st = digitParts.round4(dat4, txt4);
			document.getElementById('lbtxt').innerHTML = st;
      },
      
    yuzminlerF: function(dat5){ //YUZ MINLER
          var txt5 = "";
			st = digitParts.round5(dat5, txt5);
			document.getElementById('lbtxt').innerHTML = st;
     }
		
} 
 /* END DIGITS */

//MAIN FUNCTION				
function toWord()
{
	var its = document.getElementById('isText');
	if(its.value == 0) return alert(birler[0])
	
	else if(its.value < 100)
	{ digits.onlarF(its.value); }
	
	else if((its.value < 1000) && (its.value >= 100))
	{ digits.yuzlerF(its.value); }
	
	else if((its.value < 10000) && (its.value >= 1000))
	{ digits.minlerF(its.value); }
	
	else if((its.value < 100000) && (its.value >= 10000))
	{ digits.onminlerF(its.value); }

    else if((its.value < 1000000) && (its.value >= 100000))
	{ digits.yuzminlerF(its.value); }
	
    else if(its.value == 1000000)
	{alert("Bir Milyon");}
	
    else if(its.value > 1000000)
    { alert("Milyondan çoxdur :)");}
}

function empt(){
	document.getElementById('lbtxt').innerHTML= " ";
}