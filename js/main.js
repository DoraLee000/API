$(function(){
  $('.content').hide();
  $('#go').bind('click',(function(){
    $.ajax({
      type: 'GET',
      url: 'https://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=2&FileType=1&Lang=C&FolderType=',
      success: function(data) {
        $('.content').show();
        $('.store').html('');
        var storeData = JSON.parse(data);
        $.each(storeData, function(i, item){

          if ($('#dist').val() == item.Zipcode.slice(0,3)) {
            src = '<li>\
                      <h4> ' + item.Name + '</h4>\
                      <img src=' + item.Picture1 + ' ' + '>\
                      <p> 地址 - ' + item.Add + '</p>\
                      <p> 電話 - ' + item.Tel + '</p>\
                      <p> 營業時間 - ' + item.Opentime + '</p>\
                    </li>';
            $('.store').append(src);
          }
        });
        $('html, body').animate({
          scrollTop: $('#list').offset().top
        }, 500);
      }
    });
  }));
});
