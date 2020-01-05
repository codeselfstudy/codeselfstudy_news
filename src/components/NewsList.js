import React, { useState, useEffect } from "react";
import axios from "axios";

import { FORUM_BASE_URL, makeTopicUrl, formatSubmitDate } from "../helpers";
import NewsListItem from "./NewsListItem";

export default function NewsList() {
    const [newsItems, setNewsItems] = useState([]);
    useEffect(() => {
        axios.get(`${FORUM_BASE_URL}/latest.json`).then(res => {
            console.log("res", res);
            setNewsItems(res.data.topic_list.topics);
        });
    }, []);
    return (
        <div>
            {newsItems.map(i => (
                <NewsListItem
                    key={i.id}
                    title={i.title}
                    url={makeTopicUrl(i)}
                    likeCount={i.like_count}
                    submittedAt={formatSubmitDate(i.created_at)}
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
