// This module contains helper functions.
import * as R from "ramda";

/**
 * At the moment, the score is the number of likes plus the number of
 posts.
 */
export function calculateTopicScore(topic) {
    return topic.posts_count + topic.like_count;
}

export const FORUM_BASE_URL = "https://forum.codeselfstudy.com";

export function makeTopicUrl(topicObject) {
    return `${FORUM_BASE_URL}/t/${topicObject.slug}/${topicObject.id}`;
}

export function formatSubmitDate(d) {
    return new Date(d).toLocaleDateString();
}

/**
 * Match the user with the topics so the usernames can be displayed.
 */
export function latestTopicsToNewsItems(discourseLatestTopicsJson) {
    const users = discourseLatestTopicsJson.users;
    const topics = discourseLatestTopicsJson.topic_list.topics.map(t => {
        const authorId = t.posters.filter(p => {
            return (
                p.description
                    .split(",")
                    .map(term => term.trim())
                    .indexOf("Original Poster") > -1
            );
        })[0].user_id;
        console.log("authorId", authorId);

        const author = R.find(R.propEq("id", authorId), users).username;

        return Object.assign(t, { author });
    });

    console.log("topics", topics);
    return topics;
}
