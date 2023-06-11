import '../components/css/Card.css'; // Import the CSS file for the component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

const Card = ({ postId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:6950/posts/all');
        console.log(response.data);
        // const postsWithImages = await Promise.all(response.data.map(async (post) => {
        //   // const imageResponse = await axios.get(`http://localhost:6950/posts/image/${post.id}`, { responseType: 'arraybuffer' });
        //   const base64Image = Buffer.from(response.data, 'binary').toString('base64');
        //   post.image = `data:${response.headers['content-type']};base64,${base64Image}`;
        //   return post;
        // }));
        // setPosts(postsWithImages);
        // console.log(postsWithImages);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [postId]);

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-image">

            {post.image != undefined &&  <img src={'http://localhost:6950/posts/image/' + post.image} alt={post.title} />}
            </div>
            <div className="card-content">
              <h2>{post.title}</h2>
              <p className="subtitle">{post.subtitle}</p>
              <div className="meta">
                <span className="category">{post.category}</span>
                <br/>
                {/* <span className="user">By {post.User}</span> */}
              </div>
              {post.body && typeof post.body === 'string' && (
                <p className="excerpt">
                  {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
                </p>
              )}
              {/* <Link to={`/posts/${post.id}`} className="btn read-more">
                Read More
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Card;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from "react-router-dom";

// const Card = ({postId}) => {     
// 	const [post, setPost] = useState(null);



//   useEffect(() => {
//     const fetchPost = async () => {

//         try {
//           const response = await axios.get(`http://localhost:6950/posts/all`);
//           console.log(response.data);
//           setPost(response.data);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//     fetchPost();
//   }, [postId]);

  

//   return (
//     <>
//         <div className="conta">
//             <div className="ro">
//             {/* {post.map((post) => (
//             <h2 key={post.id}>{post.title}</h2>
//           ))} */}
//                 {post.map((post)=>{
//                     return(
//                         <div className="part1">
//                             <p>{post.title}</p>
//                             <p >{post.subtitle}</p>
//                             <h2> {post.category}</h2>
//                             <h2> {post.User}</h2>
//                             <h2> {post.body}</h2>

//                         </div>

//                     )
//                 })}
//             </div>
//         </div>
//     </>
//   );
// };

// export default Card;


// // <div className="container">
// //           <div className="row">
// //             {article.map((value) => {
// //               return (
// //                 <div className="col-md-4" key={value.url}>
// //                   <NewsItems
// //                     title={value.title ? value.title.slice(0, 44) : ""}
// //                     description={
// //                       value.description ? value.description.slice(0, 88) : ""
// //                     }
// //                     imgUrl={
// //                       value.urlToImage
// //                         ? value.urlToImage
// //                         : "https://searchengineland.com/wp-content/seloads/2018/03/machine-learning-AI-dark-blue-ss-1920.jpg"
// //                     }
// //                     newsUrl={value.url}
// //                     author={value.author ? value.author : "Anonmyous"}
// //                     date={value.publishedAt}
// //                   />
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>