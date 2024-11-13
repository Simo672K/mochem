import {
  AlarmClockIcon,
  Briefcase02Icon,
  Calendar03Icon,
  ChartRoseIcon,
  DashboardSquare02Icon,
  DollarCircleIcon,
  Invoice01Icon,
  UserMultiple02Icon,
} from "hugeicons-react";

type NavLink = {
  to: string;
  icon: React.ReactNode;
  label: string;
};
export const navLinks: NavLink[] = [
  {
    to: "/",
    icon: <DashboardSquare02Icon />,
    label: "Dashboard",
  },
  {
    to: "/employee",
    icon: <UserMultiple02Icon />,
    label: "Employees",
  },
  {
    to: "/work",
    icon: <Briefcase02Icon />,
    label: "Works",
  },
  {
    to: "/payroll",
    icon: <DollarCircleIcon />,
    label: "Payroll",
  },
  {
    to: "/attendence",
    icon: <AlarmClockIcon />,
    label: "Attendence",
  },
  {
    to: "/schedule",
    icon: <Calendar03Icon />,
    label: "Schedules",
  },
  {
    to: "/invoice",
    icon: <Invoice01Icon />,
    label: "Invoices",
  },
  {
    to: "/report",
    icon: <ChartRoseIcon />,
    label: "Reports",
  },
];
