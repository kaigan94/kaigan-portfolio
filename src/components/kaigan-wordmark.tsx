type KaiganWordmarkProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KaiganWordmark({ title, ...props }: KaiganWordmarkProps) {
  const computedRole = title ? (props.role ?? "img") : props.role;
  const computedAriaHidden = title
    ? props["aria-hidden"]
    : (props["aria-hidden"] ?? true);
  const computedFocusable = props.focusable ?? false;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 108 32"
      {...props}
      role={computedRole}
      aria-hidden={computedAriaHidden}
      focusable={computedFocusable}
    >
      {title ? <title>{title}</title> : null}
      <rect width="108" height="32" rx="3" fill="#000" />
      <path
        fill="#fff"
        d="M12 8V12H16V16H12V24H8V8H12ZM20 8V12H16V8H20ZM20 16V24H16V16H20ZM36 8V24H32V20H28V24H24V8H36ZM28 12V16H32V12H28ZM52 8V12H48V20H52V24H40V20H44V12H40V8H52ZM68 8V12H60V8H68ZM60 12V20H64V16H68V24H60V20H56V12H60ZM84 8V24H80V20H76V24H72V8H84ZM76 12V16H80V12H76ZM96 8V12H92V24H88V8H96ZM100 12V24H96V12H100Z"
      />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 32" fill="none"><rect width=\"108\" height=\"32\" rx=\"3\" fill=\"#000\"/><path fill=\"${color}\" d=\"M12 8V12H16V16H12V24H8V8H12ZM20 8V12H16V8H20ZM20 16V24H16V16H20ZM36 8V24H32V20H28V24H24V8H36ZM28 12V16H32V12H28ZM52 8V12H48V20H52V24H40V20H44V12H40V8H52ZM68 8V12H60V8H68ZM60 12V20H64V16H68V24H60V20H56V12H60ZM84 8V24H80V20H76V24H72V8H84ZM76 12V16H80V12H76ZM96 8V12H92V24H88V8H96ZM100 12V24H96V12H100Z\"/></svg>`;
}
