export const Textarea = {
  tag: 'textarea',
  font: 'inherit',
  border: '1px solid rgba(255, 241, 227, .1)',
  borderRadius: '2em',
  padding: '1em 1.5em',
  color: 'rgba(255, 241, 227, 1)',
  background: 'transparent',
  fontSize: '1em',
  outline: 'none',
  resize: 'none',
  minWidth: '28em',
  maxWidth: '28em',

  '::placeholder': { color: 'rgba(255, 241, 227, 0.4)' },
  ':focus': { borderColor: 'rgba(255, 241, 227, 0.3)' },
};
