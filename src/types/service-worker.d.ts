// src/types/service-worker.d.ts
export {};

declare global {
  interface ServiceWorkerGlobalScope {
    caches: CacheStorage;
    skipWaiting(): Promise<void>;
    clients: Clients;
    addEventListener(type: 'install', listener: (this: ServiceWorkerGlobalScope, event: InstallEvent) => void): void;
    addEventListener(type: 'activate', listener: (this: ServiceWorkerGlobalScope, event: ActivateEvent) => void): void;
    addEventListener(type: 'fetch', listener: (this: ServiceWorkerGlobalScope, event: FetchEvent) => void): void;
  }

  interface ExtendableEvent extends Event {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    waitUntil(promise: Promise<any>): void;
  }

  type InstallEvent = ExtendableEvent
  type ActivateEvent = ExtendableEvent

  interface FetchEvent extends ExtendableEvent {
    readonly request: Request;
    respondWith(response: Response | Promise<Response>): void;
  }

  // eslint-disable-next-line no-var
  declare var self: ServiceWorkerGlobalScope;
}
