import NewsList from "./NewsList";
import "./css/News.css";

const News = () => {
  return (
    <section className="news">
      <h1>뉴스</h1>
      <div className="newscon">
        <NewsList />
      </div>
    </section>
  );
};

export default News;
