export const metadata = {
  title: "About — ResumeAI",
  description: "Why this project exists.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          There&apos;s a hidden language to professional spaces, and not everyone gets taught it.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          ResumeAI translates everyday experience into the language hiring managers expect, so a teenager who worked a drive-thru can apply for an internship without rewriting who they are.
        </p>
      </div>

      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The problem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Walk into any career center at a wealthy high school and you&apos;ll find students who already speak fluent &quot;resume.&quot; They know that &quot;watched my little cousins&quot; becomes &quot;provided childcare for minors in a multi-child household.&quot; They know &quot;helped my dad at his shop&quot; becomes &quot;assisted in daily operations of a small business.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            They didn&apos;t learn that in class. They picked it up from parents, family friends, summer prep programs, and an entire ecosystem of professional adults around them. Sociologists call it <em>cultural capital</em>: the unwritten rules of how to present yourself in spaces that weren&apos;t built for you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In underprivileged communities, that ecosystem often doesn&apos;t exist. The work is the same. The skills are the same. But the translation gets lost, and the opportunity goes to someone who already knew the code.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ResumeAI is built on one belief: <strong>the language barrier shouldn&apos;t be the opportunity barrier.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            The tool takes plain English, the way a real teenager actually talks about their job, and translates it into the kind of bullet points hiring managers and admissions officers are trained to look for. Not to fake anything. To show what was already there.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who this is for</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong className="text-gray-900">Students</strong> applying for their first internship, scholarship, or college program, especially those who don&apos;t have someone at home who can edit their resume.
            </li>
            <li>
              <strong className="text-gray-900">Teachers, counselors, and mentors</strong> who work with first-generation students and want a tool that meets kids where they are.
            </li>
            <li>
              <strong className="text-gray-900">Community programs</strong> running career readiness workshops with limited time and staff.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Research has shown for decades that the resume gap isn&apos;t a skill gap. It&apos;s a translation gap. When professor Lauren Rivera at Northwestern studied hiring at elite firms, she found that the signals candidates sent (the words, the framing, the references) mattered as much as the work itself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tools won&apos;t fix structural inequality on their own. But making the hidden curriculum visible, and putting it in reach of every student with a phone, is a starting point.
          </p>
        </div>
      </section>

      <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Try the tool</h3>
        <p className="text-gray-700 mb-4">
          See what happens when &quot;I made coffee for people&quot; becomes resume-ready.
        </p>
          <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
        >
          Open ResumeAI →
        </a>
      </div>
    </main>
  );
}