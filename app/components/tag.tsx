export default function Tag({ title }: { title: string }) {
  return (
    <div className="bg-cards w-fit rounded-xl py-1 px-2 h-fit">
      <p className="text-xs font-semibold uppercase">{title}</p>
    </div>
  );
}
