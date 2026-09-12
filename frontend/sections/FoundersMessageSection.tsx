import Image from "next/image";
import founderPhoto from "@/public/founder-photo.png";

export default function FoundersMessageSection() {
  return (
    <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
        <span className="text-navy">Founder&rsquo;s </span>
        <span className="text-orange">Message</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr] gap-8 sm:gap-10 items-start">
        {/* Photo */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-navy overflow-hidden flex items-end justify-center">
            <Image
              src={founderPhoto}
              alt="Akash Afraz, Founder and CEO"
              className="object-cover object-top w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <div className="text-body text-sm sm:text-base leading-relaxed text-left lg:text-justify space-y-4 max-w-2xl mx-auto lg:mx-0">
          <p>
            Akash Afraz is the Founder and CEO of SSN where he leads the
            development of Pakistan&rsquo;s first indigenous{" "}
            <span className="font-semibold">GPS</span> free autonomous drone
            navigation and AI targeting system. An AI Engineer by training,
            Akash holds a degree in Artificial Intelligence, combining deep
            technical expertise with founder-level execution to build
            sovereign, defense-grade autonomous systems from the ground up.
          </p>
          <p>
            His vision is to build a complete indigenous aerial autonomy
            ecosystem, one that closes the critical gap in{" "}
            <span className="font-semibold">GPS</span>-denied navigation and
            intelligent targeting for Pakistan&rsquo;s defense sector,
            delivering full-stack, <span className="font-semibold">ITAR</span>
            -free solutions that reduce dependence on foreign systems.
          </p>
        </div>
      </div>

      {/* Giant name banner */}
      <p className="text-center font-extrabold tracking-wide text-[clamp(2rem,9vw,6.5rem)] leading-none mt-8 sm:mt-10">
        <span className="text-navy">AKASH</span>{" "}
        <span className="text-orange">AFRAZ</span>
      </p>
    </section>
  );
}