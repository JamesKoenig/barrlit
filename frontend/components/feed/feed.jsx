import React, {
  useEffect
} from 'react';

import FeedItem from './feed_item';

export default ({ feedItems, logout, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, []);
  return (
  <div id="feed">
    <ul id="feed-index">
      {feedItems.map( (feedItem,idx) => (
        <FeedItem key={`feed-${idx}`} {...feedItem} />
      ))}
    </ul>
  </div>
)}
