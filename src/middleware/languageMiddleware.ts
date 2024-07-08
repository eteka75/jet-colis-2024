// // middleware/languageMiddleware.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { availableLanguages } from '../intl';

// export function languageMiddleware(request: NextRequest) {
//   let locale = request.cookies.get('lang') || 'en'; // Default to English if language cookie is not set
//   if (!availableLanguages.includes(locale)) {
//     locale = 'en'; // Fallback to English if an unsupported language is detected
//   }

//   // Add the locale to the request object
//   (request as any).locale = locale;

//   return NextResponse.next();
// }
