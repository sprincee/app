export const metadata = {
  title: "Resources — ResumeAI",
  description: "Organizations and social media accounts supporting first-gen and underserved students.",
};

const websites = [
  {
    name: "Rise First",
    url: "https://risefirst.org",
    description:
      "A free directory built for first-generation, low-income (FGLI) students. Pulls together more than 1,200 scholarships, mentorship programs, internships, and career resources in one searchable hub. It exists because most first-gen students don&apos;t have a parent or family friend to send them the right link at the right time. Rise First tries to be that link.",
  },
  {
    name: "College Possible",
    url: "https://www.collegepossible.org",
    description:
      "Pairs low-income students with near-peer coaches who walk them through college applications, financial aid, and early career decisions. Their core idea is simple: most first-gen students don&apos;t lack ambition, they lack someone in their corner who has already done it.",
  },
  {
    name: "Genesys Works",
    url: "https://www.genesysworks.org",
    description:
      "Trains high school seniors from underserved communities in technical and professional skills, then places them in paid internships at major corporations. Students leave high school with a year of real corporate work history on their resume, which closes the experience gap that hits hardest in college applications.",
  },
  {
    name: "Bottom Line",
    url: "https://www.bottomline.org",
    description:
      "One-on-one advising for first-gen and low-income students, from senior year of high school all the way through college graduation. The long-term model is the point: instead of a single workshop, students get a relationship with someone who knows their story across years.",
  },
  {
    name: "FirstGen Forward (NASPA)",
    url: "https://firstgen.naspa.org/",
    description:
      "The national center for first-gen student success, housed at NASPA. Works with more than 470 colleges and universities and publishes the Journal of First-generation Student Success. Useful for educators and program staff who want research, fact sheets, and connections to other institutions doing the same work.",
  },
];

const socials = [
  {
    name: "@wonsulting",
    handle: "@jonathanwordsofwisdom",
    platform: "Instagram",
    url: "https://www.instagram.com/jonathanwordsofwisdom/",
    description:
      "Wonsulting was founded by Jonathan Javier, a first-gen Filipino-American who broke into tech roles at Google, Snap, and Cisco from a non-target school. His account (and Wonsulting&apos;s broader 3M+ following across platforms) is all resume tips, interview breakdowns, and outreach scripts for people without a built-in professional network.",
  },
  {
    name: "@getschooled",
    handle: "@getschooled",
    platform: "TikTok",
    url: "https://www.tiktok.com/@getschooled",
    description:
      "Get Schooled is a national nonprofit, originally founded by Paramount and the Gates Foundation, that focuses specifically on Black, brown, low-income, and first-gen students. Their TikTok turns dense college and career content into short videos: scholarship reminders, FAFSA tips, first-job advice. Around 140K social followers across platforms.",
  },
  {
    name: "Khan Academy",
    handle: "@khanacademy",
    platform: "Instagram",
    url: "https://www.instagram.com/khanacademy/",
    description:
      "Better known for math and SAT prep, but their college admissions and careers content is just as strong. Walkthroughs on writing a personal statement, picking a major, and exploring career paths, aimed at students who don&apos;t have a private counselor.",
  },
  {
    name: "College Essay Guy",
    handle: "@collegeessayguy",
    platform: "Instagram",
    url: "https://www.instagram.com/collegeessayguy/",
    description:
      "Founded by Ethan Sawyer, who runs a free Matchlighters program pairing low-income students with one-on-one essay coaches. The Instagram account distills the same advice into short, sharable posts. Particularly strong on personal statements and how to write about identity without falling into trauma tropes.",
  },
  {
    name: "Rise First",
    handle: "@rise_first",
    platform: "Instagram",
    url: "https://www.instagram.com/rise_first/",
    description:
      "Rise First&apos;s social account, daily posts about scholarships, internships, and FGLI community events. A low-lift way to discover opportunities that wealthier students hear about through their parents&apos; networks.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">
          Resources
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          ResumeAI is one tool. Here are the people and organizations doing the harder work.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Programs, nonprofits, and creators that support first-generation and underserved students through career readiness, mentorship, and access to opportunity.
        </p>
      </div>

      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Organizations &amp; Programs
          </h2>
          <span className="text-sm text-gray-500">5 resources</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {websites.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {site.name}
                </h3>
                <span className="text-gray-400 group-hover:text-blue-600 transition">
                  ↗
                </span>
              </div>
              <p
                className="text-gray-600 leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: site.description }}
              />
            </a>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Social Media to Follow
          </h2>
          <span className="text-sm text-gray-500">5 accounts</span>
        </div>
        <div className="space-y-4">
          {socials.map((social, i) => (
              <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-6 p-6 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all bg-white"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                  {social.platform[0]}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {social.name}
                  </h3>
                  <span className="text-sm text-gray-500">{social.handle}</span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {social.platform}
                  </span>
                </div>
                <p
                  className="text-gray-600 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: social.description }}
                />
              </div>
              <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition">
                ↗
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}