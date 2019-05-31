function recall(){
    $("textarea").emojioneArea({
    events: {
      keyup: function(editor, event) {
      	// catches everything but enter
        if (event.which == 13) {
            console.log(editor.parent().parent());
            let cmt = editor.html();
            let e=editor.parent().parent();
            if(e.hasClass('comment-box')){
                let preComment = `  <div class="comment">
                <a href="#"><span class="pf d-inline-block f-bg" style="background-image: url('https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/37192037_829147917282978_3511163432659320832_n.jpg?_nc_cat=100&_nc_eui2=AeEIsiPgLOxxEtCwUBrBA5x00pZ0xRc4we56tMbwAcrtrBKviV0PXTDuf6pG2b-Z62MQwpuwwGgpCLZO44oEzFnsLeAAE3Zev5MXQSv2zu23zw&_nc_ht=scontent.fpnh8-2.fna&oh=6c3c4e9287532ab52b80ff1e7f686dd0&oe=5D59315C')"></span><span class="comment-owner--">Monyoudom</span></a>
                <span class="comment--">${cmt}</span>
                <span class="reply-btn d-inline-block f-bg"></span>
                <div class="reply-container">
                </div>
            </div>`;
                console.log(e.parent().children('.comment-container').append(preComment));

            }else if(e.hasClass('reply-container')){
                let preReply =`<div class="reply">
                <a href="#">
                        <span class="pf d-inline-block f-bg" style="background-image: url('https://scontent.fkos1-1.fna.fbcdn.net/v/t1.0-1/59667299_2234179753341247_5532590228608385024_n.jpg?_nc_cat=111&_nc_ht=scontent.fkos1-1.fna&oh=1afe766a03b3a7a61294043cd8c49309&oe=5D61633A')"></span>
                    <span class="comment-owner--">nich</span></a>
                <span class="comment--">${cmt}</span>
        </div>`;
                console.log(e.prepend(preReply));
            }else {
                console.log(e);
            }
            editor.text('');
          
          // event.preventDefault();
          // return false;
        } else {
        	console.log(editor.parent().parent()[0].className);
        }
      },
      ready: function() {
        this.editor.on("keyup", function() {
          // this also will works
          console.log("jQuery keypress event handler");
        });
      }
    }})

}

$("textarea").emojioneArea({
    events: {
      keyup: function(editor, event) {
      	// catches everything but enter
        if (event.which == 13) {
            console.log(editor.parent().parent());
            let cmt = editor.html();
            let e=editor.parent().parent();
            if(e.hasClass('comment-box')){
                let preComment = `  <div class="comment">
                <a href="#"><span class="pf d-inline-block f-bg" style="background-image: url('https://scontent.fpnh8-2.fna.fbcdn.net/v/t1.0-9/37192037_829147917282978_3511163432659320832_n.jpg?_nc_cat=100&_nc_eui2=AeEIsiPgLOxxEtCwUBrBA5x00pZ0xRc4we56tMbwAcrtrBKviV0PXTDuf6pG2b-Z62MQwpuwwGgpCLZO44oEzFnsLeAAE3Zev5MXQSv2zu23zw&_nc_ht=scontent.fpnh8-2.fna&oh=6c3c4e9287532ab52b80ff1e7f686dd0&oe=5D59315C')"></span><span class="comment-owner--">Monyoudom</span></a>
                <span class="comment--">${cmt}</span>
                <span class="reply-btn d-inline-block f-bg"></span>
                <div class="reply-container">
                </div>
            </div>`;
                console.log(e.parent().children('.comment-container').append(preComment));

            }else if(e.hasClass('reply-container')){
                let preReply =`<div class="reply">
                <a href="#">
                        <span class="pf d-inline-block f-bg" style="background-image: url('https://scontent.fkos1-1.fna.fbcdn.net/v/t1.0-1/59667299_2234179753341247_5532590228608385024_n.jpg?_nc_cat=111&_nc_ht=scontent.fkos1-1.fna&oh=1afe766a03b3a7a61294043cd8c49309&oe=5D61633A')"></span>
                    <span class="comment-owner--">nich</span></a>
                <span class="comment--">${cmt}</span>
        </div>`;
                console.log(e.prepend(preReply));
            }else {
                console.log(e);
            }
            editor.text('');
          
          // event.preventDefault();
          // return false;
        } else {
        	console.log(editor.parent().parent()[0].className);
        }
      },
      ready: function() {
        this.editor.on("keyup", function() {
        });
      }
    }})




    $(document).on('click','.reply-btn',()=>{
        let isHasTextArea=$(event.target).parent().children().children().last().hasClass("emojionearea");
        if(!isHasTextArea){
            let html = `<textarea name="" type="text" class="comment-text--"
            placeholder="Add your comment..."></textarea>`;
            $(event.target).parent().children('.reply-container').append(html);
            recall();
        }
    })
    //upload modal
    // $("#upload-modal").modal({ escapeClose: true, clickClose: false, showClose: false, fadeDelay: 0.10 });
    // $(document).on('click','body',()=>{
       
    // })