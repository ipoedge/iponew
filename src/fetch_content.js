const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function fetchContent() {
    try {
        const external_url = 'https://www.chittorgarh.com/ipo/tata_steel_fpo/292';
        const response = await axios.get(external_url);
        const dom = new JSDOM(response.data);
        const element = dom.window.document.getElementById('accordionExample');
        return element ? element.outerHTML : 'Element not found';
    } catch (error) {
        console.error('Error fetching the external URL:', error);
        throw error;
    }
}

module.exports = fetchContent;
