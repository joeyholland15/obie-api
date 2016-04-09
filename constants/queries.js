module.exports = {
  
  messages: {
    get: "SELECT users.name, users.user_image_url, messages.text, DATE_FORMAT(messages.time,'%W, %M %e, %Y %h:%i %p') AS time FROM messages LEFT OUTER JOIN users ON (messages.user_id=users.id) WHERE messages.house_id=? AND is_landlord_chat=0 ORDER BY messages.time DESC LIMIT 50"
  },

  chores: {
    get: "SELECT users.name, chores.id, chores.name as chorename, chores.category, chores.completed, chores.due_date, chores.house_id from chores LEFT OUTER JOIN users ON (chores.user_id = users.id) WHERE Chores.house_id=? and completed=0 ORDER BY chores.due_date"
  }

}