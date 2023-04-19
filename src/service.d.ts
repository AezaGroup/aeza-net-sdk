import query from "./query.js";
export declare class Service {
    private token;
    query: typeof query;
    constructor(token: string);
    osList(): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: {
            items: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    products(id?: number): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: {
            items: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    getServer(id?: number): Promise<{
        slug: any;
        message: any;
        data: any;
        total?: undefined;
        response?: undefined;
    } | {
        total: any;
        response: any;
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    getTask(id: number): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: {
            items: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    getCharts(id: number): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: {
            items: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    ctl(params: {
        id: number;
        readonly action: "suspend" | "resume" | "reboot";
    }): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: {
            items: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    changePassword(params: {
        id: number;
        password: string;
    }): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: any;
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    reinstall(params: {
        id: number;
        recipe: number | null;
        os: number;
        password: string;
    }): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: {
            status: any;
            items: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    deleteServer(id: number): Promise<{
        slug: any;
        message: any;
        data: any;
        response?: undefined;
    } | {
        response: any;
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    createServer(params: {
        autoProlong: boolean | false;
        name: string;
        parameters?: {
            recipe: number | null;
            os: number;
            isoUrl: string;
        };
        productId: number;
        readonly term: 'hour' | 'month' | 'year';
    }): Promise<{
        slug: any;
        message: any;
        data: any;
        total?: undefined;
        response?: undefined;
    } | {
        total: any;
        response: {
            items: any;
            transaction: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    getOrder(orderId: number): Promise<{
        slug: any;
        message: any;
        data: any;
        total?: undefined;
        response?: undefined;
    } | {
        total: any;
        response: {
            items: any;
            transaction: any;
        };
        slug?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
}
