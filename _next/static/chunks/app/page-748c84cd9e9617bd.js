(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        7676: (e, a, s) => {
            Promise.resolve().then(s.bind(s, 4996))
        },
        4996: (e, a, s) => {
            "use strict";
            s.r(a), s.d(a, {
                default: () => c
            });
            var t = s(5155),
                r = s(5565),
                l = s(2115);

            function i(e) {
                let {
                    onLoadingComplete: a
                } = e, [s, r] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    (async () => {
                        let e = ["/hero/nav-cloud.png", "/hero/logo-text.png", "/hero/buy_now.png", "/hero/burger.png", "/hero/ca.png", "/hero/cloud.png", "/hero/flag.png", "/hero/fred.png", "/hero/pnut.png", "/logo.png", "/bottom.jpg", "/justice_memories.png", "/whosnext.png", "/coin.png", "/fred-tail.png", "/pnut-tail.png", "/change.png"],
                            s = 0,
                            t = e.length;
                        try {
                            await Promise.all(e.map(e => new Promise((a, l) => {
                                let i = new Image;
                                i.src = e, i.onload = () => {
                                    r(++s / t * 100), a(null)
                                }, i.onerror = l
                            }))), a()
                        } catch (e) {
                            console.error("Error loading images:", e), a()
                        }
                    })()
                }, [a]), (0, t.jsxs)("div", {
                    className: "fixed inset-0 bg-[#3462CC] z-[99999] flex flex-col items-center justify-center",
                    children: [(0, t.jsx)("img", {
                        src: "/logo.png",
                        alt: "Justice For Peanut",
                        className: "w-64 h-64 mb-8 animate-bounce"
                    }), (0, t.jsx)("div", {
                        className: "w-64 h-2 bg-white/20 rounded-full overflow-hidden",
                        children: (0, t.jsx)("div", {
                            className: "h-full bg-white rounded-full transition-all duration-300 ease-out",
                            style: {
                                width: "".concat(s, "%")
                            }
                        })
                    }), (0, t.jsxs)("p", {
                        className: "mt-4 text-white font-roboto text-xs font-light",
                        children: ["LOADING... ", Math.round(s), "%"]
                    })]
                })
            }
            var o = s(8331);
            let n = JSON.parse('{"WJ":"https://t.me/justicepnut_bsc","kR":"https://x.com/justicepnut_bsc","Nu":"https://dexscreener.com/bsc/0x4d7bb7D2FEC9AdB2422B7E3Fe5ef68CAeb8ced12","xT":"#","Xn":"https://pancakeswap.finance/swap?ouputCurrency=0x4d7bb7D2FEC9AdB2422B7E3Fe5ef68CAeb8ced12","SC":"https://solscan.io/token/0x4d7bb7D2FEC9AdB2422B7E3Fe5ef68CAeb8ced12"}');

            function c() {
                let [e, a] = (0, l.useState)(0), [s, c] = (0, l.useState)(!1), [h, d] = (0, l.useState)(!0), m = (0, l.useCallback)(() => {
                    c(!1)
                }, []);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        window.scrollY <= window.innerHeight && a(window.scrollY)
                    };
                    return window.addEventListener("scroll", e, {
                        passive: !0
                    }), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []), (0, t.jsxs)("div", {
                    children: [h && (0, t.jsx)(i, {
                        onLoadingComplete: () => d(!1)
                    }), (0, t.jsxs)("nav", {
                        className: "fixed top-0 left-0 w-full h-[150px] z-50",
                        children: [(0, t.jsx)("div", {
                            className: "relative pointer-events-none",
                            children: (0, t.jsx)(r.default, {
                                src: "/hero/nav-cloud.png",
                                alt: "Cloud",
                                className: "w-full h-auto",
                                width: 1920,
                                height: 200,
                                priority: !0
                            })
                        }), (0, t.jsx)("div", {
                            className: "absolute inset-0 flex flex-col items-center",
                            children: (0, t.jsxs)("div", {
                                className: "container mx-auto px-4 py-4 flex justify-between items-center",
                                children: [(0, t.jsx)(r.default, {
                                    src: "/hero/logo-text.png?2",
                                    alt: "Justice For Peanut",
                                    className: "w-auto h-12 md:h-16",
                                    width: 300,
                                    height: 64,
                                    priority: !0
                                }), (0, t.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [(0, t.jsx)("a", {
                                        href: n.Xn,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/hero/buy_now.png?2",
                                            alt: "Buy Now",
                                            className: "hidden md:block w-auto h-10 md:h-12 cursor-pointer hover-effect",
                                            width: 200,
                                            height: 48,
                                            priority: !0
                                        })
                                    }), (0, t.jsx)(r.default, {
                                        src: "/hero/burger.png",
                                        alt: "Menu",
                                        className: "block md:hidden w-auto h-14 cursor-pointer hover-effect",
                                        width: 64,
                                        height: 64,
                                        priority: !0,
                                        onClick: () => c(!0)
                                    })]
                                }), s && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("div", {
                                        className: "modal-backdrop",
                                        onClick: m
                                    }), (0, t.jsxs)("div", {
                                        className: "modal-content border-4 border-black",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [(0, t.jsx)(r.default, {
                                                src: "/hero/logo-text.png?2",
                                                alt: "Buy Now",
                                                className: "w-auto h-8",
                                                width: 110,
                                                height: 32,
                                                priority: !0
                                            }), (0, t.jsx)("button", {
                                                onClick: m,
                                                className: "text-gray-500 hover:text-gray-700",
                                                children: "✕"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [(0, t.jsxs)("a", {
                                                href: n.WJ,
                                                className: "mobile-menu-item",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, t.jsx)(r.default, {
                                                    src: "/tg.webp",
                                                    alt: "Telegram",
                                                    className: "w-8 h-8",
                                                    width: 32,
                                                    height: 32
                                                }), (0, t.jsx)("span", {
                                                    className: "text-black",
                                                    children: "Telegram"
                                                })]
                                            }), (0, t.jsxs)("a", {
                                                href: n.kR,
                                                className: "mobile-menu-item",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, t.jsx)(r.default, {
                                                    src: "/x.webp",
                                                    alt: "X",
                                                    className: "w-8 h-8",
                                                    width: 32,
                                                    height: 32
                                                }), (0, t.jsx)("span", {
                                                    className: "text-black",
                                                    children: "Twitter"
                                                })]
                                            }), (0, t.jsxs)("a", {
                                                href: n.Nu,
                                                className: "mobile-menu-item",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [(0, t.jsx)(r.default, {
                                                    src: "/ds.webp",
                                                    alt: "DexScreener",
                                                    className: "w-8 h-8",
                                                    width: 32,
                                                    height: 32
                                                }), (0, t.jsx)("span", {
                                                    className: "text-black",
                                                    children: "DexScreener"
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0, t.jsxs)("main", {
                        children: [(0, t.jsx)("div", {
                            className: "absolute top-0 z-[1] mt-[100px] w-full max-w-screen overflow-x-clip",
                            children: (0, t.jsx)(o.A, {
                                className: "border-[.5rem] border-l-0 border-r-0 border-black bg-[#ffbf08]",
                                children: Array.from({
                                    length: 3
                                }, (e, a) => (0, t.jsx)("div", {
                                    className: "flex items-center py-4 ml-16",
                                    children: (0, t.jsx)("img", {
                                        src: "/change_america.png",
                                        className: "max-h-[30px]",
                                        draggable: "false"
                                    })
                                }, a))
                            })
                        }), (0, t.jsxs)("section", {
                            className: "relative h-screen w-full bg-[#3462CC] overflow-visible flex justify-center items-center",
                            children: [(0, t.jsx)("div", {
                                className: "absolute top-0 left-0 w-full overflow-hidden",
                                children: (0, t.jsx)("div", {
                                    className: "xl:container mx-auto relative",
                                    children: (0, t.jsx)("div", {
                                        className: "w-full mask-fade-x flag-animation",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/hero/flag.png",
                                            alt: "American Flag",
                                            className: "w-full h-auto object-cover",
                                            width: 1920,
                                            height: 1080,
                                            priority: !0,
                                            draggable: "false"
                                        })
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-0 left-0",
                                style: {
                                    transform: "translateX(".concat(-.1 * e, "px)"),
                                    transition: "transform 0.1s ease-out"
                                },
                                children: (0, t.jsx)(r.default, {
                                    src: "/hero/pnut.png",
                                    alt: "Pnut",
                                    className: "h-auto max-h-[80vh] w-auto -mb-[1px]",
                                    width: 1200,
                                    height: 1800,
                                    priority: !0,
                                    draggable: "false"
                                })
                            }), (0, t.jsx)("div", {
                                className: "z-[2]",
                                style: {
                                    transform: "translateY(".concat(-.5 * e, "px)"),
                                    opacity: Math.max(0, 1 - e / 500),
                                    transition: "transform 0.1s ease-out"
                                },
                                children: (0, t.jsx)(r.default, {
                                    src: "/logo.png?12",
                                    alt: "Logo",
                                    className: "relative z-10 max-w-[490px] w-full h-auto",
                                    width: 490,
                                    height: 460,
                                    priority: !0,
                                    draggable: "false"
                                })
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-0 right-0",
                                style: {
                                    transform: "translateX(".concat(.1 * e, "px)"),
                                    transition: "transform 0.1s ease-out"
                                },
                                children: (0, t.jsx)(r.default, {
                                    src: "/hero/fred.png",
                                    alt: "Fred",
                                    className: "h-auto max-h-[80vh] w-auto -mb-[1px] hidden md:block",
                                    width: 1200,
                                    height: 1800,
                                    priority: !0,
                                    draggable: "false"
                                })
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "relative min-h-screen w-full bg-[#1A1A1A] flex flex-col justify-center items-center py-20",
                            children: [(0, t.jsxs)("div", {
                                className: "max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-16",
                                children: [(0, t.jsx)("div", {
                                    className: "flex justify-center items-center",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/justice_card.webp",
                                        alt: "Justice Card",
                                        className: "w-full h-auto max-w-[400px] p-4 md:p-0",
                                        width: 400,
                                        height: 560
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col justify-center space-y-6 md:col-span-2 p-4 md:p-0",
                                    children: [(0, t.jsx)(r.default, {
                                        src: "/about_us.webp",
                                        alt: "About Us",
                                        className: "w-auto h-auto max-w-[500px]",
                                        width: 500,
                                        height: 100,
                                        priority: !0
                                    }), (0, t.jsxs)("p", {
                                        className: "text-lg md:text-2xl text-gray-300 mb-4 font-shadows",
                                        children: ["This coin is the heartbeat of Pnut's Freedom Farm Animal Sanctuary, a haven for dozens of rescued horses, cats, and raccoons. It embodies founder Mark Longo's profound vision - more than a financial instrument, but a living commitment to those who cannot speak for themselves.", " "]
                                    }), (0, t.jsxs)("p", {
                                        className: "text-lg md:text-2xl text-gray-300 mb-4 font-shadows",
                                        children: ["Through this project, Fred and Peanut are raising awareness and hope, transforming each transaction into a promise of continued rescue and care. This isn't just a meme coin - it's a movement declaring that every life matters, and that rescue is an act of pure love.", " "]
                                    }), (0, t.jsx)("p", {
                                        className: "text-lg md:text-2xl text-gray-300 mb-4 font-shadows",
                                        children: "This isn't just a meme coin. It's a movement. It's a declaration that every life matters, that rescue is an act of love, and that together, we can create sanctuaries of hope, one rescued animal at a time."
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "max-w-7xl w-full relative",
                                children: [(0, t.jsx)("div", {
                                    className: "md:-mt-12 pointer-events-none",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/justice_memories.png",
                                        alt: "Justice Memories",
                                        className: "w-full h-auto xl:mask-fade-right",
                                        width: 1400,
                                        height: 800
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "flex justify-center space-x-8 absolute right-12 md:right-8 lg:right-16 -bottom-8 md:bottom-8",
                                    children: [(0, t.jsx)("a", {
                                        href: n.WJ,
                                        className: "hover-effect",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/tg.webp",
                                            alt: "Telegram",
                                            width: 48,
                                            height: 48,
                                            className: "w-12 h-12"
                                        })
                                    }), (0, t.jsx)("a", {
                                        href: n.kR,
                                        className: "hover-effect",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/x.webp",
                                            alt: "X",
                                            width: 48,
                                            height: 48,
                                            className: "w-12 h-12"
                                        })
                                    }), (0, t.jsx)("a", {
                                        href: n.Nu,
                                        className: "hover-effect",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/ds.webp",
                                            alt: "DexScreener",
                                            width: 48,
                                            height: 48,
                                            className: "w-12 h-12"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("section", {
                            className: "w-full bg-[#1A1A1A] overflow-hidden",
                            children: (0, t.jsx)("div", {
                                className: "mx-auto",
                                children: (0, t.jsx)("div", {
                                    className: "w-full",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/whosnext.png",
                                        alt: "Who's Next",
                                        className: "w-full h-auto object-cover",
                                        width: 1920,
                                        height: 1080,
                                        priority: !0
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative",
                            children: [(0, t.jsx)("div", {
                                className: "absolute left-0 w-full z-[1] top-0 -translate-y-1/2",
                                children: (0, t.jsx)(r.default, {
                                    src: "/seperator.webp",
                                    alt: "Section Separator",
                                    className: "w-full h-auto",
                                    width: 1920,
                                    height: 200,
                                    priority: !0
                                })
                            }), (0, t.jsxs)("section", {
                                className: "relative min-h-screen w-full bg-[#3462CC] flex flex-col justify-center items-center pt-32 pb-20",
                                children: [(0, t.jsxs)("div", {
                                    className: "max-w-7xl w-full xl:mt-48",
                                    children: [(0, t.jsx)("div", {
                                        className: "w-full",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/change.png",
                                            alt: "Supply Information",
                                            className: "w-full h-auto",
                                            width: 1920,
                                            height: 1080,
                                            priority: !0
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 ",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex justify-center",
                                            children: (0, t.jsx)("a", {
                                                href: n.WJ,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, t.jsx)(r.default, {
                                                    src: "/follow-tg.webp",
                                                    alt: "Follow on Telegram",
                                                    className: "w-full h-auto max-w-[400px] cursor-pointer hover-effect",
                                                    width: 400,
                                                    height: 100,
                                                    priority: !0
                                                })
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "flex justify-center",
                                            children: (0, t.jsx)("a", {
                                                href: n.kR,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: (0, t.jsx)(r.default, {
                                                    src: "/follow-x.webp",
                                                    alt: "Follow on X",
                                                    className: "w-full h-auto max-w-[400px] cursor-pointer hover-effect",
                                                    width: 400,
                                                    height: 100,
                                                    priority: !0
                                                })
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col items-center  mt-12",
                                        children: [(0, t.jsx)(r.default, {
                                            src: "/total_supply.png",
                                            alt: "Total Supply",
                                            className: "w-auto h-auto max-w-[50%]",
                                            width: 300,
                                            height: 50,
                                            priority: !0
                                        }), (0, t.jsx)(r.default, {
                                            src: "/1000000000.png",
                                            alt: "1000000000",
                                            className: "w-full h-auto max-w-[1000px]",
                                            width: 1e3,
                                            height: 250,
                                            priority: !0
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 md:px-8",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex flex-col items-center space-y-4",
                                            children: [(0, t.jsx)(r.default, {
                                                src: "/burned_lp.png",
                                                alt: "Burned LP",
                                                className: "w-auto h-auto max-w-[40%]",
                                                width: 200,
                                                height: 50,
                                                priority: !0
                                            }), (0, t.jsx)(r.default, {
                                                src: "/100.png",
                                                alt: "100%",
                                                className: "w-auto h-auto max-h-[100px]",
                                                width: 400,
                                                height: 100,
                                                priority: !0
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "flex flex-col items-center space-y-4",
                                            children: [(0, t.jsx)(r.default, {
                                                src: "/no_tax.png",
                                                alt: "No Tax",
                                                className: "w-auto h-auto max-w-[80%]",
                                                width: 400,
                                                height: 100,
                                                priority: !0
                                            }), (0, t.jsx)(r.default, {
                                                src: "/0.png",
                                                alt: "0%",
                                                className: "w-auto h-auto max-h-[100px]",
                                                width: 400,
                                                height: 100,
                                                priority: !0
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "relative w-full min-h-[80vh] flex flex-col items-center space-y-16 mt-6",
                                    children: [(0, t.jsx)(r.default, {
                                        src: "/pnut-tail.png?1",
                                        alt: "Pnut Tail",
                                        className: "absolute bottom-0 left-0 h-auto max-h-[100vh] w-auto z-0",
                                        width: 1200,
                                        height: 1500,
                                        priority: !0
                                    }), (0, t.jsx)("div", {
                                        className: "relative z-10",
                                        children: (0, t.jsx)(r.default, {
                                            src: "/coin.png?1",
                                            alt: "Coin",
                                            className: "w-auto h-auto max-w-[600px]",
                                            width: 600,
                                            height: 600,
                                            priority: !0
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "relative z-10",
                                        children: (0, t.jsx)("a", {
                                            href: n.Xn,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: (0, t.jsx)(r.default, {
                                                src: "/buy_now.png?1",
                                                alt: "Buy Now",
                                                className: "w-auto h-auto max-w-[400px] cursor-pointer hover-effect",
                                                width: 400,
                                                height: 100,
                                                priority: !0
                                            })
                                        })
                                    }), (0, t.jsx)(r.default, {
                                        src: "/fred-tail.png?1",
                                        alt: "Fred Tail",
                                        className: "absolute bottom-0 right-0 h-auto max-h-[80vh] w-auto z-0  hiddenmd:block",
                                        width: 1200,
                                        height: 1800,
                                        priority: !0
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "w-full max-w-7xl mx-auto px-4 md:-mt-12",
                                    children: [(0, t.jsx)(r.default, {
                                        src: "/how_to_buy.webp",
                                        alt: "How to Buy",
                                        className: "w-full h-auto",
                                        width: 1920,
                                        height: 200,
                                        priority: !0
                                    }), (0, t.jsxs)("div", {
                                        className: "video-container mt-8",
                                        children: [(0, t.jsxs)("video", {
                                            id: "howToBuyVideo",
                                            className: "w-full border-4 border-white rounded-xl cursor-pointer",
                                            onClick: e => {
                                                let a = e.target,
                                                    s = document.querySelector(".video-overlay");
                                                a.paused ? (a.play(), s && (s.style.display = "none")) : (a.pause(), s && (s.style.display = "flex"))
                                            },
                                            children: [(0, t.jsx)("source", {
                                                src: "/video.mp4",
                                                type: "video/mp4"
                                            }), "Your browser does not support the video tag."]
                                        }), (0, t.jsx)("div", {
                                            className: "video-overlay rounded-xl",
                                            onClick: e => {
                                                let a = document.getElementById("howToBuyVideo"),
                                                    s = e.currentTarget;
                                                a && a.play().then(() => {
                                                    s.style.display = "none"
                                                }).catch(e => {
                                                    console.error("Error playing video:", e)
                                                })
                                            },
                                            children: (0, t.jsx)("div", {
                                                className: "play-button"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "relative w-full max-w-screen overflow-x-clip bg-[#06070a]",
                            children: [(0, t.jsx)(o.A, {
                                className: "border-[.5rem] border-l-0 border-r-0 border-black bg-[#ffbf08]",
                                children: Array.from({
                                    length: 3
                                }, (e, a) => (0, t.jsx)("div", {
                                    className: "flex items-center py-4 ml-16",
                                    children: (0, t.jsx)("img", {
                                        src: "/change_america.png",
                                        className: "max-h-[30px]",
                                        draggable: "false"
                                    })
                                }, a))
                            }), (0, t.jsx)("div", {
                                className: "xl:container mx-auto",
                                children: (0, t.jsx)("div", {
                                    className: "w-full mask-fade-x",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/bottom.jpg",
                                        alt: "Bottom",
                                        className: "w-full h-auto object-cover",
                                        width: 1920,
                                        height: 1080,
                                        priority: !0
                                    })
                                })
                            })]
                        })]
                    }), (0, t.jsxs)("footer", {
                        className: "bg-[#FFBF00] w-full",
                        children: [(0, t.jsx)(o.A, {
                            className: "border-8 border-l-0 border-r-0 border-black bg-[#ffbf08]",
                            children: Array.from({
                                length: 2
                            }, (e, a) => (0, t.jsx)("div", {
                                className: "flex items-center py-4 ml-4",
                                children: (0, t.jsx)("img", {
                                    src: "/the_fight.png",
                                    className: "max-h-[30px]"
                                })
                            }, a))
                        }), (0, t.jsxs)("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 py-8 md:h-32 relative",
                            children: [(0, t.jsxs)("div", {
                                className: "absolute inset-y-0 left-0 right-0 hidden md:flex",
                                children: [(0, t.jsx)("div", {
                                    className: "w-1/4 border-l-8 border-black opacity-0"
                                }), (0, t.jsx)("div", {
                                    className: "w-1/4 border-l-8 border-black"
                                }), (0, t.jsx)("div", {
                                    className: "w-1/4 border-l-8 border-black"
                                }), (0, t.jsx)("div", {
                                    className: "w-1/4 border-l-8 border-black"
                                })]
                            }), (0, t.jsx)("div", {
                                className: "flex flex-col items-center justify-center relative z-10",
                                children: (0, t.jsx)("a", {
                                    href: n.kR,
                                    className: "hover-effect",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/x.webp",
                                        alt: "X",
                                        width: 64,
                                        height: 64,
                                        className: "w-16 h-16"
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "flex flex-col items-center justify-center relative z-10",
                                children: (0, t.jsx)("a", {
                                    href: n.WJ,
                                    className: "hover-effect",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/tg.webp",
                                        alt: "Telegram",
                                        width: 64,
                                        height: 64,
                                        className: "w-16 h-16"
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "flex flex-col items-center justify-center relative z-10",
                                children: (0, t.jsx)("a", {
                                    href: n.Nu,
                                    className: "hover-effect",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/ds.webp",
                                        alt: "DexScreener",
                                        width: 64,
                                        height: 64,
                                        className: "w-16 h-16"
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "flex flex-col items-center justify-center relative z-10",
                                children: (0, t.jsx)("a", {
                                    href: "https://dextools.io/app/en/bnb/pair-explorer/0x4d7bb7D2FEC9AdB2422B7E3Fe5ef68CAeb8ced12",
                                    className: "hover-effect",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, t.jsx)(r.default, {
                                        src: "/dextools-white.png?2",
                                        alt: "CoinGecko",
                                        width: 64,
                                        height: 64,
                                        className: "w-16 h-16"
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [535, 441, 517, 358], () => a(7676)), _N_E = e.O()
    }
]);