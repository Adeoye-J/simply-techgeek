// Vercel serverless function. Sends the checklist email, notifies you, and stores the contact in Brevo.
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: bots fill this in
  const name = String(b.name || '').trim().slice(0, 80);
  const email = String(b.email || '').trim().toLowerCase().slice(0, 120);
  const business = String(b.business || '').trim().slice(0, 120);
  const newsletter = b.newsletter === true;
  if (!name || !EMAIL.test(email)) return res.status(400).json({ ok: false, error: 'invalid' });

  const { BREVO_API_KEY, BREVO_LEADS_LIST_ID, BREVO_NEWSLETTER_LIST_ID, SENDER_EMAIL, SENDER_NAME = 'TechGeek', OWNER_EMAIL, SITE_URL } = process.env;
  if (!BREVO_API_KEY || !SENDER_EMAIL || !SITE_URL) return res.status(500).json({ ok: false, error: 'config' });
  const h = { 'api-key': BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' };
  const post = (path, data) => fetch(`https://api.brevo.com/v3/${path}`, { method: 'POST', headers: h, body: JSON.stringify(data) });

  try {
    // 1) Save the contact. The newsletter list only receives people who ticked the box.
    const listIds = [Number(BREVO_LEADS_LIST_ID)];
    if (newsletter && BREVO_NEWSLETTER_LIST_ID) listIds.push(Number(BREVO_NEWSLETTER_LIST_ID));
    const c = await post('contacts', { email, attributes: { FIRSTNAME: name, COMPANY: business }, listIds, updateEnabled: true });
    if (!c.ok) throw new Error('contact ' + c.status);

    // 2) Email the checklist to the visitor.
    const link = `${SITE_URL.replace(/\/$/, '')}/TechGeek-Business-Automation-Opportunity-Checklist.pdf`;
    const m = await post('smtp/email', {
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email, name }],
      subject: 'Your Business Automation Opportunity Checklist',
      htmlContent: `<p>Hi ${esc(name)},</p><p>Here is your checklist: <a href="${esc(link)}">download the PDF</a>.</p><p>Start with one workflow, mark each statement, then score it. If you would like a second opinion, send a LinkedIn message to Jeremiah Bankole with the word REVIEW.</p><p>TechGeek</p>`,
    });
    if (!m.ok) throw new Error('email ' + m.status);

    // 3) Tell yourself. A failure here should not block the visitor.
    if (OWNER_EMAIL) {
      await post('smtp/email', {
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: OWNER_EMAIL }],
        subject: `New checklist download: ${name}`,
        htmlContent: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>Business: ${esc(business) || 'not given'}</p><p>Newsletter opt-in: ${newsletter ? 'yes' : 'no'}</p>`,
      }).catch(() => {});
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('lead error', err.message);
    return res.status(502).json({ ok: false });
  }
}
