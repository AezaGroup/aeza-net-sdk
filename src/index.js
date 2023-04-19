import { Profile } from './profile.js';
import { Service } from './service.js';
export default class AezaAPI {
    constructor(token) {
        this.service = new Service(token);
        this.profile = new Profile(token);
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
export function profile(token) {
    return new Profile(token);
}
export function service(token) {
    return new Service(token);
}
//# sourceMappingURL=index.js.map