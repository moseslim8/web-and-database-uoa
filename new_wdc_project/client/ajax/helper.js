module.exports = {
    async get (path, successCallback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200){
                successCallback(JSON.parse(this.responseText), this);
            }
        };
        xhttp.open('GET', '/api'+path, true);
        xhttp.send();
    }
};