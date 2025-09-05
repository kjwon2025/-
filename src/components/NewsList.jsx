import { useState, useEffect } from "react";
import axios from "axios";

import NewsItem from "./NewsItem";
import "./css/NewsList.css";

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // 오늘 날짜에서 7일 전을 from으로 설정
        const today = new Date();
        const fromDate = new Date();
        fromDate.setDate(today.getDate() - 7);

        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "꽃 OR 화초 OR 정원 OR 화환 OR 화분 NOT 한국 NOT 세팅 NOT 신라 NOT 밥상 NOT 델리 NOT 승소 NOT 그리다 NOT 담배 NOT 25일 NOT 망한 NOT 병적 NOT 빌딩 NOT 경쟁작",
            language: "ko",
            sortBy: "publishedAt",
            from: fromDate.toISOString().split("T")[0], // 자동 계산된 최근 7일
            apiKey: "b8415d81936346988939b6b0d589fe21",
          },
        });

        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="news-list-block">대기중...</div>;
  }

  if (!articles) {
    return null;
  }

  return (
    <div className="news-list-block">
      {articles.slice(0, 4).map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
