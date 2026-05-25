export default function LoadingSpinner({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-[#2563EB] animate-spin" />
        <p className="text-gray-400 mt-4 text-sm">{text}</p>
      </div>
    </div>
  );
}
