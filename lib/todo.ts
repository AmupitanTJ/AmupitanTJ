export const TODO_PREFIX = "TODO:" as const;

export function todo(detail: string): string {
  const text = detail.trim();
  return text.startsWith(TODO_PREFIX) ? text : `${TODO_PREFIX} ${text}`;
}

export function isTodo(value: string): boolean {
  return value.trimStart().startsWith(TODO_PREFIX);
}
