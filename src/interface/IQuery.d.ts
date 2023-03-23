export default interface IQuery {
    token: string;
    method: string;
    route: string;
    data?: object;
}
