import { Profile } from './profile.js';
import { Service } from './service.js';
export default class AezaAPI {
    service: Service;
    profile: Profile;
    constructor(token: string);
    get [Symbol.toStringTag](): string;
}
export declare function profile(token: string): Profile;
export declare function service(token: string): Service;
