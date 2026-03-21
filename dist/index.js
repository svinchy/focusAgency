export default {
  "useReset": true,
  "useVariable": true,
  "useFontImport": true,
  "useDefaultConfig": true,
  "useDocumentTheme": true,
  "globalTheme": "dark",
  "state": {},
  "dependencies": {},
  "components": {
    "Button": {
      "extends": "smbls.Button",
      "tag": "button",
      "font": "inherit",
      "background": "none",
      "border": "none",
      "cursor": "pointer"
    },
    "Link": {
      "extends": "smbls.Link",
      "tag": "a",
      "textDecoration": "none",
      "color": "inherit"
    },
    "Hgroup": {
      "extends": "smbls.Hgroup",
      "tag": "hgroup"
    },
    "Img": {
      "extends": "smbls.Img",
      "tag": "img",
      "display": "block",
      "maxWidth": "100%",
      "alt": ""
    },
    "Button1": {
      "extends": "Button",
      "tag": "button",
      "font": "inherit",
      "background": "none",
      "border": "none",
      "cursor": "pointer",
      "type": "button"
    },
    "TeamMember": {
      "minWidth": "20em",
      "maxWidth": "20em",
      "height": "25em",
      "border": "1px solid rgba(255, 241, 227, .5)",
      "position": "relative",
      "round": "2em",
      "overflow": "hidden",
      "Nav": {
        "extends": "Nav",
        "tag": "nav",
        "flow": "column",
        "gap": "-",
        "minWidth": "fit-content",
        "maxWidth": "fit-content",
        "Link": {
          "Img": {
            "src": "./IMAGE/facebook.png",
            "extends": "Img2"
          },
          "extends": "Link3"
        },
        "Link_1": {
          "Img": {
            "src": "./IMAGE/linkedin.png",
            "extends": "Img2"
          },
          "extends": "Link3"
        }
      }
    },
    "Img2": {
      "extends": "Img",
      "tag": "img",
      "display": "block",
      "maxWidth": "100%",
      "alt": "",
      "loading": "lazy",
      "decoding": "async"
    },
    "Nav": {
      "extends": "smbls.Nav",
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
          "src": "./IMAGE/facebook.png",
          "extends": "Img2"
        }
      },
      "Link_1": {
        "extends": "Link",
        "tag": "a",
        "textDecoration": "none",
        "color": "inherit",
        "href": "",
        "Img": {
          "src": "./IMAGE/linkedin.png",
          "extends": "Img2"
        }
      }
    },
    "Link3": {
      "extends": "Link",
      "tag": "a",
      "textDecoration": "none",
      "color": "inherit",
      "href": ""
    },
    "Button4": {
      "extends": "Button",
      "tag": "button",
      "font": "inherit",
      "background": "none",
      "border": "none",
      "cursor": "pointer",
      "type": "button",
      "Img": {
        "src": "./IMAGE/arrow.png",
        "extends": "Img2"
      }
    },
    "FocusCorner": {
      "width": "1.25em",
      "height": "1.25em",
      "position": "absolute"
    }
  },
  "pages": {
    "/": {
      "extends": "Page",
      "Logo": {
        "extends": "Logo",
        "color": "cream",
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
      "Corner": {
        "extends": "Corner",
        "--corner-size": "1.2em",
        "width": "var(--corner-size)",
        "height": "var(--corner-size)"
      },
      "Corner_2": {
        "extends": "Corner",
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
      "LangButton": {
        "extends": "LangButton",
        "flow": "column",
        "align": "center",
        "gap": "-",
        "maxWidth": "fit-content",
        "fontSize": ".9em",
        "Button": {
          "extends": "Button",
          "text": "ქარ",
          "data-lang": "ka",
          "lang": "ka"
        },
        "Button_1": {
          "extends": "Button",
          "text": "ENG",
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
      "ChatPanelOverlay": {
        "extends": "ChatPanelOverlay",
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
      "LangContent": {
        "extends": "LangContent",
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
        "StarsBg": {
          "extends": "StarsBg",
          "aria-hidden": "true"
        },
        "Overlay": {
          "extends": "Overlay"
        },
        "Overlay2": {
          "extends": "Overlay2"
        },
        "GlobeFrame": {
          "extends": "GlobeFrame",
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
            "href": "#services"
          },
          "Link_1": {
            "extends": "Link",
            "href": "#about"
          },
          "Link_2": {
            "extends": "Link",
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
          "Content": {
            "extends": "Content",
            "id": "services",
            "Images": {
              "extends": "Images",
              "Image": {
                "extends": "Image"
              },
              "Image_1": {
                "extends": "Image"
              },
              "Image_2": {
                "extends": "Image"
              },
              "Image_3": {
                "extends": "Image"
              }
            },
            "Service": {
              "extends": "Service",
              "backdropFilter": "blur(20px) saturate(1.1)",
              "WebkitBackdropFilter": "none",
              "width": "25em",
              "height": "15em",
              "padding": "W2",
              "round": "var(--radius-l)",
              "background": "linear-gradient(140deg, rgba(224, 77, 77, .15), rgba(0, 0, 0, 0.2))",
              "color": "white",
              "cursor": "pointer",
              "boxShadow": "0 10px 30px rgba(0, 0, 0, 0.15),\n  inset 0 0 0 0.08em rgba(255, 255, 255, 0.1)",
              "Hgroup": {
                "extends": "Hgroup",
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
                  "src": "/IMAGE/arrow.png"
                },
                "Img_1": {
                  "extends": "Img",
                  "src": "/IMAGE/close.png"
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
              "aria-label": "Service 1",
              "extends": "Button1"
            },
            "Button_1": {
              "aria-label": "Service 2",
              "extends": "Button1"
            },
            "Button_2": {
              "aria-label": "Service 3",
              "extends": "Button1"
            },
            "Button_3": {
              "aria-label": "Service 4",
              "extends": "Button1"
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
          "Circle": {
            "extends": "Circle",
            "width": "42em",
            "height": "42em",
            "border": ".5px solid cream",
            "position": "absolute",
            "top": "50%",
            "left": "0",
            "round": "100%",
            "transform": "translate(-200px, -40%)",
            "Dot": {
              "extends": "Dot",
              "Hgroup": {
                "extends": "Hgroup",
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
            "Dot_1": {
              "extends": "Dot",
              "Hgroup": {
                "extends": "Hgroup",
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
            "Dot_2": {
              "extends": "Dot",
              "Hgroup": {
                "extends": "Hgroup",
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
          "Contents": {
            "extends": "Contents",
            "id": "about",
            "TeamMember": {
              "extends": "TeamMember",
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
              }
            },
            "TeamMember_1": {
              "extends": "TeamMember",
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
              }
            },
            "TeamMember_2": {
              "extends": "TeamMember",
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
              }
            },
            "TeamMember_3": {
              "extends": "TeamMember",
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
              }
            }
          },
          "NavArrows": {
            "extends": "NavArrows",
            "zIndex": "100",
            "flow": "column",
            "gap": "-",
            "Button": {
              "aria-label": "Previous team member",
              "extends": "Button4"
            },
            "Button_1": {
              "aria-label": "Next team member",
              "extends": "Button4"
            }
          },
          "Button": {
            "extends": "Button",
            "text": "know us better"
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
          "Title": {
            "extends": "Title",
            "Img": {
              "src": "./IMAGE/quotation-mark.png",
              "extends": "Img2"
            },
            "H3": {
              "extends": "H3",
              "tag": "h3",
              "text": "people talks"
            }
          },
          "TestimonialContent": {
            "extends": "TestimonialContent",
            "Messages": {
              "extends": "Messages",
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
            "Focus": {
              "extends": "Focus",
              "width": "25em",
              "height": "15em",
              "position": "relative",
              "FocusCorner": {
                "extends": "FocusCorner"
              },
              "FocusCorner_1": {
                "extends": "FocusCorner"
              },
              "FocusCorner_2": {
                "extends": "FocusCorner"
              },
              "FocusCorner_3": {
                "extends": "FocusCorner"
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
              "color": "cream",
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
              "color": "cream",
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
              "color": "cream",
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
          "Contact": {
            "extends": "Contact",
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
                "Img": {
                  "src": "./IMAGE/facebook.png",
                  "extends": "Img2"
                },
                "extends": "Link3"
              },
              "Link_1": {
                "Img": {
                  "src": "./IMAGE/instagram.png",
                  "extends": "Img2"
                },
                "extends": "Link3"
              }
            }
          },
          "Address": {
            "extends": "Address",
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
              "src": "./IMAGE/street.webp",
              "extends": "Img2"
            },
            "Img_2": {
              "src": "./IMAGE/street2.webp",
              "extends": "Img2"
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
  },
  "designSystem": {
    "color": {
      "black": "rgba(0, 0, 0, 1)",
      "cream": "rgba(255, 241, 227, 1)",
      "red": "rgba(224, 77, 77, 1)",
      "grey": "rgba(80, 78, 78, 1)",
      "white": "rgba(255, 255, 255, 1)"
    },
    "gradient": {},
    "theme": {
      "dark": {
        "background": "black",
        "color": "cream"
      }
    },
    "font": {
      "Exo 2": [
        {
          "url": "./FONT/Exo2-Thin.woff2",
          "fontWeight": "100",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-ExtraLight.woff2",
          "fontWeight": "200",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-Light.woff2",
          "fontWeight": "300",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-Regular.woff2",
          "fontWeight": "400",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-Medium.woff2",
          "fontWeight": "500",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-SemiBold.woff2",
          "fontWeight": "600",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-Bold.woff2",
          "fontWeight": "700",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-ExtraBold.woff2",
          "fontWeight": "800",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        },
        {
          "url": "./FONT/Exo2-Black.woff2",
          "fontWeight": "900",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        }
      ],
      "BPG Square Banner Caps 2013": [
        {
          "url": "./FONT/bpg-square-banner-caps-2013-webfont.woff2",
          "fontWeight": "400",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        }
      ],
      "BPG Square Banner Caps 2013 Safari": [
        {
          "url": "./FONT/bpg-square-banner-caps-2013-webfont.ttf",
          "fontWeight": "400",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        }
      ],
      "BPG Square Banner 2013": [
        {
          "url": "./FONT/bpg-square-banner-2013-webfont.woff2",
          "fontWeight": "400",
          "fontStyle": "normal",
          "fontDisplay": "swap"
        }
      ]
    },
    "font_family": {},
    "typography": {},
    "spacing": {},
    "timing": {},
    "class": {},
    "grid": {},
    "icons": {},
    "shape": {},
    "reset": {},
    "animation": {
      "starsFieldLoopMobile": {
        "0%": {
          "transform": "translate3d(1.5%, 0.8%, 0) scale(1.03)",
          "opacity": "0.56"
        },
        "50%": {
          "transform": "translate3d(0, 0, 0) scale(1.06)",
          "opacity": "0.62"
        },
        "100%": {
          "transform": "translate3d(-1.5%, -0.8%, 0) scale(1.09)",
          "opacity": "0.56"
        }
      },
      "rotateGlobe": {
        "0%": {
          "transform": "rotate(0deg) scale(1)"
        },
        "50%": {
          "transform": "rotate(180deg) scale(1.05)"
        },
        "100%": {
          "transform": "rotate(360deg) scale(1)"
        }
      },
      "globeIntroZoomOut": {
        "0%": {
          "transform": "translate3d(2vw, 1.5vh, 0) scale(1.2)"
        },
        "100%": {
          "transform": "translate3d(0, 0, 0) scale(1)"
        }
      },
      "footerTextWave": {
        "0%": {
          "opacity": "0.22"
        },
        "35%": {
          "opacity": "1"
        },
        "100%": {
          "opacity": "0.22"
        }
      },
      "starsFieldLoop": {
        "0%": {
          "transform": "translate3d(6%, 3.2%, 0) scale(1.04)",
          "opacity": "0.56"
        },
        "25%": {
          "transform": "translate3d(2.4%, 1.4%, 0) scale(1.09)",
          "opacity": "0.66"
        },
        "50%": {
          "transform": "translate3d(0, 0, 0) scale(1.13)",
          "opacity": "0.7"
        },
        "75%": {
          "transform": "translate3d(-2.4%, -1.4%, 0) scale(1.17)",
          "opacity": "0.62"
        },
        "100%": {
          "transform": "translate3d(-6%, -3.2%, 0) scale(1.21)",
          "opacity": "0.56"
        }
      },
      "starsIntroSharp": {
        "0%": {
          "opacity": "0.12",
          "transform": "translate3d(0, 1.7%, 0) scale(0.42)"
        },
        "32%": {
          "opacity": "0.72",
          "transform": "translate3d(0.8%, 0.9%, 0) scale(0.86)"
        },
        "64%": {
          "opacity": "0.42",
          "transform": "translate3d(1.9%, 0.2%, 0) scale(1.1)"
        },
        "100%": {
          "opacity": "0.56",
          "transform": "translate3d(6%, 3.2%, 0) scale(1.04)"
        }
      },
      "starsTwinkle": {
        "0%, 100%": {
          "opacity": "0.25"
        },
        "50%": {
          "opacity": "0.6"
        }
      },
      "quoteShake": {
        "0%, 100%": {
          "transform": "translate(0, 0) rotate(0deg)"
        },
        "20%": {
          "transform": "translate(0.04em, -0.03em) rotate(-0.55deg)"
        },
        "45%": {
          "transform": "translate(-0.032em, 0.024em) rotate(0.45deg)"
        },
        "70%": {
          "transform": "translate(0.024em, -0.018em) rotate(-0.35deg)"
        },
        "85%": {
          "transform": "translate(-0.016em, 0.012em) rotate(0.25deg)"
        }
      },
      "messagePeakPulse": {
        "0%": {
          "filter": "drop-shadow(0 0 0 rgba(255, 241, 227, 0))",
          "textShadow": "0 0 0 rgba(255, 241, 227, 0)"
        },
        "45%": {
          "filter": "drop-shadow(0 0 1.2em rgba(255, 241, 227, 0.75))",
          "textShadow": "0 0 0.9em rgba(255, 241, 227, 0.6)"
        },
        "100%": {
          "filter": "drop-shadow(0 0 0 rgba(255, 241, 227, 0))",
          "textShadow": "0 0 0 rgba(255, 241, 227, 0)"
        }
      },
      "focusFramePulse": {
        "0%": {
          "transform": "translate(-50%, -50%) scale(1)"
        },
        "45%": {
          "transform": "translate(-50%, -50%) scale(0.988)"
        },
        "100%": {
          "transform": "translate(-50%, -50%) scale(1)"
        }
      },
      "focusRingPulse": {
        "0%": {
          "opacity": "0",
          "transform": "scale(0.94)"
        },
        "40%": {
          "opacity": "0.85",
          "transform": "scale(1)"
        },
        "100%": {
          "opacity": "0",
          "transform": "scale(1.08)"
        }
      },
      "focusCornerFlash": {
        "0%": {
          "opacity": "1",
          "filter": "drop-shadow(0 0 0 rgba(224, 77, 77, 0))",
          "background": "red"
        },
        "40%": {
          "opacity": "1",
          "filter": "drop-shadow(0 0 0.55em rgba(224, 77, 77, 0.9))",
          "background": "rgba(255, 129, 129, 1)"
        },
        "100%": {
          "opacity": "1",
          "filter": "drop-shadow(0 0 0 rgba(224, 77, 77, 0))",
          "background": "red"
        }
      },
      "focusNamePulse": {
        "0%": {
          "opacity": "1",
          "transform": "translateY(0) scale(1)",
          "textShadow": "0 0 0 rgba(255, 241, 227, 0)"
        },
        "45%": {
          "opacity": "1",
          "transform": "translateY(0) scale(1.02)",
          "textShadow": "0 0 0.65em rgba(255, 241, 227, 0.45)"
        },
        "100%": {
          "opacity": "1",
          "transform": "translateY(0) scale(1)",
          "textShadow": "0 0 0 rgba(255, 241, 227, 0)"
        }
      },
      "bannerTitleIn": {
        "0%": {
          "opacity": "0",
          "transform": "translateY(0.4em)",
          "filter": "blur(6px)"
        },
        "100%": {
          "opacity": "1",
          "transform": "translateY(0)",
          "filter": "blur(0)"
        }
      },
      "bannerSubtitleIn": {
        "0%": {
          "opacity": "0",
          "transform": "translateY(0.4em)",
          "filter": "blur(6px)"
        },
        "100%": {
          "opacity": ".4",
          "transform": "translateY(0)",
          "filter": "blur(0)"
        }
      },
      "bannerTitleWave": {
        "0%": {
          "opacity": "0.22"
        },
        "35%": {
          "opacity": "1"
        },
        "100%": {
          "opacity": "0.22"
        }
      },
      "logoDotPulse": {
        "0%": {
          "transform": "scale(1)",
          "opacity": "0.5"
        },
        "50%": {
          "transform": "scale(1.1)",
          "opacity": "1"
        },
        "100%": {
          "transform": "scale(1)",
          "opacity": "0.5"
        }
      },
      "logoPulseStrong": {
        "0%": {
          "transform": "translate(-50%, -50%) scale(0.94)",
          "opacity": "0.6"
        },
        "60%": {
          "transform": "translate(-50%, -50%) scale(1.08)",
          "opacity": "1"
        },
        "100%": {
          "transform": "translate(-50%, -50%) scale(1)",
          "opacity": "1"
        }
      },
      "cornerPulseStrongLeft": {
        "0%": {
          "opacity": "0",
          "transform": "translate(-50%, -50%) translate(-2em, 2em) scale(0.92)"
        },
        "60%": {
          "opacity": "1",
          "transform": "translate(-50%, -50%) translate(-2em, 2em) scale(1.08)"
        },
        "100%": {
          "opacity": "1",
          "transform": "translate(-50%, -50%) translate(-2em, 2em) scale(1)"
        }
      },
      "cornerPulseStrongRight": {
        "0%": {
          "opacity": "0",
          "transform": "translate(-50%, -50%) translate(2em, -2em) rotate(180deg) scale(0.92)"
        },
        "60%": {
          "opacity": "1",
          "transform": "translate(-50%, -50%) translate(2em, -2em) rotate(180deg) scale(1.08)"
        },
        "100%": {
          "opacity": "1",
          "transform": "translate(-50%, -50%) translate(2em, -2em) rotate(180deg) scale(1)"
        }
      },
      "logoMove": {
        "0%": {
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%) scale(1)"
        },
        "70%": {
          "top": "calc(var(--logo-final-top-offset, 0.5em) + var(--app-safe-top, 0px))",
          "left": "calc(var(--logo-final-left-offset, 0.5em) + var(--app-safe-left, 0px))",
          "transform": "translate(0, 0) scale(1.02)"
        },
        "100%": {
          "top": "calc(var(--logo-final-top-offset, 0.5em) + var(--app-safe-top, 0px))",
          "left": "calc(var(--logo-final-left-offset, 0.5em) + var(--app-safe-left, 0px))",
          "transform": "translate(0, 0) scale(1)"
        }
      },
      "cornerToBottomLeft": {
        "0%": {
          "transform": "translate(-50%, -50%) translate(-2em, 2em) rotate(0deg)"
        },
        "50%": {
          "transform": "translate(\n    calc(\n      -50vw +\n      var(--corner-left-offset, var(--corner-final-offset, 20px)) +\n      var(--app-safe-left, 0px)\n    ),\n    calc(\n      50vh -\n      var(--corner-bottom-offset, var(--corner-final-offset, 20px)) -\n      var(--app-fixed-bottom-clearance, 0px) -\n      var(--corner-size, 1.2em)\n    )\n    ) rotate(0deg)"
        },
        "100%": {
          "transform": "translate(\n    calc(\n      -50vw +\n      var(--corner-left-offset, var(--corner-final-offset, 20px)) +\n      var(--app-safe-left, 0px)\n    ),\n    calc(\n      50vh -\n      var(--corner-bottom-offset, var(--corner-final-offset, 20px)) -\n      var(--app-fixed-bottom-clearance, 0px) -\n      var(--corner-size, 1.2em)\n    )\n    ) rotate(0deg)"
        }
      },
      "cornerToTopRight": {
        "0%": {
          "transform": "translate(-50%, -50%) translate(2em, -2em) rotate(180deg)",
          "opacity": "1"
        },
        "30%": {
          "transform": "translate(\n    calc(\n      50vw -\n      var(--corner-right-offset, var(--corner-final-offset, 20px)) -\n      var(--app-safe-right, 0px) -\n      var(--corner-size, 1.2em)\n    ),\n    calc(\n      -50vh +\n      var(--corner-top-offset, var(--corner-final-offset, 20px)) +\n      var(--app-safe-top, 0px)\n    )\n    ) rotate(180deg)",
          "opacity": "0"
        },
        "100%": {
          "transform": "translate(\n    calc(\n      50vw -\n      var(--corner-right-offset, var(--corner-final-offset, 20px)) -\n      var(--app-safe-right, 0px) -\n      var(--corner-size, 1.2em)\n    ),\n    calc(\n      -50vh +\n      var(--corner-top-offset, var(--corner-final-offset, 20px)) +\n      var(--app-safe-top, 0px)\n    )\n    ) rotate(180deg)",
          "opacity": "0"
        }
      }
    },
    "media": {
      "tabletM": "(max-width: 1180px), (hover: none) and (pointer: coarse)",
      "screenM": "(max-width: 1680px)",
      "mobileL": "(max-width: 560px)",
      "tabletXS": "(max-width: 860px)",
      "mobileS": "(max-width: 375px)",
      "tabletS": "(max-width: 1024px)",
      "tabletL": "(max-width: 1366px)",
      "tabletXSS": "(max-width: 768px)",
      "mobileM": "(max-width: 480px)",
      "mobileXS": "(max-width: 350px)"
    },
    "cases": {}
  }
}
