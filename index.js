$(document).ready(function () {
        $.getJSON("http://demo.tech2edge.co/samples/data-sg", function (data){
          $("#image").append(`<img
        id="myImg"        
        src="http://demo.tech2edge.co/samples/${(data.series.img)}"
        alt="sacred games"
        style="width: 100%; height: 300px"
      />`)
            //var data = JSON.stringify(data);
          $("#Description").append(data.series.desc);
          $("#heading").append(data.series.title);
          $("#ott").append(data.series.ott);
          console.log(data.characters);
          for(i in data.characters){
              console.log(data.characters[i].age);
              console.log(data.characters[i].img);
          $(".characters").append( `<div class="shadow-lg p-3 mb-4 bg-body rounded">    <div class="row">
        <div class="col-3" ><a href="#openModal" class="openlink"> 
          <div class="service col-12 col-md-8">   
                <img src="http://demo.tech2edge.co/samples/${(data.characters[i].img)}" height="150" width="200"> 
          </div></a></div>
          <div class="col-12 col-md-8">
        <div>NAME - ${(data.characters[i].name)} </div>
        <div>AGE - ${(data.characters[i].age)} </div> 
        <div>PROFESSION- ${(data.characters[i].profession)} </div>
      </div>
      </div>`)
        }
        });
      });
$(document).ready(function(){
    $(document).on("click", ".openlink", function(){
        var imagePath = $(this).find("img").attr("src");
        console.log(imagePath);
        $(".selectedImage").html(`<img src="${imagePath}" height="300" width="300"`);
    });
});

$(document).ready(function() {
  $('.bar span').hide();
  $('#bar-five').animate({
     width: '80%'}, 1000);
});
