const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

*COMPRAR BOT OPTIMUS*

*━━━━━━━━━━━━━⬣*
*✅ METODO DIAMANTES*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*200 DIAMANTES 1 GRUPO 💎*
*700 DIAMANTES PERMANENTE 💎*
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
*✅ METODO PERU BOT PROPIO*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*YAPE 1 :* 926 933 818 , Luis Alberto , 25 SOLES PROPIO
*YAPE 2 :* 976 336 831 , Mary Luz , 25 SOLES PROPIO
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
*✅ METODO PERU BOT GRUPO*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*YAPE 1 :* 926 933 818 , Luis Alberto , 5 SOLES 1 GRUPO
*YAPE 2 :* 976 336 831 , Mary Luz , 5 SOLES 1 GRUPOº
*━━━━━━━━━━━━━⬣*`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/optimus.ventas.bot`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/optimus.ventas.bot',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.xnxx.com/video-18h2gv53/bully_se_equivoco_con_el_padrastro_equivocado_porque_me_acabo_de_follar_a_su_madrastra'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;
