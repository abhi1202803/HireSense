import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { demoUser } from "@/lib/demo-data";

const Page = async () => {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-200">
          Interview generation
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">
          Let&apos;s prepare your next interview
        </h1>
      </div>

      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="AI interviewer"
              width={65}
              height={54}
              className="object-cover"
            />
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image
              src="/abhishek-bhardwaj.png"
              alt={demoUser.name}
              width={120}
              height={120}
              className="size-[120px] rounded-full object-cover object-top"
            />
            <h3>{demoUser.name}</h3>
          </div>
        </div>
      </div>

      <div className="transcript-border">
        <div className="transcript">
          <p>
            Tell PrepWise what role, level, and tech stack you want to practice.
            The generated interview will appear in your dashboard.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 max-sm:flex-col">
        <Button asChild className="btn-secondary max-sm:w-full">
          <Link href="/">Cancel</Link>
        </Button>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview/fullstack">Start Interview</Link>
        </Button>
      </div>
    </section>
  );
};

export default Page;
