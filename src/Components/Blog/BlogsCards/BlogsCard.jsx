import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "./BlogsCard.scss";
import { useLocation } from "react-router";
import { getAllBlog } from "../../../services/blogsServices";
import Loader from '../../Shared/Loader/Loader';

const BlogsCard = () => {
  const [blog, setBlog] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchData = async () => {
    let val = await getAllBlog();
    setBlog(val);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const websitePrefix = "https://kiit-alumni-portal.netlify.app";
  const location = useLocation();
  const copyLink = (id) => {
    let link = websitePrefix + location.pathname + "/" + id;
    navigator.clipboard.writeText(link);
    toast({
      description: <p>Link Copied to Clipboard</p>,
    });
  };
  
  const renderNews = (obj) => {
    return (
      <div className="news-block">
        <div className="share-news-div">
          <Popup
            content="Copy Link"
            trigger={
              <img
                className="share-news-btn"
                src={"asset/svg/share.svg"}
                onClick={() => {
                  copyLink(obj.id);
                }}
                alt=""
              />
            }
          />
        </div>
        <div className="news">
          <div className="news-text eq-h">
            <Link to={`${location.pathname}/${obj.id}`} className="news-link">
              <p className="news-head">{obj.heading}</p>
            </Link>
            <p className="news-body">{(obj.body.length > 245) ? obj.body.substring(0,245) + "..." : obj.body}</p>
          </div>
          <div className="news-image-div eq-h">
            <img src={obj.img} alt="sample-news.png" className="news-image" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading &&
        <div className="all-news-info">
            <div className="news-header-div">
              <div className="admin-news-heading">
                <p>Blogs</p>
              </div>
            </div>
          <SemanticToastContainer />
          {blog.map((obj, index) => (
            <div key={index}>{renderNews(obj)}</div>
          ))}
        </div>
      }
    </div>
  );
};

export default BlogsCard;
