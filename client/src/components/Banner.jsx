import Bannerlogo from "../assets/bannerlogo.mp4";

export default function Banner() {
  return (
    <>
      <div className="relative flex  justify-center h-[500px] border-4 border-[#0e7490] items-stretch">
        <video
          height="1200"
          className="absolute inset-0 w-full h-full object-cover"
          src={Bannerlogo}
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 text-white text-center items-center m-auto">
          <h1 className="text-4xl font-bold text-[#0e7490] font-mono pb-4">
            Lakshay Science
          </h1>
          <a
            href="/admission"
            className="text-[#41ba8f] text-2xl font-bold underline "
          >
            {" "}
            Admission
          </a>
        </div>
      </div>
    </>
  );
}
