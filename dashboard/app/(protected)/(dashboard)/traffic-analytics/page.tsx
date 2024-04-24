import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../components/ui/alert";
import PageHeading from "../_components/page-heading";

export default function DashboardTrafficAnalytics() {
  return (
    <section className="px-8 py-6">
      <PageHeading heading="Traffic Analytics" />

      <div className="mt-10">
        <Alert className="bg-lime-500/30">
          <AlertTitle>Page Under Construction</AlertTitle>
          <AlertDescription>
            {
              "This page is currently undergoing maintenance. We apologize for any inconvenience and appreciate your patience."
            }
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
