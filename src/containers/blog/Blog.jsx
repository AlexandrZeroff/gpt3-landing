import React, { useState, useEffect} from 'react';

const Blog = () => {
  var api_key = '0dafa2d75847482d9fb6249925ec8c38'

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /* useEffect(() => {
    async function getData() {
      await fetch(
        `https://newsapi.org/v2/everything?q=+GPT-3&apiKey=${api_key}`,
      )
        .then((response) => response.json())
        .then(setData)
        .catch((err) => setError(err.message))

      setLoading(false)

      //console.log(data)
    }
    getData()
  }, []) */

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=+GPT-3&apiKey=${api_key}`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      } 
    }
    getData()
  }, [])

  const Post = ({ author, date, title, url, image, className = '' }) => {
    return (
      <div className="max-w-[420px] mx-auto grid grid-rows-[auto_1fr] gap-0">
        <div className="h-1/2">
          <a href={url}>
            <img
              src={image}
              alt="Pic"
            />
          </a>
        </div>
        <div className="bg-[#042C54] py-6 px-4 flex flex-col">
          <p className="text-white text-xs font-semibold">
            {new Date(date).toLocaleString().slice(0, -3)}
          </p>
          <h3 className="text-white leading-[35px] my-4">{title}</h3>
          <p className="text-base text-white leading-[25px] mb-4">
            by {author === '' | !author ? 'Unknown author' : author}
          </p>
          <p className="text-white text-xs font-semibold mt-auto">
            <a href={url}>Read full article</a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto" id='blog'>
      <div className="gpt3__blog px-8">
        <h1 className="gradient__text my-16 max-w-2xl">
          A lot is happening, We are blogging about it.
        </h1>
        {loading && <div className="text-white">Loading news...</div>}
        {error && <div className="text-white">{error}</div>}
        <div className="gpt3__blog-container my-24 grid auto-rows-max gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.articles?.map((post, i) => (
                <Post
                  key={i}
                  author={post.author}
                  date={post.publishedAt}
                  title={post.title}
                  url={post.url}
                  image={post.urlToImage}
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
