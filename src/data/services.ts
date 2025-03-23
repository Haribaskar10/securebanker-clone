
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  IndianRupee, 
  Clock, 
  Globe, 
  Users, 
  Key, 
  MessageSquare, 
  Lock,
  Building,
  Briefcase
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  longDescription?: string;
  benefits?: string[];
  features?: ServiceFeature[];
  faqs?: ServiceFAQ[];
  relatedServices?: string[];
  applyLink?: string;
}

export const servicesData: Service[] = [
  {
    id: "online-banking",
    title: "Online Banking",
    description: "Access your accounts, transfer funds, and manage your finances anytime, anywhere with our secure online banking platform.",
    icon: Globe,
    longDescription: "SBI's online banking service provides a secure and convenient way to manage your accounts from anywhere. With our user-friendly interface, you can perform a wide range of banking transactions without visiting a branch. Our platform is protected with advanced security features to ensure your financial information remains safe.",
    benefits: [
      "24/7 access to your accounts",
      "Secure and convenient banking from anywhere",
      "Real-time account updates and transaction history",
      "Instant fund transfers and bill payments",
      "Paperless statements and notifications"
    ],
    features: [
      {
        title: "Account Summary",
        description: "View balances and recent transactions for all your linked accounts in one place."
      },
      {
        title: "Fund Transfers",
        description: "Transfer money between your accounts or to other bank accounts using IMPS, NEFT, or RTGS."
      },
      {
        title: "Bill Payments",
        description: "Pay utility bills, mobile recharges, and subscriptions directly from your account."
      },
      {
        title: "E-statements",
        description: "Access and download your account statements for any period electronically."
      },
      {
        title: "Account Management",
        description: "Update personal details, manage beneficiaries, and set account preferences."
      }
    ],
    faqs: [
      {
        question: "How do I register for online banking?",
        answer: "You can register for online banking by visiting our website and clicking on the 'Register' button. You will need your account number, registered mobile number, and debit card details to complete the registration."
      },
      {
        question: "Is online banking secure?",
        answer: "Yes, we use industry-standard encryption and multi-factor authentication to ensure your transactions and personal information are secure."
      },
      {
        question: "Can I use online banking on my mobile device?",
        answer: "Yes, our online banking platform is fully responsive and can be accessed through any mobile browser. We also offer a dedicated mobile app for a more optimized experience."
      },
      {
        question: "What do I do if I forget my password?",
        answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will receive a one-time password (OTP) on your registered mobile number to create a new password."
      }
    ],
    relatedServices: ["mobile-banking", "digital-security"]
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking",
    description: "Bank on the go with our feature-rich mobile app that offers all the functionality of online banking in the palm of your hand.",
    icon: MessageSquare,
    longDescription: "SBI's mobile banking app brings the full power of our banking services to your smartphone. Designed for ease of use and enhanced with biometric security features, the app lets you manage your finances on the go. From checking balances to making payments and investments, everything is possible with just a few taps.",
    benefits: [
      "Banking on the go - anytime, anywhere",
      "Biometric authentication for enhanced security",
      "Simplified UI for easy navigation",
      "Lower data consumption than web banking",
      "Instant notifications for all transactions"
    ],
    features: [
      {
        title: "Quick Balance Check",
        description: "Check your account balance with a single tap without logging in (after initial setup)."
      },
      {
        title: "Scan to Pay",
        description: "Scan QR codes to make instant payments to merchants or friends."
      },
      {
        title: "Mobile Recharge & Bill Payments",
        description: "Pay utility bills and recharge mobile phones directly from the app."
      },
      {
        title: "Cardless Cash Withdrawal",
        description: "Withdraw cash without your debit card using the app to generate a temporary code."
      },
      {
        title: "Travel & Entertainment",
        description: "Book flights, hotels, movie tickets, and more through integrated services."
      }
    ],
    faqs: [
      {
        question: "How do I download the mobile banking app?",
        answer: "Our mobile banking app is available for download on both iOS and Android devices. You can download it from the Apple App Store or Google Play Store by searching for 'SBI Mobile Banking'."
      },
      {
        question: "Is the mobile app secure?",
        answer: "Yes, our mobile app is secured with multiple layers of protection including biometric authentication, encryption, and transaction monitoring systems."
      },
      {
        question: "Can I use the same login credentials as my online banking?",
        answer: "Yes, you can use the same username and password for both online and mobile banking. However, you'll need to complete a one-time registration process for the mobile app."
      },
      {
        question: "What should I do if I lose my phone?",
        answer: "If you lose your phone, you should immediately deregister your device by calling our 24/7 customer service. This will prevent unauthorized access to your mobile banking."
      }
    ],
    relatedServices: ["online-banking", "digital-security"]
  },
  {
    id: "savings-accounts",
    title: "Savings Accounts",
    description: "Build your savings with our range of accounts offering competitive interest rates and flexible access to your funds.",
    icon: IndianRupee,
    longDescription: "SBI offers a diverse range of savings accounts tailored to different needs and financial goals. Whether you're a student, professional, senior citizen, or business owner, we have an account type designed specifically for you. Our savings accounts come with competitive interest rates and various benefits to help you grow your money while maintaining easy access to your funds.",
    benefits: [
      "Competitive interest rates calculated on daily balance",
      "Minimal or zero minimum balance requirements (depending on account type)",
      "Free digital banking services",
      "Complimentary debit card with wide acceptance",
      "Auto-sweep facility to maximize interest earnings"
    ],
    features: [
      {
        title: "Basic Savings Account",
        description: "A zero-balance account with essential banking features for financial inclusion."
      },
      {
        title: "Premium Savings Account",
        description: "Higher interest rates and premium banking services with personalized attention."
      },
      {
        title: "Senior Citizen Savings Account",
        description: "Special benefits for senior citizens including higher interest rates and doorstep banking."
      },
      {
        title: "Youth Savings Account",
        description: "Designed for young adults with features to help build financial literacy and independence."
      },
      {
        title: "Family Savings Account",
        description: "Joint account options with customizable access permissions for family members."
      }
    ],
    faqs: [
      {
        question: "What documents do I need to open a savings account?",
        answer: "To open a savings account, you'll need identity proof (Aadhar, PAN, passport), address proof (utility bill, rental agreement), and passport-sized photographs. Requirements may vary by account type."
      },
      {
        question: "What is the minimum balance requirement?",
        answer: "The minimum balance requirement varies by account type and location. Basic savings accounts have zero minimum balance requirements, while premium accounts may require maintaining a higher average monthly balance."
      },
      {
        question: "How is interest calculated on savings accounts?",
        answer: "Interest on savings accounts is calculated on the daily balance and credited to your account quarterly. The current interest rate is displayed on our website and is subject to change as per RBI guidelines."
      },
      {
        question: "Can I have multiple savings accounts?",
        answer: "Yes, you can have multiple savings accounts for different purposes. However, each account needs to be maintained according to its specific terms and conditions."
      }
    ],
    relatedServices: ["fixed-deposits", "personal-loans"]
  },
  {
    id: "credit-cards",
    title: "Credit Cards",
    description: "Choose from our selection of credit cards with rewards, cashback, and special offers tailored to your lifestyle.",
    icon: CreditCard,
    longDescription: "SBI Credit Cards offer a world of convenience, rewards, and privileges. Our diverse range of cards cater to different lifestyles and spending patterns, from everyday purchases to luxury shopping, travel, and entertainment. With competitive interest rates, generous reward programs, and worldwide acceptance, our credit cards are designed to enhance your financial flexibility and lifestyle.",
    benefits: [
      "Worldwide acceptance at millions of merchants",
      "Flexible credit limits based on eligibility",
      "Reward points on all purchases",
      "Exclusive offers and discounts with partner merchants",
      "EMI options for large purchases"
    ],
    features: [
      {
        title: "SBI Classic Card",
        description: "Entry-level card with basic rewards and features for everyday spending."
      },
      {
        title: "SBI Gold Card",
        description: "Enhanced rewards and benefits with higher credit limits and travel insurance."
      },
      {
        title: "SBI Platinum Card",
        description: "Premium card with accelerated rewards, airport lounge access, and concierge services."
      },
      {
        title: "SBI Travel Card",
        description: "Specialized card for frequent travelers with foreign currency markup benefits and travel insurance."
      },
      {
        title: "SBI Cashback Card",
        description: "Focused on providing cashback on everyday categories like groceries, fuel, and utility payments."
      }
    ],
    faqs: [
      {
        question: "How do I apply for a credit card?",
        answer: "You can apply for a credit card online through our website, mobile app, or by visiting your nearest SBI branch. Existing customers may also receive pre-approved offers based on their relationship with the bank."
      },
      {
        question: "What determines my credit limit?",
        answer: "Your credit limit is determined based on multiple factors including your income, credit history, existing debts, and relationship with SBI. We regularly review accounts for credit limit increases based on payment behavior."
      },
      {
        question: "How can I redeem my reward points?",
        answer: "Reward points can be redeemed through our online banking portal or mobile app. Options include merchandise, gift vouchers, airline miles, cashback, or statement credit. Different cards have different redemption values and options."
      },
      {
        question: "Is there an annual fee for credit cards?",
        answer: "Annual fees vary by card type. Some cards have annual fees while others may waive the fee if a certain spending threshold is met. First-year fees are often waived as part of promotional offers."
      }
    ],
    relatedServices: ["online-banking", "mobile-banking"]
  },
  {
    id: "personal-loans",
    title: "Personal Loans",
    description: "Fulfill your dreams with our quick and hassle-free personal loans at attractive interest rates.",
    icon: TrendingUp,
    longDescription: "SBI Personal Loans provide the financial flexibility you need for life's planned and unplanned expenses. Whether it's a home renovation, wedding, education, medical emergency, or travel plans, our personal loans offer quick disbursement with minimal documentation. With competitive interest rates and flexible repayment terms, we make borrowing a transparent and hassle-free experience.",
    benefits: [
      "Quick approval and disbursement",
      "Minimal documentation for existing customers",
      "No collateral required",
      "Flexible loan tenure options",
      "No prepayment penalties after minimum lock-in period"
    ],
    features: [
      {
        title: "Multi-purpose Loan",
        description: "General personal loan that can be used for any legitimate purpose without restrictions."
      },
      {
        title: "Wedding Loan",
        description: "Specialized loan with higher limits for wedding expenses with flexible repayment options."
      },
      {
        title: "Education Loan Top-up",
        description: "Additional funding beyond traditional education loans for higher studies."
      },
      {
        title: "Medical Emergency Loan",
        description: "Expedited loan processing for medical emergencies with special interest rates."
      },
      {
        title: "Pensioner Loan",
        description: "Special loan scheme for pensioners with simplified eligibility criteria."
      }
    ],
    faqs: [
      {
        question: "What is the maximum loan amount I can get?",
        answer: "The maximum loan amount depends on your income, credit score, existing liabilities, and repayment capacity. Typically, personal loans range from ₹50,000 to ₹20 lakhs for salaried individuals."
      },
      {
        question: "What is the interest rate and tenure for personal loans?",
        answer: "Our personal loan interest rates currently start from 10.5% p.a. The exact rate depends on your profile, income, and credit score. Loan tenure options range from 12 to 60 months."
      },
      {
        question: "What documents do I need to apply?",
        answer: "Required documents include identity proof, address proof, income proof (salary slips or IT returns), bank statements for the last 6 months, and a photograph. Existing customers with good banking history may qualify for pre-approved loans with minimal documentation."
      },
      {
        question: "How long does it take to get approval and disbursement?",
        answer: "For existing customers with good credit, approvals can be as quick as 24 hours with disbursement within 48 hours. For new customers, the process typically takes 3-5 working days depending on documentation and verification."
      }
    ],
    relatedServices: ["home-loans"]
  },
  {
    id: "home-loans",
    title: "Home Loans",
    description: "Make your dream home a reality with our flexible home loan options suited to diverse needs and budgets.",
    icon: Key,
    longDescription: "SBI Home Loans are designed to turn your dream of owning a home into reality. With competitive interest rates, high loan amounts, and flexible repayment options stretching up to 30 years, we make home ownership accessible and affordable. Our specialized schemes cater to various segments including first-time buyers, property upgrades, construction financing, and more.",
    benefits: [
      "Competitive interest rates with transparent pricing",
      "Up to 90% financing of property value (for select categories)",
      "Flexible repayment terms up to 30 years",
      "Special rates for women as primary applicants",
      "Balance transfer facility from other banks with top-up options"
    ],
    features: [
      {
        title: "Regular Home Loan",
        description: "Standard home loan for purchasing ready or under-construction residential property."
      },
      {
        title: "Home Construction Loan",
        description: "Specialized loan for constructing a house on a plot you already own."
      },
      {
        title: "Home Improvement Loan",
        description: "Financing for renovations, repairs, or extensions to your existing home."
      },
      {
        title: "Land Purchase Loan",
        description: "Loan facility for purchasing residential plots for future construction."
      },
      {
        title: "NRI Home Loans",
        description: "Special home loan schemes for Non-Resident Indians looking to invest in property in India."
      }
    ],
    faqs: [
      {
        question: "What is the maximum loan amount and tenure available?",
        answer: "The maximum loan amount depends on your repayment capacity and property value. We finance up to 90% of the property value for loans up to ₹30 lakhs, 80% for loans between ₹30-75 lakhs, and 75% for loans above ₹75 lakhs. Maximum tenure is 30 years, subject to the applicant not exceeding 70 years of age at loan maturity."
      },
      {
        question: "What is the process to apply for a home loan?",
        answer: "You can apply online through our website, visit any SBI branch, or contact our home loan specialists. After application, we conduct property and document verification, credit assessment, and technical evaluation of the property before final approval and disbursement."
      },
      {
        question: "What types of properties are eligible for financing?",
        answer: "We finance apartments, independent houses, row houses, and residential plots from approved developers. Properties should have clear legal title, necessary approvals, and conform to local building regulations."
      },
      {
        question: "Are there any prepayment charges?",
        answer: "There are no prepayment charges for floating rate home loans when paid from own sources. For fixed rate loans or loans repaid through refinancing from other banks, a nominal prepayment charge may apply as per current guidelines."
      }
    ],
    relatedServices: ["personal-loans", "insurance"]
  },
  {
    id: "fixed-deposits",
    title: "Fixed Deposits",
    description: "Grow your wealth with our fixed deposit schemes offering guaranteed returns and flexible tenure options.",
    icon: Clock,
    longDescription: "SBI Fixed Deposits provide a safe and reliable way to grow your savings with guaranteed returns. Whether you're looking for short-term liquidity or long-term growth, our range of deposit schemes offer competitive interest rates across flexible tenure options. Special rates are available for senior citizens, and our FDs come with loan and overdraft facilities for emergencies without breaking your investment.",
    benefits: [
      "Guaranteed returns with fixed interest rates",
      "Higher interest rates for senior citizens",
      "Flexible tenures from 7 days to 10 years",
      "Loan facility against fixed deposits",
      "Automatic renewal option for convenience"
    ],
    features: [
      {
        title: "Regular Fixed Deposit",
        description: "Standard term deposits with fixed interest rates and flexible tenure options."
      },
      {
        title: "Tax Saving Fixed Deposit",
        description: "5-year deposits that qualify for tax deduction under Section 80C of Income Tax Act."
      },
      {
        title: "Recurring Deposit",
        description: "Regular monthly investments with fixed deposit returns at maturity."
      },
      {
        title: "Senior Citizen Deposit",
        description: "Special scheme with higher interest rates for depositors above 60 years."
      },
      {
        title: "Flexi Fixed Deposit",
        description: "Linked to savings account for automatic transfers and liquidity management."
      }
    ],
    faqs: [
      {
        question: "What is the minimum amount required to open a fixed deposit?",
        answer: "The minimum amount required to open a regular fixed deposit is ₹1,000. For tax-saving fixed deposits, the minimum amount is ₹100."
      },
      {
        question: "How is interest calculated and paid on fixed deposits?",
        answer: "Interest on fixed deposits is calculated at the contracted rate on the principal amount for the period of deposit. Interest can be paid monthly, quarterly, half-yearly, annually, or at maturity as per your preference at the time of opening the deposit."
      },
      {
        question: "Can I get a loan against my fixed deposit?",
        answer: "Yes, you can avail a loan or overdraft facility up to 90% of your fixed deposit amount. This allows you to meet financial emergencies without breaking your FD, thus preserving your investment and interest earnings."
      },
      {
        question: "Is there a penalty for premature withdrawal?",
        answer: "Yes, premature withdrawal of fixed deposits typically attracts a penalty in the form of a lower interest rate than originally contracted. The applicable rate will be the rate for the actual period the deposit has remained with the bank, less a penalty percentage (usually 0.5-1%)."
      }
    ],
    relatedServices: ["savings-accounts", "investment-services"]
  },
  {
    id: "investment-services",
    title: "Investment Services",
    description: "Plan for your future with our range of investment products designed to help you achieve your financial goals.",
    icon: TrendingUp,
    longDescription: "SBI Investment Services offer comprehensive solutions to help you grow your wealth and achieve your financial goals. From mutual funds and portfolio management to equity trading and government securities, we provide a diverse range of investment options suited to different risk profiles and time horizons. Our expert advisors help you navigate the complex world of investments with personalized recommendations and regular portfolio reviews.",
    benefits: [
      "Diverse investment options for different risk appetites",
      "Professional investment advice and portfolio management",
      "Regular performance tracking and reports",
      "Systematic investment plans for disciplined investing",
      "Seamless integration with your banking services"
    ],
    features: [
      {
        title: "Mutual Funds",
        description: "Access to a wide range of mutual fund schemes across asset classes and fund houses."
      },
      {
        title: "Equity Trading",
        description: "Online trading platform for stocks, ETFs, and other exchange-traded securities."
      },
      {
        title: "Government Securities",
        description: "Investment in sovereign bonds, treasury bills, and other government-backed securities."
      },
      {
        title: "Portfolio Management Services",
        description: "Professional management of your investment portfolio tailored to your financial goals."
      },
      {
        title: "Retirement Planning",
        description: "Specialized investment solutions designed to build your retirement corpus."
      }
    ],
    faqs: [
      {
        question: "How do I start investing with SBI?",
        answer: "You can start investing by opening an investment account linked to your SBI savings account. Visit your nearest branch or apply online through our website or mobile app. Our investment advisors can help you complete the necessary documentation and KYC requirements."
      },
      {
        question: "What is the minimum amount required to start investing?",
        answer: "The minimum investment amount varies by product. Mutual fund SIPs can start from as low as ₹500 per month, while other investment products may have different minimums. Our advisors can help you choose products that match your investment capacity."
      },
      {
        question: "How are investment returns taxed?",
        answer: "Tax implications vary by investment type and holding period. Short-term capital gains from equity investments (held less than 1 year) are taxed at 15%, while long-term gains above ₹1 lakh are taxed at 10%. Debt investments have different tax structures based on holding period and investor category. Consult our tax advisors for personalized guidance."
      },
      {
        question: "Can I track my investments online?",
        answer: "Yes, you can track all your investments through our online banking portal or mobile app. The dashboard provides a consolidated view of your portfolio, transaction history, current values, and performance metrics. Regular investment statements are also sent to your registered email."
      }
    ],
    relatedServices: ["fixed-deposits", "savings-accounts"]
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Protect yourself and your loved ones with our comprehensive life, health, and general insurance solutions.",
    icon: Shield,
    longDescription: "SBI Insurance services provide comprehensive protection for life's uncertainties. Through our banking channels, we offer a variety of insurance products including life, health, motor, home, and travel insurance. Our policies are designed to provide financial security and peace of mind to you and your family, with transparent terms, hassle-free claims, and flexible coverage options to suit different needs and budgets.",
    benefits: [
      "Comprehensive coverage options for various insurance needs",
      "Competitive premiums with attractive discounts for SBI customers",
      "Simplified documentation and application process",
      "Hassle-free and expedited claims settlement",
      "Integration with banking services for premium payments"
    ],
    features: [
      {
        title: "Life Insurance",
        description: "Protection plans, endowment policies, ULIPs, and retirement plans to secure your family's future."
      },
      {
        title: "Health Insurance",
        description: "Individual and family floater health policies with cashless hospitalization benefits."
      },
      {
        title: "Motor Insurance",
        description: "Comprehensive and third-party coverage for cars, two-wheelers, and commercial vehicles."
      },
      {
        title: "Home Insurance",
        description: "Protection for your home and its contents against natural calamities, theft, and other risks."
      },
      {
        title: "Travel Insurance",
        description: "Coverage for medical emergencies, trip cancellations, baggage loss, and other travel-related risks."
      }
    ],
    faqs: [
      {
        question: "How do I purchase an insurance policy from SBI?",
        answer: "You can purchase insurance policies through multiple channels: online through our website, at any SBI branch, or through our mobile banking app. For complex policies, our insurance advisors can help you select the right coverage based on your needs."
      },
      {
        question: "How do I file an insurance claim?",
        answer: "Claims can be initiated online through our website, mobile app, or by contacting our 24/7 claims helpline. Required documents vary by policy type and claim nature. Our claims team provides guidance throughout the process to ensure smooth settlement."
      },
      {
        question: "Can I modify my insurance coverage after purchase?",
        answer: "Yes, most policies allow modifications during renewal. Some changes like address updates or nominee changes can be made during the policy term as well. Major coverage modifications may require underwriting assessment and premium adjustments."
      },
      {
        question: "Are there any discounts available on insurance premiums?",
        answer: "Yes, we offer various discounts including loyalty discounts for existing customers, multi-policy discounts when purchasing multiple insurance types, family discounts for health policies covering multiple family members, and no-claim bonuses for claim-free years."
      }
    ],
    relatedServices: ["personal-loans", "home-loans"]
  },
  {
    id: "corporate-banking",
    title: "Corporate Banking",
    description: "Tailored financial solutions for businesses of all sizes, from startups to multinational corporations.",
    icon: Building,
    longDescription: "SBI Corporate Banking offers comprehensive financial solutions to meet the diverse needs of businesses across sectors and scales. From working capital management to project financing, trade services to cash management, our corporate banking services are designed to support your business growth and operational efficiency. With dedicated relationship managers and specialized industry knowledge, we partner with businesses to navigate complex financial landscapes and achieve their strategic objectives.",
    benefits: [
      "Customized financial solutions for sector-specific needs",
      "Dedicated relationship managers for personalized service",
      "Integrated digital platforms for efficient transaction management",
      "Extensive branch network and international presence",
      "Competitive pricing and flexible structuring of facilities"
    ],
    features: [
      {
        title: "Working Capital Finance",
        description: "Short-term funding solutions including cash credit, overdraft, and bill discounting facilities."
      },
      {
        title: "Term Loans",
        description: "Medium to long-term financing for capital expenditure, expansion, and project implementation."
      },
      {
        title: "Trade Finance",
        description: "Letters of credit, bank guarantees, and other trade services for domestic and international trade."
      },
      {
        title: "Cash Management",
        description: "Efficient solutions for collections, payments, and liquidity management to optimize cash flow."
      },
      {
        title: "Supply Chain Finance",
        description: "Financing solutions that optimize working capital across the entire supply chain ecosystem."
      }
    ],
    faqs: [
      {
        question: "What types of businesses are eligible for corporate banking services?",
        answer: "Our corporate banking services cater to businesses across the spectrum - from MSMEs (Micro, Small and Medium Enterprises) to large corporations and multinational companies. Different service packages are tailored to suit varying business scales and needs."
      },
      {
        question: "How can my business apply for corporate banking services?",
        answer: "You can approach any SBI Corporate Branch or contact our Corporate Banking Relationship Team. After initial discussions about your requirements, our team will guide you through the application process, documentation, and other formalities."
      },
      {
        question: "What documents are required for corporate account opening?",
        answer: "Required documents typically include certificate of incorporation, memorandum and articles of association, board resolution, business proof, KYC documents of directors/signatories, and financial statements for the past 2-3 years. Specific requirements may vary based on company structure and services requested."
      },
      {
        question: "Does SBI provide international banking services for corporations?",
        answer: "Yes, with our extensive global presence across multiple countries, we offer comprehensive international banking services including cross-border trade finance, foreign currency accounts, international remittances, and overseas project financing through our international banking division and foreign offices."
      }
    ],
    relatedServices: ["digital-security", "investment-services"]
  },
  {
    id: "digital-security",
    title: "Digital Security",
    description: "Bank with confidence knowing your transactions are protected by our state-of-the-art security systems.",
    icon: Lock,
    longDescription: "At SBI, we prioritize the security of your digital banking experience through multi-layered protection systems. Our comprehensive security framework includes advanced encryption, multi-factor authentication, real-time fraud monitoring, and secure access protocols. We continuously upgrade our security infrastructure to stay ahead of emerging threats while maintaining a seamless banking experience for legitimate users.",
    benefits: [
      "End-to-end encryption for all digital transactions",
      "Multi-factor authentication for account access",
      "Real-time transaction monitoring and alerts",
      "Secure biometric authentication options",
      "Zero liability policy for unauthorized transactions (subject to timely reporting)"
    ],
    features: [
      {
        title: "Secure Login Process",
        description: "Multi-layered authentication including passwords, OTPs, and optional biometric verification."
      },
      {
        title: "Transaction Monitoring",
        description: "AI-powered systems that detect unusual transaction patterns and potential fraud in real-time."
      },
      {
        title: "Security Alerts",
        description: "Instant notifications for all account activities including logins, transactions, and profile changes."
      },
      {
        title: "Virtual Keyboard",
        description: "Protection against keyloggers when entering sensitive information online."
      },
      {
        title: "Automatic Session Timeouts",
        description: "Automatic logouts after periods of inactivity to prevent unauthorized access."
      }
    ],
    faqs: [
      {
        question: "What should I do if I suspect fraudulent activity on my account?",
        answer: "If you notice any suspicious transactions or activities, immediately contact our 24/7 customer service helpline to report the incident. You should also change your passwords and PINs immediately through secure channels."
      },
      {
        question: "How does SBI protect my personal and financial information?",
        answer: "We use industry-standard encryption protocols to secure data transmission. Your information is stored in secure servers with restricted access. We implement strict data privacy policies and regular security audits to ensure compliance with regulatory requirements."
      },
      {
        question: "How can I enhance the security of my digital banking?",
        answer: "You can enhance security by using strong, unique passwords, enabling notifications for all transactions, regularly updating your mobile app and browser, using secure networks for banking, and being vigilant about phishing attempts. We also recommend registering for biometric authentication where available."
      },
      {
        question: "Does SBI share security updates and advisories with customers?",
        answer: "Yes, we regularly share security tips, updates on new threats, and best practices through our website, mobile app notifications, email newsletters, and SMS alerts. We never ask for sensitive information like passwords or OTPs through these communications."
      }
    ],
    relatedServices: ["online-banking", "mobile-banking"]
  },
  {
    id: "customer-support",
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available round the clock to assist you with any banking queries or concerns.",
    icon: MessageSquare,
    longDescription: "SBI's customer support service ensures you never face banking challenges alone. Our dedicated team is available 24/7 through multiple channels including phone, email, chat, and social media. Whether you need assistance with account inquiries, transaction issues, product information, or complaint resolution, our trained representatives provide prompt, courteous, and effective support to enhance your banking experience.",
    benefits: [
      "Round-the-clock availability on all days including holidays",
      "Multiple contact channels for customer convenience",
      "Trained representatives with extensive product knowledge",
      "Quick resolution timeframes with ticket tracking",
      "Multilingual support in major Indian languages"
    ],
    features: [
      {
        title: "24/7 Helpline",
        description: "Toll-free numbers for account-related queries, reporting lost cards, and general assistance."
      },
      {
        title: "Live Chat Support",
        description: "Instant messaging with support agents through website and mobile app."
      },
      {
        title: "Email Support",
        description: "Dedicated email addresses for different types of queries with guaranteed response times."
      },
      {
        title: "Video Banking",
        description: "Schedule video calls with banking specialists for complex queries requiring detailed discussions."
      },
      {
        title: "Branch Appointment System",
        description: "Online scheduling of branch visits to minimize wait times and ensure appropriate assistance."
      }
    ],
    faqs: [
      {
        question: "What are the contact numbers for SBI customer service?",
        answer: "Our toll-free helpline 1800-11-2211 and 1800-425-3800 are available 24/7 for all banking queries. For credit card specific assistance, you can call 1800-180-1290. International customers can reach us at +91-80-26599990."
      },
      {
        question: "How do I track the status of my complaint?",
        answer: "When you register a complaint, you receive a unique reference number. You can track the status of your complaint using this reference number through our online banking portal, mobile app, or by contacting customer service. You'll also receive regular updates via SMS and email."
      },
      {
        question: "What is the typical resolution time for queries and complaints?",
        answer: "Simple queries are usually resolved during the initial contact. For complaints requiring investigation, we strive to resolve them within 7 working days, though complex issues might take up to 30 days. We provide regular updates throughout the resolution process."
      },
      {
        question: "How can I provide feedback about my customer service experience?",
        answer: "We welcome feedback through multiple channels. After each interaction, you'll receive a short satisfaction survey. You can also share feedback through our website, mobile app, or directly with branch managers. Your insights help us continuously improve our service quality."
      }
    ],
    relatedServices: ["online-banking", "mobile-banking", "digital-security"]
  },
  {
    id: "business-banking",
    title: "Business Banking",
    description: "Comprehensive financial solutions designed specifically for small and medium enterprises to support business growth.",
    icon: Briefcase,
    longDescription: "SBI Business Banking offers tailored financial solutions to meet the unique needs of small and medium enterprises. From basic banking services to specialized financing options, our comprehensive suite of products is designed to support business growth at every stage. With dedicated relationship managers and sector-specific expertise, we provide personalized guidance to help your business thrive in a competitive environment.",
    benefits: [
      "Specialized business accounts with flexible transaction limits",
      "Competitive lending solutions with simplified processes",
      "Digital banking tools designed for business operations",
      "Dedicated relationship managers for personalized support",
      "Specialized industry knowledge and sector-specific solutions"
    ],
    features: [
      {
        title: "Business Current Accounts",
        description: "Specialized current accounts with features tailored to business transaction needs and volumes."
      },
      {
        title: "Business Loans",
        description: "Working capital loans, term loans, and overdraft facilities with competitive interest rates."
      },
      {
        title: "Payment Solutions",
        description: "POS terminals, payment gateways, and QR code systems for efficient business transactions."
      },
      {
        title: "Trade Services",
        description: "Import/export financing, letter of credit, and bank guarantees for businesses engaged in trade."
      },
      {
        title: "Digital Banking Platform",
        description: "Comprehensive online and mobile banking solutions specialized for business operations."
      }
    ],
    faqs: [
      {
        question: "What types of business accounts does SBI offer?",
        answer: "We offer various business current accounts including Regular Business Account, Premium Business Account, and Industry-Specific Accounts with features and charges structured according to business needs, transaction volumes, and average balance maintenance capabilities."
      },
      {
        question: "What loan options are available for small businesses?",
        answer: "Our small business financing options include term loans for expansion, working capital loans for day-to-day operations, equipment financing, commercial property loans, and specialized schemes like MSME loans with government subsidy linkages where applicable."
      },
      {
        question: "How can I apply for business banking services?",
        answer: "You can apply by visiting any SBI branch, through our corporate website, or by contacting our business banking team. After initial discussions, we'll help you complete the necessary documentation based on your business structure and the services you require."
      },
      {
        question: "Does SBI provide industry-specific financial solutions?",
        answer: "Yes, we offer specialized financial packages for different sectors including manufacturing, retail, healthcare, education, hospitality, and technology. These solutions are tailored to address sector-specific challenges and opportunities with appropriate financing structures and terms."
      }
    ],
    relatedServices: ["corporate-banking", "digital-security"]
  }
];
