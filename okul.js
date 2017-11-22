function Okul(){
	this.dosyaislem = dosyaislem;
	this.parametrelerDogruMu = parametrelerDogruMu;
	this.dosyadaTekrarVar = dosyadaTekrarVar;
	this.bilgileriYazdir = bilgileriYazdir;
	this.main = main;
	var param1 = process.argv[2];
	var param2 = process.argv[3];
	main(param1,param2);
	
}
function dosyaislem()
{
	var fs = require('fs');
	var okuldosyasi = fs.readFileSync('/home/mmhnlhn/Desktop/okul.txt',{encoding: 'utf8'});
	var olsatirsplit = okuldosyasi.split("\n");
	var olvirgulsplitlist = [];
	for(var i=1; i<olsatirsplit.length; i++)
	{
		var ogrenci = olsatirsplit[i].split(",");
		olvirgulsplitlist.push(ogrenci);
	}
	//console.log(olvirgulsplitlist[0][1]);
	return olvirgulsplitlist;
}
function parametrelerDogruMu(param1,param2)
{
	//Nan Not-A-Number
	if(typeof param1 != "undefined" && typeof param2 != "undefined")
	{
		console.log("fazla arguman girisi");
		return "fazla arguman girisi";
	}
	else if(typeof param1 != "undefined" && typeof param2 == "undefined")
	{ //tek parametre girme durumu
		if(!isNaN(param1) && ![1,2,3,4].includes(parseInt(param1)))
		{
			console.log("devre araligi 1-4 arasinda olmali");
			return "devre araligi 1-4 arasinda olmali";
		}
		else if(isNaN(param1) && !["k","e","K","E",""].includes(param1))
		{
			console.log("hatali arguman girisi");
			return "hatali arguman girisi";
		}
		else
			return true;
	}
}
Array.prototype.unique = function()
{
    var tmp = {}, out = [];
    for(var i = 0, n = this.length; i < n; ++i)
    {
        if(!tmp[this[i]]) { tmp[this[i]] = true; out.push(this[i]); }
    }
    return out;
}
function dosyadaTekrarVar()
{
	var ogrencilistesi = dosyaislem();20
	var uniqueogrencilistesi = ogrencilistesi.unique();
	if(ogrencilistesi.length != uniqueogrencilistesi.length)
		return true;
	else
		return false;
}
function bilgileriYazdir(param1,param2)
{
	var ogrencilistesi = dosyaislem();
	if(typeof param1 == "undefined")
	{
		for(var index=0; index<ogrencilistesi.length-1; index++)
		{			
			console.log((index+1)+" "+ogrencilistesi[index][0]+
			" "+ogrencilistesi[index][1]+" "+ogrencilistesi[index][2]);
		}
	}
	else
	{
		if([1,2,3,4].includes(parseInt(param1)))
		{	
			for(var index=0; index<ogrencilistesi.length-1; index++)
			{
				if(parseInt(param1) == parseInt(ogrencilistesi[index][3]))
				{
					console.log(ogrencilistesi[index][0]+
					" "+ogrencilistesi[index][1]+" "+ogrencilistesi[index][2]);
				}	
			}	
		}
		else if(["k","e","K","E",""].includes(param1))
		{
			for(var index=0; index<ogrencilistesi.length-1; index++)
			{
				if(param1.toUpperCase() == ogrencilistesi[index][2])
				{
					console.log(ogrencilistesi[index][0]+
					" "+ogrencilistesi[index][1]+" "+ogrencilistesi[index][2]);
				}
			}	
		}
	}
}
function main(param1,param2)
{
	var dosyaTekrarVar = dosyadaTekrarVar();
	if(dosyaTekrarVar)
	{
		console.log("Program Durduruldu");
	}
	else
	{
		if(typeof param1 == "undefined" && typeof param2 == "undefined")
		{
			bilgileriYazdir(param1,param2);	
		}	
		else
		{
			var parametrelerDogru = parametrelerDogruMu(param1,param2);
			if(parametrelerDogru == true)
			{
				bilgileriYazdir(param1,param2);
			}
			else
			{
				console.log("Program Durduruldu");
			}
		}		
	}
}
module.exports=Okul;
var nesne = new Okul();
