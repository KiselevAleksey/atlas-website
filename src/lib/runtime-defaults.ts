export const DEFAULT_ATLAS_SITE_URL = "https://atlas-website.vercel.app";
export const DEFAULT_WIDGET_API_BASE_URL = "https://search-bar-api-project-phi.vercel.app";
export const DEFAULT_WIDGET_SCRIPT_URL = `${DEFAULT_WIDGET_API_BASE_URL}/widgets/atlas-search-widget.js`;
export const DEFAULT_WIDGET_DESTINATION_BASE_URL = DEFAULT_ATLAS_SITE_URL;
export const DEFAULT_WIDGET_CLIENT_ID = "atlas-default";

export function normalizeBaseUrl(value: string): string {
  return value.replace(/\/+$/, "");
}
