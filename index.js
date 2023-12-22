const axios=require('axios');
//const url='https://medium.com/@dr-bartosz-jaworski';
const url='https://www.instagram.com/artcartbydiksha/'; 

const { getLinkPreview } = require('link-preview-js');

async function fetchPreview() {
  try {
    const previewData = await getLinkPreview(url,{headers:{"user-agent":"googlebot"}});
    console.debug(previewData);
  } catch (error) {
    console.error('Error fetching preview:', error);
  }
}

fetchPreview();