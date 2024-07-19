const LoadingPage = () => {
  return (
    <>
      <section className="bg-funded w-screen h-screen flex justify-center items-center gap-5">
        <div
          className="w-12 h-12 rounded-full animate-spin border-y border-solid border-cyan-500 border-t-transparent shadow-md">
        </div>
        <span className="text-4xl font-medium text-gray-500">Loading...</span>
      </section>
    </>
  )

}
export default LoadingPage