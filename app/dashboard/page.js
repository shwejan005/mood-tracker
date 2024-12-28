import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'; // Correct import for server-side authentication
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
    'Days' : 14,
    'Time' : '13:14:26',
    'Date' : (new Date()).toDateString()  
  }

  // if (!userId) {
  //   // If the user is not logged in, show the link to go back to the home page
  //   return (
  //     <div>
  //       <Link href="/">
  //         Not Logged In... Back to Home Page
  //       </Link>
  //     </div>
  //   );
  // }

  // If the user is logged in, render the dashboard content
  return (
    <div className="flex flex-col flex-1 gap-10 sm:gap-14 md:gap-20">
      <div className="bg-[#87ac86] grid grid-cols-1 sm:grid-cols-3 text-[#dcfcda] text-center rounded-xl">
        {Object.keys(details).map((detail, detailIndex) => (
          <div
            key={detailIndex}
            className={`${leagueSpartan.className} p-4 flex flex-col gap-2`}
          >
            <p className="font-medium uppercase text-xs sm:text-sm">
              {detail.replaceAll("_", " ")}
            </p>
            <p className="text-base sm:text-lg">{details[detail]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
