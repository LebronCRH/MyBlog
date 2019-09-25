import {
	baseUrl
} from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch',requestBaseUrl='',posttype='') => {
	type = type.toUpperCase();
	var elmBaseUrl='http://cangdu.org:8001';
	if(requestBaseUrl=='')
	{
		url = baseUrl + url;
	}
	else if(requestBaseUrl=='elm')
	{
		url=elmBaseUrl+url;
	}

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	// if (window.fetch && method == 'fetch') {
	// 	var requestConfig = {
	// 		// credentials: 'include',
	// 		credentials: 'true',
	// 		method: type,
	// 		headers: {
	// 			// 'Access-Control-Allow-Origin':'*',
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		mode: "cors",
	// 		cache: "force-cache"
	// 	}

	// 	if (type == 'POST'&&posttype!='formdata') {
	// 		Object.defineProperty(requestConfig, 'body', {
	// 			value: JSON.stringify(data)
	// 		})
	// 	}
	// 	else if(type == 'POST'&&posttype=='formdata')
	// 	{
	// 		 requestConfig = {
	// 			// credentials: 'include',
	// 			credentials: 'true',
	// 			method: type,
	// 			mode: "cors",
	// 			cache: "force-cache"
	// 		}
	// 		Object.defineProperty(requestConfig, 'body', {
	// 			value: data
	// 		});

	// 	}	
	// 	try {
	// 		const response = await fetch(url, requestConfig);
	// 		const responseJson = await response.json();
	// 		return responseJson
	// 	} catch (error) {
	// 		throw new Error(error)
	// 	}
	// } else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST'&&posttype!='formdata') {
				sendData = JSON.stringify(data);
			}
			else if(type == 'POST'&&posttype=='formdata'){
				sendData = data;
			}

			requestObj.open(type, url, true);
			if(type=='POST'&&posttype!='formdata')
			{
				requestObj.setRequestHeader("Content-Type", "application/json");
			}
			// requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	// }
}