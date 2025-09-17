interface ReportSectionProps {
  report: string;
}

function ReportSection({ report }: ReportSectionProps) {
  return (
    <div className="p-6 text-sm leading-relaxed text-muted-foreground">
      <h2 className="text-lg font-semibold mb-4 text-primary">Report</h2>
      <p>{report}</p>
    </div>
  );
}

export default ReportSection;
