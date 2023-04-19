import axios from 'axios';
export default async function query(token, params) {
    const { data } = await axios({
        method: params.method,
        url: `https://core.aeza.net/api/${params.route}`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            "X-API-Key": token
        },
        data: params.data || {}
    });
    return data;
}
//# sourceMappingURL=query.js.map