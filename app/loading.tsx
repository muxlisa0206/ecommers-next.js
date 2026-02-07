const Loading = () => {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          {/* Spinner */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          {/* Logo yoki matn */}
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 uppercase tracking-tight">
            SHOP.CO
          </h2>
          
          <p className="text-gray-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  };
  
  export default Loading;