function PostItem(props: any) {
  const post = props.post;

  return (
    <div
      key={post.id}
      className='border-b border-gray-300 p-4 bg-green-100 hover:bg-green-50'
    >
      <h1 className='text-xl font-bold mb-2'>{post.id}</h1>

      <p className='text-gray-700'>{post.content}</p>

      <h2>Medialinks</h2>
      {post.medialinks.map((medialink: any) => (
        <>
          <div>
            <p>{medialink.source}</p>
            <a href={medialink.url}>{medialink.url}</a>
            <iframe width='500' height='200' src={medialink.url}></iframe>
          </div>
        </>
      ))}

      <h2>Kommentare</h2>
      {post.comments.map((comment: any) => (
        <>
          <div>
            <p>{comment.content}</p>
          </div>
        </>
      ))}
    </div>
  );
}
export default PostItem;
