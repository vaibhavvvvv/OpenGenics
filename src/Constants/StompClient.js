import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

const stompClient = Stomp.over(new SockJS('http://52.64.52.32:9005/ws'));

let isStompConnected = false;

stompClient.connect({}, () => {
  console.log('Stomp client connected');
  isStompConnected = true; // Set the flag to indicate that the connection is ready
}, (error) => {
  console.error('Error connecting to Stomp:', error);
});

export { stompClient, isStompConnected };
