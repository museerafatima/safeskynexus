import DefenseHero from "@/sections/DefenseHero";
import DefenseHardware from "@/sections/DefenseHardware";
import DefenseWhyUs from "@/sections/DefenseWhyUs";
import DefensePlatforms from "@/sections/DefensePlatforms";
import DefenseSovereignty from "@/sections/DefenseSovereignty";
import DefenseCTA from "@/sections/DefenseCTA";

export default function DefensePage() {
  return (
    <main>
      <DefenseHero />
      <DefenseHardware />
      <DefenseWhyUs />
      <DefensePlatforms />
      <DefenseSovereignty />
      <DefenseCTA />
    </main>
  );
}