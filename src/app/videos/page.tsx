export const metadata = {
  title: "Videos — ResumeAI",
  description: "Talks and explainers on the hidden language of professional spaces.",
};

const videos = [
  {
    title: "3 Ways to Speak English",
    speaker: "Jamila Lyiscott",
    venue: "TED Salon NY2014",
    embedUrl: "https://www.youtube.com/embed/k9fmJ5xQ_mc",
    sourceUrl: "https://www.ted.com/talks/jamila_lyiscott_3_ways_to_speak_english",
    description:
      "A spoken-word piece from educator Jamila Lyiscott on what it means to be called &quot;articulate.&quot; She describes herself as a tri-tongued orator, moving between three versions of English: one at home, one in the classroom, and one with her friends. Each carries its own history and logic. The talk takes apart the assumption that there&apos;s one correct way to speak in professional settings.",
    relevance:
      "This is the exact territory ResumeAI sits in. Hiring managers expect a specific dialect on a resume, and students who didn&apos;t grow up speaking that dialect aren&apos;t less capable. They&apos;re translating between registers, the same way Lyiscott is.",
  },
  {
    title: "On Diversity: Access Ain't Inclusion",
    speaker: "Dr. Anthony Abraham Jack",
    venue: "TEDxCambridge",
    embedUrl: "https://www.youtube.com/embed/j7w2Gv7ueOc",
    sourceUrl: "https://www.youtube.com/watch?v=j7w2Gv7ueOc",
    description:
      "Anthony Jack grew up poor in segregated Miami, went to Amherst on scholarship, and is now a Harvard professor studying first-gen students at elite colleges. In this talk he draws the distinction that built his career: the &quot;privileged poor&quot; (low-income students who went through prep schools and absorbed the hidden curriculum) versus the &quot;doubly disadvantaged&quot; (low-income students who came straight from underfunded public schools and got no such preparation). His central point: getting in the door is only half the battle.",
    relevance:
      "Jack&apos;s framework is the backbone of why a translation tool matters. The privileged poor learned the code at their prep school. Everyone else has to find it somewhere, and most of the time, no one teaches it.",
  },
  {
    title: "The resume structure that got me my dream job",
    speaker: "Jonathan Javier (Wonsulting)",
    venue: "YouTube",
    embedUrl: "https://www.youtube.com/embed/FwcoqUUychs",
    sourceUrl: "https://www.youtube.com/watch?v=FwcoqUUychs",
    description:
      "Jonathan Javier is a first-generation Filipino-American who went from a non-target school to roles at Snapchat, Google, and Cisco. He founded Wonsulting with the mission of &quot;turning underdogs into winners.&quot; In this video he walks through the literal resume structure that got him in the door at top tech companies: how to write bullets, what to cut, what hiring managers actually look at.",
    relevance:
      "Where Lyiscott and Jack frame the problem, Jonathan teaches the tactic. This is the kind of guidance that a kid with a well-connected parent gets at the kitchen table. Free on YouTube means a kid without one can get it too.",
  },
];

export default function VideosPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">
          Videos
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Three videos worth watching.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A poet on code-switching, a Harvard sociologist on what colleges miss after they let students in, and a first-gen kid who got into Google teaching you exactly how he did it.
        </p>
      </div>

      <div className="space-y-16">
        {videos.map((video, i) => (
          <article key={i}>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-md">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl font-bold text-blue-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {video.venue}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {video.title}
            </h2>
            <p className="text-gray-600 mb-4">{video.speaker}</p>
            <p
              className="text-gray-700 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: video.description }}
            />
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Why it&apos;s here
              </p>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: video.relevance }}
              />
            </div>
              <a
              href={video.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 hover:underline"
            >
              Watch at source →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}