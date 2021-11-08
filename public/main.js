var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var commentButton = document.getElementsByClassName("sendComment");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'thumbUp':thumbUp,
            'id':id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
// nisha helped me get my comments working
Array.from(commentButton).forEach(function (element) {
  element.addEventListener("click", function () {
    const comment = document.querySelector(".userComment").value;
    const postId = element.dataset.value;

    console.log("postId = " + postId);
    console.log(comment);

    fetch("submit", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: comment,
        postId: postId,
      }),
    });
    window.location.reload(true);
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
