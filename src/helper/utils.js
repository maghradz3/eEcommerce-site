export const isUserAdmin = (user) => {
  return user?.role?.includes("admin");
};

export const getUserInitials = (user) => {
  if (user?.firstName && user?.lastName) {
    return `${user.firstName.toUpperCase().charAt(0)}${user.lastName
      .toUpperCase()
      .charAt(0)}`;
  }

  return "";
};
