// This module contains helper functions.
//
// TODO: wire up the submit link in the menu
// http://discourse.example.com/new-topic?title=topic%20title&body=topic%20body&category=category/subcategory&tags=email,planned

export const FORUM_BASE_URL = "https://forum.codeselfstudy.com";

export function makeTopicUrl(topicObject) {
    return `${FORUM_BASE_URL}/t/${topicObject.slug}/${topicObject.id}`;
}

export function formatSubmitDate(d) {
    return new Date(d).toLocaleDateString();
}

export function latestTopicsToNewsItems(latestTopicsJson) {

    const topics = latestTopicsJson.topic_list.topics;
    const isAuthenticated = latestTopicsJson.topic_list.can_create_topic;

    return {
        // TODO: do we need the current user's info? Maybe auth status is enough.
        // currentUser: "",
        isAuthenticated: isAuthenticated,
        topics: topics,
    };
}
