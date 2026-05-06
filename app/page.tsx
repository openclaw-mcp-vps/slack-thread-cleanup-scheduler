export default function Home() {
  const faqs = [
    {
      q: "Which Slack plans are supported?",
      a: "SlackSweep works with Slack Free, Pro, Business+, and Enterprise Grid. OAuth scopes required are channels:history and chat:write."
    },
    {
      q: "Can I set different rules per channel?",
      a: "Yes. You can create unlimited rules scoped to specific channels, keywords, or participant lists. Rules run on a daily cron schedule."
    },
    {
      q: "Is my Slack data stored on your servers?",
      a: "No message content is stored. Only rule configurations and OAuth tokens (encrypted at rest) are saved. Threads are processed in-memory and immediately discarded."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Slack Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-archive old Slack threads{" "}
          <span className="text-[#58a6ff]">by keyword</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Set rules once. SlackSweep silently archives or deletes threads older than X days — filtered by channel, keyword, or participant. Your workspace stays clean on autopilot.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Cleaning — $19/mo
          </a>
          <a
            href="#how"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Connect Slack", desc: "OAuth in one click. No bots to install manually." },
            { step: "2", title: "Define Rules", desc: "Pick channels, keywords, age threshold, and action." },
            { step: "3", title: "Sit Back", desc: "Daily cron + real-time webhooks keep threads tidy." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-extrabold text-2xl mb-2">{item.step}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited cleanup rules",
              "All channels & DMs",
              "Keyword + participant filters",
              "Daily cron + real-time webhooks",
              "Encrypted token storage",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} SlackSweep. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
