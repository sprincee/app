export const metadata = {
  title: "Research — ResumeAI",
  description: "Academic research on cultural capital, first-gen students, and career readiness.",
};

const sources = [
  {
    title: "Cultural Capital: Its Influence in Education & the Workplace",
    author: "Prof. Lauren Rivera, Kellogg School of Management (Northwestern University)",
    year: "2022",
    type: "Faculty essay",
    url: "https://www.kellogg.northwestern.edu/news/blog/2022/10/25/cultural-capital-influence-education-workplace/",
    description:
      "A personal essay from sociologist Lauren Rivera, author of Pedigree: How Elite Students Get Elite Jobs. Rivera grew up between worlds (a multi-ethnic, single-parent family in small-town Oregon, then a scholarship student at an elite LA prep school, then Yale) and writes about studying her wealthy peers &quot;like an anthropologist&quot; to learn how they dressed, spoke, and moved through space. Her academic career has been about exposing those same dynamics in hiring, especially at top investment banks, consulting firms, and law firms where she found the highest-paying jobs often go to graduates from privileged backgrounds.",
    relevance:
      "Rivera puts it directly: her goal is &quot;to expose the rules of the game so we can change them.&quot; That sentence is the entire premise behind ResumeAI. If cultural capital is a code that can be observed and learned, a tool can help teach it.",
  },
  {
    title: "First-Generation College Graduates Lag Behind Their Peers on Key Economic Outcomes",
    author: "Richard Fry, Pew Research Center",
    year: "2021",
    type: "Research report",
    url: "https://www.pewresearch.org/social-trends/2021/05/18/first-generation-college-graduates-lag-behind-their-peers-on-key-economic-outcomes/",
    description:
      "Pew analyzed Federal Reserve data on adults aged 22 to 59 and found that getting a degree doesn&apos;t close the gap. Households headed by a first-generation college graduate have a median income of $99,600 and median wealth of $152,000. Households headed by someone whose parent also has a degree have a median income of $135,800 and median wealth of $244,500. The same diploma, but very different economic outcomes.",
    relevance:
      "The persistent gap is the strongest case that the problem is not just access to college. It&apos;s everything that happens after, including how first-gen graduates compete for jobs, negotiate salaries, and navigate workplaces where the rules were never explained.",
  },
  {
    title:
      "Cultural Capital Signaling and Class-Related Selection Biases in Employment and Education",
    author: "Belmi, Neale, Reiff, & Ulqinaku — Basic and Applied Social Psychology",
    year: "2025",
    type: "Peer-reviewed study",
    url: "https://www.tandfonline.com/doi/full/10.1080/01973533.2025.2467273",
    description:
      "A two-study paper testing whether signals of class-based cultural capital influence how competent and hireable a person appears. In the first study, applicants who signaled &quot;highbrow&quot; cultural capital (the activities, hobbies, and language associated with wealthier upbringings) were rated as wealthier, more competent, and more deserving of prestigious roles. In the second study, admissions counselors at expensive selective institutions were more likely to respond to applications signalling highbrow cultural capital, and counselors across the board put more effort into their responses to those students.",
    relevance:
      "Hard evidence that cultural signaling, not just skill, shapes who gets through the door. This is the gatekeeping mechanism a translation tool is designed to work against.",
  },
];

export default function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">
          Research
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          The hidden curriculum is well-documented. We just don&apos;t teach it.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Three sources that ground this project in research on cultural capital, first-generation students, and the unspoken rules of professional advancement.
        </p>
      </div>

      <div className="space-y-12">
        {sources.map((source, i) => (
          <article
            key={i}
            className="border-l-4 border-blue-600 pl-6 py-2"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-blue-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {source.type}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {source.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {source.author} · {source.year}
            </p>
            <p
              className="text-gray-700 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: source.description }}
            />
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Why it matters here
              </p>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: source.relevance }}
              />
            </div>
              <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              Read the source →
            </a>
          </article>
        ))}
      </div>

      <div className="mt-20 p-8 bg-gray-50 rounded-2xl">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          A note on the sources
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          These three span different angles: a personal essay from a researcher who lived it (Rivera), a national data set quantifying the outcomes gap (Pew), and a controlled study isolating the mechanism (Belmi et al.). Together they make a single argument: the resume gap is a translation problem, not a talent problem.
        </p>
      </div>
    </main>
  );
}