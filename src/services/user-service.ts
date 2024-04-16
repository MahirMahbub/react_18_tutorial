
import createHttpService from "./http-service.ts";

// class UserService {
//     getUsers() {
//         const controller = new AbortController();
//         const request = apiClient.get('/products', {signal: controller.signal})
//     return {request, cancel: () => controller.abort()}
//     }
// }

export default createHttpService('/products');