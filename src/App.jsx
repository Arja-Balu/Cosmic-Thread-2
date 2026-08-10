import { useEffect, useRef } from "react";
import CosmicRakhi from "./CosmicRakhi";
import gsap from "gsap";
import "./App.css";

function App() {
  const cosmosRef = useRef(null);

  // ==================================================
  // STARS
  // ==================================================

  const starRef = useRef(null);
  const phaseTwoStarRef = useRef(null);

  // Final destination stars
  const finalOriginalStarRef = useRef(null);
  const finalStarRef = useRef(null);

  const signalRef = useRef(null);
  const messageRef = useRef(null);

  const ringOneRef = useRef(null);
  const ringTwoRef = useRef(null);

  const redirectRef = useRef(null);
  const redirectHintRef = useRef(null);

  // ==================================================
  // JOURNEY
  // ==================================================

  const cameraRef = useRef(null);

  const blackHoleRef = useRef(null);
  const neutronStarRef = useRef(null);
  const nebulaPhaseRef = useRef(null);
  const pulsarRef = useRef(null);
  const quasarRef = useRef(null);
  const supernovaRef = useRef(null);

  const phaseLabelRef = useRef(null);
  const phaseNumberRef = useRef(null);
  const phaseDescriptionRef = useRef(null);
  const journeyCompleteRef = useRef(null);

  const activatedRef = useRef(false);
  const navigationReadyRef = useRef(false);

  const touchStartYRef = useRef(null);

  const travelProgressRef = useRef(0);
  const currentPhaseRef = useRef(-1);

  const cameraTweenRef = useRef(null);

  // ==================================================
  // JOURNEY PHASES
  // ==================================================

  const phases = [
    {
      number: "01",
      label: "BLACK HOLE",
      description:
        "NOTHING CAN ESCAPE ITS IMMENSE GRAVITATIONAL PULL. I HOPE NO GOOD OPPORTUNITY EVER SLIPS AWAY FROM YOU..",
      ref: blackHoleRef,
    },
    {
      number: "02",
      label: "NEUTRON STAR",
      description:
        "ONE OF THE DENSEST OBJECTS IN THE UNIVERSE. I HOPE YOU ALWAYS REMAIN STRONG, NO MATTER HOW HEAVY LIFE GETS.",
      ref: neutronStarRef,
    },
    {
      number: "03",
      label: "NEBULA",
      description:
        "WHERE CLOUDS OF DUST AND GAS CAN BECOME THE BIRTHPLACE OF NEW STARS. I HOPE YOU ALWAYS TURN EVERY BEGINNING INTO SOMETHING BEAUTIFUL.",
      ref: nebulaPhaseRef,
    },
    {
      number: "04",
      label: "PULSAR",
      description:
        "A RAPIDLY ROTATING STAR THAT SENDS PRECISE BEAMS OF ENERGY THROUGH SPACE. I HOPE YOUR LIGHT ALWAYS REACHES EVERYONE WHO NEEDS IT.",
      ref: pulsarRef,
    },
    {
      number: "05",
      label: "QUASAR",
      description:
        "ONE OF THE BRIGHTEST OBJECTS IN THE UNIVERSE. I HOPE YOU WILL ALWAYS BE THE BRIGHTEST.",
      ref: quasarRef,
    },
    {
      number: "06",
      label: "SUPERNOVA",
      description:
        "A DYING STAR CAN RELEASE AN ENORMOUS BURST OF ENERGY AND CREATE THE ELEMENTS THAT BUILD NEW WORLDS. I HOPE EVERY GOOD ENDING IN YOUR LIFE BECOMES THE BEGINNING OF SOMETHING MORE BEAUTIFUL.",
      ref: supernovaRef,
    },
    {
      number: "07",
      label: "YOU HAVE REACHED THE STAR",
      description:
        "THE STAR HAS BEEN FOUND. THE JOURNEY HAS COME FULL CIRCLE. SCROLL TO SEE WHAT'S NEXT..",
      ref: finalStarRef,
    },
  ];

  // ==================================================
  // SHOW JOURNEY PHASE
  // ==================================================

  const showJourneyPhase = (phase) => {
    const current = phases[phase];

    if (!current) return;

    // --------------------------------------------------
    // ALL JOURNEY OBJECTS
    // --------------------------------------------------

    const phaseObjects = [
      blackHoleRef.current,
      neutronStarRef.current,
      nebulaPhaseRef.current,
      pulsarRef.current,
      quasarRef.current,
      supernovaRef.current,
      finalOriginalStarRef.current,
      finalStarRef.current,
    ].filter(Boolean);

    // --------------------------------------------------
    // HIDE ALL JOURNEY OBJECTS
    // --------------------------------------------------

    phaseObjects.forEach((element) => {
      gsap.to(element, {
        opacity: 0,
        duration: 0.25,
        overwrite: "auto",
      });
    });

    // --------------------------------------------------
    // PHASES 1–6
    // --------------------------------------------------

    if (phase !== 6 && current.ref.current) {
      gsap.fromTo(
        current.ref.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    }

    // --------------------------------------------------
    // PHASE 7 — FINAL DESTINATION
    // WHITE STAR + OTHER STAR
    // --------------------------------------------------

    if (phase === 6) {
      gsap.fromTo(
        finalOriginalStarRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        }
      );

      gsap.fromTo(
        finalStarRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    }

    // --------------------------------------------------
    // PHASE UI
    // --------------------------------------------------

    const phaseUiElements = [
      phaseNumberRef.current,
      phaseLabelRef.current,
      phaseDescriptionRef.current,
    ].filter(Boolean);

    gsap.to(phaseUiElements, {
      opacity: 0,
      y: -8,
      duration: 0.18,
      overwrite: "auto",

      onComplete: () => {
        if (phaseNumberRef.current) {
          phaseNumberRef.current.textContent =
            current.number;
        }

        if (phaseLabelRef.current) {
          phaseLabelRef.current.textContent =
            current.label;
        }

        if (phaseDescriptionRef.current) {
          phaseDescriptionRef.current.textContent =
            current.description;
        }

        gsap.fromTo(
          phaseUiElements,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: "power3.out",
            overwrite: "auto",
          }
        );
      },
    });

    // --------------------------------------------------
    // FINAL MESSAGE
    // --------------------------------------------------

    if (phase === 6) {
      gsap.to(journeyCompleteRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(journeyCompleteRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.25,
        overwrite: "auto",
      });
    }
  };

  // ==================================================
  // CAMERA TRAVEL
  // ==================================================

  const addTravelProgress = (amount) => {
    if (!cameraRef.current) return;

    const currentProgress =
      travelProgressRef.current;

    // ==================================================
    // IMPORTANT
    // ==================================================
    // Once journey is complete, normal browser
    // scrolling takes over.
    // ==================================================

    if (currentProgress >= 100) {
      return;
    }

    let resistance = 1;

    // Small resistance at beginning
    if (currentProgress <= 2 && amount < 0) {
      resistance = 0.25;
    }

    // Small resistance at end
    if (currentProgress >= 98 && amount > 0) {
      resistance = 0.25;
    }

    const nextProgress = Math.max(
      0,
      Math.min(
        currentProgress + amount * resistance,
        100
      )
    );

    travelProgressRef.current =
      nextProgress;

    // ==================================================
    // HIDE REDIRECTION TEXT
    // ==================================================
    // Once the user starts travelling through the
    // journey, these instructions must disappear
    // immediately.
    //
    // This is intentionally NOT based on a gradual
    // opacity calculation.
    // ==================================================

    if (nextProgress > 0) {
      gsap.killTweensOf([
        redirectRef.current,
        redirectHintRef.current,
      ]);

      gsap.set(
        [
          redirectRef.current,
          redirectHintRef.current,
        ],
        {
          opacity: 0,
          y: -12,
        }
      );
    }

    // ==================================================
    // UNLOCK NORMAL PAGE SCROLLING
    // ==================================================

    if (nextProgress >= 100) {
      navigationReadyRef.current = false;

      document.documentElement.style.overflowY =
        "auto";

      document.body.style.overflowY =
        "auto";

      // Keep the first page completely finished.
      gsap.set(cameraRef.current, {
        x: 0,
        y: 7000,
      });

      return;
    }

    // ==================================================
    // CAMERA
    // ==================================================

    const journeyDistance = 7000;

    const progress =
      nextProgress / 100;

    const cameraY =
      progress * journeyDistance;

    // Horizontal movement gradually stops
    // near the final destination
    const horizontalStrength =
      1 -
      Math.max(
        0,
        (progress - 0.82) / 0.18
      );

    const cameraX =
      (
        progress * 220 +
        Math.sin(
          progress * Math.PI * 3
        ) * 45
      ) * horizontalStrength;

    if (cameraTweenRef.current) {
      cameraTweenRef.current.kill();
    }

    cameraTweenRef.current =
      gsap.to(
        cameraRef.current,
        {
          x: -cameraX,
          y: cameraY,
          duration: 0.32,
          ease: "power2.out",
          overwrite: "auto",
        }
      );

    // ==================================================
    // PHASE DETECTION
    // ==================================================

    let phase = 0;

    if (nextProgress < 14) {
      phase = 0;
    } else if (nextProgress < 28) {
      phase = 1;
    } else if (nextProgress < 42) {
      phase = 2;
    } else if (nextProgress < 56) {
      phase = 3;
    } else if (nextProgress < 70) {
      phase = 4;
    } else if (nextProgress < 84) {
      phase = 5;
    } else {
      phase = 6;
    }

    if (
      currentPhaseRef.current !== phase
    ) {
      currentPhaseRef.current =
        phase;

      showJourneyPhase(phase);
    }
  };

  // ==================================================
  // INITIALIZATION
  // ==================================================

  useEffect(() => {
    const introTimeline =
      gsap.timeline();

    // ==================================================
    // KEEP DOCUMENT SCROLL LOCKED WHILE JOURNEY RUNS
    // ==================================================

    const previousHtmlOverflow =
      document.documentElement.style.overflowY;

    const previousBodyOverflow =
      document.body.style.overflowY;

    document.documentElement.style.overflowY =
      "hidden";

    document.body.style.overflowY =
      "hidden";

    // ==================================================
    // HIDE PHASE 2 + FINAL STARS INITIALLY
    // ==================================================

    gsap.set(
      [
        phaseTwoStarRef.current,
        finalOriginalStarRef.current,
        finalStarRef.current,
      ],
      {
        opacity: 0,
        scale: 0,
      }
    );

    // ==================================================
    // MESSAGE
    // ==================================================

    gsap.set(
      messageRef.current,
      {
        opacity: 0,
        y: 15,
      }
    );

    // ==================================================
    // ENERGY RINGS
    // ==================================================

    gsap.set(
      [
        ringOneRef.current,
        ringTwoRef.current,
      ],
      {
        opacity: 0,
        scale: 0,
      }
    );

    // ==================================================
    // REDIRECTION
    // ==================================================

    gsap.set(
      [
        redirectRef.current,
        redirectHintRef.current,
      ],
      {
        opacity: 0,
        y: 10,
      }
    );

    // ==================================================
    // CAMERA
    // ==================================================

    gsap.set(
      cameraRef.current,
      {
        x: 0,
        y: 0,
      }
    );

    // ==================================================
    // JOURNEY OBJECTS
    // ==================================================

    gsap.set(
      [
        blackHoleRef.current,
        neutronStarRef.current,
        nebulaPhaseRef.current,
        pulsarRef.current,
        quasarRef.current,
        supernovaRef.current,
      ],
      {
        opacity: 0,
      }
    );

    // ==================================================
    // JOURNEY UI
    // ==================================================

    gsap.set(
      [
        phaseLabelRef.current,
        phaseNumberRef.current,
        phaseDescriptionRef.current,
        journeyCompleteRef.current,
      ],
      {
        opacity: 0,
        y: 12,
      }
    );

    // ==================================================
    // FIRST STAR
    // ==================================================

    introTimeline.fromTo(
      starRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      }
    );

    introTimeline.to(
      starRef.current,
      {
        scale: 1.08,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    // ==================================================
    // SIGNAL TEXT
    // ==================================================

    gsap.fromTo(
      signalRef.current,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 1.2,
        ease: "power2.out",
      }
    );

    // ==================================================
    // MOUSE PARALLAX
    // ==================================================

    const handleMouseMove = (
      event
    ) => {
      if (activatedRef.current)
        return;

      if (
        !cosmosRef.current ||
        !starRef.current
      ) {
        return;
      }

      const rect =
        cosmosRef.current.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
          rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
          rect.height -
        0.5;

      gsap.to(
        starRef.current,
        {
          x: x * 25,
          y: y * 18,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    };

    // ==================================================
    // MOUSE WHEEL
    // ==================================================

    const handleWheel = (
      event
    ) => {
      // Before interaction is activated,
      // allow nothing to happen.
      if (
        !navigationReadyRef.current
      ) {
        return;
      }

      // ==================================================
      // IMPORTANT:
      // When journey reaches 100%, DO NOT
      // preventDefault().
      //
      // Browser scrolling is now allowed and
      // the user can reach Cosmic Rakhi page.
      // ==================================================

      if (
        travelProgressRef.current >= 100
      ) {
        return;
      }

      event.preventDefault();

      addTravelProgress(
        event.deltaY * 0.018
      );
    };

    // ==================================================
    // TOUCH
    // ==================================================

    const handleTouchStart = (
      event
    ) => {
      touchStartYRef.current =
        event.touches[0].clientY;
    };

    const handleTouchMove = (
      event
    ) => {
      if (
        !navigationReadyRef.current
      ) {
        return;
      }

      // Allow normal page scrolling
      // after journey is complete.
      if (
        travelProgressRef.current >= 100
      ) {
        return;
      }

      if (
        touchStartYRef.current ===
        null
      ) {
        return;
      }

      const currentY =
        event.touches[0].clientY;

      const deltaY =
        touchStartYRef.current -
        currentY;

      if (
        Math.abs(deltaY) > 1
      ) {
        event.preventDefault();

        addTravelProgress(
          deltaY * 0.12
        );

        touchStartYRef.current =
          currentY;
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current =
        null;
    };

    // ==================================================
    // LISTENERS
    // ==================================================

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: false,
      }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd
    );

    // ==================================================
    // CLEANUP
    // ==================================================

    return () => {
      introTimeline.kill();

      if (
        cameraTweenRef.current
      ) {
        cameraTweenRef.current.kill();
      }

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      document.documentElement.style.overflowY =
        previousHtmlOverflow;

      document.body.style.overflowY =
        previousBodyOverflow;
    };
  }, []);

  // ==================================================
  // ACTIVATE SIGNAL
  // ==================================================

  const activateSignal = () => {
    if (activatedRef.current)
      return;

    activatedRef.current = true;

    const timeline =
      gsap.timeline();

    gsap.killTweensOf(
      starRef.current
    );

    timeline

      // ------------------------------------------------
      // SIGNAL TEXT
      // ------------------------------------------------

      .to(
        signalRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.in",
        }
      )

      // ------------------------------------------------
      // STAR EXPANDS
      // ------------------------------------------------

      .to(
        starRef.current,
        {
          scale: 1.8,
          duration: 0.45,
          ease: "power3.out",
        },
        "-=0.15"
      )

      .to(
        starRef.current,
        {
          scale: 2.8,
          opacity: 1,
          duration: 0.2,
          ease: "power4.out",
        }
      )

      .to(
        starRef.current,
        {
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.45)",
        }
      )

      // ------------------------------------------------
      // ENERGY RING 1
      // ------------------------------------------------

      .fromTo(
        ringOneRef.current,
        {
          opacity: 0.75,
          scale: 0,
        },
        {
          opacity: 0,
          scale: 16,
          duration: 1.5,
          ease: "power2.out",
        },
        "<"
      )

      // ------------------------------------------------
      // ENERGY RING 2
      // ------------------------------------------------

      .fromTo(
        ringTwoRef.current,
        {
          opacity: 0.5,
          scale: 0,
        },
        {
          opacity: 0,
          scale: 22,
          duration: 1.8,
          ease: "power2.out",
        },
        "<0.2"
      )

      // ------------------------------------------------
      // CONNECTION MESSAGE
      // ------------------------------------------------

      .to(
        messageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )

      // ------------------------------------------------
      // SECOND STAR
      // ------------------------------------------------

      .fromTo(
        phaseTwoStarRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
        },
        "+=0.5"
      )

      .to(
        phaseTwoStarRef.current,
        {
          scale: 1.08,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

    // ==================================================
    // REDIRECTION
    // ==================================================

    gsap.delayedCall(
      6.8,
      () => {
        const redirectTimeline =
          gsap.timeline();

        redirectTimeline

          .to(
            messageRef.current,
            {
              opacity: 0,
              y: -10,
              duration: 0.6,
              ease: "power2.in",
            }
          )

          .to(
            phaseTwoStarRef.current,
            {
              opacity: 0,
              scale: 0.6,
              duration: 0.8,
              ease: "power2.in",
            },
            "<"
          )

          .to(
            redirectRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "+=0.4"
          )

          .to(
            redirectHintRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.25"
          )

          .call(() => {
            navigationReadyRef.current =
              true;
          });
      }
    );
  };

  // ==================================================
  // RETURN
  // ==================================================

  return (
    <>
      {/* ==================================================
          PAGE 1 — EXISTING COSMIC JOURNEY
          ================================================== */}

      <main
        ref={cosmosRef}
        className="cosmos"
        onClick={activateSignal}
      >
        <div className="nebula nebula-one" />
        <div className="nebula nebula-two" />

        <div className="star-field star-field-far" />
        <div className="star-field star-field-near" />

        {/* ==================================================
            COSMIC CAMERA
            ================================================== */}

        <div
          ref={cameraRef}
          className="cosmic-camera"
        >
          {/* ==================================================
              FIRST STAR
              ================================================== */}

          <div className="star-center">
            <div
              ref={starRef}
              className="star-system"
            >
              <div className="star-glow glow-large" />
              <div className="star-glow glow-medium" />
              <div className="star-glow glow-small" />

              <div className="signal-star" />
            </div>
          </div>

          {/* ==================================================
              PHASE 2 STAR
              ================================================== */}

          <div className="phase-two-star-position">
            <div
              ref={phaseTwoStarRef}
              className="star-system second-star-system"
            >
              <div className="star-glow glow-large second-glow-large" />
              <div className="star-glow glow-medium second-glow-medium" />
              <div className="star-glow glow-small second-glow-small" />

              <div className="signal-star second-star-core" />
            </div>
          </div>

          {/* ==================================================
              ENERGY RINGS
              ================================================== */}

          <div
            ref={ringOneRef}
            className="energy-ring ring-one"
          />

          <div
            ref={ringTwoRef}
            className="energy-ring ring-two"
          />

          {/* ==================================================
              PHASE 1 — BLACK HOLE
              ================================================== */}

          <div
            ref={blackHoleRef}
            className="cosmic-object black-hole-phase"
          >
            <div className="black-hole-glow" />
            <div className="black-hole-disc" />
            <div className="black-hole-core" />

            <div className="black-hole-ring ring-a" />
            <div className="black-hole-ring ring-b" />
          </div>

          {/* ==================================================
              PHASE 2 — NEUTRON STAR
              ================================================== */}

          <div
            ref={neutronStarRef}
            className="cosmic-object neutron-star-phase"
          >
            <div className="neutron-glow neutron-glow-large" />
            <div className="neutron-glow neutron-glow-medium" />
            <div className="neutron-core" />
          </div>

          {/* ==================================================
              PHASE 3 — NEBULA
              ================================================== */}

          <div
            ref={nebulaPhaseRef}
            className="cosmic-object nebula-phase"
          >
            <div className="nebula-cloud nebula-cloud-one" />
            <div className="nebula-cloud nebula-cloud-two" />
            <div className="nebula-cloud nebula-cloud-three" />

            <div className="nebula-spark nebula-spark-one" />
            <div className="nebula-spark nebula-spark-two" />
            <div className="nebula-spark nebula-spark-three" />
          </div>

          {/* ==================================================
              PHASE 4 — PULSAR
              ================================================== */}

          <div
            ref={pulsarRef}
            className="cosmic-object pulsar-phase"
          >
            <div className="pulsar-beam pulsar-beam-one" />
            <div className="pulsar-beam pulsar-beam-two" />

            <div className="pulsar-glow" />
            <div className="pulsar-core" />
          </div>

          {/* ==================================================
              PHASE 5 — QUASAR
              ================================================== */}

          <div
            ref={quasarRef}
            className="cosmic-object quasar-phase"
          >
            <div className="quasar-disc" />
            <div className="quasar-core" />

            <div className="quasar-beam quasar-beam-top" />
            <div className="quasar-beam quasar-beam-bottom" />
          </div>

          {/* ==================================================
              PHASE 6 — SUPERNOVA
              ================================================== */}

          <div
            ref={supernovaRef}
            className="cosmic-object supernova-phase"
          >
            <div className="supernova-wave wave-one" />
            <div className="supernova-wave wave-two" />
            <div className="supernova-wave wave-three" />

            <div className="supernova-core" />
          </div>

          {/* ==================================================
              PHASE 7 — SIGNAL ORIGIN
              ================================================== */}

          <div className="final-star-position">

            {/* ORIGINAL WHITE STAR */}

            <div
              ref={finalOriginalStarRef}
              className="final-original-star"
            >
              <div className="star-system final-original-star-system">
                <div className="star-glow glow-large" />
                <div className="star-glow glow-medium" />
                <div className="star-glow glow-small" />

                <div className="signal-star" />
              </div>
            </div>

            {/* OTHER STAR */}

            <div
              ref={finalStarRef}
              className="final-other-star"
            >
              <div className="star-system final-star-system">
                <div className="star-glow glow-large second-glow-large" />
                <div className="star-glow glow-medium second-glow-medium" />
                <div className="star-glow glow-small second-glow-small" />

                <div className="signal-star second-star-core" />
              </div>
            </div>

          </div>
        </div>

        {/* ==================================================
            SIGNAL TEXT
            ================================================== */}

        <p
          ref={signalRef}
          className="signal-text"
        >
          CLICK TO SCAN..
        </p>

        {/* ==================================================
            CONNECTION MESSAGE
            ================================================== */}

        <div
          ref={messageRef}
          className="connection-message"
        >
          <span>
            OBJECT DETECTED
          </span>

          <small>
            ANOTHER STAR HAS APPEARED.
          </small>
        </div>

        {/* ==================================================
            REDIRECTION
            ================================================== */}

        <div
          ref={redirectRef}
          className="redirect-message"
        >
          DEFINING ROUTE.
        </div>

        <div
          ref={redirectHintRef}
          className="redirect-hint"
        >
          <span className="moving-arrow">
            ↓
          </span>

          <span>
            SCROLL TO REACH THAT STAR.
          </span>
        </div>

        {/* ==================================================
            JOURNEY UI
            ================================================== */}

        <div
          ref={phaseNumberRef}
          className="journey-phase-number"
        >
          01
        </div>

        <div
          ref={phaseLabelRef}
          className="journey-phase-label"
        >
          BLACK HOLE
        </div>

        <div
          ref={phaseDescriptionRef}
          className="journey-phase-description"
        >
          THE POINT OF NO RETURN.
        </div>

        {/* ==================================================
            JOURNEY COMPLETE
            ================================================== */}

        <div
          ref={journeyCompleteRef}
          className="journey-complete"
        >
          <span>
            YOU FOUND THE STAR.
          </span>

          <small>
            THE JOURNEY HAS COME FULL CIRCLE, SCROLL TO SEE WHAT'S NEXT..
          </small>
        </div>
      </main>

      {/* ==================================================
          PAGE 2 — COSMIC RAKHI
          ================================================== */}

      <section className="cosmic-rakhi-page">
        <CosmicRakhi />
      </section>
    </>
  );
}

export default App;