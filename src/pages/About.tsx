
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-bank-dark-blue mb-6">About State Bank of India</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              State Bank of India (SBI) is the largest public sector bank in India and one of the largest banks worldwide. 
              With a rich heritage of over 200 years, SBI has been a trusted financial partner to generations of Indians.
            </p>
            
            <div className="bg-gradient-to-r from-bank-blue/10 to-transparent p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-bank-dark-blue mb-4">Our Legacy</h2>
              <p>
                Founded in 1806 as the Bank of Calcutta, it is the oldest commercial bank in the Indian subcontinent. 
                The bank was later renamed as State Bank of India in 1955 following the acquisition of the Imperial Bank of India.
                Today, SBI stands as a financial cornerstone of the Indian economy, serving over 450 million customers through a network of more than 22,000 branches and 62,000 ATMs across India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="glass-card p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-bank-dark-blue mb-3">Vision</h2>
                <p>
                  To be the preferred and trusted financial services provider, excelling in customer delivery through 
                  insight, empowered employees and smart technology.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-bank-dark-blue mb-3">Mission</h2>
                <p>
                  To retain the bank's position as the premier Indian financial services group, with world class standards 
                  and significant global business, committed to excellence in customer, shareholder and employee satisfaction.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-bank-dark-blue mb-4">Global Presence</h2>
              <p className="mb-4">
                SBI has a global presence with over 190 foreign offices in 36 countries, making it the largest international 
                network among Indian banks. The bank serves the international banking needs of Indian corporates and local 
                businesses in these geographies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-bank-blue/10 to-transparent p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-bank-dark-blue mb-4">Community Impact</h2>
              <p>
                SBI has been at the forefront of financial inclusion initiatives in India. The bank actively participates 
                in various government schemes aimed at bringing banking services to underserved populations. 
                SBI Foundation, the CSR arm of the bank, works on projects related to healthcare, education, livelihood, 
                skill development, and environmental sustainability.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Note: This is a demo website created for educational purposes. For official information, please visit the 
              <a 
                href="https://www.onlinesbi.sbi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-bank-blue hover:text-bank-dark-blue inline-flex items-center ml-1"
              >
                official SBI website <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
