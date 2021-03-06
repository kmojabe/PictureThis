export const selectGroup = ({ groups }, groupId) => {
  return groups[groupId];
};

export const selectUser = ({ users }, userId) => {
  return users[userId];
};
export const selectEvent = ({ events }, eventId) => {
  return events[eventId];
};
export const selectEventAttendees = ({ eventAttendees }, eventId) => {
  let arrUsers = []
  Object.keys(eventAttendees).forEach(function(key){
    if (eventAttendees[key].event_id == eventId){
      arrUsers.push(eventAttendees[key].user_id);
    }
  });
  return arrUsers;
};
// export const selectReviewsForBench = ({ groups, reviews }, bench) => {
//   return bench.reviewIds.map(reviewId => reviews[reviewId]);
// };
export const asArray = ({ groups }) => (
  Object.keys(groups).map(key => groups[key])
);
