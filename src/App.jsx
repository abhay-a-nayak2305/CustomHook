import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">Loading...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg text-center max-w-2xl mx-auto my-8">
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 ml-2"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map(product => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[...Array(3)].map((_, index) => {
                    const imageUrl = product.images?.[index];
                    return (
                      <div key={index} className="h-24 rounded-md overflow-hidden bg-gray-200">
                        {imageUrl ? (
                          <img 
                            src={imageUrl}
                            alt={`${product.title} image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 bg-gray-100">
                            No Image
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    ${product.price}
                  </span>
                  {product.category && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium">
                      {product.category.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
