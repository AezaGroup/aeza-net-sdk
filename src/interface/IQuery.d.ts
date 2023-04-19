export default interface IQuery {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    route: string;
    data?: object;
}
