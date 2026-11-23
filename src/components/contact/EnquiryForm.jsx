import { useState } from 'react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { CONFIG } from '../../config/site';
import { budgetOptions, needOptions } from '../../data/content';

const DEFAULT_NOTE = 'Your details go straight to my inbox. I reply within one working day.';

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

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const values = Object.fromEntries(new FormData(form));
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

                <Button as="button" type="submit" variant="grad" className='text-center flex justify-center'>
                    Send enquiry →
                </Button>
                <p className="text-[.84rem] text-dim">{note}</p>
            </form>
        </Reveal>
    );
}