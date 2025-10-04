// export const prerender = true

import { waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import '$lib/i18n'; // Import to initialize

export const load: LayoutLoad = async () => {
  // We only need to wait for the locale to be loaded.
  // The initial locale is now set correctly in i18n.ts.
  await waitLocale();
};