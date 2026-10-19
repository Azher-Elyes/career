import { cn } from '@/lib/utils';

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase md:text-xs',
        className
      )}
    >
      {number && (
        <>
          <span className="text-silver">{number}</span>
          <span className="h-px w-8 bg-border" />
        </>
      )}
      <span className="text-text-muted">{label}</span>
    </div>
  );
}