// This module contains helper functions.

export const FORUM_BASE_URL = "https://forum.codeselfstudy.com";

export function makeTopicUrl(topicObject) {
    return `${FORUM_BASE_URL}/t/${topicObject.slug}/${topicObject.id}`;
}

export function formatSubmitDate(d) {
    return new Date(d).toLocaleDateString();
}

export function latestTopicsToNewsItems(latestTopicsJson) {
    const topics = latestTopicsJson.topic_list.topics.map(t => {
        const originalPoster = t.posters.filter(p => {
            return (
                p.description
                    .split(",")
                    .map(term => term.trim())
                    .indexOf("Original Poster") > -1
            );
        })[0];
        return Object.assign(t, originalPoster);
    });

    console.log("topics", topics);
    return topics;
}
