var strUrl = "https://api.openweathermap.org/data/2.5/weather?q=osaka,jp&units=metric&lang=ja&units=metric&lang=ja&appid=dcdaa492305e6d156dfca6b0119acf60";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
	// 非同期通信（Ajax）
    // readyState 4: リクエスト終了, status 200:通信成功
    if (this.readyState == 4 && this.status == 200) {
        var data = this.response;
		
		//  湿度
		document.getElementById('humidity').innerHTML = data.main.humidity;
    }
}
xmlhttp.open("GET", strUrl, true);
xmlhttp.responseType = 'json'; // JSONを取得するために必要
xmlhttp.send();


var strUrl2 = "https://api.openweathermap.org/data/2.5/weather?q=Hyogo,jp&units=metric&lang=ja&units=metric&lang=ja&appid=dcdaa492305e6d156dfca6b0119acf60";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
	// 非同期通信（Ajax）
    // readyState 4: リクエスト終了, status 200:通信成功
    if (this.readyState == 4 && this.status == 200) {
        var data = this.response;
		
		//  湿度
		document.getElementById('humidity2').innerHTML = data.main.humidity;
    }
}
xmlhttp.open("GET", strUrl2, true);
xmlhttp.responseType = 'json'; // JSONを取得するために必要
xmlhttp.send();
