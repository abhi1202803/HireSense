import Image from "next/image";
import Link from "next/link";

import { getRandomInterviewCover } from "@/lib/utils";

import DisplayTechIcons from "@/components/DisplayTechIcons";
import { Button } from "@/components/ui/button";
import {
  demoFeedback,
  demoInterviews,
  demoUser,
  getDemoInterview,
} from "@/lib/demo-data";

export const generateStaticParams = () =>
  demoInterviews.map((interview) => ({
    id: interview.id,
  }));

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = getDemoInterview(id);
  const feedback = interview.id === demoFeedback.interviewId ? demoFeedback : null;

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <span className="animate-speak" />
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
          <p>{interview.questions[0]}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 max-sm:flex-col">
        <Button asChild className="btn-secondary max-sm:w-full">
          <Link href={feedback ? `/interview/${interview.id}/feedback` : "/"}>
            {feedback ? "View Feedback" : "Save for Later"}
          </Link>
        </Button>
        <Button asChild className="btn-disconnect max-sm:w-full">
          <Link href={`/interview/${interview.id}/feedback`}>
            End Interview
          </Link>
        </Button>
      </div>
    </>
  );
};

export default InterviewDetails;
