import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ListSection from "@/components/ListSection";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";

export default function Home() {
  return (
    <div className="bg-white">
      <SaleDropdown />
      <ListSection />
      <CTASection />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
