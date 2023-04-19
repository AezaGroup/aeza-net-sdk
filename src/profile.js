import query from "./query.js";
export class Profile {
    constructor(token) {
        this.query = query;
        this.token = token;
    }
    // The main methods for working with the API AEZA.NET:
    async get() {
        const { data, error } = await this.query(this.token, {
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
    async limits() {
        const { data, error } = await this.query(this.token, {
            method: "GET",
            route: `services/limits`,
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
                items: data.items.map((items) => items && {
                    title: items.name,
                    groups: items.groups,
                    available: items.available,
                    used: items.used
                })
            }
        };
    }
}
//# sourceMappingURL=profile.js.map