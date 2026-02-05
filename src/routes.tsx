import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";

import { Index } from "./pages/Index";
import NotFound from "./pages/NotFound";
import SEM from "./pages/SEM";
import SocialMediaAds from "./pages/SocialMediaAds";
import OrderManagement from "./pages/OrderManagement";
import Contact from "./pages/Contact";
import CustomerSoftware from "./pages/CustomerSoftware";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminDashboard from "./pages/AdminDashboard";
import CorporateProfile from "./pages/CorporateProfile";

// ✅ 如果你有 blog 列表（本地数据），用它来生成静态路径
// import { blogPosts } from "./data/blogPosts";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "sem", element: <SEM /> },
      { path: "social-media-ads", element: <SocialMediaAds /> },
      { path: "custom-software", element: <CustomerSoftware /> },
      { path: "customer-software-demo", element: <CustomerSoftware /> },
      { path: "order-management", element: <OrderManagement /> },
      { path: "contact", element: <Contact /> },
      { path: "corporate-profile", element: <CorporateProfile /> },
      { path: "blog", element: <Blog /> },

      // ✅ 动态路由：必须提供 getStaticPaths 才会生成多份 htm

      // ⚠️ 一般不建议 SSG admin，但你要保留也可以

      { path: "*", element: <NotFound /> },
    ],
  },
];
