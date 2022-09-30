function nahid() {
    document.body.style.backgroundColor = "black";
}
document.getElementById("green").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
})


document.getElementById('change').addEventListener("click", function () {
    document.getElementById('text').innerText = 'nahid';
})
document.getElementById('button-update').addEventListener('click', function () {
    const inputField = document.getElementById('input');
    const inputText = inputField.value;
    const text = document.getElementById('text-1');
    text.innerText = inputText;
})
document.getElementById('enter').addEventListener('click', function () {
    const inputField = document.getElementById('input-number');
    const inputNumber = inputField.value;
    const number = document.getElementById('number-text');
    number.innerText = inputNumber;
    inputField.value = '';
})
document.getElementById('post').addEventListener('click', function () {
    const CommentBox = document.getElementById('comment-box');
    const newComment = CommentBox.value;
    const allComment=document.getElementById('all-comment')
    const h = document.createElement('h3');
    h.innerText = newComment;
    allComment.appendChild(h);
    CommentBox.value = '';
})