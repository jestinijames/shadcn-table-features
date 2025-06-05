export type User = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  role: string;
};

export const usersData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "Admin",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "inactive",
    role: "User",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    status: "active",
    role: "Editor",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana@example.com",
    status: "inactive",
    role: "Admin",
  },
  {
    id: "7",
    name: "Edward Clark",
    email: "edward@example.com",
    status: "active",
    role: "Editor",
  },
  {
    id: "8",
    name: "Fiona Green",
    email: "fiona@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "9",
    name: "George Miller",
    email: "george@example.com",
    status: "inactive",
    role: "User",
  },
  {
    id: "10",
    name: "Helen Davis",
    email: "helen@example.com",
    status: "active",
    role: "Editor",
  },
  {
    id: "11",
    name: "Ian Thompson",
    email: "ian@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "12",
    name: "Julia White",
    email: "julia@example.com",
    status: "inactive",
    role: "Admin",
  },
  {
    id: "13",
    name: "Kevin Lee",
    email: "kevin@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "14",
    name: "Lisa Martin",
    email: "lisa@example.com",
    status: "active",
    role: "Editor",
  },
  {
    id: "15",
    name: "Mike Garcia",
    email: "mike@example.com",
    status: "inactive",
    role: "User",
  },
  {
    id: "16",
    name: "Nancy Rodriguez",
    email: "nancy@example.com",
    status: "active",
    role: "Admin",
  },
  {
    id: "17",
    name: "Oscar Martinez",
    email: "oscar@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "18",
    name: "Paula Anderson",
    email: "paula@example.com",
    status: "inactive",
    role: "Editor",
  },
  {
    id: "19",
    name: "Quinn Taylor",
    email: "quinn@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "20",
    name: "Rachel Scott",
    email: "rachel@example.com",
    status: "active",
    role: "Admin",
  },
  {
    id: "21",
    name: "Steve Turner",
    email: "steve@example.com",
    status: "inactive",
    role: "User",
  },
  {
    id: "22",
    name: "Tina Parker",
    email: "tina@example.com",
    status: "active",
    role: "Editor",
  },
  {
    id: "23",
    name: "Victor Evans",
    email: "victor@example.com",
    status: "active",
    role: "User",
  },
  {
    id: "24",
    name: "Wendy Collins",
    email: "wendy@example.com",
    status: "inactive",
    role: "Admin",
  },
  {
    id: "25",
    name: "Xavier Brooks",
    email: "xavier@example.com",
    status: "active",
    role: "User",
  },
];

// Helper function to get unique values
export const getUniqueValues = <T extends Record<string, any>>(
  data: T[],
  key: keyof T
): string[] => {
  return Array.from(new Set(data.map((item) => item[key] as string)));
};