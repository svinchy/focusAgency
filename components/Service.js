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

  '& li': {
    lineHeight: '1.1em',
    padding: '1em 1.3em',
    borderRadius: '3em',
    opacity: '0',
    transform: 'translateY(0.35em) scale(0.88)',
    filter: 'blur(1.5px)',
    transition: 'opacity 0.3s var(--ease-io), transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), filter 0.28s var(--ease-io)',
    background: 'rgba(0, 0, 0, 0.5)',
  },

  '&.active li': {
    opacity: '1',
    transform: 'translateY(0) scale(1)',
    filter: 'blur(0)',
    transitionDelay: '0.55s',
  },

  '::before': {
    content: "''",
    position: 'absolute',
    inset: '0',
    borderRadius: 'inherit',
    background: 'radial-gradient(120% 120% at 20% 0%, rgba(255, 255, 255, 0.5), transparent 45%)',
    opacity: '0',
    transition: 'opacity var(--dur-med) var(--ease-io)',
    pointerEvents: 'none',
  },

  '::after': {
    content: "''",
    position: 'absolute',
    inset: '0',
    borderRadius: 'inherit',
    pointerEvents: 'none',
    opacity: '0',
    zIndex: '4',
    transition: 'opacity var(--dur-med) var(--ease-io)',
    background: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.94) 0%,
    rgba(0, 0, 0, 0.72) 1.5em,
    rgba(0, 0, 0, 0.36) 4.2em,
    rgba(0, 0, 0, 0) 8.2em
    ),
    linear-gradient(
    to top,
    rgba(0, 0, 0, 0.96) 0%,
    rgba(0, 0, 0, 0.76) 1.8em,
    rgba(0, 0, 0, 0.42) 4.8em,
    rgba(0, 0, 0, 0) 9.2em
    )`,
  },

  ':hover': {
    transform: 'perspective(1000px) translateY(-8px) rotateX(6deg) rotateY(-6deg)',
  },

  ':hover::before': {
    opacity: '0.6',
  },

  '& .icon-arrow': {
    opacity: '1',
    transform: 'rotate(0deg) scale(1)',
    transition: 'opacity var(--dur-med) var(--ease-io), transform var(--dur-med) var(--ease-io)',
  },

  '& .icon-close': {
    opacity: '0',
    transform: 'rotate(180deg) scale(0.85)',
    transition: 'opacity var(--dur-med) var(--ease-io), transform var(--dur-med) var(--ease-io)',
  },

  '&.active .icon-arrow': {
    opacity: '0',
    transform: 'rotate(-180deg) scale(0.85)',
  },

  '&.active .icon-close': {
    opacity: '1',
    transform: 'rotate(180deg) scale(1)',
    width: '1.85em',
  },

  '&.active': {
    width: 'calc(100% - 2em)',
    height: 'calc(100% - 2em)',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    touchAction: 'pan-y',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.2)',
  },

  '&.active::after': { opacity: '1' },
  '&.active:hover': { transform: 'perspective(1000px) translateY(2px) rotateX(-2deg) rotateY(2deg)' },

  '&.active hgroup': {
    position: 'absolute',
    top: '1.55em',
    left: '1.7em',
    right: '5.2em',
    zIndex: '5',
    pointerEvents: 'none',
  },

  '&.active hgroup h3': {
    transform: 'scale(0.7)',
    transformOrigin: 'top left',
  },

  '&.active hgroup p': {
    opacity: '0',
    transform: 'translateY(0.5em)',
  },

  '&.active .service-content': {
    opacity: '1',
    transform: 'translateY(0) scale(1)',
    filter: 'blur(0)',
    position: 'relative',
    zIndex: '6',
    pointerEvents: 'auto',
    flex: '1 1 auto',
    minHeight: '0',
    maxHeight: 'none',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: '100%',
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    marginTop: '0',
    paddingTop: '9.2em',
    paddingBottom: '4.8em',
    paddingLeft: '1.7em',
    paddingRight: '0.35em',
    boxSizing: 'border-box',
    overscrollBehavior: 'contain',
    WebkitOverflowScrolling: 'touch',
    touchAction: 'pan-y',
    transitionDelay: '0.55s',
  },

  '&.active .service-content::-webkit-scrollbar': { display: 'none' },
};
