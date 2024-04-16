
import createHttpService from "./http-service.ts";

// class ProductService {
//     getProducts() {
//         const controller = new AbortController();
//         const request = apiClient.get('/products', {signal: controller.signal})
//     return {request, cancel: () => controller.abort()}
//     }
// }
// export default new ProductService();

export default createHttpService('/products');