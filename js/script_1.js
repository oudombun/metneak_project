$("#textareapost").emojioneArea({
    pickerPosition: "bottom"
});
$("#myprofile").mouseover(function(){
	$("#overlay--profile").css("opacity","1")
});
$("#myprofile").mouseout(function(){
	$("#overlay--profile").css("opacity","0")
});
$("#overlay--profile").mouseover(function(){
	$("#overlay--profile").css("opacity","1");
});
$("#overlay--profile").mouseout(function(){
	$("#overlay--profile").css("opacity","0");
});

$("#textareapost").on( "focus",function(){
  alert();
});

/*upload profile*/

var stringPath;
function openfileDialog() {
    $("#fileLoader").click();
}
var tempChange = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            stringPath=e.target.result;
            $('#confirmPic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".file-upload").on('change', function(){
    	tempChange(this);
    $("#changeProfileModal").modal("show");
    $("#overlay--profile").css("opacity","0");
});


function comfirmedChange(){
	$('#myprofile').attr('src', stringPath);
	$("#myprofilePost").attr('src',stringPath);
}



$(".changemycover").mouseover(function(){
	$(this).css("color","#ffffff");
})
$(".changemycover").mouseout(function(){
	$(this).css("color","#E2E2EA");
})
$(".changemycover").click(function(){
	$("#fileLoader-cover").click();
})
var coverPath;
var tempChange_cover = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            coverPath=e.target.result;
            $('.timeline-cover').css("background-image", "url("+coverPath+")");
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#fileLoader-cover").on('change',function(){
	tempChange_cover(this);
});
function uploadimgprofile(){
  $("#image-upload-profile").click();
}
function postingNow(){
    // NProgress.start();
    var timeline = document.getElementById('lslsls');
    var status = $("#textareapost").val();
    var element;
    if (document.getElementById("image-upload-profile").files.length != 0){
      // if choose photo
      let uploader,result,obj;
      uploader = document.getElementById("image-upload-profile");
      result = uploader.src = URL.createObjectURL(document.getElementById("image-upload-profile").files[0]);
      obj  = {
          status:`${$("#textareapost").val()}`,
          picture:result
      }
      element  = `<div class="post-content"  id="main-container">
                  <article>
                      <div class="post-date hidden-xs hidden-sm">
                        <h5>Lisa</h5>
                        <p class="text-grey">just now</p>
                      </div>
                      <div class="article-header">
                          <div class="article-profile f-bg d-inline-block"
                              style="background-image: url('image/lisa.jpg')">

                          </div>
                          <div class="article-owner d-inline-block">
                              <span class="_name d-block">Lisa</span>
                              <span class="_time d-block">a few second ago</span>
                          </div>
                      </div>
                      <section class="article-body">
                          <div class="_status">${status}</div>
                          <div class="_photo f-bg" style="background-image: url('${obj.picture}')">
               
                          </div>
                      </section>
                      <section class="article-footer">
                            <div class="article-action">
                                <span class="_like d-inline-block"></span>
                                <span class="_like-count count d-inline-block">0</span>
                                <span class="_comment d-inline-block"></span>
                                <span class="_comment-count count d-inline-block">0</span>
                            </div>
                            <!--comment container-->
                            <div class="comment-container">
                            </div>
                            <div class="comment-box">
                                <div class="comment-post-- d-inline-block f-bg"
                                    style="background-image: url('image/lisa.jpeg')"></div>
                                <textarea name="" type="text" class="comment-text--"
                                    placeholder="Add your comment..."></textarea>
                            </div>
                        </section>
                    </article>
              </div>`;
              if(obj.status && obj.picture){
                  $("#lslsls").prepend(element);
                  reset();
                  // NProgress.done();
                     recall();
    
              }
    }else{
      if(status!=""){
        element  = `<div class="post-content"  id="main-container">
                  <article>
                      <div class="post-date hidden-xs hidden-sm">
                        <h5>Lisa</h5>
                        <p class="text-grey">just now</p>
                      </div>
                      <div class="article-header">
                          <div class="article-profile f-bg d-inline-block"
                              style="background-image: url('image/lisa.jpeg')">
                          </div>
                          <div class="article-owner d-inline-block">
                              <span class="_name d-block">Lisa</span>
                              <span class="_time d-block">a few second ago</span>
                          </div>
                      </div>
                      <section class="article-body">
                          <div class="_status">${status}</div>
                      </section>
                      <section class="article-footer">
                            <div class="article-action">
                                <span class="_like d-inline-block"></span>
                                <span class="_like-count count d-inline-block">0</span>
                                <span class="_comment d-inline-block"></span>
                                <span class="_comment-count count d-inline-block">0</span>
                            </div>
                            <!--comment container-->
                            <div class="comment-container">
                            </div>
                            <div class="comment-box">
                                <div class="comment-post-- d-inline-block f-bg"
                                    style="background-image: url('image/lisa.jpeg')"></div>
                                <textarea name="" type="text" class="comment-text--"
                                    placeholder="Add your comment..."></textarea>
                            </div>
                        </section>
                    </article>
              </div>`;
      $("#lslsls").prepend(element);
      reset();
         recall();
    
      }
    }

    recall();
    
}

function reset(){
   $('#image-upload-profile').val('');
    $('#textareapost').val('');
    $('.emojionearea-editor').text('');
}
/*like post */
// $(".like_post").on('click',function(){
//   alert();
// });

function recall() {
    $("textarea").emojioneArea({
        events: {
            keyup: function (editor, event) {
                // catches everything but enter
                if (event.which == 13) {
                    if(editor.html().replace(/&nbsp;/gi,'').trim()=="<div><br></div>" ||editor.html().replace(/&nbsp;/gi,'').trim()=="<div><br></div><div><br></div>"){

                    }else {
                        if (editor.attr('id') == 'upload-text') {

                        } else {
                            let cmt = editor.html();
                            let e = editor.parent().parent();
                            let current = editor;
                            if (e.hasClass('comment-box')) {
                                let preComment = `  <div class="comment">
                        <a href="#"><span class="pf d-inline-block f-bg" style="background-image: url('image/p3.jpg')"></span><span class="comment-owner--">chivorn16</span></a>
                        <span class="comment--">${cmt}</span>
                        <span class="reply-btn d-inline-block f-bg"></span>
                        <div class="reply-container">
                        </div>
                    </div>`;
                                e.parent().children('.comment-container').append(preComment);
                                let cmtCount=e.parent().children('.comment-container').prev().children('._comment-count');
                    cmtCount.html(eval(cmtCount.html())+1);
                                console.log(e);
                            } else if (e.hasClass('reply-container')) {
                                let preReply = `<div class="reply">
                        <a href="#">
                                <span class="pf d-inline-block f-bg" style="background-image: url('image/p2.jpg')"></span>
                            <span class="comment-owner--">lisin</span></a>
                        <span class="comment--">${cmt}</span>
                </div>`;
                                current.parent().before(preReply);
                            } else {
                                console.log(e);
                            }
                            
    
                            // event.preventDefault();
                            // return false;
                        }
                    }


                    editor.text('');

                } else {
                    console.log(editor.parent().parent()[0].className);
                }
            },
            ready: function () {
                this.editor.on("keyup", function () {
                });
            }
        }
    })

}