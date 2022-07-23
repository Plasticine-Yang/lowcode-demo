import { createPinia } from "pinia";
import { App } from "vue";

export default function setupPinia(app: App) {
  const pinia = createPinia();
  app.use(pinia);
}

export * from "./modules";
