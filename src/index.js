import axios from 'axios';
export default class AezaAPI {
    constructor(token) {
        this.token = token;
    }
    async services(id) {
        const { data, error } = await this.query({
            token: this.token,
            method: "GET",
            route: `services${id ? "/" + id : ""}`
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            total: data.total,
            response: data.total > 1 ? data.items : data.items[0]
        };
    }
    async charts(id) {
        const { data, error } = await this.query({
            token: this.token,
            method: "POST",
            route: `services/${id}/charts`,
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            response: {
                items: data.items
            }
        };
    }
    async changePassword(id, password) {
        const { data, error } = await this.query({
            token: this.token,
            method: "POST",
            route: `services/${id}/changePassword`,
            data: { password }
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            response: data
        };
    }
    async restart(id) {
        const { data, error } = await this.query({
            token: this.token,
            method: "POST",
            route: `services/${id}/ctl`,
            data: {
                action: 'reboot'
            }
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            response: {
                items: data.items
            }
        };
    }
    async delete(id) {
        const { data, error } = await this.query({
            token: this.token,
            method: "DELETE",
            route: `services/${id}`,
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            response: data
        };
    }
    async order(params) {
        const { data, error } = await this.query({
            token: this.token,
            method: "POST",
            route: `services/orders`,
            data: {
                count: 1,
                method: "balance",
                parameters: params.parameters || {
                    recipe: null,
                    os: 940,
                    isoUrl: ""
                },
                ...params
            } || {}
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            total: data.items.length,
            response: {
                items: data.items,
                transaction: data.transaction
            }
        };
    }
    async getProfile() {
        const { data, error } = await this.query({
            token: this.token,
            method: "GET",
            route: 'accounts?current=1&edit=true&extra=1'
        });
        if (error) {
            return {
                slug: error.slug,
                message: error.message,
                data: error.data || {}
            };
        }
        return {
            total: data.total,
            response: data.total > 1 ? data.items : data.items[0]
        };
    }
    async query(params) {
        const { data } = await axios({
            method: params.method,
            url: `https://core.aeza.net/api/${params.route}`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                "X-API-Key": params.token
            },
            data: params.data || {}
        });
        return data;
    }
}
//# sourceMappingURL=index.js.map