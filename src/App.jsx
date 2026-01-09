import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Products</h1>

        {loading && (
          <div className="text-center py-20">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-2 border-red-300 p-8 rounded-xl mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Oops! Something went wrong</h2>
            <p className="text-lg text-red-700 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && data && (
          <section className="text-gray-600 body-font">
            <div className="flex flex-wrap -m-4 border">
                {data.map((product) => (

                  <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-2xl">

                    {product.images && product.images[0]  ? (
                      <div className='block relative h-48 rounded overflow-hidden'>
                        <img className="object-cover object-center w-full h-full block" src={product.images[0]} alt={product.title || "Product image"} />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 text-sm font-medium">No photo available</span>
                      </div>
                    )}


                    <div className="mt-4">
                      <p className="mt-1">₹{product.price}</p>



                      {product.category && (
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category.name}</h3>
                      )}
                    </div>



                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>



                ))}
              </div>
            
          </section>
        )}


      </div>
    </div>
  );
}

export default App;
