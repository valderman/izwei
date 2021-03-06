/**
 * Do an Ajax query to upload tags
 * 
 * Takes the values from #tagNewTags and #tagImageId to upload tags
 */
function submitTags(){
	$.ajax({
		data: {
			"do":"addTags",
			"tags":$("#tagNewTags").val(),
			"image":$("#tagImageId").val()
		},
		dataType: "json",
		success: function (result, image) {
			var tagString = "";
		
			for (t in result) {
				if(t != 0 && t != result.length)
					tagString += ", ";
				else if(t == result.length) 
					tagString += " and ";
					
				tagString += result[t]['tag'];
			}
		},
		error: function(xml, status, error) {
			alert("Error! \nstatus: " +status 	+ "\nerror: " +error);
		}
		
	});
	
}