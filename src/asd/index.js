import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { request, locals, url } = context;

  // Get user's preferred language from the browser headers
  const acceptLanguage = request.headers.get("accept-language") || "en";
  const preferredLang = acceptLanguage.split(",")[0].split("-")[0]; // Extract "en" or "mn"

  // Supported locales from your config
  const supportedLocales = ["en", "mn"];
  const locale = supportedLocales.includes(preferredLang)
    ? preferredLang
    : "en";

  // Save locale in locals (accessible in Astro pages)
  locals.locale = locale;

  // Redirect only if the user is on the root "/"
  if (url.pathname === "/") {
    return new Response(null, {
      status: 302,
      headers: { Location: `/${locale}` },
    });
  }

  return next();
});
