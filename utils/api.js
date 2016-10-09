const API_URL = 'http://json.bmbstack.com'

function fetchApi (type, params) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${API_URL}/${type}`,
            data: Object.assign({},params),
            header:{'Content-type':'application/json'},
            success:resolve,
            fail:reject
        })
    })
} 

module.exports = {
    getData(type) {
        return fetchApi(type).then(res=>res.data);
    }
}

