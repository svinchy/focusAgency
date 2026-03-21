export const Circle = {
  tag: 'div',
  width: '42em',
  height: '42em',
  border: '.5px solid rgba(255, 241, 227, 1)',
  position: 'absolute',
  borderRadius: '100%',
  transform: 'translate(-240px, -35%) rotate(var(--steps-rot, 0deg))',
  transformOrigin: '50% 50%',
  zIndex: '2',
  willChange: 'transform',
};
