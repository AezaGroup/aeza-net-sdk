import query from "./query.js";
export declare class Profile {
    private token;
    query: typeof query;
    constructor(token: string);
    get(): Promise<{
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
    limits(): Promise<{
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
}
