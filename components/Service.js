export const Service = {
  tag: 'div',
  position: 'absolute',
  zIndex: '3',
  bottom: '1em',
  left: '1em',
  touchAction: 'manipulation',
  transition: 'width var(--dur-slow) var(--ease-io), height var(--dur-slow) var(--ease-io), transform var(--dur-slow) var(--ease-soft), box-shadow var(--dur-slow) var(--ease-soft)',
  willChange: 'transform',
  cursor: 'pointer',
};
