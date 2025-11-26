const HomePage = () => {
    return ( <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Home</h1>
      
      {/* Tabs */}
      <div className="flex border-b border-border mb-4">
        <button className="px-4 py-3 font-medium border-b-2 border-primary">
          For You
        </button>
        <button className="px-4 py-3 font-medium text-muted-foreground hover:text-foreground">
          Following
        </button>
      </div>
      
      {/* Posts */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border border-border rounded-lg p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="flex-1">
                <p className="font-medium">User {i}</p>
                <p className="text-sm text-muted-foreground">@user{i}</p>
                <p className="mt-2">This is a sample post content...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage