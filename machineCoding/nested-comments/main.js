import comments from "./data/comments.js";

const renderComments = (comments, commentSection) => {
  commentSection.innerHTML = comments
    .map((comment) => {
      return `
      <div class="comment" data-id=${comment.id}>
        <div class="comment-header">
          <strong>${comment.userName}</strong>
        </div>
        <div class="comment-body">
          ${comment.comment}
         <span class="reply-btn">Reply</span>
        </div>
        ${
          comment.replies.length > 0
            ? `<div class="replies">${renderReplies(comment.replies)}</div>`
            : ""
        }
      </div>
      `;
    })
    .join("");
};

const renderReplies = (replies) => {
  return replies
    .map((reply) => {
      return `
      <div class="reply" data-id=${reply.id}>
        <div class="comment-header">
          <strong>${reply.userName}</strong>
        </div>
        <div class="comment-body">
          ${reply.comment}
          <span class="reply-btn" >Reply</span>
        </div>
        ${
          reply.replies.length > 0
            ? `<div class="replies">${renderReplies(reply.replies)}</div>`
            : ""
        }
      </div>
      `;
    })
    .join("");
};

const commentSection = document.getElementById("comments-section");
renderComments(comments, commentSection);


const handleReply = (e) => {
const commentElement=e.target.closest(".comment, .reply");
const commentElementId=commentElement.getAttribute('data-id');
if(commentElementId){
  commentElement.innerHTML="hello"
}
console.log(commentElementId)
};
const replyButtons = document.querySelectorAll(".reply-btn");
replyButtons.forEach((btn) => {
  btn.addEventListener("click", handleReply);
});
