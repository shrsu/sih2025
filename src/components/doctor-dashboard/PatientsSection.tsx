import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PatientCard } from "./PatientCard";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import patientData from "./patientData.json";
import ReportSection from "./ReportSection";

function PatientsSection() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  return (
    <div className="h-[calc(100vh-64px)] border-t">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={70} className="h-full">
          <div className="flex flex-col h-full">
            <div className="sticky top-0 z-10 bg-background px-8 py-6">
              <h1 className="text-2xl font-bold text-primary">Patients</h1>
            </div>
            <div className="flex-1 overflow-y-auto p-8 pt-6">
              <div
                className="grid gap-6"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                }}
              >
                {patientData.map((patient, index) => (
                  <PatientCard
                    key={index}
                    name={patient.name}
                    age={patient.age}
                    gender={patient.gender}
                    date={patient.date}
                    onViewReport={() => setSelectedReport(patient.report)}
                  />
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>

        {selectedReport && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={30} className="h-full">
              <div className="flex flex-col h-full">
                <div className="sticky top-0 z-10 bg-background px-6 py-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-primary">
                    Report
                  </h2>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setSelectedReport(null)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <ReportSection report={selectedReport} />
                </div>
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
}

export default PatientsSection;
