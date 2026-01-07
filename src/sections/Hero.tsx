import FloatingDots from "../components/heroSection/FloatingDots";
import ProfileContent from "../components/heroSection/ProfileContent";
import ProfileImage from "../components/heroSection/ProfileImage";
import ScrollArrow from "../components/heroSection/ScrollArrow";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero.webp"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Dots */}
      <FloatingDots />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2  gap-12 items-center">
          {/* Profile Image */}

          <ProfileImage />
          {/* Profile Content */}
          <ProfileContent />
        </div>
      </div>
      {/* scroll */}
      <ScrollArrow />
    </section>
  );
};

export default Hero;
