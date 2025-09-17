import { useState } from "react";
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
    <div>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-6">Patients</h1>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </ResizablePanel>

          {selectedReport && (
            <>
              <ResizableHandle />
              <ResizablePanel defaultSize={30}>
                <ReportSection report={selectedReport} />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export default PatientsSection;
