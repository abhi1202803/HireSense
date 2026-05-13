import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { demoInterviews, demoUser } from "@/lib/demo-data";

async function Home() {
  const userInterviews = demoInterviews.slice(0, 1);
  const allInterviews = demoInterviews.slice(1);
  const prepModules = [
    {
      title: "Question practice",
      description: "Role-specific prompts for technical, behavioral, and mixed interviews.",
    },
    {
      title: "Answer structure",
      description: "Use STAR, metric-backed examples, and concise tradeoff explanations.",
    },
    {
      title: "Feedback review",
      description: "Review scores, strengths, and improvement areas after each practice round.",
    },
  ];

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-200">
            AI interview preparation
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white max-sm:text-3xl">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h1>
          <p className="text-lg">
            Pick a role, practice realistic questions, and review structured feedback before the real interview.
          </p>

          <div className="flex gap-3 max-sm:flex-col">
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
            <Button asChild className="btn-secondary max-sm:w-full">
              <Link href="#templates">Browse Templates</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        {prepModules.map((module, index) => (
          <div key={module.title} className="prep-card">
            <span className="prep-step">0{index + 1}</span>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <div className="section-heading">
          <div>
            <p>Progress</p>
            <h2>Your Interviews</h2>
          </div>
          <span>Completed practice rounds</span>
        </div>

        <div className="interviews-section">
          {userInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              userId={demoUser.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))}
        </div>
      </section>

      <section id="templates" className="flex scroll-mt-10 flex-col gap-6 mt-8">
        <div className="section-heading">
          <div>
            <p>Preparation library</p>
            <h2>Take Interviews</h2>
          </div>
          <span>
            Developer, analyst, business, data, product, design, and manager tracks
          </span>
        </div>

        <div className="interviews-section">
          {allInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              userId={demoUser.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
