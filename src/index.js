var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from 'axios';
var AezaAPI = /** @class */ (function () {
    function AezaAPI(token) {
        this.token = token;
    }
    AezaAPI.prototype.services = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "GET",
                            route: "services".concat(id ? "/" + id : "")
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                total: data.total,
                                response: data.total > 1 ? data.items : data.items[0]
                            }];
                }
            });
        });
    };
    AezaAPI.prototype.charts = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "POST",
                            route: "services/".concat(id, "/charts")
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                response: {
                                    items: data.items
                                }
                            }];
                }
            });
        });
    };
    AezaAPI.prototype.changePassword = function (id, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "POST",
                            route: "services/".concat(id, "/changePassword"),
                            data: { password: password }
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                response: data
                            }];
                }
            });
        });
    };
    AezaAPI.prototype.restart = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "POST",
                            route: "services/".concat(id, "/ctl"),
                            data: {
                                action: 'reboot'
                            }
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                response: {
                                    items: data.items
                                }
                            }];
                }
            });
        });
    };
    AezaAPI.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "DELETE",
                            route: "services/".concat(id)
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                response: data
                            }];
                }
            });
        });
    };
    AezaAPI.prototype.order = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "POST",
                            route: "services/orders",
                            data: __assign({ count: 1, method: "balance", parameters: params.parameters || {
                                    recipe: null,
                                    os: 940,
                                    isoUrl: ""
                                } }, params) || {}
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                total: data.items.length,
                                response: {
                                    items: data.items,
                                    transaction: data.transaction
                                }
                            }];
                }
            });
        });
    };
    AezaAPI.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.query({
                            token: this.token,
                            method: "GET",
                            route: 'accounts?current=1&edit=true&extra=1'
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, {
                                    slug: error.slug,
                                    message: error.message,
                                    data: error.data || {}
                                }];
                        }
                        return [2 /*return*/, {
                                total: data.total,
                                response: data.total > 1 ? data.items : data.items[0]
                            }];
                }
            });
        });
    };
    AezaAPI.prototype.query = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios({
                            method: params.method,
                            url: "https://core.aeza.net/api/".concat(params.route),
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded',
                                "X-API-Key": params.token
                            },
                            data: params.data || {}
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return AezaAPI;
}());
export default AezaAPI;
