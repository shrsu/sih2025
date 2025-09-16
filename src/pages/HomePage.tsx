import { ModeToggle } from "@/themes/mode-toggle";
import { Button } from "@/components/ui/button";
import { HeartPulse } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex w-full justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <p className="font-bold border-4 text-xl rounded border-primary text-primary h-10 w-10 flex justify-center items-center">
            <HeartPulse />
          </p>
          <p className="font-bold text-primary">Nirmaya</p>
        </div>

        <div className="flex gap-4">
          {/* Sign Up Hover Card */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button>Sign Up</Button>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-fit mt-2 mr-12 text-center flex-col gap-2">
              <Button variant="ghost" asChild>
                <Link to="#">Doctor Sign Up</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="#">Pharmacist Sign Up</Link>
              </Button>
            </HoverCardContent>
          </HoverCard>

          {/* Sign In Hover Card */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button>Sign In</Button>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-fit mt-2 mr-12 text-center flex-col gap-2">
              <Button variant="ghost" asChild>
                <Link to="/doctor/login">Doctor Login</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/pharmacist/login">Pharmacist Login</Link>
              </Button>
            </HoverCardContent>
          </HoverCard>

          {/* Theme toggle */}
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-primary mb-16">
            Nirmaya
          </h1>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
