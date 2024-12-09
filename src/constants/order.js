const ORDER_STATUS_ID = {
  SUBMITTED: 1,
  IN_PROGRESS: 2,
  READY_FOR_PICK_UP: 3,
  COMPLETED: 4,
  CANCELLED: 5,
  UNPAID: 8,
};

const ORDER_STATUS_ID_TO_TEXT = {
  [ORDER_STATUS_ID.SUBMITTED]: "Submitted",
  [ORDER_STATUS_ID.IN_PROGRESS]: "In Progress",
  [ORDER_STATUS_ID.READY_FOR_PICK_UP]: "Ready for pickup",
  [ORDER_STATUS_ID.COMPLETED]: "Completed",
  [ORDER_STATUS_ID.CANCELLED]: "Cancelled",
  [ORDER_STATUS_ID.UNPAID]: "Unpaid",
};

const ORDER_STATUS_ID_TO_COLOR = {
  [ORDER_STATUS_ID.SUBMITTED]: "bg-gray-500",
  [ORDER_STATUS_ID.IN_PROGRESS]: "bg-blue-500",
  [ORDER_STATUS_ID.READY_FOR_PICK_UP]: "bg-teal-500",
  [ORDER_STATUS_ID.COMPLETED]: "bg-green-500",
  [ORDER_STATUS_ID.CANCELLED]: "bg-red-500",
  [ORDER_STATUS_ID.UNPAID]: "bg-yellow-500",
};

const ORDER_STATUS_ID_TO_SHORT = {
  [ORDER_STATUS_ID.SUBMITTED]: "S",
  [ORDER_STATUS_ID.IN_PROGRESS]: "P",
  [ORDER_STATUS_ID.READY_FOR_PICK_UP]: "R",
  [ORDER_STATUS_ID.COMPLETED]: "C",
  [ORDER_STATUS_ID.CANCELLED]: "X",
};

export {
  ORDER_STATUS_ID,
  ORDER_STATUS_ID_TO_COLOR,
  ORDER_STATUS_ID_TO_SHORT,
  ORDER_STATUS_ID_TO_TEXT,
};
