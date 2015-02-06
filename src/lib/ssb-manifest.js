module.exports = {
  // protocol
  auth: 'async',

  // output streams
  createFeedStream: 'source',
  createHistoryStream: 'source',
  createLogStream: 'source',
  messagesByType: 'source',
  messagesLinkedToMessage: 'source',
  messagesLinkedToFeed: 'source',
  messagesLinkedFromFeed: 'source',
  feedsLinkedToFeed: 'source',
  feedsLinkedFromFeed: 'source',
  followedUsers: 'source',

  // getters
  get: 'async',
  getPublicKey: 'async',
  getLatest: 'async',
  whoami: 'async',
  getLocal: 'async',
  relatedMessages: 'async',

  // publishers
  add: 'async',

  // plugins
  invite: {
    addMe: 'async'
  },
  gossip: {
    peers: 'sync',
    connect: 'async'
  },
  friends: {
    all: 'sync',
    hops: 'sync'
  },
  blobs: {
    get: 'source',
    has: 'async',
    add: 'sink',
    ls: 'source',
    want: 'async'
  }
}
