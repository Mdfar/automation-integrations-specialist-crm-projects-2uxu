/**

Custom JS for Make.com 'Run Script' module

Validates and sanitizes lead data before CRM ingestion */

function sanitize(input) { if (!input) return "N/A"; return input.trim().replace(/[^\w\s@.-]/gi, ''); }

const sanitizedEmail = sanitize(item.email).toLowerCase(); const isValidEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(sanitizedEmail);

return { sanitizedEmail, isValidEmail, timestamp: new Date().toISOString() };