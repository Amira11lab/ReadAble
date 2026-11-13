let items = [
  {
    id: 1,
    title: "Reading Practice",
    description: "Read one chapter of a book.",
    category: "Reading",
    status: "Pending",
    date: "2026-11-10"
  },
  {
    id: 2,
    title: "English Writing",
    description: "Write five sentences in English.",
    category: "Writing",
    status: "Completed",
    date: "2026-11-12"
  },
  {
    id: 3,
    title: "Vocabulary Practice",
    description: "Learn ten new English words.",
    category: "English",
    status: "Pending",
    date: "2026-11-15"
  }
];

function getItems() {
  return items;
}

function addItem(taskData) {
  const newItem = {
    ...taskData,
    id: Date.now()
  };

  items.push(newItem);
  return newItem;
}

function updateItem(id, taskData) {
  const index = items.findIndex(
    item => Number(item.id) === Number(id)
  );

  if (index === -1) {
    return null;
  }

  items[index] = {
    ...taskData,
    id: Number(id)
  };

  return items[index];
}

function deleteItem(id) {
  const index = items.findIndex(
    item => Number(item.id) === Number(id)
  );

  if (index === -1) {
    return false;
  }

  items.splice(index, 1);
  return true;
}

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem
};