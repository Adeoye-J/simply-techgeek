import { useState } from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { CONFIG } from '../../config/site';
import { budgetOptions, needOptions } from '../../data/content';
import { SHEETS_URL, submitLead } from '../../lib/submitLead';

const DEFAULT_NOTE = 'Your details go straight to me. I reply within one working day.';

const inputClass =
    'w-full rounded-[10px] border border-line bg-paper px-3.5 py-3 font-body text-[.96rem] text-ink focus:border-transparent focus:outline focus:outline-2 focus:outline-c1';

function Field({ label, children }) {
    return (
        <label className="grid gap-1.5 text-[.88rem] font-semibold">
            {label}
            {children}
        </label>
    );
}

export default function EnquiryForm() {
    const [note, setNote] = useState(DEFAULT_NOTE);
    const [status, setStatus] = useState('idle'); // idle | sending | done | error

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const values = Object.fromEntries(new FormData(form));

        // No Google Sheets endpoint configured yet: keep the old mailto behaviour so the form never breaks.
        if (!SHEETS_URL) {
            const body = [
                `Name: ${values.name}`,
                `Business: ${values.biz}`,
                `Email: ${values.email}`,
                `Budget: ${values.budget}`,
                `Need: ${values.need}`,
                '',
                values.msg,
            ].join('\n');
            if (CONFIG.email) {
                const subject = encodeURIComponent(`TechGeek enquiry from ${values.name}`);
                window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
                setNote('Opening your email app with your enquiry ready to send.');
            } else {
                setNote(`Thanks, ${values.name}. Add your email in CONFIG so enquiries reach you.`);
            }
            return;
        }

        setStatus('sending');
        setNote('Sending…');
        try {
            await submitLead({
                source: 'enquiry',
                name: values.name,
                business: values.biz,
                email: values.email,
                budget: values.budget,
                need: values.need,
                message: values.msg,
                website: values.website || '',
            });
            form.reset();
            setStatus('done');
            setNote(`Thanks, ${String(values.name).split(' ')[0]}. Your enquiry has been received. I reply within one working day.`);
        } catch {
            setStatus('error');
            setNote('Something went wrong sending that. Please try again, or reach me on WhatsApp or email.');
        }
    }

    return (
        <Reveal>
            <form
                onSubmit={handleSubmit}
                noValidate
                className="grid gap-3.5 rounded-[22px] border border-line bg-panel p-7"
            >
                <div className="grid grid-cols-2 gap-3 max-[760px]:grid-cols-1">
                    <Field label="Full name">
                        <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
                    </Field>
                    <Field label="Business">
                        <input name="biz" autoComplete="organization" placeholder="Company or project" className={inputClass} />
                    </Field>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[760px]:grid-cols-1">
                    <Field label="Email">
                        <input
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@company.com"
                            className={inputClass}
                        />
                    </Field>
                    <Field label="Budget range">
                        <select name="budget" className={inputClass}>
                            {budgetOptions.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    </Field>
                </div>

                <Field label="What do you need?">
                    <select name="need" className={inputClass}>
                        {needOptions.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                </Field>

                <Field label="What’s slowing your business down?">
                    <textarea
                        name="msg"
                        required
                        placeholder="Briefly describe the problem or goal"
                        className={`${inputClass} min-h-27.5 resize-y`}
                    />
                </Field>

                <div className="sr-only" aria-hidden="true">
                    <label>
                        Leave this empty
                        <input name="website" tabIndex={-1} autoComplete="off" />
                    </label>
                </div>

                <Button
                    as="button"
                    type="submit"
                    variant="grad"
                    disabled={status === 'sending'}
                    className='text-center flex justify-center disabled:cursor-wait disabled:opacity-60'
                >
                    {status === 'sending' ? 'Sending…' : 'Send enquiry →'}
                </Button>
                <p className={`text-[.84rem] ${status === 'error' ? 'text-red-600' : 'text-dim'}`} role="status" aria-live="polite">
                    {note}
                    {status === 'error' && (CONFIG.whatsapp || CONFIG.email) && (
                        <>
                            {' '}
                            {CONFIG.whatsapp && <a className="underline" href={CONFIG.whatsapp} target="_blank" rel="noopener">WhatsApp</a>}
                            {CONFIG.whatsapp && CONFIG.email && ' · '}
                            {CONFIG.email && <a className="underline" href={`mailto:${CONFIG.email}`}>Email</a>}
                        </>
                    )}
                </p>
            </form>
        </Reveal>
    );
}