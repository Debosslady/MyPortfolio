export interface LayoutProps {
  children: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
