interface ReportSectionProps {
  patient: {
    name: string;
    age: number;
    gender: string;
    date: string;
    report: string;
  };
}

function ReportSection({ patient }: ReportSectionProps) {
  return (
    <div className="p-6 text-sm leading-relaxed text-muted-foreground h-full space-y-4">
      <div className="space-y-1">
        <p className="text-lg font-semibold text-foreground">{patient.name}</p>
        <div className="flex gap-4 text-muted-foreground text-sm">
          <span>Age: {patient.age}</span>
          <span>Gender: {patient.gender}</span>
          <span>Date: {patient.date}</span>
        </div>
      </div>
      <hr className="border-border" />
      <div>
        <p className="text-base leading-relaxed">{patient.report}</p>
      </div>
    </div>
  );
}

export default ReportSection;
