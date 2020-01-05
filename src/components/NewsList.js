import React, { useState, useEffect } from "react";
import axios from "axios";

import {
    FORUM_BASE_URL,
    makeTopicUrl,
    formatSubmitDate,
    latestTopicsToNewsItems,
    calculateTopicScore,
} from "../helpers";
import NewsListItem from "./NewsListItem";
import "../../node_modules/text-spinners/spinners.scss";

export default function NewsList() {
    const [newsItems, setNewsItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`${FORUM_BASE_URL}/latest.json`).then(res => {
            console.log("res", res);
            const topics = latestTopicsToNewsItems(res.data);
            setNewsItems(topics);
            setIsLoading(false);
        });
    }, []);
    return (
        <div>
            {isLoading ? (
                <div
                    style={{ fontSize: "2rem", color: "#666" }}
                    className="loading dots"
                ></div>
            ) : (
                <></>
            )}
            {newsItems.map(i => (
                <NewsListItem
                    key={i.id}
                    title={i.title}
                    url={makeTopicUrl(i)}
                    likeCount={calculateTopicScore(i)}
                    submittedAt={formatSubmitDate(i.created_at)}
                    author={i.author}
                />
            ))}

            <div>
                <p>
                    <a href={FORUM_BASE_URL}>Read more&hellip;</a>
                </p>
            </div>
        </div>
    );
}
