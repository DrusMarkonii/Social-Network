const state = {
  profilePage: {
    postsData: [
      {
        id: 1,
        username: 'Drus Markoni',
        message: 'Welcome to AruSNet with Drus',
        likesCount: 6,
      },
      {
        id: 2,
        username: 'Jane Pokr',
        message: 'Welcome to AruSNet with Jane',
        likesCount: 3,
      },
      {
        id: 3,
        username: 'Romale',
        message: 'Welcome to AruSNet with Romale',
        likesCount: 1,
      },
    ],
  },
  messagesPage: {
    messagesData: [
      { id: 1, message: 'Ok. buy!' },
      { id: 2, message: 'What are you doing?' },
      { id: 3, message: 'how are you?' },
      { id: 4, message: 'Hello' },
    ],
    dialogsData: [
      { id: 1, username: 'Drus' },
      { id: 2, username: 'Rob' },
      { id: 3, username: 'Bob' },
      { id: 4, username: 'Jon' },
    ],
  },
  friendsPage: {
    friendsData: [
      { id: 1, username: 'Jane' },
      { id: 2, username: 'Bob' },
      { id: 3, username: 'James' },
      { id: 4, username: 'Andrei' },
      { id: 5, username: 'Rob' },
      { id: 6, username: 'Adam' },
    ],
  },
};

// export const addPost = (postMessage: string) => {
//   const newPost = {
//     id: 4,
//     username: 'Drus Markoni',
//     message: postMessage,
//     likesCount: 0,
//   };
//   state.profilePage.postsData.push(newPost);
// };

const store = {
  state,
  getState() {
    return this.state;
  },
  addPost(postMessage: string) {
    const newPost = {
      id: 4,
      username: 'Drus Markoni',
      message: postMessage,
      likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
  },
};

export default store;
