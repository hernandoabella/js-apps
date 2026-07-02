import React from "react";

const faqs = [
  {
    q: "What is JS-APPS?",
    a: "JS-APPS is a hands-on learning platform with 15 JavaScript projects. Each project has 4 guided steps (HTML, CSS, JS, and a final result) with real-time code validation. You earn XP, unlock achievements, and track your progress as you learn.",
  },
  {
    q: "Do I need prior experience?",
    a: "Not at all! Projects start at Level 1 (Rookie) with simple generators and progress to Level 5 (Ninja) with games and timers. Each step includes hints and starter code to help you along the way.",
  },
  {
    q: "How does the gamification work?",
    a: "You earn 15 XP for each completed lesson step and 100 XP for finishing a full project. As you accumulate XP, you level up through 7 ranks: Beginner, Apprentice, Coder, Developer, Architect, Master, and Legend. There are also 10 achievements to unlock, and your daily streak is tracked.",
  },
  {
    q: "Do I need to install anything?",
    a: "No installation needed. Everything runs in your browser — write code, see it validated, and preview the result live. Just open the page and start coding.",
  },
  {
    q: "What projects are included?",
    a: "There are 15 projects across 5 levels: Number Generator, Color Generator, String Generator, Gradient Generator, Theme Switcher (Level 1), Counter App, Todo List (Level 2), Calculator, Digital Clock, Tip Calculator (Level 3), Tic-Tac-Toe, Quiz App, Memory Game (Level 4), Pomodoro Timer, and Countdown Timer (Level 5).",
  },
  {
    q: "Is my progress saved?",
    a: "Yes! Your lesson progress, XP, level, streak, and achievements are all saved in your browser using localStorage. Come back anytime and pick up where you left off.",
  },
  {
    q: "Can I contribute?",
    a: "Absolutely! JS-APPS is open source. Check the contribution guide in our GitHub repository to add projects, fix bugs, or suggest improvements.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 md:py-28 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about JS-APPS.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 open:shadow-lg"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                <span>{faq.q}</span>
                <span className="text-2xl text-gray-400 dark:text-gray-500 transition-transform duration-200 group-open:rotate-45 flex-shrink-0 ml-4">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
