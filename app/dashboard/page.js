import { Calendar } from "@/components/ui/calendar"
import { FocusCards } from '@/components/ui/focus-cards';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'; 
import { League_Spartan } from 'next/font/google';
import Link from 'next/link';

export const metadata = {
  title: "ZEN ⋅ Dashboard"
};

const leagueSpartan = League_Spartan({
  subsets: ["latin"]
})

export default async function Dashboard() {
  const { userId } = await auth();
  const details = {
    'Days': 14,
    'Time': '13:14:26',
    'Date': (new Date()).toDateString()  
  };

  const cards = [
    {
      emoji: "🤩",
      title: "Thrilled, enthusiastic, or overjoyed",
      def : "Excited"
    },
    {
      emoji: "😊",
      title: "Joyful, content, or positive",
      def : "Happy"
    },
    {
      emoji: "😐",
      title: "Indifferent, calm, or balanced",
      def : "Neutral"
    },
    {
      emoji: "😔",
      title: "Down, disappointed, or low energy",
      def : "Sad"
    },
    {
      emoji: "😡",
      title: "Frustrated, annoyed, or upset",
      def : "Angry"
    },
    {
      emoji: "😰",
      title: "Nervous, stressed, or uneasy",
      def : "Anxious"
    },
  ];

  return (
    <div className="flex flex-col flex-1 gap-10 sm:gap-14 md:gap-20 rounded-lg">
      {/* Details Section */}
      <div className="bg-[#edf8e8] opacity-80 text-green-800 grid grid-cols-1 sm:grid-cols-3 mt-5 text-center rounded-xl shadow-md">
        {Object.keys(details).map((detail, detailIndex) => (
          <div
            key={detailIndex}
            className={`${leagueSpartan.className} p-4 flex flex-col gap-2`}
          >
            <p className="font-medium uppercase text-xs sm:text-sm text-green-600">
              {detail.replaceAll("_", " ")}
            </p>
            <p className="text-xl font-semibold">{details[detail]}</p>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className=" rounded-xl min-h-screen flex flex-col items-center shadow-lg bg-[#edf8e8] opacity-80 py-10">
        <TextShimmer
          duration={3}
          className='text-4xl font-bold text-center mb-20 [--base-color:theme(colors.green.600)] [--base-gradient-color:theme(colors.green.200)] dark:[--base-color:theme(colors.green.700)] dark:[--base-gradient-color:theme(colors.green.400)]'
        >
          How are you <span className="textGradient">feeling</span> today?
        </TextShimmer>
        <div className="flex space-x-20">

          <div className="mt-20 mb-14 border-2 border-[#b4d4a7] rounded-xl bg-transparent hover:border-[#87a37a] transition-all duration-300">
            <Calendar />
          </div>
        
         <FocusCards cards={cards} />

        </div>

      </div>
    </div>
  );
}
