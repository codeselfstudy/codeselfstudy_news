import React from "react";
import "./NewsListItem.scss";

export default function NewsListItem({
    title,
    url,
    submittedAt,
    likeCount,
    author,
}) {
    return (
        <div className="news-list-item">
            <h2>
                <span className="likes">
                    <a
                        className="like"
                        title="visit page to cast your vote"
                        href={url}
                    >
                        ▲
                    </a>
                    {likeCount}
                </span>{" "}
                <a href={url}>{title}</a>
            </h2>
            <div className="metadata">
                submitted by {author} on {submittedAt}
            </div>
        </div>
    );
}
