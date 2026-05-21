/**
 * Security helpers for input sanitization, validation, and spam detection.
 */

/**
 * Escapes HTML characters to prevent XSS attacks in email template rendering.
 */
export function escapeHTML(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validates the structure of an email address.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 compliant regex for basic email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) return false;
  
  // Prevent CRLF injection in email headers
  if (email.includes('\r') || email.includes('\n')) return false;
  
  return true;
}

/**
 * Checks if the content is likely spam.
 * - Checks for too many links (common in bot spam)
 * - Checks for common blacklisted spam keywords
 */
export function isSpamContent(text: string): boolean {
  if (!text || typeof text !== 'string') return false;

  // 1. Check link count. Spam submissions usually contain many links.
  const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const matches = text.match(linkRegex);
  if (matches && matches.length > 2) {
    return true;
  }

  // 2. Check for common spam keywords (case-insensitive)
  const spamKeywords = [
    'viagra',
    'casino',
    'lottery winner',
    'seo ranking',
    'buy traffic',
    'cryptocurrency investment',
    'earn money fast',
    'work from home opportunity',
    'cheap pharmacy',
    'adult dating',
  ];

  const lowerText = text.toLowerCase();
  for (const keyword of spamKeywords) {
    if (lowerText.includes(keyword)) {
      return true;
    }
  }

  return false;
}
