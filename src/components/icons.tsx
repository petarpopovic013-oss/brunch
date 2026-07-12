import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function MenuIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M4 9h16M4 15h10" /></svg>;
}
export function CloseIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m5 5 14 14M19 5 5 19" /></svg>;
}
export function ClockIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>;
}
export function PinIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
}
export function PhoneIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M7 3 4 5c0 7.8 7.2 15 15 15l2-3-4-3-2 2c-3-1-6-4-7-7l2-2-3-4Z"/></svg>;
}
export function MailIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></svg>;
}
export function ChevronIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m9 5 7 7-7 7"/></svg>;
}
