// src/pages/FAQPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // For the 'Request a Quote' links
import FaqItem from '../../compontents/FAQ-items/FAQitems'; // Import the new FaqItem component
import './FAQ.css'; // Import the CSS specific to this page

function FAQPage() {
  // Data for General Questions
  const generalQuestions = [
    {
      question: "Do I own the website once it is completed?",
      answer: "Absolutely! Once your website is finalised and you have given your approval, it is entirely yours. You are investing in a custom-built digital asset for your business or personal use, and full ownership is transferred to you upon completion.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, absolutely! In today's digital landscape, having a website that looks and functions flawlessly on all devices – from desktops to tablets and smartphones – is crucial. Whether we are crafting your site with custom code or utilising platforms like WordPress or Wix, we ensure a fully responsive design that provides an optimal viewing experience for all your visitors.",
    },
    {
      question: "Can you help with things like SEO (Search Engine Optimization) or website hosting?",
      answer: "Yes, we can definitely help you optimize your website for search engines! We employ effective strategies to identify relevant keywords and structure your site to improve its visibility in search results. Regarding hosting, while we do have our own hosting services, we can certainly work with you if you have already secured hosting with another provider. Please let us know your setup when you request a quote.",
    },
    {
      question: "How can I contact you if I have more questions?",
      answer: "We are always happy to answer your questions! You can easily reach out to us through our <a href=\"/book-a-call\">Book A Call Form</a>. We will get back to you promptly via WhatsApp or email with the information you need.",
    },
    {
      question: "Do you only build websites using hardcoding, or do you work with platforms like WordPress for new projects?",
      answer: "While we often prefer the flexibility and complete customisation that comes with hardcoding websites for new projects, allowing for truly unique and tailored designs without platform limitations, we also recognize the benefits of platforms like WordPress, especially for certain types of websites or when requested by the client. We will discuss the best approach for your specific needs during our consultation.",
    }
  ];

  // Data for The Process Questions
  const processQuestions = [
    {
      question: "What are the first steps to getting a website built by you?",
      answer: `Getting started is simple!
      <ol>
        <li>Book A Call/Get A Quote: <a href="/book-a-call">(Click Here)</a> Tell us about your website needs.</li>
        <li>Receive Your Personalised Quote: We will review your request and provide you with a detailed quote or reach out for any additional information we might need.</li>
        <li>Acceptance and Invoice: Once you are happy with the quote, we will send you an invoice.</li>
        <li>Let's Get Started! Upon payment, we will guide you through the next steps and begin bringing your website vision to life!</li>
      </ol>`,
    },
    {
      question: "What information will I need to provide to get started?",
      answer: "To give you the most accurate quote, please provide as much detail as possible about your desired website – including the type of site, any specific features you need, and if you have examples of websites you like, please share the links! If we need any further information, we will be sure to reach out.",
    },
    {
      question: "How long does the website design and development process typically take?",
      answer: "The timeline for website development varies depending on the complexity and scope of your project. While we often aim to deliver websites within approximately 7 business days, this is an estimate. We will provide a more specific timeline tailored to your project after we have discussed your needs in detail during the quote process.",
    },
    {
      question: "What kind of support do you offer after the website is launched?",
      answer: "Once your website is launched and you have given your final approval, we consider the initial project complete. We include up to three rounds of significant revisions during the development phase to ensure your satisfaction. If you are interested in ongoing support such as monthly or yearly website maintenance or SEO optimization services, please let us know when you request your quote, and we will be happy to provide you with pricing options.",
    },
  ];

  // Data for Pricing and Services Questions
  const pricingServicesQuestions = [
    {
      question: "How do I get a quote for my website project?",
      answer: "Getting a quote is easy! Simply fill out our <a href=\"/book-a-call\">Book A Call form</a>, providing as much detail as possible about your project. We will review your request and get back to you with a personalised quote promptly.",
    },
    {
      question: "What factors influence the cost of a website?",
      answer: "The cost of your website is influenced by factors such as the number of pages, the complexity of the design and functionality, any specific features required (like e-commerce capabilities), and the overall scope of the project. We will discuss these details with you to provide a transparent and accurate quote.",
    },
    {
      question: "Do you offer different payment options?",
      answer: "For our standard website development projects, we require an upfront payment to initiate the work. For ongoing services like monthly or yearly maintenance and SEO optimization, we offer clear monthly or annual pricing structures, which we will outline in your personalised quote.",
    },
    {
      question: "What types of websites do you typically build?",
      answer: "We have experience building a wide range of websites, including professional websites for small businesses, engaging personal blogs and websites, functional e-commerce stores, and impressive online portfolios. We are confident we can bring your specific website vision to life.",
    },
    {
      question: "I already have a website built with WordPress/Wix. Can you help me revamp it?",
      answer: "Absolutely! We are happy to help you refresh and improve your existing WordPress or Wix website. Whether you are looking for a design update, improved functionality, or changes to the layout, we can help you take your current site to the next level.",
    },
    {
      question: "What are the benefits of a hardcoded website compared to a platform like WordPress?",
      answer: "Hardcoded websites offer unparalleled customization and a unique design tailored precisely to your brand and requirements, without the inherent limitations of pre-built themes or plugins. This approach can also lead to optimized performance and potentially enhanced security as the codebase is specifically crafted for your site.",
    },
  ];


  return (
    <main id="faq-main" className="faq-main"> {/* Unique class name for this page */}
      <div className="container main-content">
        <div className="kanban-board">
          <section className="kanban-column" id="general-questions">
            <h1 className="column-header">General Questions</h1>
            {generalQuestions.map((item, index) => (
              <FaqItem key={`general-${index}`} question={item.question} answerHtml={item.answer} />
            ))}
          </section>

          <section className="kanban-column" id="about-process">
            <h1 className="column-header">The Process</h1>
            {processQuestions.map((item, index) => (
              <FaqItem key={`process-${index}`} question={item.question} answerHtml={item.answer} />
            ))}
          </section>

          <section className="kanban-column" id="pricing-services">
            <h1 className="column-header">Services</h1>
            {pricingServicesQuestions.map((item, index) => (
              <FaqItem key={`pricing-${index}`} question={item.question} answerHtml={item.answer} />
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

export default FAQPage;