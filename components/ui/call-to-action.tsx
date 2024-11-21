import RetroGrid from "@/components/ui/retro-grid";
import IconCloud from '@/components/ui/icon-cloud';
import { MagicCard } from '@/components/ui/magic-card';
import PulsatingButton from '@/components/ui/pulsating-button';

const CallToAction = () => {
    return (
      <section className="py-24 bg-white text-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <RetroGrid />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left side: Icon Cloud */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <IconCloud
            iconSlugs={[
              "linux", "docker", "kubernetes", "amazonaws", "googlecloud",
              "microsoftazure", "python", "javascript", "react", "nodejs"
            ]}
          />
        </div>
        
        {/* Right side: CTA Content */}
        <div className="w-full md:w-1/2">
          <MagicCard className="p-8" gradientColor="#5ce2e6" gradientOpacity={0.2}>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-black">Ready to Kick it with Linux Now?</h2>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-700 mx-auto">By clicking below, you will not just have the opportunity to learn and practice Linux. You'll also get the chance to join our VIP league of beta testers for our upcoming tools.</p>
              <PulsatingButton className="bg-[#5ce2e6] text-black hover:bg-[#4ac2c6] text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mx-auto font-bold">
                <a href="/get-access" className="hover:text-[#5ce2e6] transition-colors">Yes, Let me in !</a>
              </PulsatingButton>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
    )

};
  
export default CallToAction;
  