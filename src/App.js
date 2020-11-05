import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import users from './users';
import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');


const user = users[Math.floor(Math.random() * users.length)];
const userToken = user.userToken;

console.log(user);

chatClient.setUser(
    user,
    userToken,
);

const filters = { type: 'messaging', members: { $in: ['old-morning-4'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

// const conversation = chatClient.channel('messaging', 'Tenet-ftv', {
//   name: 'Tenet',
//   image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
//   members: [users[1].id, users[2].id],
// });

// conversation.create();

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App; 