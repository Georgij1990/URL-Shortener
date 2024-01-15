const container = document.getElementById('container');
const list = document.getElementById('list-url');
document.getElementById('button-create').addEventListener('click', shortenURL);
const listUrl = document.getElementById('list-url');
let links;
let clicks;

function shortenURL() {
    const url = document.getElementById('input-url').value;
    if (checkURL(url)) {
        const li = document.createElement('li');
        const shortUrl = 'localhost/' +   String( new Date().getTime()).slice(-5);
        li.innerHTML = `<a target="_blank" href="${url}">${shortUrl}</a> - ${url} <span> - Clicks: 0</span>`;
        list.appendChild(li);
        const newLink = li.querySelector('a');
        newLink.addEventListener('click', function(ev) {
            countClicks(newLink);
        });
        container.innerHTML = '';
    } else {
        container.innerHTML = '<p>Please enter a valid url</p>'
        //removeChildren();
    }
}

function checkURL(url) {
    const pattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)((\S*)?)$/;
    return pattern.test(url)
}

function removeChildren() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function countClicks(link) {
    const li = link.parentNode;
    const span = li.querySelector('span');
    let regEx = /\d+/;
    let textContent = span.textContent;
    console.log(textContent);
    const clicks = parseInt(textContent.match(regEx)[0]) + 1;
    textContent = textContent.replace(regEx, String(clicks));
    span.textContent = textContent;
}