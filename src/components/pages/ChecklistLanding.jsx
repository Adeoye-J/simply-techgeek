import { useState } from 'react';
import { SHEETS_URL, submitLead } from '../../lib/submitLead';
import circuit from '../../assets/checklist/circuit-bg.jpg';
import cover from '../../assets/checklist/checklist-cover.png';

const PDF = '/TechGeek-Business-Automation-Opportunity-Checklist.pdf';
const ENDPOINT = SHEETS_URL || import.meta.env.VITE_LEAD_ENDPOINT || '/api/lead';
// Set VITE_EMAILS_COPY=true only when your backend really emails the visitor a copy.
const EMAILS_COPY = import.meta.env.VITE_EMAILS_COPY === 'true';
const BOOKING = import.meta.env.VITE_BOOKING_URL || '';
const PRIVACY = import.meta.env.VITE_PRIVACY_URL || '';

const AREAS = [
  ['A', 'Data entry and handoffs', 'The same details typed into two places, and work waiting for someone to forward it.'],
  ['B', 'Enquiries and follow-up', 'Messages arriving on several channels, and follow-ups that depend on memory.'],
  ['C', 'Onboarding and approvals', 'Chasing missing documents, and approvals sitting in inboxes.'],
  ['D', 'Reporting and operations', 'Reports built by hand, and problems found only after a customer complains.'],
];
const INSIDE = [
  'Four checklists (A to D) with space for examples and notes',
  'A one-page scoring grid to pick your first workflow',
  'A worksheet of seven questions to answer before choosing any tool',
  'Plain guidance on when to simplify, connect or build',
  'A simple way to get a second opinion',
];
const STEPS = [
  ['Pick one workflow', 'Choose a single process and think about a normal week, not a busy day.'],
  ['Mark every statement', 'Answer YES, SOMETIMES or NO. Add a short example wherever you can.'],
  ['Score and decide', 'Score the process out of 25 and decide what to investigate first.'],
];
const FAQ = [
  ['Is it really free?', 'Yes. There is no payment and no trial. You get the full PDF.'],
  ['What do you do with my email?', 'We use it to send you the checklist. If you tick the optional newsletter box we will also send occasional emails about automation and software, and every email has an unsubscribe link. We do not sell your details.'],
  ['Do I need technical knowledge?', 'No. It is written for owners, founders and operations leads. It does not assume you know how to code.'],
  ['Will it tell me what software to buy?', 'No. It helps you spot repeated work and describe the process. A higher score is a reason to look closer, not a promise that automation is the answer.'],
];

const DISPLAY = "font-['Space_Grotesk','DM_Sans',system-ui,sans-serif]";
const WRAP = 'mx-auto w-full max-w-[1080px] px-5';
const H2 = `${DISPLAY} mb-3 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-[2.4rem]`;
const H3 = `${DISPLAY} font-bold leading-[1.1] tracking-[-0.02em]`;
const LABEL = 'mt-1.5 text-sm font-semibold';
const INPUT = 'mt-1 w-full rounded-[10px] border-[1.5px] border-[#D9E0EC] bg-white px-3 py-[11px] text-base text-[#1B2740] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6]';
const BTN = 'mt-3 inline-block cursor-pointer rounded-[10px] bg-[#3478F6] px-5 py-[13px] text-center text-base font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3478F6] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0';
const CARD = 'grid gap-1.5 rounded-[18px] bg-white p-6 text-[#1B2740] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]';
const SMALL = 'mt-1.5 text-[0.8rem] text-[#5A6680]';

const Tick = () => (
  <span aria-hidden="true" className="mt-[5px] grid h-4 w-4 flex-none place-items-center rounded-full bg-[#B8F34A]">
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#101B33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5l2.2 2.2L9.5 3.5" /></svg>
  </span>
);

function LeadForm({ id }) {
  const [s, setS] = useState({ status: 'idle', name: '', error: '' });

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = {
      name: String(f.get('name') || '').trim(),
      email: String(f.get('email') || '').trim(),
      business: String(f.get('business') || '').trim(),
      newsletter: f.get('newsletter') === 'on',
      website: String(f.get('website') || ''),
    };
    setS({ status: 'sending', name: body.name, error: '' });
    try {
      await submitLead({ source: 'checklist', ...body }, ENDPOINT);
      setS({ status: 'done', name: body.name, error: '' });
    } catch {
      setS({ status: 'error', name: body.name, error: 'Something went wrong sending that. Please try again.' });
    }
  }

  if (s.status === 'done') {
    return (
      <div className={CARD} role="status">
        <h3 className={`${H3} text-2xl`}>Thanks, {s.name.split(' ')[0] || 'friend'}. Your checklist is ready.</h3>
        <p className="mt-1">{EMAILS_COPY ? 'We have also emailed you a copy. If it is not in your inbox in a few minutes, check your spam folder.' : 'Download it below and keep it somewhere handy.'}</p>
        <a className={BTN} href={PDF} download>Download the PDF</a>
        {BOOKING && <p className={SMALL}>Want a second opinion? <a className="text-[#3478F6] underline" href={BOOKING}>Book a free 20-minute workflow review</a>.</p>}
      </div>
    );
  }

  return (
    <form className={CARD} onSubmit={onSubmit} aria-busy={s.status === 'sending'}>
      <h3 className={`${H3} mb-2 text-2xl`}>Get the free checklist</h3>
      <label className={LABEL} htmlFor={`${id}-name`}>First name</label>
      <input className={INPUT} id={`${id}-name`} name="name" autoComplete="given-name" required maxLength={80} />
      <label className={LABEL} htmlFor={`${id}-email`}>Work email</label>
      <input className={INPUT} id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={120} />
      <label className={LABEL} htmlFor={`${id}-biz`}>Business name <span className="font-normal text-[#5A6680]">(optional)</span></label>
      <input className={INPUT} id={`${id}-biz`} name="business" autoComplete="organization" maxLength={120} />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-web`}>Leave this empty</label>
        <input id={`${id}-web`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-2.5 flex cursor-pointer items-start gap-2.5 text-sm text-[#5A6680]">
        <input className="mt-[3px] h-[18px] w-[18px] flex-none accent-[#3478F6]" type="checkbox" name="newsletter" />
        <span>Also send me TechGeek’s occasional newsletter on automation and software. I can unsubscribe at any time.</span>
      </label>
      <button className={BTN} type="submit" disabled={s.status === 'sending'}>
        {s.status === 'sending' ? 'Sending…' : 'Send me the checklist'}
      </button>
      <p className="min-h-[1.2em] text-sm text-[#B42318]" role="alert">
        {s.error}{s.error && <> You can also <a className="underline" href={PDF} download>download it directly</a>.</>}
      </p>
      <p className={SMALL}>
        We will use your email to send the checklist.{' '}
        {PRIVACY ? <a className="text-[#3478F6] underline" href={PRIVACY}>Privacy policy</a> : null}
      </p>
    </form>
  );
}

export default function ChecklistLanding() {
  return (
    <div className="bg-white text-left font-['DM_Sans',system-ui,-apple-system,'Segoe_UI',sans-serif] leading-[1.55] text-[#1B2740] [color-scheme:light]">
      <section className="relative overflow-hidden bg-[#030B1E] py-12 text-white md:py-[72px]">
        <div className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-90" style={{ backgroundImage: `url(${circuit})` }} />
        <div className="absolute inset-0 bg-[#030B1E]/80 md:bg-[linear-gradient(90deg,#030B1E_0%,rgba(3,11,30,0.94)_40%,rgba(3,11,30,0.5)_75%,rgba(3,11,30,0.25)_100%)]" />
        <div className={`${WRAP} relative z-10 grid items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-12`}>
          <div>
            <span className="inline-block rounded-full bg-[#B8F34A] px-4 py-1.5 text-sm font-semibold text-[#101B33]">Free practical guide</span>
            <h1 className={`${DISPLAY} mb-4 mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-[3.6rem]`}>The Business Automation Opportunity Checklist</h1>
            <p className="max-w-[52ch] text-xl text-[#C9D6F2]">Find the repetitive work slowing your business down, and identify what to improve first.</p>
            <ul className="my-6 grid gap-2.5">
              {['Spot copying, chasing and forgotten follow-ups', 'Score one workflow out of 25 to choose your starting point', 'Answer seven questions before you buy or build anything'].map((t) => (
                <li key={t} className="flex gap-3"><Tick />{t}</li>
              ))}
            </ul>
            <p className="text-sm text-[#9FB2DA]">Free · 7-page PDF · For SME owners, founders and operations leads</p>
          </div>
          <LeadForm id="hero" />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className={WRAP}>
          <h2 className={H2}>Hard-working teams can still lose hours to coordination</h2>
          <p className="mb-7 max-w-[62ch] text-[1.05rem] text-[#5A6680]">Information gets copied between tools, enquiries need chasing, approvals sit in inboxes and reports are assembled by hand. The checklist covers four areas.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map(([l, t, d]) => (
              <article key={l} className="rounded-2xl border border-[#D9E0EC] bg-white p-[22px]">
                <span className={`${DISPLAY} grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-[#3478F6] text-lg font-bold text-white`}>{l}</span>
                <h3 className={`${H3} mb-1.5 mt-3 text-[1.15rem]`}>{t}</h3>
                <p className="text-[0.95rem] text-[#5A6680]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6FB] py-14 md:py-20">
        <div className={`${WRAP} grid items-center gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-14`}>
          <img className="w-full max-w-[360px] -rotate-2 justify-self-center rounded-md shadow-[0_30px_60px_-24px_rgba(10,26,74,0.55)]" src={cover} alt="Cover of the TechGeek Business Automation Opportunity Checklist" loading="lazy" />
          <div>
            <h2 className={H2}>What’s inside</h2>
            <ul className="mb-5 mt-4 grid gap-3">
              {INSIDE.map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[7px] h-3.5 w-3.5 flex-none rounded border-2 border-[#3478F6]" />{t}</li>
              ))}
            </ul>
            <p className="rounded-r-[10px] border-l-4 border-[#B8F34A] bg-white px-4 py-3 text-[#5A6680]">Not every repeated task needs software. Some need a clearer process first, and the checklist helps you tell the difference.</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className={WRAP}>
          <h2 className={H2}>How to use it</h2>
          <ol className="mt-6 grid gap-[18px] md:grid-cols-3">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-[3px] border-[#101B33] pt-3.5">
                <b className={`${DISPLAY} text-3xl font-bold text-[#3478F6]`}>{i + 1}</b>
                <h3 className={`${H3} mb-1.5 mt-1 text-[1.15rem]`}>{t}</h3>
                <p className="text-[#5A6680]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F3F6FB] py-14 md:py-20">
        <div className={`${WRAP} max-w-[760px]`}>
          <h2 className={H2}>Questions</h2>
          {FAQ.map(([q, a]) => (
            <details key={q} className="mt-3 rounded-xl border border-[#D9E0EC] bg-white px-[18px] py-4">
              <summary className="cursor-pointer list-none font-semibold [&::-webkit-details-marker]:hidden">{q}</summary>
              <p className="mt-2.5 text-[#5A6680]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#101B33] py-14 text-white md:py-20">
        <div className={`${WRAP} grid items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-12`}>
          <div>
            <h2 className={H2}>Start with one workflow</h2>
            <p className="mt-2.5 max-w-[52ch] text-xl text-[#C9D6F2]">Made by TechGeek, which helps growing businesses explore workflow automation, custom web applications, system integrations and practical AI.</p>
            {BOOKING && <p className="mt-4"><a className="font-semibold text-[#B8F34A] underline" href={BOOKING}>Prefer to talk it through? Book a free workflow review</a></p>}
          </div>
          <LeadForm id="final" />
        </div>
      </section>
    </div>
  );
}