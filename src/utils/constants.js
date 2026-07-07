export const UserRolesEnum = {
  ADMIN: "admin",
  Project_ADMIN: "project_admin",
  MEMBER: "member",
};

export const AvailableUserRole = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGREESS: "in_progress",
  DONE: "done",
};

export const AvailableTaskStatues=Object.values(TaskStatusEnum)