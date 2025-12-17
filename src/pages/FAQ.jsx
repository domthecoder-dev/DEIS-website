import FAQAccordion from '../components/FAQAccordion.jsx';

const faqs = [
  // General Questions
  {
    category: 'General Questions',
    q: 'Do I own the website once it is completed?',
    a: 'Upon full and final payment, you receive a perpetual, non-exclusive license to use the delivered website. DE Innovative Solutions retains ownership of pre-existing code, frameworks, tools, and the right to showcase the project in its portfolio (anonymised if requested).'
  },
  {
    category: 'General Questions',
    q: 'Will my website be mobile-friendly?',
    a: 'Yes. We build to industry standards (mobile-first, WCAG 2.1 AA, Core Web Vitals), ensuring an optimal experience across all devices. However, we cannot guarantee specific Google rankings or conversion results, as these depend on external factors.'
  },
  {
    category: 'General Questions',
    q: 'Can you help with things like SEO (Search Engine Optimization) or website hosting?',
    a: 'Yes, we offer SEO packages and managed hosting. If you prefer your own hosting provider, you are solely responsible for its performance, security, and uptime. We are not liable for downtime, security issues, or failures of third-party hosting services.'
  },
  {
    category: 'General Questions',
    q: 'How can I contact you if I have more questions?',
    a: 'We are always happy to answer your questions! You can easily reach out to us through our Book A Call Form. We will get back to you promptly via WhatsApp or email with the information you need.'
  },
  {
    category: 'General Questions',
    q: 'Do you only build websites using hardcoding, or do you work with platforms like WordPress for new projects?',
    a: 'While we often prefer the flexibility and complete customisation that comes with hardcoding websites for new projects, allowing for truly unique and tailored designs without platform limitations, we also recognize the benefits of platforms like WordPress, especially for certain types of websites or when requested by the client. We will discuss the best approach for your specific needs during our consultation.'
  },

  // The Process
  {
    category: 'The Process',
    q: 'What are the first steps to getting a website built by you?',
    a: 'Getting started is simple!\n\n1. Book A Call/Get A Quote: Tell us about your website needs.\n2. Receive Your Personalised Quote: We will review your request and provide you with a detailed quote.\n3. Acceptance and Invoice: Once you are happy with the quote, we will send you an invoice.\n4. Let’s Get Started! Upon payment, we will guide you through the next steps and begin bringing your website vision to life!'
  },
  {
    category: 'The Process',
    q: 'What information will I need to provide to get started?',
    a: 'To give you the most accurate quote, please provide as much detail as possible about your desired website – including the type of site, any specific features you need, and if you have examples of websites you like, please share the links! If we need any further information, we will be sure to reach out.'
  },
  {
    category: 'The Process',
    q: 'How long does the website design and development process typically take?',
    a: 'The timeline for website development varies depending on the complexity and scope of your project. While we often aim to deliver websites within approximately 7 business days, this is an estimate. We will provide a more specific timeline tailored to your project after we have discussed your needs in detail during the quote process.'
  },
  {
    category: 'The Process',
    q: 'What kind of support do you offer after the website is launched?',
    a: 'We provide a 90-day warranty against defects in our workmanship. During this period, we will fix any bugs in the code we delivered at no additional cost. Two (2) revision rounds are included per phase during development. Additional revisions are billed at R1 200/hour. Ongoing support, maintenance, and SEO services are available under separate monthly or yearly retainers.'
  },

  // Services
  {
    category: 'Services',
    q: 'How do I get a quote for my website project?',
    a: 'Getting a quote is easy! Simply fill out our Book A Call form, providing as much detail as possible about your project. We will review your request and get back to you with a personalised quote promptly.'
  },
  {
    category: 'Services',
    q: 'What factors influence the cost of a website?',
    a: 'The cost of your website is influenced by factors such as the number of pages, the complexity of the design and functionality, any specific features required (like e-commerce capabilities), and the overall scope of the project. We will discuss these details with you to provide a transparent and accurate quote.'
  },
  {
    category: 'Services',
    q: 'Do you offer different payment options?',
    a: 'For our standard website development projects, we require an upfront payment to initiate the work. For ongoing services like monthly or yearly maintenance and SEO optimization, we offer clear monthly or annual pricing structures, which we will outline in your personalised quote.'
  },
  {
    category: 'Services',
    q: 'What types of websites do you typically build?',
    a: 'We have experience building a wide range of websites, including professional websites for small businesses, engaging personal blogs and websites, functional e-commerce stores, and impressive online portfolios. We are confident we can bring your specific website vision to life.'
  },
  {
    category: 'Services',
    q: 'I already have a website built with WordPress/Wix. Can you help me revamp it?',
    a: 'Absolutely! We are happy to help you refresh and improve your existing WordPress or Wix website. Whether you are looking for a design update, improved functionality, or changes to the layout, we can help you take your current site to the next level.'
  },
  {
    category: 'Services',
    q: 'What are the benefits of a hardcoded website compared to a platform like WordPress?',
    a: 'Hardcoded websites offer unparalleled customization and a unique design tailored precisely to your brand and requirements, without the inherent limitations of pre-built themes or plugins. This approach can also lead to optimized performance and potentially enhanced security as the codebase is specifically crafted for your site.'
  },
];

export default function FAQ() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Frequently Asked <span className="text-accent">Questions</span>
        </h1>

        {['General Questions', 'The Process', 'Services'].map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">{category}</h2>
            <div className="space-y-4">
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq, i) => (
                  <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}