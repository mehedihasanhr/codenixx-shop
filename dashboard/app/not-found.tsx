import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const availablePages = [{ path: "/overviews", title: "Overviews" }];

export default function NotFound() {
  return (
    <section className="grid h-screen w-screen place-content-center px-8 py-6">
      <div className="mt-10">
        <Alert className="max-w-[450px] bg-lime-500/30">
          <AlertTitle className="mb-3 font-bold">
            Page Under Construction
          </AlertTitle>
          <AlertDescription>
            {
              "This page is currently undergoing maintenance. We apologize for any inconvenience and appreciate your patience."
            }

            <div className="mt-4">
              <span className="mb-1.5 block font-medium">Available pages:</span>
              <ul className="list-disc pl-10">
                {availablePages.map((p, i) => (
                  <li key={i}>
                    <Link href={p.path} className="hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
