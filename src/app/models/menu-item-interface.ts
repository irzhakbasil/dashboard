export interface MenuItem {
  name: string; // The display name of the menu item
  link: string; // The URL path to navigate to when the menu item is clicked
  icon: string; // The icon class or name to display alongside the menu item
  children?: MenuItem[]; // Optional array of child menu items for nested menus
  isActive?: boolean; // Optional flag to indicate if the menu item is currently active
}
