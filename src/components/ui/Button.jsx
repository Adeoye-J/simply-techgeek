const base =
  'inline-flex items-center gap-2 whitespace-nowrap border-[1.5px] font-body font-semibold no-underline cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 hover:-translate-y-0.5';

const variants = {
  grad: 'border-transparent bg-grad text-white shadow-[0_10px_30px_-10px_rgba(109,93,252,.7)] hover:shadow-[0_16px_36px_-10px_rgba(255,107,154,.7)]',
  ghost: 'border-line bg-panel text-ink hover:border-c1',
  light: 'border-white bg-white text-ink',
  outline: 'border-white/70 bg-transparent text-white',
};

const sizes = {
  md: 'rounded-xl px-5 py-[13px] text-base',
  sm: 'rounded-[10px] px-3.5 py-2 text-[.9rem]',
};

export default function Button({
  as: Tag = 'a',
  variant = 'grad',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <Tag
      className={[base, variants[variant], sizes[size], className].join(' ')}
      {...props}
    />
  );
}