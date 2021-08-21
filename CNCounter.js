var takeinput=parseInt(document.getElementById("inp").value);
// var takeinput = $("#inp").val();

var count=1;
document.getElementById("button1").onclick = function () {
			console.log(takeinput);
			var countID=setInterval(function() {
		  	console.log(count);
		  	document.getElementById("display").innerHTML = count;
		    count++;
		    if(count>takeinput)
		    {
		      alert("Time Up");
		      clearInterval(countID);
		    }
	}, 1000);
}
		