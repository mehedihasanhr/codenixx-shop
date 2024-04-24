import {
  Icon,
  IconHeadset,
  IconHours24,
  IconLayout2,
  IconMail,
  IconMessage,
  IconNewSection,
  IconPackages,
  IconProps,
  IconSettings,
  IconShoppingBag,
  IconSpeakerphone,
  IconTag,
  IconUsersGroup,
  IconWallet,
} from "@tabler/icons-react";

export type TSidebarItem = {
  id: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<Icon>
  >;
  segment: string;
  title: string;
  href?: string;
  sub_items?: Partial<TSidebarItem>;
};

export const SidebarData = () => {
  return [
    {
      id: "dashboard-group",
      group: "",
      items: [
        {
          id: "dashboard",
          Icon: IconLayout2,
          title: "Dashboard",
          segment: "(dashboard)", // folder group name
          sub_items: [
            {
              id: "dashboard-overview",
              title: "Overviews",
              href: "/overviews",
            },
            {
              id: "dashboard-traffic-analytics",
              title: "Traffic Analytics",
              href: "/traffic-analytics",
            },
            {
              id: "dashboard-sales-analytics",
              title: "Sales Analytics",
              href: "/sales-analytics",
            },
          ],
        },

        {
          id: "order",
          Icon: IconNewSection,
          title: "Orders",
          sub_items: [
            {
              id: "view-orders",
              title: "View Orders",
              href: "/orders",
            },
            {
              id: "process-orders",
              title: "Process Orders",
              href: "/process-orders",
            },
            {
              id: "order-manage-return",
              title: "Manage Returns",
              href: "/manage-returns",
            },
          ],
        },

        {
          id: "customer",
          Icon: IconHeadset,
          title: "Customers",
          sub_items: [
            {
              id: "customer-view",
              title: "Customers",
              href: "/customers",
            },
            {
              id: "customer-analytics",
              title: "Customers Analytics",
              href: "/customers-analytics",
            },
          ],
        },
        {
          id: "buyers",
          Icon: IconUsersGroup,
          title: "Buyers",
          sub_items: [
            {
              id: "buyers-view",
              title: "Buyers",
              href: "/buyers",
            },
            {
              id: "buyers-analytics",
              title: "Buyers Analytics",
              href: "/buyers-analytics",
            },
          ],
        },
      ],
    },

    {
      id: "customer-supports",
      group: "Customer supports",
      items: [
        {
          id: "customer-support-by-message",
          Icon: IconMessage,
          title: "Chats",
          href: "/chats",
          segment: "(customer_supports_by_message)", // folder group name
        },
        {
          id: "customer-support-by-mails",
          Icon: IconMail,
          title: "Mails",
          href: "/mails",
          segment: "(customer_supports_by_mail)", // folder group name
        },
      ],
    },
    {
      id: "product_and_inventory",
      group: "Product & Inventory",
      items: [
        {
          id: "products",
          Icon: IconShoppingBag,
          title: "Products",
          href: "/products",
          segment: "products", // folder group name
        },
        {
          id: "inventory",
          Icon: IconPackages,
          title: "Inventory",
          href: "/inventory",
          segment: "inventory", // folder group name
        },
      ],
    },

    {
      id: "marketing_and_promotions",
      group: "Marketing & Promotions",
      items: [
        {
          id: "marketing",
          Icon: IconSpeakerphone,
          title: "Marketing",
          href: "/marketing",
          segment: "marketing", // folder group name
        },
        {
          id: "promotions",
          Icon: IconTag,
          title: "Promotions",
          href: "/promotions",
          segment: "promotions",
        },
      ],
    },

    {
      id: "payments_and_finance",
      group: "Payments & Finance",
      items: [
        {
          id: "payments",
          Icon: IconWallet,
          title: "Payments",
          href: "/payments",
          segment: "payments", // folder group name
        },
      ],
    },

    {
      id: "settings_and_supports",
      group: "Settings & Supports",
      items: [
        {
          id: "settings",
          Icon: IconSettings,
          title: "Settings",
          href: "/settings",
          segment: "setting", // folder group name
        },
        {
          id: "supports",
          Icon: IconHours24,
          title: "Supports",
          href: "/supports",
          segment: "supports",
        },
      ],
    },
  ];
};
