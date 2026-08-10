import "./CosmicRakhi.css";

function CosmicRakhi() {

  const downloadRakhiMessage = () => {

    const message = `DEAR AKKKAAA,

HAPPY RAKSHABANDHAN! ❤️

I’M REALLY GLAD THAT I MET YOU HERE. THANK YOU FOR ALWAYS TREATING ME LIKE YOUR REAL BROTHER AND MAKING ME FEEL WHAT IT’S LIKE TO HAVE AN ELDER SISTER.

THANK YOU FOR ALWAYS GUIDING ME AND SUPPORTING ME.

I PROMISE THAT I’LL ALWAYS BE ONE OF YOUR BIGGEST SUPPORTERS. SO, NO MATTER WHERE LIFE TAKES YOU, DON’T EVER FORGET THAT YOU HAVE YOUR LITTLE LITTLE BROTHER CHEERING FOR YOU — SUPPORTING YOU IN WHATEVER YOU CHOOSE TO DO.

I REALLY HOPE YOU REACH EVERYTHING YOU DREAM OF AND BECOME THE PERSON YOU’VE ALWAYS WANTED TO BE. I’LL BE REALLY HAPPY TO SEE YOU ACHIEVE ALL OF IT.

AND WHEN YOU DO, JUST REMEMBER…

YOUR LITTLE BROTHER WILL ALWAYS BE THERE, CHEERING FOR YOU. ❤️

HAPPY RAKSHABANDHAN, AKKAAA.
WITH LOTS OF LOVE,
YOUR LITTLE LITTLE BROTHER. ✨
`;

    const blob = new Blob([message], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "MessageFromThambi.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };


  return (
    <section className="cosmic-rakhi-page">

      {/* ==================================================
          BACKGROUND
          ================================================== */}

      <div className="rakhi-page-nebula rakhi-page-nebula-one" />
      <div className="rakhi-page-nebula rakhi-page-nebula-two" />

      <div className="rakhi-page-stars rakhi-page-stars-one" />
      <div className="rakhi-page-stars rakhi-page-stars-two" />


      {/* ==================================================
          INTRO
          ================================================== */}

      <div className="rakhi-page-intro">

        <div className="rakhi-page-eyebrow">
          DESTINATION REACHED
        </div>

        <p>
          THANK YOU FOR WEAVING THIS RAKHI
        </p>

        <h1>
          HAPPY RAKSHABANDHAN AKKAAAAAWWW
        </h1>
      </div>


      {/* ==================================================
          RAKHI
          ================================================== */}

      <div className="rakhi-real">

        {/* ==================================================
            COSMIC THREAD — LEFT
            ================================================== */}

        <div className="rakhi-thread rakhi-thread-left">

          <div className="rakhi-thread-glow" />

          <div className="rakhi-thread-core" />

        </div>


        {/* ==================================================
            COSMIC THREAD — RIGHT
            ================================================== */}

        <div className="rakhi-thread rakhi-thread-right">

          <div className="rakhi-thread-glow" />

          <div className="rakhi-thread-core" />

        </div>


        {/* ==================================================
            CENTERPIECE
            ================================================== */}

        <div className="rakhi-centerpiece">


          {/* ==================================================
              INNER DECORATIVE RING
              ================================================== */}

          <div className="rakhi-ring rakhi-ring-inner" />


          {/* ==================================================
              OUTER DECORATIVE RING
              ================================================== */}

          <div className="rakhi-ring rakhi-ring-outer" />


          {/* ==================================================
              COSMIC PEARL 01
              BLACK HOLE
              ================================================== */}

          <div className="cosmic-pearl pearl-blackhole">

            <div className="pearl-blackhole-disc" />

            <div className="pearl-blackhole-core" />

          </div>


          {/* ==================================================
              COSMIC PEARL 02
              NEUTRON STAR
              ================================================== */}

          <div className="cosmic-pearl pearl-neutron">

            <div className="pearl-neutron-core" />

          </div>


          {/* ==================================================
              COSMIC PEARL 03
              NEBULA
              ================================================== */}

          <div className="cosmic-pearl pearl-nebula">

            <div className="pearl-nebula-cloud cloud-one" />

            <div className="pearl-nebula-cloud cloud-two" />

            <div className="pearl-nebula-core" />

          </div>


          {/* ==================================================
              COSMIC PEARL 04
              PULSAR
              ================================================== */}

          <div className="cosmic-pearl pearl-pulsar">

            <div className="pearl-pulsar-beam" />

            <div className="pearl-pulsar-core" />

          </div>


          {/* ==================================================
              COSMIC PEARL 05
              QUASAR
              ================================================== */}

          <div className="cosmic-pearl pearl-quasar">

            <div className="pearl-quasar-disc" />

            <div className="pearl-quasar-core" />

          </div>


          {/* ==================================================
              COSMIC PEARL 06
              SUPERNOVA
              ================================================== */}

          <div className="cosmic-pearl pearl-supernova">

            <div className="pearl-supernova-ring" />

            <div className="pearl-supernova-core" />

          </div>


          {/* ==================================================
              CENTER
              ================================================== */}

          <div className="rakhi-center">

            <div className="rakhi-center-small">
              RAKHI
            </div>


            <div className="rakhi-center-line" />


          </div>

        </div>

      </div>


      {/* ==================================================
          LOWER TITLE
          ================================================== */}

      {/* <div className="rakhi-page-content">

        <div className="rakhi-page-title">
          A JOURNEY ACROSS THE COSMOS
        </div>

      </div> */}


      {/* ==================================================
          DOWNLOAD INSTRUCTION
          ================================================== */}

      <div className="rakhi-download-instruction">

        PLEASE CLICK DOWNLOAD TO DOWNLOAD YOUR MESSAGE
        FROM ADMIN THAMBI.

      </div>


      {/* ==================================================
          DOWNLOAD
          ================================================== */}

      <button
        className="rakhi-page-download"
        onClick={downloadRakhiMessage}
      >

        <span>
          ↓
        </span>

        DOWNLOAD NOTE FROM ADMIN THAMBI

      </button>

    </section>
  );
}

export default CosmicRakhi;