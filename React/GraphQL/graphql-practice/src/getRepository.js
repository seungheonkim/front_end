import {graphql} from "@octokit/graphql";

const token = process.env.REACT_APP_GITHUB_AGORA_STATES_TOKEN;

async function getRepository() {
    const {repository, viewer} = await graphql(
        `
        query Repository($name: String = "agora-states-fe", $owner: String = "codestates-seb", $num: Int = 100) {
            repository(owner: $owner, name: $name) {
                discussionCategories(first: $num) {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
                discussions(first: $num) {
                    edges {
                        node {
                            category {
                                name
                            }
                            author {
                                login
                                avatarUrl
                            }
                            createdAt
                            title
                            id
                            updatedAt
                            bodyHTML
                            url
                            answer {
                                author {
                                    login
                                    avatarUrl
                                }
                                bodyHTML
                                createdAt
                                id
                            }
                        }
                    }
                }
            },
            viewer {
                login
                avatarUrl
            }
        }
        `,
        {
            headers: {
                authorization: `token ${token}`,
            }
        }
    );

    return {repository, viewer};
}

export default getRepository;