export const Section = ({ title }: { title: string }) => {
  return (
    <div className="mb-2 mt-20 border-t border-white/10 pt-6">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};
