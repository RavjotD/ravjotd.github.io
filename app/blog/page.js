"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const sections = [
  {
    eyebrow: "01 / Sales",
    title: "Selling is reading the room, not reading the script",
    paragraphs: [
      "Sales is where I learned that value isn't a slogan. It's a feeling you create in someone's head when they realize the thing in front of them solves a problem they actually have. I started selling gym memberships at Club16 in 2018 and stayed for four years. The product on paper was simple: a treadmill, some weights, and a monthly fee. But every conversation that closed had the same shape, and every conversation that didn't closed for the same reason. The reason was almost never price.",
      "Most people pitch features. They list what their thing has and hope a few of those features stick. That's a script, and customers can hear scripts a mile away. The job is the opposite: figure out the one outcome the person walking in front of you is actually buying, and tie everything you say back to that outcome. Some people want to lose 30 pounds. Some people want to feel less anxious at work. Some people just want a place to be alone for an hour. The membership solves all three, but you have to know which one you're selling before you open your mouth.",
      "I think about every technical product I touch the same way now. Customers don't care that the API has 30 endpoints. They care that the reconciliation issue that woke up their accounts team last quarter doesn't happen again. Same job, different inventory.",
    ],
    proTip:
      "Stop selling the product. Sell the version of their week that exists after the product.",
  },
  {
    eyebrow: "02 / CSS — Customer Success and Support",
    title:
      "The support queue is the closest thing to ground truth a B2B company gets",
    paragraphs: [
      "Two letters away from the language we use to make the web look right, CSS for me means Customer Success and Support. It's what makes the customer relationship hold up after the sale. I've been on the support side at two companies. Microserve, where I ran Tier 1 tickets across enterprise environments. And Kaseya, where I now sit on the second line for ConnectBooster, an accounts receivable platform that lives entirely on API integrations.",
      "Support gets called a cost center. That's a misread. Support is the only function in a company that has a sustained, real-time view of where the product is breaking, who it's breaking for, and what's worth fixing first. The signal in a support queue is the closest thing a B2B company has to ground truth. The companies that treat that signal as an asset move faster than the ones that treat it as overhead.",
      "The hard part of the work isn't the tickets themselves. It's pattern recognition across them. One reconciliation error in QuickBooks isn't a bug. The same reconciliation error showing up across three customers and two PSAs in the same week is a story. The job is to read the queue like a graph and find the shape that no individual ticket shows you.",
    ],
    proTip:
      "Every time you close a ticket, write the one sentence that summarizes what the customer was actually trying to do. Read those back-to-back at week's end. The roadmap writes itself.",
  },
  {
    eyebrow: "03 / Technical Engineering",
    title: "Build it locally, deploy it second, write the runbook third",
    paragraphs: [
      "Technical Engineering is the longest stretch of my landscape and the part I'm still actively widening. Three sub-disciplines fit under it for me: full-stack web development, cloud and infrastructure, and the security layer that sits across both.",
      "Full-stack came out of the freelance work. I build commercial websites for local businesses, mostly in Next.js and TypeScript, and the constraint that shaped my style was simple: every site I ship has to load fast on a mid-tier Android phone over a slow connection, has to be hard to break, and has to rank. Three constraints, no exceptions. Anything I can't justify against those three doesn't get added.",
      "Cloud is the next chapter and the one I'm investing in hardest right now. I'm working through AWS Solutions Architect Associate, with hands-on time across S3, EC2, IAM, and VPC, plus enterprise Active Directory and M365 admin on the Azure side. Security threads through both. I have an AWS Security credential and a Hacksplaining cert, and I think about it less as a separate domain and more as a property the rest of the system has to satisfy. If I can't explain who can read this data, who can write it, and what happens when an attacker gets one foothold, the design isn't done.",
    ],
    proTip:
      "Build the thing locally first, deploy it second, write the runbook third. Skipping the runbook is what turns a working system into a fragile one.",
  },
  {
    eyebrow: "04 / Agentic AI",
    title: "Engineers who use AI will replace the ones who don't",
    paragraphs: [
      "Agentic AI is where I'm pointed next, and the one part of the landscape that didn't exist when I started my career. I've spent the last year building AI-driven workflows that run end-to-end without a human in the loop. Lead generation that scrapes, classifies, and enriches without me touching a spreadsheet. Client onboarding that takes a kickoff transcript and produces the next eight emails, the proposal draft, and the tracking sheet.",
      "The framing that's helped me is that agentic systems are a new layer in the stack, not a feature you bolt onto an existing app. The same way the cloud rewrote what infrastructure looks like, agents are rewriting what an internal tool looks like. The companies that move first won't be the ones with the best models. They'll be the ones who figured out which workflows in their business were always procedural to begin with and just hid that fact behind humans.",
      "I'm not bullish on AI replacing engineers. I'm bullish on engineers who use AI replacing the ones who don't. The leverage curve is too steep to ignore, and the people who internalize agentic patterns now are buying themselves a five-year head start.",
    ],
    proTip:
      "Write the agent the same way you'd write a runbook for a junior teammate. If your instructions can't survive a confused junior, they can't survive an LLM either. The skill in this layer isn't prompting. It's harnessing the process.",
  },
];

const ProTip = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mt-10 border-l-2 border-accent pl-6 py-4 bg-accent/[0.04]"
  >
    <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent block mb-3">
      Pro Tip
    </span>
    <p className="font-sans text-base md:text-lg text-cream leading-relaxed">
      {children}
    </p>
  </motion.div>
);

const BlogPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-charcoal">
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6"
        >
          Field Guide
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-display-lg md:text-display-xl text-cream leading-[0.95] mb-12"
        >
          What I Know
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] max-w-2xl"
        >
          I've worked across four domains long enough to have an opinion in
          each. Sales taught me what value actually means. Customer Success and
          Support taught me how to read a system from the outside in. Technical
          Engineering is where I learned to build things that hold up under
          load. Agentic AI is the next axis I'm scaling on. This page is a
          brief tour of each, plus the one pro tip that has earned its place
          after every iteration.
        </motion.p>
      </section>

      {sections.map((section, idx) => (
        <section
          key={idx}
          className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-rule"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6"
              >
                {section.eyebrow}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-3xl md:text-4xl text-cream leading-[1.15] md:sticky md:top-32"
              >
                {section.title}
              </motion.h2>
            </div>

            <div>
              {section.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                  className="font-sans text-text-secondary text-base md:text-lg leading-[1.8] mb-6"
                >
                  {p}
                </motion.p>
              ))}

              <ProTip>{section.proTip}</ProTip>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default BlogPage;
