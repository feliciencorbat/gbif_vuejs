import axios from "axios";

const baseUrl = 'https://api.champis.net/v1';
async function getTopicsList() {
    let topicsList;
    const response = await axios.get(baseUrl+'/topics');
    topicsList = response.data
    return topicsList;
}

export { getTopicsList };