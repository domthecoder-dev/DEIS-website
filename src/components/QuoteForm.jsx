export default function QuoteForm() {
  return (
    <form 
      action="https://formsubmit.co/c3b2341dd7554351377e17d1af07ab90" 
      method="POST"
      className="space-y-5 max-w-lg mx-auto"
    >
      {/* Hidden fields for FormSubmit.co */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://deinnovativesolutions.co.za/thanks" />
      <input type="hidden" name="_subject" value="New Quote Request - DEIS" />

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <input
        type="tel"
        name="cell"
        placeholder="Cell Number"
        required
        className="w-full px-4 py-3 rounded-lg bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        className="w-full px-4 py-3 rounded-lg bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
      />

      <button 
        type="submit" 
        className="w-full text-black font-bold py-4 rounded-lg text-lg btn-primary hover:bg-teal-400 transition;"
      >
        Get Started
      </button>
    </form>
  );
}