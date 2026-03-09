export const Contact = {
  minWidth: '100%',
  background: 'transparent',
  padding: '- E E2 E',
  position: 'relative',
  '@tabletS': {
    padding: '- D E2 D',
  },
  '@mobileM': {
    padding: '- C E2 C',
  },
  '@mobileS': {
    padding: '- B E2 B',
  },
  H2: {
    '@mobileM': {
      margin: '- auto - 0',
      padding: 'C2 - C2 X2',
    },
    text: 'focus agency',
    fontSize: '6em',
    margin: '0 4em 2em auto',
    maxWidth: '3em',
    fontWeight: '900',
    textTransform: 'capitalize',
    lineHeight: '0.8em',
    '@mobileL': {
      padding: 'C - C2 -',
    },
    '@tabletXS': { fontSize: '3.5em' },
    '@mobileLS': { margin: '0 0.5em 3.5em auto' },
    style: {
      fontFamily: "'Exo 2', sans-serif",
      textAlign: 'center',
      color: 'rgba(255, 241, 227, 0.5)',
      willChange: 'transform',
      transform: 'translateX(var(--swim-x, 0em)) translateY(var(--swim-y, 0em)) rotate(var(--swim-r, 0deg))',
      transition: 'text-shadow 0.25s ease',
    },
  },
  EmailSend: {
    Legend: {
      extends: 'Box',
      tag: 'legend',
      text: 'have a question?',
      color: 'cream60',
      fontSize: 'A1',
      fontWeight: '100',
      style: { fontFamily: "'Exo 2', sans-serif" },
    },
    Input_name: {
      '@mobileLS': {
        minWidth: '65%',
        maxWidth: '65%',
      },
    },
    Input_email: {
      '@mobileLS': {
        minWidth: '80%',
        maxWidth: '80%',
      },
    },
    Textarea: {
      '@mobileLS': {
        minWidth: '100%',
        maxWidth: '100%',
      },
    },
    SendBtn: {},
    '@mobileLS': {
      minWidth: '100%',
      maxWidth: '100%',
    },
  },
  Hgroup: {
    gap: 'B',
    margin: 'E2 - - C',
    '@mobileLS': {
      margin: 'E - - A',
    },
    H: {
      color: 'cream60',
      tag: 'h6',
      fontSize: 'A1',
      text: 'Call us any time',
      fontWeight: '100',
      attr: { 'data-el': 'detail-label' },
      style: {
        fontFamily: "'Exo 2', sans-serif",
      },
    },
    P: {
      text: '+995 595 893 399',
      style: {
        fontFamily: "'Exo 2', sans-serif",
      },
      color: 'cream',
      fontSize: 'B',
    },
    '@mobileXS': {
      margin: 'E - - Y',
    },
  },
  Hgroup_2: {
    gap: 'A',
    margin: 'C2 - - C',
    '@mobileLS': {
      margin: 'C2 - - A',
    },
    H: {
      fontSize: 'A1',
      tag: 'h6',
      text: 'Connect with us by email',
      color: 'cream60',
      fontWeight: '100',
      attr: { 'data-el': 'detail-label' },
      style: {
        fontFamily: "'Exo 2', sans-serif",
      },
    },
    P: {
      text: 'gamarjoba@focusagency.ge',
      color: 'cream',
      fontSize: 'B',
      style: {
        fontFamily: "'Exo 2', sans-serif",
      },
    },
    '@mobileXS': {
      margin: 'E - - Y',
    },
  },
  Flex: {
    flow: 'y',
    flexAlign: 'flex-start flex-start',
    margin: 'C2 - - C',
    gap: 'A1',
    '@mobileLS': {
      margin: 'C2 - - A',
    },
    '@mobileXS': {
      margin: 'C2 - - Y',
    },
    H6: {
      fontSize: 'A1',
      style: {
        fontFamily: "'Exo 2', sans-serif",
      },
      text: 'Follow us ',
      fontWeight: '100',
      color: 'cream60',
      attr: { 'data-el': 'detail-label' },
    },
    SocialLinks: {
      gap: 'A',
      childProps: {
        fontSize: 'C',
      },
      children: () => [{
          Img: {
            src: 'facebook.png',
          },
        },
        {
          Img: {
            src: 'instagram.png',
          },
        },
      ],
    },
  },
  Box: {
    margin: 'F - - C',
    Flex: {
      gap: 'G',
      '@tabletM': {
        gap: 'F',
      },
      '@tabletS': {
        gap: 'D',
      },
      Hgroup: {
        '@mobileLS': {
          margin: '- - - A',
        },
        H: {
          text: "You're welcome to visit us",
          fontSize: 'A1',
          color: 'cream60',
          fontWeight: '100',
          attr: { 'data-el': 'address-title' },
          style: {
            fontFamily: "'Exo 2', sans-serif",
          },
        },
        P: {
          style: {
            fontFamily: "'Exo 2', sans-serif",
          },
          text: 'Tbilisi, Saburtalo',
          color: 'cream',
          fontSize: 'B',
          margin: 'A 0 0 0',
          attr: { 'data-el': 'address-line' },
        },
        P_2: {
          '@mobileXS': {
            whiteSpace: 'pre-wrap',
            maxWidth: 'F1',
          },
          text: 'Alexandre Khazbegi street N24 g',
          margin: '0',
          color: 'cream',
          fontSize: 'B',
          whiteSpace: 'nowrap',
          attr: { 'data-el': 'address-line' },
          style: {
            fontFamily: "'Exo 2', sans-serif",
          },
        },
        '@mobileXS': {
          margin: '- - - Y',
        },
      },
      Image: {
        boxSize: 'G H',
        boxSizing: 'content-box',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'creamGhost',
        padding: 'B',
        round: 'C',
        margin: '-F - - -',
        attr: { 'data-el': 'street-image' },
        '@mobileXS': {
          boxSize: 'F2 100%',
        },
        style: {
          border: '1px solid rgba(255, 241, 227, .15)',
        },
        '@tabletS': {
          boxSize: 'F1 G2',
        },
        '@tabletXS': {
          padding: 'A',
          round: 'B2',
          margin: '0 - - E',
        },
        '@mobileLS': {
          margin: '0 - - 0',
          boxSize: 'G 100%',
          boxSizing: 'border-box',
        },
      },
      '@tabletXS': {
        flow: 'y',
      },
    },
    Image: {
      boxSize: 'G H',
      boxSizing: 'content-box',
      padding: 'B',
      round: 'C',
      margin: 'D - - -C',
      attr: { 'data-el': 'street-image' },
      '@tabletS': {
        boxSize: 'F1 G1',
      },
      '@tabletXS': {
        padding: 'A',
        round: 'B2',
      },
      '@mobileLS': {
        margin: 'D 0 0 0',
        boxSize: 'G 100%',
        boxSizing: 'border-box',
      },
      '@mobileXS': {
        boxSize: 'F2 100%',
      },
      style: {
        border: '1px solid rgba(255, 241, 227, .15)',
      },
      Box: {
        boxSize: '100% 100%',
        backgroundImage: 'adress2.jpg',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        round: 'B',
        style: {
          backgroundAttachment: 'fixed',
        },
      },
    },
    '@mobileLS': {
      margin: 'F - - 0',
    },
  },
  P: {
    text: 'Our agency was founded with one main purpose — to support growth and success of businesses. Every client is unique to us, which is why we always listen carefully to your needs and create strategies that deliver real results.',
    fontSize: 'A1',
    maxWidth: 'H',
    color: 'cream70',
    position: 'absolute',
    bottom: '12em',
    right: '5em',
    fontWeight: '300',
    attr: { 'data-el': 'footer-paragraph' },
    style: {
      fontFamily: "'Exo 2', sans-serif",
    },
    '@mobileLS': {
      margin: 'F auto - 0',
    },
    '@mobileM': {
      margin: 'F auto D auto',
    },
    '@mobileS': {
      padding: '- X2 - Z',
    },
  },
};