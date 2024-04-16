import apiClient from "./api-client.ts";

interface Entity {
    id: number;

}
class HttpService {
    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    gets<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>('/products', {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
    get<T>(id: number) {
        const controller = new AbortController();
        const request = apiClient.get<T>(`/products/${id}`, {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
    create<T>(entity: Entity) {
        const controller = new AbortController();
        const request = apiClient.post<T>('/products', entity, {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
    update<T extends Entity>(entity: Entity) {
        const controller = new AbortController();
        const request = apiClient.put<T>(`/products/${entity.id}`, entity, {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
    delete<T>(id: number) {
        const controller = new AbortController();
        const request = apiClient.delete<T>(`/products/${id}`, {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
    partialUpdate<T extends Entity>(entity: Entity) {
        const controller = new AbortController();
        const request = apiClient.patch<T>(`/products/${entity.id}`, entity, {signal: controller.signal})
        return {request, cancel: () => controller.abort()}
    }
}
const createHttpService = (endpoint: string) => new HttpService(endpoint);
export default createHttpService;