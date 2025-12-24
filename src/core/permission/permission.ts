export type Permission = "PAYROLL_VIEW" | "PAYROLL_EDIT";

export const hasPermission = (
  userPermissions: Permission[],
  required: Permission
) => {
  return userPermissions.includes(required);
};
