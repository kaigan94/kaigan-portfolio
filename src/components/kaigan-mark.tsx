type KaiganMarkProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KaiganMark({ title, ...props }: KaiganMarkProps) {
  const computedRole = title ? (props.role ?? "img") : props.role;
  const computedAriaHidden = title
    ? props["aria-hidden"]
    : (props["aria-hidden"] ?? true);
  const computedFocusable = props.focusable ?? false;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
      role={computedRole}
      aria-hidden={computedAriaHidden}
      focusable={computedFocusable}
    >
      {title ? <title>{title}</title> : null}
      <rect width="32" height="32" rx="3" fill="#000" />
      <path
        fill="#fff"
        d="M13.7609 7V11.5H18.2609V16H13.7609V25H9.2609V7H13.7609ZM22.7609 7V11.5H18.2609V7H22.7609ZM22.7609 16V25H18.2609V16H22.7609Z"
      />
    </svg>
  );
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="3" fill="#000"/><path fill="#fff" d="M13.7609 7V11.5H18.2609V16H13.7609V25H9.2609V7H13.7609ZM22.7609 7V11.5H18.2609V7H22.7609ZM22.7609 16V25H18.2609V16H22.7609Z"/></svg>`;
}
