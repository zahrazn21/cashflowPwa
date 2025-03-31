export const openDB = (dbName: string, storeName: string): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
  
      request.onerror = (event) => {
        console.error("❌ خطا در باز کردن دیتابیس:", event);
        reject(event);
      };
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      request.onsuccess = (event: any) => {
        console.log("✅ دیتابیس باز شد.");
        resolve(event.target.result);
      };
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      request.onupgradeneeded = (event: any) => {
        console.log("📦 ساخت دیتابیس و استور جدید...");
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      };
    });
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const saveData = async (dbName: string, storeName: string, data: any): Promise<void> => {
    const db = await openDB(dbName, storeName);
  
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
  
      // پاک کردن دیتابیس قبلی قبل از ذخیره جدید
      store.clear();
  
      const request = store.add({ id: "WeeklyScheduleData", value: data });
  
      request.onsuccess = () => {
        console.log("✅ داده‌ها ذخیره شدند.");
        resolve();
      };
  
      request.onerror = (event) => {
        console.error("❌ خطا در ذخیره داده‌ها:", event);
        reject(event);
      };
    });
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const getData = async (dbName: string, storeName: string): Promise<any> => {
    const db = await openDB(dbName, storeName);
  
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get("WeeklyScheduleData");
  
      request.onsuccess = () => {
        if (request.result) {
          console.log("📦 داده‌ها از IndexedDB دریافت شدند.");
          resolve(request.result.value);
        } else {
          console.log("❌ داده‌ای پیدا نشد.");
          resolve(null);
        }
      };
  
      request.onerror = (event) => {
        console.error("❌ خطا در دریافت داده‌ها:", event);
        reject(event);
      };
    });
  };
  