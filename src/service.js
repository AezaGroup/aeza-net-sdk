import query from "./query.js";
export class Service {
    constructor(token) {
        this.query = query;
        this.token = token;
    }
    // The main methods for working with the API AEZA.NET:
    async osList() {
        const { data, error } = await this.query(this.token, {
            method: "GET",
            route: `os`,
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
    async products(id) {
        const { data, error } = await this.query(this.token, {
            method: "GET",
            route: `services/products${id ? "/" + id : ""}`,
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
                items: data.items.map((items) => {
                    var _a;
                    return items && {
                        id: items.id,
                        title: items.name,
                        oslist: (_a = items.payload) === null || _a === void 0 ? void 0 : _a.oslist,
                        prices: items.prices
                    };
                })
            }
        };
    }
    // Execute requests for services:
    async getServer(id) {
        const { data, error } = await this.query(this.token, {
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
    async getTask(id) {
        const { data, error } = await this.query(this.token, {
            method: "GET",
            route: `services/${id}/tasks`,
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
    async getCharts(id) {
        const { data, error } = await this.query(this.token, {
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
    // Service
    async ctl(params) {
        const { data, error } = await this.query(this.token, {
            method: "POST",
            route: `services/${params.id}/ctl`,
            data: {
                action: params.action
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
    async changePassword(params) {
        const { data, error } = await this.query(this.token, {
            method: "POST",
            route: `services/${params.id}/changePassword`,
            data: { password: params.password }
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
    async reinstall(params) {
        const { data, error } = await this.query(this.token, {
            method: "POST",
            route: `services/${params.id}/reinstall`,
            data: {
                os: params.os,
                recipe: params.recipe,
                password: params.password
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
                status: data.status || 'error',
                items: data.items || {}
            }
        };
    }
    async deleteServer(id) {
        const { data, error } = await this.query(this.token, {
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
    async createServer(params) {
        const { data, error } = await this.query(this.token, {
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
    async getOrder(orderId) {
        const { data, error } = await this.query(this.token, {
            method: "GET",
            route: `services/orders/${orderId}`
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
}
//# sourceMappingURL=service.js.map