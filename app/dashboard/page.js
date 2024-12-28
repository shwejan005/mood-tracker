import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'; // Correct import for server-side authentication
import Link from 'next/link';

export const metadata = {
  title: "ZEN ⋅ Dashboard"
};

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    // If the user is not logged in, show the link to go back to the home page
    return (
      <div>
        <Link href="/">
          Not Logged In... Back to Home Page
        </Link>
      </div>
    );
  }

  // If the user is logged in, render the dashboard content
  return (
    <div>
      {/* Render the dashboard content here */}
      <UserButton />
    </div>
  );
}
