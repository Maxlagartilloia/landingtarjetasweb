const fetch = require('node-fetch');

const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/ot4ivqg5y3ni6l04lwcvchh2iubgzjqj';

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { mensaje } = JSON.parse(event.body);

    const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensaje: mensaje })
    });

    const botReply = await makeResponse.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reply: botReply })
    };

  } catch (error) {
    console.error('Error en la función de Netlify:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: 'Lo siento, el asistente no está disponible en este momento.' })
    };
  }
};
