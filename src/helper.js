import {useMediaQuery} from 'react-responsive'

export const useMobile = _ => {
	const query = useMediaQuery({query:`(max-width:1224px)`})
	const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i 
	const test = _ => regex.test(navigator.userAgent) || query
	return {test}	
}

export const kv_get = k => {
    const v = window.localStorage.getItem(k)
    return v ? JSON.parse(v) : v
}

export const kv_set = (k,v) => window.localStorage.setItem(k, JSON.stringify(v))

export const kv_clear = k => window.localStorage.removeItem(k)

export const http = (method,path,auth,data) => new Promise((res, rej)=>{

	console.log(`helper.http method=${method} path=${path} data=${data}`)
	
	const xhr = new XMLHttpRequest()
	xhr.onload = _ => {
		if (xhr.status === 200) {
			try{ res(JSON.parse(xhr.responseText)) }
			catch(e) {rej(xhr)}
		} else rej(xhr)
	}
	xhr.open(method, path, true)
	xhr.setRequestHeader('Content-Type', 'application/json')
	if (auth) xhr.setRequestHeader('Authorization',auth)
	if (data) xhr.send(JSON.stringify(data))
    else xhr.send()
})

export const http_upload = (path,auth,file)  => new Promise((res, rej) => {
	
	console.log(`helper.http_upload  path=${path}`)
	
	const data = new FormData()
    data.append('image', file, file.name)
	const xhr = new XMLHttpRequest()
	xhr.onload = _ => {
        if (xhr.status === 200) {
			try{ res(JSON.parse(xhr.responseText)) }
			catch(e) {rej(xhr)}
		} else rej(xhr)
    }
    xhr.open('POST', path, true);
	if (auth) xhr.setRequestHeader('Authorization',auth)
    xhr.send(data);
})