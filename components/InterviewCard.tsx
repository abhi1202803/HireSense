import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

import { cn } from "@/lib/utils";
import { demoFeedback } from "@/lib/demo-data";

const InterviewCard = async ({
  interviewId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = interviewId === demoFeedback.interviewId ? demoFeedback : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  const initials = role
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  const accentColor =
    {
      Technical: "from-[#7866ff] to-[#3d7bff]",
      Mixed: "from-[#ff7a59] to-[#ff3d81]",
      Behavioral: "from-[#20d3a8] to-[#4f8cff]",
    }[normalizedType] || "from-[#7866ff] to-[#3d7bff]";

  return (
    <div className="card-border group w-[360px] max-sm:w-full min-h-96 transition-transform duration-200 hover:-translate-y-1">
      <div className="card-interview">
        <div>
          {/* Type Badge */}
          <div
            className={cn(
              "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
              badgeColor
            )}
          >
            <p className="badge-text ">{normalizedType}</p>
          </div>

          {/* Cover Image */}
          <div
            className={cn(
              "flex size-[90px] items-center justify-center rounded-full bg-gradient-to-br text-3xl font-black text-white shadow-2xl shadow-primary-200/10 ring-4 ring-white/5",
              accentColor
            )}
          >
            {initials}
          </div>

          {/* Interview Role */}
          <h3 className="mt-5 capitalize leading-tight">{role} Interview</h3>
          <p className="mt-2 text-sm font-semibold text-primary-200">
            {techstack.slice(0, 3).join(" • ")}
          </p>

          {/* Date & Score */}
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="star" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>

          {/* Feedback or Placeholder Text */}
          <p className="line-clamp-3 mt-5">
            {feedback?.finalAssessment ||
              "Practice realistic interview questions, sharpen your answers, and get ready before the real conversation."}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between gap-4">
          <DisplayTechIcons techStack={techstack} />

          <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
