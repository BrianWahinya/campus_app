import configs from "../helpers/configs";

const { host } = configs;
function fetchNews (endpoint, data, callback){
    const elems = {
        getAllByLang: {file:"newsGetAllByLang.php", method: "POST"},
        getAll: {file:"newsGetAll.php", method: "GET"},
    }
    const elem = elems[endpoint];
    console.log(elem)
    
    const url = `${host}${elem.file}`;
    console.log(url)

    // fetch(dataUrl, settings)
    // .then(response => {
    //   if (response.ok) {
    //     response.json().then(json => {
    //       // console.log("data", json)
    //       callback(json)
    //     });
    //   }
    // })
    // const formData = new FormData(data);

    fetch(`${host}newsGetAllByLang.php`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((resp) => resp.json())
        .then((datos) => {
            callback(datos)
        })
        .catch((e) => {
            console.error(e)
        })

    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: data
    // }).then((resp) => {
    //     if(resp.ok){
    //         resp.json().then((json) => {
    //             callback(json)
    //         })
    //     }
    // })



    // if(elem.method === "POST" || data){

    //     fetch(url, elem.method === "POST" && {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((resp) => {
    //         if(resp.ok){
    //             return resp.json()
    //         }
    //     }).then((data) => {
    //         callback(data)
    //     })
    // }else{
    //     const response = await fetch(url);
    //     const jsondata = await response.json();// console.log("data", data);
    //     return await jsondata;
    // }
    
};

export default fetchNews;