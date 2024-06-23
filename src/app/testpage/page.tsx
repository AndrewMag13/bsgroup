'use client'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextPage } from 'next'

const queryCLient = new QueryClient()

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const TestPage: NextPage = () => {
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </>
  )
}

const App: NextPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getData,
  })
  return (
    <>
      <div
        style={{
          width: 'clamp(300px,50%,1000px)',
          backgroundColor: 'red',
        }}
      >
        box1
      </div>
      <div>box2</div>
      <div>
        {isLoading
          ? 'loading....'
          : data
          ? data.map((post) => <div key={post.id}>{post.title}</div>)
          : 'error'}
      </div>
    </>
  )
}

export default TestPage
