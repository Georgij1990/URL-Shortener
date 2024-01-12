const container = document.getElementById('container');
const list = document.getElementById('list-url');
document.getElementById('button-create').addEventListener('click', shortenURL);

function shortenURL() {
    const url = document.getElementById('input-url').value;
    if (checkURL(url)) {
        const li = document.createElement('li');
        const shortUrl = 'localhost/' +   String( new Date().getTime()).slice(-5);
        li.innerHTML = `<a target="_blank" href="${url}">${shortUrl}</a> - ${url}`;
        list.appendChild(li);
        container.innerHTML = '';
    } else {
        container.innerHTML = '<p>Please enter a valid url</p>'
        removeChildren();
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