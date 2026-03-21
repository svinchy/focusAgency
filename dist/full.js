export default {
  "Div": {
    "color": "var(--cream)",
    "width": "fit-content",
    "lineHeight": ".85em",
    "fontSize": "4em",
    "fontWeight": "800",
    "position": "fixed",
    "fontFamily": "var(--font-en)",
    "mixBlendMode": "difference",
    "zIndex": "15",
    "Span": {
      "text": "F"
    }
  },
  "Div_1": {
    "--corner-size": "1.2em",
    "width": "var(--corner-size)",
    "height": "var(--corner-size)"
  },
  "Div_2": {
    "--corner-size": "1.2em",
    "width": "var(--corner-size)",
    "height": "var(--corner-size)",
    "transform": "rotate(180deg)"
  },
  "Button": {
    "extends": "Button",
    "tag": "button",
    "position": "fixed",
    "top": "calc(1.05em + var(--app-safe-top, 0px))",
    "right": "calc(1.05em + var(--app-safe-right, 0px))",
    "flow": "column",
    "border": "1px solid rgba(255, 241, 227, 0.45)",
    "round": ".1em",
    "background": "transparent",
    "width": "3em",
    "height": "3em",
    "flexFlow": "column",
    "gap": ".35em",
    "align": "center center",
    "cursor": "pointer",
    "padding": "-",
    "transition": "border-radius 0.25s var(--ease-io)",
    "zIndex": "140",
    "font": "inherit",
    "Div": {},
    "Div_1": {}
  },
  "Div_4": {
    "flow": "column",
    "align": "center",
    "gap": "-",
    "maxWidth": "fit-content",
    "fontSize": ".9em",
    "Button": {
      "extends": "Button",
      "tag": "button",
      "text": "ქარ",
      "font": "inherit",
      "background": "none",
      "border": "none",
      "cursor": "pointer",
      "data-lang": "ka",
      "lang": "ka"
    },
    "Button_1": {
      "extends": "Button",
      "tag": "button",
      "text": "ENG",
      "font": "inherit",
      "background": "none",
      "border": "none",
      "cursor": "pointer",
      "data-lang": "en",
      "lang": "en"
    }
  },
  "Button_5": {
    "extends": "Button",
    "tag": "button",
    "backdropFilter": "none",
    "WebkitBackdropFilter": "none",
    "font": "inherit",
    "background": "none",
    "border": "none",
    "cursor": "pointer",
    "id": "open-chat-btn",
    "type": "button",
    "onclick": "window.toggleCrispChat()",
    "aria-expanded": "false",
    "aria-label": "Open chat",
    "Span": {
      "text": "chat"
    }
  },
  "Div_6": {
    "id": "crisp-chat-overlay",
    "aria-hidden": "true",
    "inert": "",
    "Section": {
      "extends": "Section",
      "tag": "section",
      "id": "crisp-chat-panel",
      "role": "dialog",
      "aria-modal": "true",
      "aria-label": "Focus Agency live chat",
      "Iframe": {
        "extends": "Iframe",
        "tag": "iframe",
        "id": "crisp-chat-frame",
        "title": "Focus Agency live chat",
        "data-src": "https://go.crisp.chat/chat/embed/?website_id=f48830e3-9049-4f5f-96bb-e91b246dcd6c",
        "loading": "eager",
        "referrerpolicy": "origin"
      }
    }
  },
  "Div_7": {
    "backgroundAttachment": "scroll",
    "backgroundPosition": "center top",
    "backgroundSize": "100% auto",
    "backgroundRepeat": "repeat-y",
    "transition": "opacity 0.25s ease,\n  letter-spacing 0.25s ease,\n  line-height 0.25s ease",
    "opacity": "1",
    "width": "100%",
    "minWidth": "100%",
    "minHeight": "var(--app-viewport-height, 100vh)",
    "background": "#000",
    "position": "relative",
    "isolation": "isolate",
    "animation": "none",
    "overflowX": "clip",
    "Div": {
      "aria-hidden": "true"
    },
    "Div_1": {},
    "Div_2": {},
    "Div_3": {
      "position": "fixed",
      "right": "-5em",
      "bottom": "-5em",
      "zIndex": "1",
      "pointerEvents": "none",
      "transformOrigin": "64% 58%",
      "aria-hidden": "true",
      "Img": {
        "extends": "Img",
        "tag": "img",
        "--globe-size": "clamp(28rem, 62vw, 60rem)",
        "width": "var(--globe-size)",
        "height": "var(--globe-size)",
        "display": "block",
        "objectFit": "cover",
        "animation": "rotateGlobe 120s linear infinite",
        "transformOrigin": "center center",
        "transformStyle": "preserve-3d",
        "filter": "drop-shadow(0 35px 45px rgba(0, 0, 0, 0.55))\n  drop-shadow(0 0 70px rgba(0, 0, 0, 0.45))",
        "maxWidth": "100%",
        "src": "./IMAGE/globe.webp",
        "alt": "",
        "decoding": "async",
        "fetchpriority": "high"
      }
    },
    "Nav": {
      "extends": "Nav",
      "tag": "nav",
      "backdropFilter": "none",
      "WebkitBackdropFilter": "none",
      "flow": "column",
      "flexFlow": "column",
      "gap": ".5em",
      "Link": {
        "extends": "Link",
        "tag": "a",
        "textDecoration": "none",
        "color": "inherit",
        "href": "#services"
      },
      "Link_1": {
        "extends": "Link",
        "tag": "a",
        "textDecoration": "none",
        "color": "inherit",
        "href": "#about"
      },
      "Link_2": {
        "extends": "Link",
        "tag": "a",
        "textDecoration": "none",
        "color": "inherit",
        "href": "#contact"
      }
    },
    "Section": {
      "extends": "Section",
      "tag": "section",
      "width": "100%",
      "maxWidth": "100%",
      "height": "var(--app-viewport-height, 100vh)",
      "minHeight": "var(--app-viewport-height, 100vh)",
      "position": "relative",
      "background": "transparent",
      "overflow": "hidden",
      "Hgroup": {
        "extends": "Hgroup",
        "tag": "hgroup",
        "maxWidth": "26em",
        "position": "relative",
        "zIndex": "2",
        "H1": {
          "extends": "H1",
          "tag": "h1",
          "data-banner": "title"
        },
        "H4": {
          "extends": "H4",
          "tag": "h4",
          "data-banner": "subtitle"
        }
      }
    },
    "Section_6": {
      "extends": "Section",
      "tag": "section",
      "width": "90%",
      "maxWidth": "92em",
      "padding": "X1",
      "position": "relative",
      "margin": "-",
      "paddingBottom": "Z2",
      "H2": {
        "extends": "H2",
        "tag": "h2",
        "data-services": "title"
      },
      "Div": {
        "id": "services",
        "Div": {
          "Div": {},
          "Div_1": {},
          "Div_2": {},
          "Div_3": {}
        },
        "Div_1": {
          "backdropFilter": "blur(20px) saturate(1.1)",
          "WebkitBackdropFilter": "none",
          "width": "25em",
          "height": "15em",
          "padding": "W2",
          "round": "var(--radius-l)",
          "background": "linear-gradient(140deg, rgba(224, 77, 77, .15), rgba(0, 0, 0, 0.2))",
          "color": "var(--white)",
          "cursor": "pointer",
          "boxShadow": "0 10px 30px rgba(0, 0, 0, 0.15),\n  inset 0 0 0 0.08em rgba(255, 255, 255, 0.1)",
          "Hgroup": {
            "extends": "Hgroup",
            "tag": "hgroup",
            "H3": {
              "extends": "H3",
              "tag": "h3",
              "text": "social media marketing"
            },
            "P": {
              "extends": "P",
              "tag": "p",
              "text": "Content creation and advertising",
              "margin": "-"
            }
          },
          "UL": {
            "extends": "UL",
            "tag": "ul",
            "listStyle": "none",
            "margin": "-",
            "padding": "-",
            "flow": "column",
            "flexWrap": "wrap",
            "gap": "-",
            "maxWidth": "100%",
            "paddingLeft": "-"
          },
          "Button": {
            "extends": "Button",
            "tag": "button",
            "font": "inherit",
            "background": "none",
            "border": "none",
            "cursor": "pointer",
            "type": "button",
            "Img": {
              "extends": "Img",
              "tag": "img",
              "display": "block",
              "maxWidth": "100%",
              "src": "/IMAGE/arrow.png",
              "alt": ""
            },
            "Img_1": {
              "extends": "Img",
              "tag": "img",
              "display": "block",
              "maxWidth": "100%",
              "src": "/IMAGE/close.png",
              "alt": ""
            }
          }
        }
      },
      "Nav": {
        "extends": "Nav",
        "tag": "nav",
        "--dot-hit-size": "2.25em",
        "--dot-visual-size": "1.1em",
        "--dot-ring-size": "0.12em",
        "flow": "column",
        "gap": "-",
        "align": "center",
        "width": "fit-content",
        "aria-label": "Services navigation",
        "Button": {
          "extends": "Button",
          "tag": "button",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "button",
          "aria-label": "Service 1"
        },
        "Button_1": {
          "extends": "Button",
          "tag": "button",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "button",
          "aria-label": "Service 2"
        },
        "Button_2": {
          "extends": "Button",
          "tag": "button",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "button",
          "aria-label": "Service 3"
        },
        "Button_3": {
          "extends": "Button",
          "tag": "button",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "button",
          "aria-label": "Service 4"
        }
      }
    },
    "Section_7": {
      "extends": "Section",
      "tag": "section",
      "position": "relative",
      "minHeight": "72em",
      "padding": "X1",
      "H2": {
        "extends": "H2",
        "tag": "h2",
        "text": "Flow to Work"
      },
      "Div": {
        "width": "42em",
        "height": "42em",
        "border": ".5px solid var(--cream)",
        "position": "absolute",
        "top": "50%",
        "left": "0",
        "round": "100%",
        "transform": "translate(-200px, -40%)",
        "Div": {
          "Hgroup": {
            "extends": "Hgroup",
            "tag": "hgroup",
            "H3": {
              "extends": "H3",
              "tag": "h3",
              "text": "01"
            },
            "P": {
              "extends": "P",
              "tag": "p",
              "text": "initial consultation",
              "margin": "-"
            }
          }
        },
        "Div_1": {
          "Hgroup": {
            "extends": "Hgroup",
            "tag": "hgroup",
            "H3": {
              "extends": "H3",
              "tag": "h3",
              "text": "02"
            },
            "P": {
              "extends": "P",
              "tag": "p",
              "text": "Strategy development and implementation",
              "margin": "-"
            }
          }
        },
        "Div_2": {
          "Hgroup": {
            "extends": "Hgroup",
            "tag": "hgroup",
            "H3": {
              "extends": "H3",
              "tag": "h3",
              "text": "03"
            },
            "P": {
              "extends": "P",
              "tag": "p",
              "text": "Review and final refinement",
              "margin": "-"
            }
          }
        }
      }
    },
    "Section_8": {
      "extends": "Section",
      "tag": "section",
      "width": "100%",
      "background": "transparent",
      "position": "relative",
      "padding": "-",
      "zIndex": "10",
      "margin": "-",
      "maxWidth": "1366px",
      "paddingBottom": "W1",
      "H2": {
        "extends": "H2",
        "tag": "h2",
        "text": "Our Team"
      },
      "Div": {
        "id": "about",
        "Div": {
          "minWidth": "20em",
          "maxWidth": "20em",
          "height": "25em",
          "border": "1px solid rgba(255, 241, 227, .5)",
          "position": "relative",
          "round": "2em",
          "overflow": "hidden",
          "H6": {
            "extends": "H6",
            "tag": "h6",
            "text": "Founder"
          },
          "H5": {
            "extends": "H5",
            "tag": "h5",
            "text": "Giorgi"
          },
          "Img": {
            "extends": "Img",
            "tag": "img",
            "display": "block",
            "maxWidth": "100%",
            "src": "./IMAGE/choni2.webp",
            "alt": "",
            "loading": "lazy",
            "decoding": "async"
          },
          "Nav": {
            "extends": "Nav",
            "tag": "nav",
            "flow": "column",
            "gap": "-",
            "minWidth": "fit-content",
            "maxWidth": "fit-content",
            "Link": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/facebook.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            },
            "Link_1": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/linkedin.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            }
          }
        },
        "Div_1": {
          "minWidth": "20em",
          "maxWidth": "20em",
          "height": "25em",
          "border": "1px solid rgba(255, 241, 227, .5)",
          "position": "relative",
          "round": "2em",
          "overflow": "hidden",
          "H6": {
            "extends": "H6",
            "tag": "h6",
            "text": "Project Manager"
          },
          "H5": {
            "extends": "H5",
            "tag": "h5",
            "text": "Liza"
          },
          "Img": {
            "extends": "Img",
            "tag": "img",
            "display": "block",
            "maxWidth": "100%",
            "src": "./IMAGE/liza2.webp",
            "alt": "",
            "loading": "lazy",
            "decoding": "async"
          },
          "Nav": {
            "extends": "Nav",
            "tag": "nav",
            "flow": "column",
            "gap": "-",
            "minWidth": "fit-content",
            "maxWidth": "fit-content",
            "Link": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/facebook.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            },
            "Link_1": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/linkedin.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            }
          }
        },
        "Div_2": {
          "minWidth": "20em",
          "maxWidth": "20em",
          "height": "25em",
          "border": "1px solid rgba(255, 241, 227, .5)",
          "position": "relative",
          "round": "2em",
          "overflow": "hidden",
          "H6": {
            "extends": "H6",
            "tag": "h6",
            "text": "Graphic Designer"
          },
          "H5": {
            "extends": "H5",
            "tag": "h5",
            "text": "Mariami"
          },
          "Img": {
            "extends": "Img",
            "tag": "img",
            "display": "block",
            "maxWidth": "100%",
            "src": "./IMAGE/mariami2.webp",
            "alt": "",
            "loading": "lazy",
            "decoding": "async"
          },
          "Nav": {
            "extends": "Nav",
            "tag": "nav",
            "flow": "column",
            "gap": "-",
            "minWidth": "fit-content",
            "maxWidth": "fit-content",
            "Link": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/facebook.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            },
            "Link_1": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/linkedin.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            }
          }
        },
        "Div_3": {
          "minWidth": "20em",
          "maxWidth": "20em",
          "height": "25em",
          "border": "1px solid rgba(255, 241, 227, .5)",
          "position": "relative",
          "round": "2em",
          "overflow": "hidden",
          "H6": {
            "extends": "H6",
            "tag": "h6",
            "text": "Videograph"
          },
          "H5": {
            "extends": "H5",
            "tag": "h5",
            "text": "Luka"
          },
          "Img": {
            "extends": "Img",
            "tag": "img",
            "display": "block",
            "maxWidth": "100%",
            "src": "./IMAGE/luka2.webp",
            "alt": "",
            "loading": "lazy",
            "decoding": "async"
          },
          "Nav": {
            "extends": "Nav",
            "tag": "nav",
            "flow": "column",
            "gap": "-",
            "minWidth": "fit-content",
            "maxWidth": "fit-content",
            "Link": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/facebook.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            },
            "Link_1": {
              "extends": "Link",
              "tag": "a",
              "textDecoration": "none",
              "color": "inherit",
              "href": "",
              "Img": {
                "extends": "Img",
                "tag": "img",
                "display": "block",
                "maxWidth": "100%",
                "src": "./IMAGE/linkedin.png",
                "alt": "",
                "loading": "lazy",
                "decoding": "async"
              }
            }
          }
        }
      },
      "Div_2": {
        "zIndex": "100",
        "flow": "column",
        "gap": "-",
        "Button": {
          "extends": "Button",
          "tag": "button",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "button",
          "aria-label": "Previous team member",
          "Img": {
            "extends": "Img",
            "tag": "img",
            "display": "block",
            "maxWidth": "100%",
            "src": "./IMAGE/arrow.png",
            "alt": "",
            "loading": "lazy",
            "decoding": "async"
          }
        },
        "Button_1": {
          "extends": "Button",
          "tag": "button",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "button",
          "aria-label": "Next team member",
          "Img": {
            "extends": "Img",
            "tag": "img",
            "display": "block",
            "maxWidth": "100%",
            "src": "./IMAGE/arrow.png",
            "alt": "",
            "loading": "lazy",
            "decoding": "async"
          }
        }
      },
      "Button": {
        "extends": "Button",
        "tag": "button",
        "text": "know us better",
        "font": "inherit",
        "background": "none",
        "border": "none",
        "cursor": "pointer"
      }
    },
    "Section_9": {
      "extends": "Section",
      "tag": "section",
      "maxWidth": "fit-content",
      "margin": "-",
      "height": "fit-content",
      "padding": "Z2",
      "position": "relative",
      "zIndex": "100",
      "paddingBottom": "W1",
      "width": "100%",
      "Div": {
        "Img": {
          "extends": "Img",
          "tag": "img",
          "display": "block",
          "maxWidth": "100%",
          "src": "./IMAGE/quotation-mark.png",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "H3": {
          "extends": "H3",
          "tag": "h3",
          "text": "people talks"
        }
      },
      "Div_1": {
        "Div": {
          "P": {
            "extends": "P",
            "tag": "p",
            "text": "I had an excellent experience everything was done accurately and on time",
            "margin": "-",
            "data-author": "James Harisson"
          },
          "P_1": {
            "extends": "P",
            "tag": "p",
            "text": "The team was responsive and execution quality was consistently high.",
            "margin": "-",
            "data-author": "Nina Carter"
          },
          "P_2": {
            "extends": "P",
            "tag": "p",
            "text": "Strong communication and fast delivery through the whole process.",
            "margin": "-",
            "data-author": "Robert Allen"
          },
          "P_3": {
            "extends": "P",
            "tag": "p",
            "text": "They understood the brief quickly and improved our results month by month.",
            "margin": "-",
            "data-author": "Maria Brown"
          },
          "P_4": {
            "extends": "P",
            "tag": "p",
            "text": "Everything was clear, on schedule, and aligned with our business goals.",
            "margin": "-",
            "data-author": "David Smith"
          },
          "P_5": {
            "extends": "P",
            "tag": "p",
            "text": "Creative ideas with practical implementation and measurable impact.",
            "margin": "-",
            "data-author": "Sophia Miller"
          },
          "P_6": {
            "extends": "P",
            "tag": "p",
            "text": "Professional workflow, transparent updates, and great final output.",
            "margin": "-",
            "data-author": "Alex Johnson"
          }
        },
        "Div_1": {
          "width": "25em",
          "height": "15em",
          "position": "relative",
          "Div": {
            "width": "1.25em",
            "height": "1.25em",
            "position": "absolute"
          },
          "Div_1": {
            "width": "1.25em",
            "height": "1.25em",
            "position": "absolute"
          },
          "Div_2": {
            "width": "1.25em",
            "height": "1.25em",
            "position": "absolute"
          },
          "Div_3": {
            "width": "1.25em",
            "height": "1.25em",
            "position": "absolute"
          },
          "H5": {
            "extends": "H5",
            "tag": "h5",
            "text": "James harisson"
          }
        }
      }
    },
    "Footer": {
      "extends": "Footer",
      "tag": "footer",
      "width": "100%",
      "zIndex": "10",
      "position": "relative",
      "paddingLeft": "W2",
      "minHeight": "fit-content",
      "paddingBottom": "calc(6em + var(--app-fixed-bottom-clearance, 0px))",
      "--footerGlow": "0",
      "paddingRight": "W2",
      "H2": {
        "extends": "H2",
        "tag": "h2",
        "text": "focus agency"
      },
      "Form": {
        "extends": "Form",
        "tag": "form",
        "flow": "column",
        "flexFlow": "column",
        "maxWidth": "100%",
        "maxHeight": "fit-content",
        "position": "relative",
        "gap": "-",
        "minWidth": "100%",
        "padding": "-",
        "action": "https://formspree.io/f/xqeypeyg",
        "method": "POST",
        "id": "contact",
        "Legend": {
          "extends": "Legend",
          "tag": "legend",
          "text": "have a question?",
          "fontSize": "1.2em",
          "color": "rgba(255, 241, 227, .7)",
          "marginBottom": ".5em",
          "fontWeight": "300",
          "margin": "-"
        },
        "Input": {
          "extends": "Input",
          "tag": "input",
          "font": "inherit",
          "border": "1px solid rgba(255, 241, 227, .1)",
          "fontSize": "1em",
          "round": "2em",
          "padding": "-",
          "color": "var(--cream)",
          "margin": "-",
          "background": "transparent",
          "id": "name",
          "name": "name",
          "type": "text",
          "autocomplete": "name",
          "placeholder": "name"
        },
        "Input_2": {
          "extends": "Input",
          "tag": "input",
          "font": "inherit",
          "border": "1px solid rgba(255, 241, 227, .1)",
          "fontSize": "1em",
          "round": "2em",
          "padding": "-",
          "color": "var(--cream)",
          "margin": "-",
          "background": "transparent",
          "id": "email",
          "name": "email",
          "type": "email",
          "autocomplete": "email",
          "placeholder": "email",
          "required": ""
        },
        "Textarea": {
          "extends": "Textarea",
          "tag": "textarea",
          "font": "inherit",
          "minWidth": "28em",
          "maxWidth": "28em",
          "padding": "-",
          "background": "transparent",
          "border": "1px solid rgba(255, 241, 227, .1)",
          "round": "2em",
          "resize": "none",
          "color": "var(--cream)",
          "id": "message",
          "name": "message",
          "rows": "6",
          "placeholder": "shoot a message",
          "required": ""
        },
        "Button": {
          "extends": "Button",
          "tag": "button",
          "text": "send",
          "font": "inherit",
          "background": "none",
          "border": "none",
          "cursor": "pointer",
          "type": "submit"
        },
        "P": {
          "extends": "P",
          "tag": "p",
          "margin": "-",
          "position": "absolute",
          "left": "0",
          "bottom": "-2.2em",
          "color": "rgba(255, 241, 227, .85)",
          "fontSize": "0.84375em",
          "paddingLeft": "-",
          "lineHeight": "1.2",
          "id": "contact-status",
          "role": "status",
          "aria-live": "polite",
          "hidden": ""
        }
      },
      "Div": {
        "marginLeft": "-",
        "H5": {
          "extends": "H5",
          "tag": "h5",
          "text": "call us any time"
        },
        "P": {
          "extends": "P",
          "tag": "p",
          "text": "+995 595 893 399",
          "margin": "-"
        },
        "H5_2": {
          "extends": "H5",
          "tag": "h5",
          "text": "connect with us by email"
        },
        "P_3": {
          "extends": "P",
          "tag": "p",
          "text": "gamarjoba@focusagency.ge",
          "margin": "-"
        },
        "H5_4": {
          "extends": "H5",
          "tag": "h5",
          "text": "Follow us"
        },
        "Nav": {
          "extends": "Nav",
          "tag": "nav",
          "Link": {
            "extends": "Link",
            "tag": "a",
            "textDecoration": "none",
            "color": "inherit",
            "href": "",
            "Img": {
              "extends": "Img",
              "tag": "img",
              "display": "block",
              "maxWidth": "100%",
              "src": "./IMAGE/facebook.png",
              "alt": "",
              "loading": "lazy",
              "decoding": "async"
            }
          },
          "Link_1": {
            "extends": "Link",
            "tag": "a",
            "textDecoration": "none",
            "color": "inherit",
            "href": "",
            "Img": {
              "extends": "Img",
              "tag": "img",
              "display": "block",
              "maxWidth": "100%",
              "src": "./IMAGE/instagram.png",
              "alt": "",
              "loading": "lazy",
              "decoding": "async"
            }
          }
        }
      },
      "Div_3": {
        "position": "relative",
        "maxWidth": "100%",
        "padding": "Z2",
        "marginLeft": "auto",
        "marginRight": "W2",
        "marginTop": "-",
        "paddingRight": "-",
        "marginBottom": "W1",
        "paddingTop": "X2",
        "paddingBottom": "-",
        "paddingLeft": "-",
        "minWidth": "100%",
        "Hgroup": {
          "extends": "Hgroup",
          "tag": "hgroup",
          "H5": {
            "extends": "H5",
            "tag": "h5",
            "text": "you're welcome to visit us"
          },
          "P": {
            "extends": "P",
            "tag": "p",
            "margin": "-",
            "Span": {
              "text": "Tbilisi, Saburtalo"
            },
            "Span_1": {
              "text": "Alexandre Khazbegi street N24 g"
            }
          }
        },
        "Img": {
          "extends": "Img",
          "tag": "img",
          "display": "block",
          "maxWidth": "100%",
          "src": "./IMAGE/street.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "Img_2": {
          "extends": "Img",
          "tag": "img",
          "display": "block",
          "maxWidth": "100%",
          "src": "./IMAGE/street2.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        }
      },
      "P": {
        "extends": "P",
        "tag": "p",
        "text": "Our agency was founded with one main purpose — to support growth and success of businesses. Every client is\n        unique to us, which is why we always listen carefully to your needs and create strategies that deliver real\n        results.",
        "margin": "-"
      }
    }
  }
}
