NProgress.configure({ parent: 'header' });
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

$("#upload-text").emojioneArea({
    pickerPosition: "right",
    emojiPlaceholder: "😸"
});

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

                } else if (e.hasClass('reply-container')) {
                    let preReply = `<div class="reply">
            <a href="#">
                    <span class="pf d-inline-block f-bg" style="background-image: url('image/p2.jpg')"></span>
                <span class="comment-owner--">lisin</span></a>
            <span class="comment--">${cmt}</span>
    </div>`;
                    console.log(e.prepend(preReply));
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




$(document).on('click', '.reply-btn', () => {
    let isHasTextArea = $(event.target).parent().children().children().last().hasClass("emojionearea");
    if (!isHasTextArea) {
        let html = `<textarea name="" type="text" class="comment-text--"
            placeholder="Add your comment..."></textarea>`;
        $(event.target).parent().children('.reply-container').append(html);
        recall();
    }
})



$(document).on("click", "#post--", () => {
    $("#upload-modal").modal({
        escapeClose: true,
        clickClose: false,
        showClose: false,
        fadeDelay: 0.10
    });
})

//when user change the image
$(document).on('change', '#image-upload', function () {
    if (event.target.files.length != 0) {
        let uploader = document.getElementById("image-upload");
        let result = uploader.src = URL.createObjectURL(event.target.files[0]);
        document.getElementById("image-preview__").src = result;
    }
});
//image change
$(document).on('click', '#image-upload', () => {
    document.getElementById("image-preview__").src = "";
    $('#image-upload').val('');
});
//reset upload data
function uploadReset() {
    document.getElementById('close-upload-modal').click()
    $('#image-upload').val('');
    $('#upload-text').val('');
    $('.emojionearea-editor').text('');
    document.getElementById("image-preview__").src = '';
}
//upload
$(document).on('click', '#post-button__', () => {
    let element;
    let uploader, result;
    let obj = new Object();
    obj.time=moment(new Date()).fromNow();
    obj.status=$('#upload-text').val();
    if (document.getElementById("image-upload").files.length != 0) {
        uploader = document.getElementById("image-upload");
        result = uploader.src = URL.createObjectURL(document.getElementById("image-upload").files[0]);
        document.getElementById("image-preview__").src = result;
        obj.picture=result;
        
        if (obj.picture) {
            NProgress.start();
            element = `    <article class="animated fadeIn">
            <span class="option f-bg">
            <div class="delete f-hanuman">
                មិនចង់ឃើញ
            </div>
        </span>
            <div class="article-header">
                <div class="article-profile f-bg d-inline-block"
                    style="background-image: url('image/lisa.jpeg')">
    
                </div>
                <div class="article-owner d-inline-block">
                    <span class="_name d-block">chivorn16</span>
                    <span class="_time d-block">${obj.time}</span>
                </div>
            </div>
            <section class="article-body">
                <div class="_status">${obj.status}</div>
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
        </article>`;
            $("#main-container").prepend(element);
            $("#close-upload-modal").click();
            uploadReset();
            recall();
            NProgress.done();
        }


        console.log(obj.status + obj.picture);
    }else if(obj.status.trim()!=""){
            let el = `<article>
            <span class="option f-bg">
                <div class="delete f-hanuman">
                    មិនចង់ឃើញ
                </div>
            </span>
            <div class="article-header">
                <div class="article-profile f-bg d-inline-block"
                    style="background-image: url('image/lisa.jpeg')">
    
                </div>
                <div class="article-owner d-inline-block">
                    <span class="_name d-block">chivorn16</span>
                    <span class="_time d-block">${obj.time}</span>
                </div>
            </div>
            <section class="article-body">
                <div class="_status">${obj.status} </div>
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
        </article>`;
        $("#main-container").prepend(el);
            $("#close-upload-modal").click();
            uploadReset();
            recall();
            NProgress.done();
    } 
    
    
    else {
       let toasted= new Toasted({
            position : 'top-center',
            theme : 'alive',
            duration :2000,
            className:"t1"
        })
        toasted.show('សូមបញ្ចូលអត្ថបទឬរូបភាព');
    }

});


 
//like 

$(document).on("click", "._like", () => {
    let e = $(event.target);
    let eLike = e.next();
    e.hasClass('liked') ? eLike.html(eval(eLike.html()) - 1) : eLike.html(eval(eLike.html()) + 1)

    e.toggleClass('liked');
})

//deletion 

$(document).on('click','body',()=>{
    if(!$(event.target).hasClass('option') && !$(event.target).hasClass('delete')){
        $('.delete').hide();
    } if($(event.target).hasClass('option')){
        $(event.target).children().toggle();
    }
});
$(document).on('click','.delete',()=>{
    let temE = $(event.target);
    Swal.fire({
        title: 'តើអ្នកប្រាកដដែរទេ?',
        text: "អ្នកនឹងមិនឃើញមាតិការនេះម្តងទៀតទេ",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'យល់ព្រម',
        cancelButtonText:'អត់ទេ'
      }).then((result) => {
        if (result.value) {
    temE.parent().parent().addClass("animated fadeOut");
    temE.parent().parent().remove();
        }
      })
})

let nightMode=false;
$(document).ready(function() {
    $.shortkeys({
        'Space+N':          function () { 
            
        
            if(!nightMode){
                $("#mode").attr("href","style/dark.css");
                nightMode=true;
            }else {
                $("#mode").attr("href","style/style.css")
                nightMode=false;
            }
         }
    });
});