// import { browser } from '$app/environment';
// import { init, register } from 'svelte-i18n';

// const defaultLocale = 'en';

// register('en', () => import('../locales/en.json'));
// register('vi', () => import('../locales/vi.json'));

// init({
//   fallbackLocale: defaultLocale,
//   // Check localStorage first, then browser, then default
//   initialLocale: browser ? window.localStorage.getItem('locale') || window.navigator.language : defaultLocale,
// });


// import { register, init, getLocaleFromNavigator } from "svelte-i18n";
// import { browser } from "$app/environment";

// // Register JSON translations
// register("en", () => import("../locales/en.json"));
// register("vi", () => import("../locales/vi.json"));

// init({
//   fallbackLocale: "en",
//   initialLocale: browser
//     ? localStorage.getItem("locale") || getLocaleFromNavigator()
//     : "en" // default when running on server
// });


// import { register, init, getLocaleFromNavigator } from "svelte-i18n";
// import { browser } from "$app/environment";

// register("en", () => import("../locales/en.json"));
// register("vi", () => import("../locales/vi.json"));

// init({
//   fallbackLocale: "en",
//   initialLocale: localStorage.getItem("locale") || getLocaleFromNavigator(),
// });


// import { register, init, getLocaleFromNavigator } from "svelte-i18n";

// // Register translations (lazy loading JSON files)
// register("en", () => import("../locales/en.json"));
// register("vi", () => import("../locales/vi.json"));

// init({
//   fallbackLocale: "en",
//   initialLocale: localStorage.getItem("locale") || getLocaleFromNavigator(),
// });



import { register, init, getLocaleFromNavigator } from "svelte-i18n";
import { browser } from "$app/environment";

// Register JSON translations
register("en", () => import("../locales/en.json"));
register("vi", () => import("../locales/vi.json"));

init({
  fallbackLocale: "en",
  initialLocale: browser
    ? localStorage.getItem("locale") || getLocaleFromNavigator()
    : "en" // default when running on server
});
