/*
 * Sends a form submission to the Google Apps Script web app that writes to your Google Sheet.
 * The body is sent as text/plain on purpose: it avoids a CORS preflight, which Apps Script does not support.
 */
export const SHEETS_URL = import.meta.env.VITE_SHEETS_URL || '';

export async function submitLead(payload, url = SHEETS_URL) {
  const res = await fetch(url, {
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify({ ...payload, page: window.location.href }),
  });
  if (!res.ok) throw new Error(`Lead request failed (${res.status})`);
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* the endpoint did not return JSON */
  }
  if (!data || data.ok !== true) throw new Error('Lead request was not accepted');
  return data;
}
