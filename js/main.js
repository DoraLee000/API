$(function () {
			 $('#go').on('click', function(){
			 	$.ajax({
			 		type: 'GET',
			 		url: 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', 
		         	dataType: 'json',
		         	success: function (data) {
		         		var storeData = data.result.records;
					     $.each(storeData, function() {
					     	if($('#dist').val() == this.Zone.slice(0,10)){
					     		console.log(this)
					     		list = '<li class="box">'+
							            '<h4> ' + this.Name + '</h4>'+
							            '<p> 地址 - ' + this.Add + '</p>'+
							            '<p> 電話 - ' + this.Tel + '</p>'+
							            '<p> 營業時間 - ' + this.Opentime + '</p>'+
							            '</li>';
							            $('.store').append(list);
          }
        });
        $('html, body').animate({
          scrollTop: $('#list').offset().top
        }, 500);
      }
    });
  }));
});
