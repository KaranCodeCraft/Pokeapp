// app/(pokemon)/[id]/loading.js
export default function Loading() {
    return (
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="w-full p-3 pl-10 rounded-lg border border-gray-300 bg-gray-200 animate-pulse h-12"></div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="h-8 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex justify-center my-6">
              <div className="w-48 h-48 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div className="mt-6">
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4">
                    <div className="bg-gray-300 h-4 rounded-full w-1/2"></div>
                  </div>
                  <div className="w-10 h-4 bg-gray-200 rounded animate-pulse ml-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }