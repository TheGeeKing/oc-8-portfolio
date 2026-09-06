export const Section = ({ title }: { title: string }) => {
  return (
    <div className="mt-20 mb-2 border-white/10 border-t pt-6">
      <h2 className="font-semibold text-3xl tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};
