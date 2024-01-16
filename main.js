const container = document.getElementById('container');
const list = document.getElementById('list-url');
document.getElementById('button-create').addEventListener('click', shortenURL);
document.getElementById('button-delete').addEventListener('click', handleDeleteButton);

function shortenURL() {
    const url = document.getElementById('input-url').value;
    if (checkURL(url)) {
        const li = document.createElement('li');
        const shortUrl = 'localhost/' + String(new Date().getTime()).slice(-5);
        li.innerHTML = `<a target="_blank" href="${url}">${shortUrl}</a> - ${url} <span> - Clicks: 0</span>`;
        list.appendChild(li);
        const newLink = li.querySelector('a');
        newLink.addEventListener('click', function (ev) {
            countClicks(newLink);
        });
        container.innerHTML = '';
    } else {
        container.innerHTML = '<p>Please enter a valid url</p>'

    }
}

function handleDeleteButton() {
    const url = document.getElementById('input-url').value;
    if (url) {
        removeUrls(url);
    } else {
        removeUrls();
    }
}

function checkURL(url) {
    const pattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)((\S*)?)$/;
    return pattern.test(url)
}

function removeUrls(url) {
    if (arguments.length > 0) {
        let node = list.lastChild;
        while (node) {
            let prevNode = node.previousSibling;
            if (String(node.textContent).includes(url)) {
                list.removeChild(node);
            }
            node = prevNode;
        }
    } else {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
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