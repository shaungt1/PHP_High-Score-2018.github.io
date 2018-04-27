
//AJAX API To get High Scores
var scoreAPI = new XMLHttpRequest();

scoreAPI .onreadystatechange = function () {
if (scoreAPI .readyState === 4) { // readyState 4 means data has been retrieved
if (scoreAPI .status === 200) { // 200 means everything went well
var p = document.getElementById('ajaxResult');
p.textContent = xhr.responseText; // output high scores

} else { // something went wrong
console.log('Error: ' + scoreAPI .status);
}
}
}

scoreAPI .open('get', '/ajax/test-1/', true); // prepares the request
scoreAPI .send(); // sends the request
