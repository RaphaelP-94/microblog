import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Blog Dashboard</h1>
      
      <div className="grid gap-6">
        <Link 
          href="/create" 
          className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium text-center"
        >
          Create New Post
        </Link>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/dashboard/published"
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2">My Published Posts</h2>
            <p className="text-gray-600">View and manage your published content</p>
          </Link>
          
          <Link 
            href="/dashboard/drafts"
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <h2 className="text-xl font-semibold mb-2">My Drafts</h2>
            <p className="text-gray-600">Continue working on your drafts</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
