FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Alinshan/Chandrappan /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN git clone https://github.com/Alinshan/uploads
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
