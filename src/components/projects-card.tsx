import { FocusCards } from "@/components/ui/focus-cards";

export function ProjectsCards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfDF8MHx8fDA%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWV8ZW58MHwxfDB8fHww",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfDF8MHx8fDA%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfDF8MHx8fDA%3D",
    },
    {
      title: "The road not taken",
      src: "https://plus.unsplash.com/premium_photo-1676968002512-3eac82b1d847?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWV8ZW58MHwxfDB8fHww",
    },
    {
      title: "The First Rule",
      src: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHwxfDB8fHww",
    },
  ];

  return <FocusCards cards={cards} />;
}
