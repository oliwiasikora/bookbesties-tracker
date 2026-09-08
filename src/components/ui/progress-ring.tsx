type ProgressRingProps = { value: number };

export function ProgressRing({ value }: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return <div className="grid size-28 place-items-center rounded-full" style={{ background: `conic-gradient(#7A1038 ${clamped}%, #F6EAD6 ${clamped}% 100%)` }} aria-label={`${clamped}% celu`}><div className="grid size-20 place-items-center rounded-full bg-paper"><span className="font-serif text-3xl text-burgundy">{clamped}%</span></div></div>;
}
