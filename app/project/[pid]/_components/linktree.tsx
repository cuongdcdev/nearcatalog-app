import { ProjectRecord } from "@/lib/types";
import Link from "next/link";
import ShareDropdown from "./share-dropdown";
import Image from "next/image";

const WebsiteLink = ({
  href,
  ariaLabel,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      aria-label={ariaLabel}
      className={
        "flex items-center justify-center gap-1 rounded-lg border border-[#80E9E5] px-2 py-1 text-sm font-bold text-[#80E9E5] transition-opacity duration-300 ease-in-out hover:opacity-50 " +
        className
      }
    >
      {children}
    </Link>
  );
};

interface LinkTreeProps {
  project: ProjectRecord;
}

export default function LinkTree({ project }: LinkTreeProps) {
  const { website, github, twitter, medium, discord, telegram, potlock } =
    project.profile?.linktree;
  const { dapp, lnc } = project.profile;
  const pid = project.slug;

  return (
    <div id="project-meta" className="flex min-w-64 flex-col gap-2">
      <div
        className={`relative flex flex-wrap items-center gap-1 lg:justify-end`}
      >
        {website && (
          <WebsiteLink
            href={website}
            ariaLabel={project.profile.name}
            className={(dapp ? "rounded-e-none" : "") + " w-28 border-2"}
          >
            <i className="bi bi-globe text-xl text-[#80E9E5]" /> Website
          </WebsiteLink>
        )}
        {dapp && (
          <WebsiteLink
            href={dapp}
            ariaLabel="Go to App"
            className={"w-24 border-2 " + (website ? "rounded-s-none" : "")}
          >
            <i className="bi bi-app-indicator text-xl text-[#80E9E5]" /> App
          </WebsiteLink>
        )}
        <ShareDropdown project={project} />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <div
          className={`mb-3 flex flex-wrap items-center justify-start gap-3 lg:justify-end`}
        >
          {potlock && (
            <Link href={potlock} aria-label="Potlock" rel="noreferrer nofollow">
              <Image 
              src="https://indexer.nearcatalog.org/wp-content/uploads/2025/05/potlock.png"
              alt="Potlock"
              className="w-5 h-5 transition-opacity duration-300 ease-in-out hover:opacity-50"
              />
            </Link>
          )}

          {twitter && (
            <Link href={twitter} aria-label="Twitter" rel="noreferrer nofollow">
              <i className="bi bi-twitter-x text-[#80E9E5] transition-opacity duration-300 ease-in-out hover:opacity-50" />
            </Link>
          )}
          {github && (
            <Link href={github} aria-label={`${project.profile.name} Github`} rel="noreferrer nofollow">
              <i className="bi bi-github text-[#80E9E5] transition-opacity duration-300 ease-in-out hover:opacity-50" />
            </Link>
          )}
          {medium && (
            <Link href={medium} aria-label="Medium" rel="noreferrer nofollow">
              <i className="bi bi-medium text-[#80E9E5] transition-opacity duration-300 ease-in-out hover:opacity-50" />
            </Link>
          )}
          {discord && (
            <Link href={discord} aria-label="Discord">
              <i className="bi bi-discord text-[#80E9E5] transition-opacity duration-300 ease-in-out hover:opacity-50" />
            </Link>
          )}
          {telegram && (
            <Link href={telegram} aria-label="Telegram" rel="noreferrer nofollow">
              <i className="bi bi-telegram text-[#80E9E5] transition-opacity duration-300 ease-in-out hover:opacity-50" />
            </Link>
          )}
          {lnc?.score && (
            <Link
              href={`https://learnnear.club/near-ecosystem/${lnc.slug}/`}
              target="_blank"
              aria-label="LNC"
              className="flex gap-1 rounded bg-orange-400 px-1 text-sm font-extrabold text-black"
              rel="noreferrer nofollow"
            >
              <ul className="flex items-baseline">
                <li className="text-[10px]">L</li>
                <li className="text-xs">N</li>
                <li>C</li>
              </ul>
              {lnc.score}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
