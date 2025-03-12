// Напишите функцию domainName(url), которая принимает URL-адрес в виде строки и возвращает
// только доменное имя этого адреса.

function domainName(url) {
    url = url.replace(/(^\w+:|^)\/\//, '');
    url = url.split('/')[0];
    url = url.replace(/^www\./, '');

    return url.split('.')[0];
}

domainName("http://google.com")
