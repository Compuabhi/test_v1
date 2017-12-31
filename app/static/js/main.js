// go through doc.how to create a proper js file

// var obj = {
// 	var getLink = function(){
// 		//copy link in clipboard
// 	},


// }
var domainName = ['http://127.0.0.1:5000','http://wittylitty.in'];
var main_obj = {
	getLink: function(obj){
		if ($('input[name=from_name]').val())
		var f = $('input[name=from_name]').val()
	if ($('input[name=to_name]').val())
		var t = $('input[name=to_name]').val()
	if(f && t){
		var	url = domainName[0]+'/hny?f='+ f + '&t='+t;
		copyUrl(url,function(status){
			console.log('status:',status,'element', obj);
			$('input[name="get_link"]').notify( "Link Copied! Send the link to your buddy.", { position:"bottom center",className: "success" });
			$('p.get_link').text('Link has been copied. You can share with your friends.');
			setTimeout(function(){
				location.reload();	
			},2000);
		});
	}
	},
	redirectToHome: function(){
	var new_url = domainName[0] + '/hny';
	window.location = new_url;
	}

}

function copyUrl(value,cb) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select(function(){
        console.log('input selected');
    });
    try {
        var successful = document.execCommand('copy',false,null);
        var msg = successful ? 1 : 0;
    }catch (err) {
        alert('Oops, unable to copy to clipboard');
    }
    document.body.removeChild(tempInput);
    cb(msg);
}