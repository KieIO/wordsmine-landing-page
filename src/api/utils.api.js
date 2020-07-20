export const API_URL = 'https://appword.kie.io'

export const serializeForm = (data) => {
    let rs = ""
    for (const k in data) {
        rs += `${k}=${encodeURIComponent(data[k])}&`

    }
    return rs.substr(0, rs.length - 1) // remove '&' at the end
}