export const TeamMember = {
  minWidth: '20em',
  maxWidth: '20em',
  height: '25em',
  border: '1px solid rgba(255, 241, 227, .5)',
  position: 'relative',
  round: '2em',
  overflow: 'hidden',
  Nav: {
    extends: 'Nav',
    class: 'socialLinks',
    tag: 'nav',
    flow: 'column',
    gap: '-',
    minWidth: 'fit-content',
    maxWidth: 'fit-content',
    Link: {
      Img: {
        src: './IMAGE/facebook.png',
        extends: 'Img2',
      },
      extends: 'Link3',
    },
    Link_1: {
      Img: {
        src: './IMAGE/linkedin.png',
        extends: 'Img2',
      },
      extends: 'Link3',
    },
  },
};