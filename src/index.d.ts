import IQuery from './interface/IQuery';
export default class AezaAPI {
    token: string;
    constructor(token: string);
    services(id?: number): Promise<{
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
    getLimits(): Promise<{
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
    getOs(): Promise<{
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
    charts(id: number): Promise<{
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
    changePassword(id: number, password: string): Promise<{
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
    restart(id: number): Promise<{
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
    delete(id: number): Promise<{
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
    order(params: {
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
    getProfile(): Promise<{
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
    query(params: IQuery): Promise<any>;
}
