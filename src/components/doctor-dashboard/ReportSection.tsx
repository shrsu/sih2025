interface ReportSectionProps {
  report: string;
}

function ReportSection({ report }: ReportSectionProps) {
  return (
    <div className="p-6 text-sm leading-relaxed text-muted-foreground h-full">
      <p>{report}</p>
    </div>
  );
}

export default ReportSection;
