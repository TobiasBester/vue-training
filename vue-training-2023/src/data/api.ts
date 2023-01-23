export type FeedChirp = {
  content: string,
  author: string,
  replies: ChirpReply[]
}

export type ChirpReply = { id: number, content: string }


// Pretend we're fetching chirps from our backend
export const fetchChirps = () => {
  return [
    {
      content: 'The CEO of Chirper is cooking these days. the app is bussin\' fr 😮',
      author: 'ChirpLover421',
      replies: [{
        id: 1,
        content: 'TRRRUUUUUE'
      }]
    },
    {
      content: 'Anyone else get a visit from the hatman last night? 🤔',
      author: 'RegularMan',
      replies: [{
        id: 1,
        content: 'The who?????'
      }, {
        id: 2,
        content: 'Nope 😊'
      }]
    },
    {
      content: 'You\'re a sick person if you want Arsenal to win the league this season',
      author: 'Loserpool4eva',
      replies: [{
        id: 1,
        content: '😷🤧😷🤧🤒'
      },{
        id: 2,
        content: 'I\'m in hospital dying'
      },{
        id: 3,
        content: '😷😷🤒🤮'
      },{
        id: 4,
        content: '*cough* *sneeze* *sneeze*'
      }]
    },
  ]
}

export const createNewChirp = (content: string, author = 'Chirper51') => {
  return {
    content,
    author,
    replies: []
  }
}
