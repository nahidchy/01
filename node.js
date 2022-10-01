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
    //  if (typeof text === 'number') {
    //      alert('input a valid name');
    // }
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
document.getElementById('input-delete').addEventListener('keyup', function (event) {
    const text = event.target.value;

    if (text === 'delete') {
        document.getElementById('delete-btn').removeAttribute('disabled')
    }
    else {
        document.getElementById('delete-btn').setAttribute('disabled',true)
    }
})
document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('text-2').style.display = 'none';
})